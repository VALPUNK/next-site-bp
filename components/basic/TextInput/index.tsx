import * as React from "react"
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from "@material-ui/core/TextField"
import { FieldProps, getIn } from "formik"
// import { Omit } from './types';

export interface TextFieldProps
  extends FieldProps,
    Omit<
      MuiTextFieldProps,
      "error" | "name" | "onChange" | "value" | "variant"
    > {}

export const fieldToTextField = ({
  field,
  form,
  disabled = false,
  ...props
}: TextFieldProps): MuiTextFieldProps => {
  const { name } = field
  const { touched, errors, isSubmitting } = form

  const fieldError = getIn(errors, name)
  const showError = getIn(touched, name) && !!fieldError

  return {
    ...props,
    ...field,
    error: showError,
    helperText: showError ? fieldError : props.helperText,
    disabled: isSubmitting || disabled,
  }
}

export const TextField: React.ComponentType<TextFieldProps> = (
  props: TextFieldProps,
) => (
  <MuiTextField
    {...fieldToTextField(props)}
    style={{ width: "100%" }}
    margin="normal"
  />
)

TextField.displayName = "FormikMaterialUITextField"

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
