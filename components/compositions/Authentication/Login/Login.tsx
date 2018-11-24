import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
// import { action } from "@storybook/addon-actions"
import { Field, Form, Formik } from "formik"
import * as React from "react"
import * as Yup from "yup"
import { TextField } from "~/components/basic"

interface Values {
  email?: string
  password?: string
}

export const Login = () => {
  return (
    <Formik<Values>
      initialValues={{}}
      validationSchema={Yup.object().shape({
        email: Yup.string().required("Required"),
        password: Yup.lazy(value =>
          !value ? Yup.string() : Yup.string().required("Password is required"),
        ),
      })}
      onSubmit={(_values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false)
          // action("submit")(values)
        }, 2000)
      }}
      render={({ submitForm, isSubmitting, error }) => (
        <Form>
          <Grid
            container={true}
            alignItems="center"
            justify="center"
            style={{ paddingBottom: 50 }}
          >
            <Grid item={true} xs={11} md={8}>
              <Field
                name="email"
                component={TextField}
                type="email"
                label="Email"
              />
            </Grid>
            <Grid item={true} xs={11} md={8}>
              <Field
                name="password"
                component={TextField}
                type="password"
                label="Password"
                style={{ width: "100%" }}
                margin="normal"
              />
            </Grid>
            <Grid item={true} xs={8} md={8}>
              <Button
                onClick={submitForm}
                disabled={error || isSubmitting}
                variant="contained"
                style={{
                  width: "100%",
                  marginTop: 30,
                }}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    />
  )
}
