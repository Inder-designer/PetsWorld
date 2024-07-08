import * as Yup from 'yup'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,25}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,25}$/;
const EMAIL_REGEX = /^[a-z1-9-_.]{3,25}@([a-z]+\.)[a-z]{2,4}$/;

export const UserSchemas = {
    login: Yup.object({
        email: Yup.string().email("Invalid email: example@mail.abc").matches(EMAIL_REGEX, "Invalid email: example@mail.abc").required("Please enter your email"),
        password: Yup.string().min(4).max(25).required("Please enter your password"),
    }),
    signup: Yup.object({
        name: Yup.string().min(3).max(25).required("Please enter your name"),
        email: Yup.string().email().matches(EMAIL_REGEX, "Invalid email: example@mail.abc").required("Please enter your email"),
        password: Yup.string().min(4).max(25).required("Please enter your password"),
        confirm_password: Yup.string().required("Please enter your confirm password").oneOf([Yup.ref('password'), null], "Password must match"),
    }),
    editUser: Yup.object({
        name: Yup.string().min(3).max(25).required("Please enter your name"),
        email: Yup.string().email().matches(EMAIL_REGEX, "Invalid email: example@mail.abc").required("Please enter your email"),
        avatar: Yup.mixed()
            .notRequired()
            .test(
                "fileSize",
                "Image must be less than 1MB",
                (value) => !value || (value && value.size <= 1024 * 1024)
            )
            .test(
                "fileType",
                "Image must be in JPEG, JPG & PNG format",
                (value) => !value || (value && ["image/jpeg", "image/jpg", "image/png"].includes(value.type))
            ),
    }),
    changePswdSchema: Yup.object({
        oldPassword: Yup.string().required("Please enter your current password"),
        newPassword: Yup.string()
            .min(4, "Password must be at least 4 characters")
            .max(25, "Password must be at most 25 characters")
            .required("Please enter your new password")
            .notOneOf([Yup.ref('oldPassword')], "New password cannot be the same as old password"),
        confirmPassword: Yup.string()
            .required("Please enter your confirm password")
            .oneOf([Yup.ref('newPassword'), null], "Passwords must match"),
    }),
    //Reset Password Schema
    resetPasswordSchema: Yup.object({
        password: Yup.string()
            .min(4, "Password must be at least 4 characters")
            .max(25, "Password must be at most 25 characters")
            .required("Please enter your new password"),
        confirmPassword: Yup.string()
            .required("Please enter your confirm password")
            .oneOf([Yup.ref('password'), null], "Passwords must match"),
    }),
}