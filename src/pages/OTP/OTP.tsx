import React from "react";
import './OTP.css';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import TIENDAO_API_SERVICE_INFOS from "~/configs/api_infos";

const OTP = () => {
  let { slug } = useParams();
  const  [OTPInfo, setOTPInfo] = React.useState({email:slug,OTP:""});
  const [errors, setErrors] = React.useState<{ [index: string]: any }>({});
  const navigate = useNavigate();

  const handleChange = (event: any) =>{
      let value = event.target.value;
      let name = event.target.name;

      setOTPInfo((prevalue) => {
          return {
              ...prevalue,              
              [name]: value
          }
      })
  }

  const handleSubmit = () =>{
    const newError: { [index: string]: any } = {};
      if (!OTPInfo.OTP) {
          newError["otp"] = "OTP không được để trống";
          setErrors(newError);
          return;
      }
      else{
          axios.post(`${TIENDAO_API_SERVICE_INFOS}/auth/confirm-email`, {
              email: OTPInfo.email,
              otp: OTPInfo.OTP,
          })
          .then(function (response) {
              if (response.data.status === 1) {
                  navigate('/login-register');
              } else {
                  newError["error_res"] = response.data.message;
                  setErrors(newError);
              }
          })
          .catch(function (error) {
              newError["error"] = error.message;
              setErrors(newError);
          });
      }
  }
  return (
    <div className="flex w-screen h-[80rem] min-w-[1400px]:h-[86rem] inset-0 z-50 flex items-center justify-center login_register">
      <div className="bg-[color:var(--white-trans)] py-10 px-[2.5rem] rounded-3xl shadow-md flex flex-col items-center justify-center gap-5 m-auto">
        <div className="flex items-center gap-2.5">
          <img src="https://res.cloudinary.com/djkgwo9kc/image/upload/v1721899786/azkbpvnmztc7ziuoog60.png" alt="Logo" className="h-[8rem] object-contain" />
          <h1 className="web_name text-[3rem]">Tiên Đạo</h1>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className='flex flex-col items-center gap-2.5 text-[1.6rem] mb-5'>
          <label htmlFor="OTP" className='w-full'>OTP</label>
          <input 
              type="text" 
              id="OTP" 
              name='OTP' 
              placeholder='Nhập mã OTP' 
              onChange={handleChange} 
              className={errors["otp"] ? "otp_form__input sm:w-[28rem] text-[1.6rem] px-5 py-2.5 error-input" : "otp_form__input sm:w-[28rem] text-[1.6rem] px-5 py-2.5 normal-input"}
          />
          { errors["otp"] && <span className="text-[color:var(--red)]">{errors["otp"]}</span>}
          { errors["error_res"] && <span className="text-[color:var(--red)]">{errors["error_res"]}</span>}
          { errors["error"] && <span className="text-[color:var(--red)]">{errors["error"]}</span>}
          <button type="submit" className='flex m-auto justify-center bg-[color:var(--gold)] w-[100px] text-[color:var(--white)] text-[1.6rem] px-0 py-2.5 rounded-[10px] border-[none] mb-5 mt-5'>Xác nhận</button>
      </form>
      </div>
    </div>
  );
};

export default OTP;
