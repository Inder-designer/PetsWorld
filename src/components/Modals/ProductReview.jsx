import { Modal } from "flowbite-react";
import React, { useEffect, useState } from "react";
import product1 from "../../Assets/Images/Product1.jpg";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {
  createProductReview,
  getUserProductsReview,
} from "../../actions/productAction";
import { useSelector } from "react-redux";
import Loading from "../Loading";
import {
  CLEAR_ERRORS,
  CREATE_REVIEW_RESET,
} from "../../constants/productConstants";
import { toast } from "react-toastify";

const ProductReview = ({ openModal, setOpenModal, product, setProduct }) => {
  const dispatch = useDispatch();
  const [ratingValue, setRatingValue] = useState(0);
  const { isUpdated, isLoading, error } = useSelector(
    (state) => state.CreateReview
  );
  const [hover, setHover] = useState(0);
  const [ratingError, setRatingError] = useState(false);
  const labels = {
    1: "Useless",
    2: "Poor",
    3: "Ok",
    4: "Good",
    5: "Excellent",
  };

  const getLabelText = (value) => {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("A title is required"),
    comment: Yup.string()
      .min(10, "Must be at least 10 characters")
      .required("Please enter a comment"),
  });

  React.useEffect(() => {
    if (product?.rating) {
      setRatingValue(product.rating);
    }
  }, [product]);
  console.log(product, ratingValue);

  const handleSubmitReview = (values) => {
    if (!ratingValue) {
      setRatingError(true);
    } else {
      setRatingError(false);
      dispatch(
        createProductReview({
          title: values.title,
          comment: values.comment,
          rating: ratingValue,
          productId: product.productId,
        })
      );
    }
  };

  useEffect(() => {
    if (error) {
      dispatch({ type: CLEAR_ERRORS });
    }
    if (isUpdated) {
      dispatch({ type: CREATE_REVIEW_RESET });
      setRatingValue(0);
      setOpenModal(false);
      setProduct("");
      dispatch(getUserProductsReview());
      toast.success("Review Submit")
    }
  }, [dispatch, error, isUpdated]);

  return (
    <div>
      {isLoading && <Loading />}
      <Modal
        show={openModal}
        size="xl"
        onClose={() => {
          setOpenModal(false);
          setRatingValue(0);
          setProduct("");
        }}
      >
        <Modal.Header className="py-5 px-4 border-b modalHeader">
          <h5 className="uppercase text-sm font-bold text-gray-600">
            WRITE REVIEW
          </h5>
        </Modal.Header>
        <Modal.Body className="modalBody overflow-visible">
          <div className="px-4 py-6 overflow-x-hidden max-h-[calc(100vh_-_140px)]">
            <div className="flex items-start gap-4">
              <div className="w-20">
                <img src={product.image || product1} alt="" />
              </div>
              <div>
                <Link
                  to={`/${product.productId}`}
                  className="text-base text-gray-600 font-medium hover:underline hover:text-blue-700"
                >
                  {product.name}
                </Link>
                <div>
                  <div className="flex items-center gap-3 mt-3">
                    <Rating
                      name="hover-feedback"
                      value={ratingValue}
                      precision={1}
                      getLabelText={getLabelText}
                      onChange={(event, newValue) => {
                        setRatingValue(newValue);
                        setRatingError(false);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                    {ratingValue !== null && (
                      <span className="text-sm text-gray-600 ">
                        {labels[hover !== -1 ? hover : ratingValue]}
                      </span>
                    )}
                  </div>
                  {ratingError && (
                    <p className="text-start text-red-600 text-sm mt-1">
                      Choose a rating to continue
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Formik
                initialValues={{
                  title: product?.userReview?.title || "",
                  comment: product?.userReview?.comment || "",
                }}
                enableReinitialize
                validationSchema={validationSchema}
                onSubmit={(values) => handleSubmitReview(values)}
              >
                {({ values, errors, touched }) => (
                  <Form>
                    <div className="space-y-5">
                      <div>
                        <Field
                          autoComplete="false"
                          name="title"
                          type="text"
                          placeholder="Title"
                          value={values.title}
                          className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm border border-gray-300 focus:border-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                        {errors.title && touched.title ? (
                          <p className="text-start text-red-600 text-sm mt-1">
                            {errors.title}
                          </p>
                        ) : null}
                      </div>
                      <div>
                        <Field
                          autoComplete="false"
                          name="comment"
                          as="textarea"
                          rows="4"
                          cols="50"
                          placeholder="Please write product review here."
                          value={values.comment}
                          className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm border border-gray-300 focus:border-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                        {errors.comment && touched.comment ? (
                          <p className="text-start text-red-600 text-sm mt-1">
                            {errors.comment}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <div className="text-right mt-6">
                      <button
                        type="submit"
                        className="bg-[#ff3e6c] text-white py-2 px-4 rounded"
                        onClick={() => {
                          !ratingValue && setRatingError(true);
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProductReview;
