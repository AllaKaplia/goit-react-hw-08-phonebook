const { Formik, Form, Field } = require("formik")


const RegisterForm = () => {
    return (
        <Formik>
            <Form autoComplete="off">
                <label>
                    Username:
                    <Field type="text" name="name" placeholder="Enter username" />
                </label>
                <label>
                    Your e-mail address:
                    <Field type="email" name="email" placeholder="Enter e-mail address" />
                </label>
                <label>
                    Enter your password:
                    <Field type="password" name="password" placeholder="Enter password" />
                </label>
                <button type="submit" >
                    Register
                </button>
            </Form>
        </Formik>
    )
}

export default RegisterForm;