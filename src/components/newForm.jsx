import React from "react";

import { useForm } from "react-hook-form";

const NewForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // console.log(errors);

  return (
    <div className="container pt-5">
      <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <h1 className="text-center pt-3 text-secondary">Example form</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="col-form-label">Name:</label>
              <input
                type="text"
                className="form-control"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Age:</label>
              <input
                type="text"
                className="form-control"
                {...register("Age", { required: "Age is required" })}
              />
              {errors.age && (
                <small className="text-danger">{errors.age.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Email:</label>
              <input
                type="text"
                className="form-control"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Phone:</label>
              <input
                type="text"
                className="form-control"
                {...register("Phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Message:</label>
              <textarea
                className="form-control"
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && (
                <small className="text-danger">{errors.message.message}</small>
              )}
            </div>
            <input
              type="Submit"
              className="btn btn-primary my-3"
              value="Send message"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewForm;
