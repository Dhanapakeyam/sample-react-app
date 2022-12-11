import { useFormik } from "formik";
import * as yup from 'yup';

const basicFormValidationSchema = yup.object({
    email: yup.string().min(8, "Enter a valid email").required(),
    password: yup.string().min(4, "Cool password missing").required(),
})
export function BasicForm() {
    const formik = useFormik({
        initialValues: {
            email: "m.dhana87@gmail.com",
            password: "1234abcd",
        },
        validationSchema: basicFormValidationSchema,
        onSubmit: (values) => {
            console.log("Form Values: ", values);
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <input type="email"
                value={formik.values.email}
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? formik.errors.email : null}
            <input type="text"
                value={formik.values.password}
                name="password"
                placeholder="password"
                onChange={formik.handleChange} />
            {formik.errors.password}

            <h1>Errors</h1>
            <pre>{JSON.stringify(formik.errors)}</pre>
            <h1>Touched</h1>
            <pre>{JSON.stringify(formik.touched)}</pre>
            <button type="submit">Submit</button>
        </form>
    );
}
