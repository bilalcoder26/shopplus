import React from "react";

function PasswordModal() {
  return (
    <div
      className="modal customModal"
      tabindex="-1"
      role="dialog"
      id="PasswordMod"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <a className="close-btn" data-dismiss="modal">
            PasswordMod Password
          </a>
          <div className="modal-body">
            <div>
              <div className="row">
                <div
                  className="col-12 fs-24 text-danger"
                  style="margin-top:-18px;"
                >
                  <span className="d-inline-block px-1 bg-white">
                    Login/Signup
                  </span>
                </div>
                <div className="col-12 py-4">
                  <form style="" id="form2">
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control form-control-lg rounded-0 fs-18"
                        name=""
                        id="DeliveryEnterName"
                        placeholder="Enter Mobile"
                        value="9910448494"
                      />
                      <div
                        className="alert alert-danger fs-14 m-0 p-2 rounded-0"
                        role="alert"
                        style="display: none;"
                      >
                        Please Enter Mobile Number
                      </div>
                    </div>
                    <div className="form-group m-0">
                      <input
                        type="text"
                        className="form-control form-control-lg rounded-0 fs-18"
                        name=""
                        id="DeliveryEnterMobileN"
                        placeholder="Enter Password"
                      />
                      <div
                        className="alert alert-danger fs-14 m-0 p-2 rounded-0"
                        role="alert"
                        style="display: none;"
                      >
                        Please Enter Password
                      </div>
                    </div>
                    <div className="form-group text-right">
                      <a className="font-italic fs-12 text-danger" href="#">
                        Forgot Password
                      </a>
                    </div>
                    <div className="d-block">
                      <button
                        type="button"
                        className="btn btn-danger px-4 rounded-0 text-uppercase"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordModal;
