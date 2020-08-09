import React from 'react'

function LoginBar() {
    return (
        <div className="col-12 px-0 top-gry">
            <div className="container">
                <div className="row">
                <div className="text-right col-12">
                    <ul className="list-inline top-links">
                    <li className="list-inline-item"><a href="#" data-toggle="modal" data-target="#login">Login/Register</a></li>
                    {/* <!-- <li className="list-inline-item dropdown">
                        <a className="dropdown-toggle" href="#" id="ProfileMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hi Amitabh Kumar!</a>
                        <div className="dropdown-menu dropdown-menu-right shadow rounded-0 fs-14 border-0 mt-1" aria-labelledby="ProfileMenu">
                        <a className="d-block p-2 lh-1" href="#">
                            <span className="pr-2"><img src="images/profile-icon.png"></span> My Profile
                        </a>
                        <a className="d-block p-2 lh-1" href="#">
                            <span className="pr-2"><img src="images/tr-icon.png"></span> My Transaction
                        </a>
                        <a className="d-block p-2 lh-1" href="#">
                            <span className="pr-2"><img src="images/logout-icon.png"></span> Logout
                        </a>
                        </div>
                    </li> --> */}
                    </ul>
                </div>
                </div>
            </div>
            </div>
    )
}

export default LoginBar;
