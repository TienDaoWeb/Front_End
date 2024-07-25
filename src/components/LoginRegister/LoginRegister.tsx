import { useState } from "react";
import './LoginRegister.css';
// import $ from 'jquery';
// import 'jquery.ripples';
import Login from "../Login/Login";
import Register from "../Register";

const LoginRegister = () => {
  const [activeTab, setActiveTab] = useState("login");

  // ($ as any)('#background-image').ripples({
  //   dropRadius: 15,
  //   perturbance: 0.02,
  // });

  return (
    <div className="flex w-screen h-[80rem] inset-0 z-50 flex items-center justify-center relative login_register">
      {/* <img
        id="background-image"
        src="/assets/images/background_image.jpg"
        alt="background image"
        className="h-[80rem] object-cover absolute"
      /> */}
      <div className="bg-[color:var(--white-trans)] py-10 px-[5rem] rounded-3xl shadow-md flex flex-col items-center justify-center gap-5 m-auto relative">
        <div className="flex items-center gap-2.5">
          <img src="/assets/Logo.png" alt="Logo" className="h-[8rem] object-contain" />
          <h1 className="web_name text-[3rem]">Tiên Đạo</h1>
        </div>
        <nav className="flex mb-4 p-5 bg-gray-200 rounded-[3rem]">
          <button
            className={`px-4 py-2 ${activeTab === "login" ? "bg-[color:var(--gold)] text-white rounded-3xl mr-[-1rem] login_btn_active" : "rounded-3xl flex"} flex items-center justify-center w-[10rem] text-[1.6rem]`}
            onClick={() => setActiveTab("login")}
          >
            Đăng nhập
          </button>
          <button
            className={`px-4 py-2 ${activeTab === "register" ? "bg-[color:var(--gold)] text-white rounded-3xl ml-[-1rem] flex register_btn_active" : "rounded-3xl flex"} flex items-center justify-center w-[10rem] text-[1.6rem]`}
            onClick={() => setActiveTab("register")}
          >
            Đăng ký
          </button>
        </nav>
        <div>
          {activeTab === "login" && <Login />}
          {activeTab === "register" && <Register />}
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
