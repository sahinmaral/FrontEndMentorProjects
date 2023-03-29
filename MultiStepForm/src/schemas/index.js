import { object, string } from "yup";

const phoneNumberRegex =
  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

const personalInfoSchema = object({
  name: string().required("This field is required"),
  emailAddress: string()
    .email("Invalid email address")
    .required("This field is required"),
  phoneNumber: string()
    .required("This field is required")
    .matches(phoneNumberRegex, "Invalid phone number"),
});

export { personalInfoSchema };
