import React from "react";
import "./App.css";
import Header from "./components/header/header";
import NavBar from "./components/desktopnav/navBar";
import Carousel from "./components/carousel/carousel";
import LargeItems from "./components/rowLarge/largeItems";
import SmallItems from "./components/rowsmall/smallItems";
import TrendingItems from "./components/trendingSection/trendingItems";
import DiscountedItems from "./components/discountSection/discountedItems";
import TrendingBrands from "./components/trandingBrands/trendingBrands";
import Footer from "./components/footer/footer";
import LoginModal from "./components/modals/login/loginModal";
import OtpModal from "./components/modals/otp/otpModal";
import PasswordModal from "./components/modals/password/passwordModal";
import SignupModal from "./components/modals/signup/signupModal";
import NavMenu from "./components/navMenu/navMenu";

function App() {
  return (
    <div className="App">
      <a href="#" className="cartBtn">
        <span>1</span>
        <img src="./images/cart.png" alt="cart Image" />
      </a>
      <NavMenu />
      <div className="off-canvas-main">
        <div className="container-fluid">
          <Header />
          <NavBar />
          <Carousel />
          <LargeItems />
          <SmallItems />
          <TrendingItems />
          <DiscountedItems />
          <TrendingBrands />
          <Footer />

          {/* <LoginModal/>
          <OtpModal/>
          <PasswordModal/>
          <SignupModal/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
