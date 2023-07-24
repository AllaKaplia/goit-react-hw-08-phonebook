const { Formik, Form, Field } = require("formik")


const Login = ()  => {
    return (
        <Formik>
            <Form>
                <label>
                    Enter yor email
                    <Field type="email" name="email" />
                </label>
                <label>
                    Enter your password
                    <Field type="password" name="password" />
                </label>
                <button type="submit" >
                    Login
                </button>
            </Form>
        </Formik>
    )
}

export default Login;