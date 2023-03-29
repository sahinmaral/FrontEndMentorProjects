import { Button, Input } from "antd";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPersonalInfo } from "../redux/subscription/subscriptionSlice";
import { personalInfoSchema } from "../schemas";
import { useNavigate } from "react-router-dom";
import PageDescription from "../components/PageDescription";
import { useEffect } from "react";

function PersonalInfoForm() {
  const { name, emailAddress, phoneNumber } = useSelector(
    (state) => state.subscription
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name,
      emailAddress,
      phoneNumber,
    },
    validationSchema: personalInfoSchema,
    onSubmit: (values) => {
      dispatch(setPersonalInfo(values));
      navigate("/step-2");
    },
  });

  useEffect(() => {
    document
      .querySelector(".navigation-buttons-mobile .next-step-button")
      .addEventListener("click", (e) => {
        formik.handleSubmit(e);
      });
  }, [formik]);

  return (
    <div className="personal-info-page page">
      <PageDescription
        title="Personal Info"
        description="Please provide your name,email adress, and phone number."
      />

      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <div className="label-group">
            <label htmlFor="name">Name</label>
            <label className="validation">
              {formik.touched.name && formik.errors.name && formik.errors.name}
            </label>
          </div>
          <Input
            size="large"
            id="name"
            name="name"
            type="text"
            value={formik.values.name}
            status={formik.touched.name && formik.errors.name && "error"}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="e.g.Stephen King"
          />
        </div>

        <div className="form-group">
          <div className="label-group">
            <label htmlFor="emailAddress">Email Address</label>
            <label className="validation">
              {formik.touched.emailAddress &&
                formik.errors.emailAddress &&
                formik.errors.emailAddress}
            </label>
          </div>
          <Input
            size="large"
            id="emailAddress"
            name="emailAddress"
            type="email"
            value={formik.values.emailAddress}
            status={
              formik.touched.emailAddress &&
              formik.errors.emailAddress &&
              "error"
            }
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="e.g.stepkenking@lorem.com"
          />
        </div>

        <div className="form-group">
          <div className="label-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <label className="validation">
              {formik.touched.phoneNumber &&
                formik.errors.phoneNumber &&
                formik.errors.phoneNumber}
            </label>
          </div>
          <Input
            size="large"
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            value={formik.values.phoneNumber}
            status={
              formik.touched.phoneNumber && formik.errors.phoneNumber && "error"
            }
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="e.g. +1 234 567 8900"
          />
        </div>

        <div className="navigation-buttons">
          <div></div>
          <Button
            type="primary"
            className="next-step-button"
            onClick={formik.handleSubmit}
          >
            Next Step
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonalInfoForm;
