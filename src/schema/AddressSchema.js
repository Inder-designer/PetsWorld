import * as Yup from 'yup'
const mobile = /^(?:(?:\+|0{0})91?|[0]?)?[789]\d{9}$/g


export const AddressSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    mobile: Yup.string().matches(mobile, "Invalid Mobile Number").required("Mobile number is required"),
    pincode: Yup.string().min(6).required("Pincode is required"),
    streetAddress: Yup.string().required("Street address is required"),
    locality: Yup.string().required("Locality is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    isDefault: Yup.boolean(), // Ensure isDefault is of type boolean
    notAvailableDays: Yup.array(), // Adjust validation as needed
    addressType: Yup.string()
      .oneOf(["HOME", "OFFICE"])
      .required("Address type is required"),
  });