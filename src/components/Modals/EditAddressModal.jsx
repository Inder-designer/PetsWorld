import { CheckBox } from "@mui/icons-material";
import axios from "axios";
import { Modal } from "flowbite-react";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup"; // Import Yup for validation
import { addNewAddress, updateAddress } from "../../actions/addressAction";
import { AddressSchema } from "../../schema/AddressSchema";
import { toast } from "react-toastify";

const EditAddressModal = ({ openModal, setOpenModal, address }) => {
  const dispatch = useDispatch();

  const handleUpdateAddress = (values) => {
    dispatch(updateAddress(address._id, values));
  };

  return (
    <>
      {address && (
        <Modal
          show={openModal}
          size="md"
          popup
          onClose={() => setOpenModal(false)}
        >
          <Modal.Header className="py-5 px-4 border-b modalHeader">
            <h5 className="uppercase text-sm font-bold text-gray-600">
              Edit Address
            </h5>
          </Modal.Header>
          <Modal.Body className="modalBody overflow-visible">
            <div>
              <Formik
                initialValues={{
                  name: address.name,
                  mobile: address.mobile,
                  pincode: address.pincode,
                  streetAddress: address.streetAddress,
                  locality: address.locality,
                  city: address.city,
                  country: address.country,
                  state: address.state,
                  isDefault: address.isDefault,
                  notAvailableDays: address.notAvailableDays,
                  addressType: address.addressType,
                }}
                validationSchema={AddressSchema}
                enableReinitialize
                onSubmit={(values) => {
                  handleUpdateAddress(values);
                  setOpenModal(false);
                }}
              >
                {({ values, setFieldValue, errors, setFieldError }) => (
                  <Form className="relative" autoComplete="off">
                    <div className="px-4 max-h-[500px] overflow-x-hidden">
                      <h6 className="uppercase text-xs font-bold text-gray-600 pt-4">
                        Conatct Details
                      </h6>
                      <div className="mt-4 relative floatingLabel">
                        <Field
                          type="text"
                          name="name"
                          placeholder="Name*"
                          value={values.name}
                        />
                        <label htmlFor="name">Name*</label>
                      </div>
                      <div className="mt-4 relative floatingLabel">
                        <Field
                          type="text"
                          name="mobile"
                          placeholder="Mobile No*"
                          value={values.mobile}
                        />
                        <label htmlFor="mobile">Mobile No*</label>
                      </div>
                      {errors && <p>{errors.mobile}</p>}
                      <h6 className="uppercase text-xs font-bold text-gray-600 pt-8">
                        Address
                      </h6>
                      <div className="mt-4 relative floatingLabel">
                        <Field
                          type="text"
                          name="pincode"
                          placeholder="Pincode*"
                          value={values.pincode}
                          onChange={(e) => {
                            const { value } = e.target;
                            setFieldValue("pincode", value);

                            if (value === "") {
                              setFieldValue("city", "");
                              setFieldValue("state", "");
                            }
                            // Fetch city and state details based on pincode
                            if (value.length === 6) {
                              try {
                                axios
                                  .get(
                                    `https://api.postalpincode.in/pincode/${value}`
                                  )
                                  .then((res) => {
                                    if (
                                      res.data &&
                                      res.data[0].PostOffice &&
                                      res.data[0].PostOffice.length > 0
                                    ) {
                                      setFieldValue(
                                        "city",
                                        res.data[0].PostOffice[0].District
                                      );
                                      setFieldValue(
                                        "country",
                                        res.data[0].PostOffice[0].Country
                                      );
                                      setFieldValue(
                                        "state",
                                        res.data[0].PostOffice[0].State
                                      );
                                    } else if (
                                      res.data[0].Status === "Error" ||
                                      !res.data[0].PostOffice
                                    ) {
                                      toast.error('Invalid Pincode: No records found')
                                      setFieldValue("city", "");
                                      setFieldValue("state", "");
                                    } else {
                                      // Handle case where no PostOffice data is found
                                      setFieldValue("city", "");
                                      setFieldValue("state", "");
                                    }
                                  });
                              } catch (error) {
                                setFieldError(
                                  "pincode",
                                  "Error fetching pincode data"
                                );
                                console.log(error.res);
                              }
                            }
                          }}
                        />
                        <label htmlFor="pincode">Pincode*</label>
                        {errors.pincode && (
                          <p className="text-red-500 text-xs">{errors.pincode}</p>
                        )}
                        <div className="mt-4 relative floatingLabel">
                          <Field
                            type="text"
                            name="streetAddress"
                            placeholder="Address(House No, Building, Street)*"
                            value={values.streetAddress}
                          />
                          <label htmlFor="address">
                            Address(House No, Building, Street)*
                          </label>
                        </div>
                        <div className="mt-4 relative floatingLabel">
                          <Field
                            type="text"
                            name="locality"
                            placeholder="Locality / Towns*"
                            value={values.locality}
                          />
                          <label htmlFor="locality">Locality / Towns*</label>
                        </div>
                        <div className="flex gap-4">
                          <div className="mt-4 relative floatingLabel disabled">
                            <Field
                              type="text"
                              name="city"
                              placeholder="City / Districts*"
                              value={!values.pincode ? "" : values.city}
                              disabled
                            />
                            <label htmlFor="city">City / Districts*</label>
                          </div>
                          <div className="mt-4 relative floatingLabel disabled">
                            <Field
                              type="text"
                              name="state"
                              placeholder="State*"
                              value={!values.pincode ? "" : values.state}
                              disabled
                            />
                            <label htmlFor="state">State*</label>
                          </div>
                        </div>
                      </div>
                      <div className="pt-4 mb-4">
                        <h6 className="uppercase text-xs font-bold text-gray-600 pt-4">
                          Save Address As
                        </h6>
                        <div className="py-4">
                          <div role="group" aria-labelledby="my-radio-group">
                            <label className="radioLabel">
                              <input
                                type="radio"
                                name="addressType"
                                value="HOME"
                                checked={values.addressType === "HOME"}
                                onChange={() => {
                                  setFieldValue("addressType", "HOME");
                                  setFieldValue("notAvailableDays", []);
                                }}
                              />
                              <span>HOME</span>
                            </label>

                            <label className="radioLabel">
                              <input
                                type="radio"
                                name="addressType"
                                value="OFFICE"
                                checked={values.addressType === "OFFICE"}
                                onChange={() =>
                                  setFieldValue("addressType", "OFFICE")
                                }
                              />
                              <span>OFFICE</span>
                            </label>
                          </div>
                          {values.addressType === "OFFICE" && (
                            <div className="mt-6">
                              <label class="checkboxLabel">
                                <Field
                                  type="checkbox"
                                  name="notAvailableDays"
                                  value="SATURDAY"
                                />
                                <div class="checkbox flex justify-center items-center">
                                  <CheckBox className="!hidden !w-5 !h-5 text-[#ff3e6c]" />
                                </div>
                                Open on Saturday
                              </label>
                              <label class="checkboxLabel mt-4">
                                <Field
                                  type="checkbox"
                                  name="notAvailableDays"
                                  value="SUNDAY"
                                />
                                <div class="checkbox flex justify-center items-center">
                                  <CheckBox className="!hidden !w-5 !h-5 text-[#ff3e6c]" />
                                </div>
                                Open on Saturday
                              </label>
                            </div>
                          )}
                          <div className="mt-8">
                            <label class="checkboxLabel mt-4">
                              <Field
                                type="checkbox"
                                name="isDefault"
                                checked={values.isDefault}
                                onChange={() =>
                                  setFieldValue("isDefault", !values.isDefault)
                                }
                              />
                              <div class="checkbox flex justify-center items-center">
                                <CheckBox className="!hidden !w-5 !h-5 text-[#ff3e6c]" />
                              </div>
                              Make this my default address
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" p-2 shadow-[0_-1px_4px_0_#0000004d] sticky bottom-0 ">
                      <button
                        type="submit"
                        className="block w-full cursor-pointer tracking-[1px] text-sm left-0 bg-[#ff3f6c] hover:bg-[#ff3f6cdc]  rounded font-bold text-white p-3.5 text-center"
                      >
                        Save ADDRESS
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default EditAddressModal;
