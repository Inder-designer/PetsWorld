import { Modal } from "flowbite-react";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { UserSchemas } from "../../schema/Schema";
import { Edit, MailOutline, PermIdentity } from "@mui/icons-material";
import userLogo from "../../Assets/Images/userLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, updateUserProfile } from "../../actions/userAction";
import { toast } from "react-toastify";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstants";
import Loading from "../Loading";

const EditProfileModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [avatarError, setAvatarError] = useState(null);
  const btnRef = useRef(false);
  const dispatch = useDispatch();
  const imgRef = useRef();
  const [userDetails, setUserDetails] = useState({});
  const { user, isAuthenticated } = useSelector((state) => state.user);

  const avatarUrl = user?.avatar?.url || userLogo;
  const [avatarPrv, setAvatarPrv] = useState();
  const { isLoading, isUpdated } = useSelector((state) => state.profile);

  useEffect(() => {
    if (user) {
      setUserDetails(user.user);
      const imgPrv = user.user.avatar?.url || userLogo
      setAvatarPrv(imgPrv)
    } else {
      setUserDetails({});
    }
  }, [user]);

  const handleImageChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
        setAvatarPrv(reader.result);
        // Validate file type
        if (validateFileType(file)) {
          setAvatarError(null);
          btnRef.current.disabled = false;
        } else {
          setAvatarError(
            "Invalid file type. Please select a JPEG, PNG, or JPG image."
          );
          btnRef.current.disabled = true;
        }
      }
    };

    reader.readAsDataURL(file);
  };

  const validateFileType = (file) => {
    const acceptedTypes = ["image/jpeg", "image/png", "image/jpg"];
    return acceptedTypes.includes(file.type);
  };

  const editProfile = (values) => {
    const { name, email } = values;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);

    if (avatarPrv !== userDetails.avatar.url) {
      formData.append("avatar", avatarPrv);
    }
    console.log(values, "formData");
    dispatch(updateUserProfile(formData));
  };

  useEffect(() => {
    if (isUpdated) {
      dispatch(loadUser());
      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
      setOpenModal(false);
    }
  }, [dispatch, isUpdated]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {user && (
        <div>
          <button
            aria-label="Edit Profile"
            className="absolute bottom-0 right-0"
            onClick={() => setOpenModal(true)}
          >
            <Edit className="text-[#1d1d1d]" />
          </button>
          <Modal
            show={openModal}
            size="md"
            onClose={() => setOpenModal(false)}
            popup
          >
            <Modal.Header className="py-5 px-4 modalHeader">
              <h5 className="uppercase text-sm font-bold text-gray-600">
                Edit Profile
              </h5>
            </Modal.Header>
            <Modal.Body className="modalBody mx-4 mb-6">
              <Formik
                initialValues={{
                  name: userDetails.name,
                  email: userDetails.email,
                }}
                enableReinitialize
                validationSchema={UserSchemas.editUser}
                onSubmit={(values) => editProfile(values)}
              >
                {({ values, errors, touched, setFieldValue }) => (
                  <Form className="space-y-6">
                    <div>
                      <div className="relative">
                        <PermIdentity className="absolute -translate-y-2/4 top-1/2 left-2 opacity-70" />
                        <Field
                          name="name"
                          type="text"
                          placeholder="Name"
                          autoComplete="false"
                          className="pl-10 block w-full rounded-md py-1.5 text-gray-900 shadow-sm border border-gray-300 focus:border-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                      </div>
                      {errors.name && touched.name ? (
                        <p className="text-start text-red-600 text-xs mt-1">
                          {errors.name}
                        </p>
                      ) : null}
                    </div>
                    <div>
                      <div className="relative">
                        <MailOutline className="absolute -translate-y-2/4 top-1/2 left-2 opacity-70" />
                        <Field
                          autoComplete="false"
                          name="email"
                          type="email"
                          placeholder="Email"
                          className="pl-10 block w-full rounded-md py-1.5 text-gray-900 shadow-sm border border-gray-300 focus:border-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                      </div>
                      {errors.email && touched.email ? (
                        <p className="text-start text-red-600 text-xs mt-1">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                    <div>
                      <div className="relative flex items-center gap-3">
                        <input
                          ref={imgRef}
                          type="file"
                          accept="image/jpeg, image/png,image/jpg"
                          placeholder="avatar"
                          className="hidden pl-10 w-full rounded-md py-1.5 text-gray-900 shadow-sm border border-gray-300 focus:border-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                          onChange={(e) => handleImageChange(e, setFieldValue)}
                        />
                        <img
                          src={avatarPrv}
                          alt="Profile Preview"
                          width="100px"
                          className="rounded-full"
                        />
                        <div className="w-full">
                          <button
                            type="button"
                            className="text-center cursor-pointer uppercase font-medium text-gray-600 border px-2 py-2 w-full"
                            onClick={() => {
                              imgRef.current.click();
                            }}
                          >
                            File Upload
                          </button>
                        </div>
                      </div>
                      {avatarError && (
                        <p className="text-start text-red-600 text-xs mt-1">
                          {avatarError}
                        </p>
                      )}
                    </div>

                    <div>
                      <button
                        ref={btnRef}
                        type="submit"
                        className="uppercase flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Update
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
};

export default EditProfileModal;
