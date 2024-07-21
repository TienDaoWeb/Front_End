import React, { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Login_Register: React.FC<Props> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("login");
  const loginRegisterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        loginRegisterRef.current &&
        !loginRegisterRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <Transition
      show={isOpen}
      as="div"
      className="fixed w-screen h-screen inset-0 z-50 flex items-center justify-center bg-gray-200"
    >
      <div
        ref={loginRegisterRef}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <nav className="flex justify-between mb-4">
          <button
            className={`px-4 py-2 ${
              activeTab === "login" ? "bg-blue-500 text-white" : "bg-gray-200"
            } rounded`}
            onClick={() => setActiveTab("login")}
          >
            Đăng nhập
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "register" ? "bg-blue-500 text-white" : "bg-gray-200"
            } rounded`}
            onClick={() => setActiveTab("register")}
          >
            Đăng ký
          </button>
        </nav>
        <div>
          {activeTab === "login" && (
            <form>
              {/* Form đăng nhập */}
            </form>
          )}
          {activeTab === "register" && (
            <form>
              {/* Form đăng ký */}
            </form>
          )}
        </div>
        <button onClick={onClose}>Đóng</button>
      </div>
    </Transition>
  );
};

export default Login_Register;