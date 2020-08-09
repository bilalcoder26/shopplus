import React from 'react'

function SignupModal() {
    return (
        <div class="modal customModal" tabindex="-1" role="dialog" id="Forgot" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <a class="close-btn" data-dismiss="modal">Forgot Password</a>
            <div class="modal-body">
                <div>
                    <div class="row">
                    <div class="col-12 fs-24 text-danger" style="margin-top:-18px;"><span class="d-inline-block px-1 bg-white">Login/Signup</span></div>
                    <div class="col-12 py-4">
                        <form style="" id="form2">
                            <div class="form-group">
                            <input type="number" class="form-control form-control-lg rounded-0 fs-18" name="" id="DeliveryEnterName" placeholder="Enter Mobile"/>
                            <div class="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style="display: none;">
                                Please Enter Mobile Number
                            </div>
                            </div>
                            <div class="form-group m-0">
                            <input type="text" class="form-control form-control-lg rounded-0 fs-18" name="" id="DeliveryEnterMobileN" placeholder="Enter OTP"/>
                            <div class="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style="display: none;">
                                Please Enter Valid OTP
                            </div>
                            </div>
                            <div class="form-group text-right">
                            <a class="font-italic fs-12 text-danger" href="#">Resend OTP</a>
                            </div>
                            <div class="d-block">
                            <button type="button" class="btn btn-primary px-4 fw-600 btn-lg rounded-0 text-uppercase">Login</button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default SignupModal;
