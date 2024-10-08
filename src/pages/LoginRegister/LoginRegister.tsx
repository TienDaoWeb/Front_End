import { useState } from "react";
import './LoginRegister.css';
// import $ from 'jquery';
// import 'jquery.ripples';
import Login from "../../components/Login/Login";
import Register from "../../components/Register";

const LoginRegister = () => {
  const [activeTab, setActiveTab] = useState("login");

  // ($ as any)('#background-image').ripples({
  //   dropRadius: 15,
  //   perturbance: 0.02,
  // });

  return (
    <div className="flex w-screen h-[80rem] min-w-[1400px]:h-[86rem] inset-0 z-50 flex items-center justify-center login_register">
      {/* <img
        id="background-image"
        src="/assets/images/background_image.jpg"
        alt="background image"
        className="h-[80rem] object-cover absolute"
      /> */}
      <div className="bg-[color:var(--white-trans)] py-10 px-[2.5rem] rounded-3xl shadow-md flex flex-col items-center justify-center gap-5 m-auto">
        <div className="flex items-center gap-2.5">
          <img src="https://res.cloudinary.com/djkgwo9kc/image/upload/v1721899786/azkbpvnmztc7ziuoog60.png" alt="Logo" className="h-[8rem] object-contain" />
          <h1 className="web_name text-[3rem]">Tiên Đạo</h1>
        </div>
        <nav className="flex mb-4 p-[1rem] bg-gray-200 rounded-[3rem]">
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
