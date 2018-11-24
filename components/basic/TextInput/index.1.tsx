import { InputBaseComponentProps } from "@material-ui/core/InputBase"
import TextField from "@material-ui/core/TextField"
import * as React from "react"

interface InputTextProps {
  // input?: TextFieldProps
  input?: InputBaseComponentProps
  meta?: {
    touched?: boolean
    error?: any
  }
}

const TextInput = ({
  input: { name, onChange, value, ...restInput },
  meta,
  ...rest
}: InputTextProps) => {
  console.log("meta", meta)
  return (
    <TextField
      {...rest}
      name={name}
      helperText={meta.touched ? meta.error : undefined}
      error={meta.error && meta.touched}
      inputProps={restInput}
      onChange={onChange}
      value={value}
      // style={{
      //   width: "100%",
      // }}
      // margin="normal"
    />
  )
}

export default TextInput
