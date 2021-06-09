import * as yup from "yup"

export default yup.object().shape({
    first_name: yup.string().required("We need a name!"),
    email: yup.string().email().required(),
    password: yup.string().required(),
    tos: yup.boolean().oneOf([true]),

})