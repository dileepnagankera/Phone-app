import React from "react";

const Form = () => {
  const Bgmc = "../../images/images.jpg";
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2>Sign In</h2>
            <span>register and enjoy the service</span>
            <br />
            <br />
            <form id="form" className="flex flex-col">
              <input type="text" placeholder="username" />
              <br />
              <br />
              <input type="text" placeholder="password" />
              <br />
              <br />
              <input type="text" placeholder="confirm password" />
              <br />
              <br />
              <input type="text" placeholder="mobile number" />
              <br />
              <br />

              <button className="btn btn-primary">Sign In</button>
            </form>
          </div>
          <div className="col-8">
            <br />
            <img src={Bgmc} alt="" height={400} width={400} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
