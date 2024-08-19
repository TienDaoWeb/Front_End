// import Datetime from 'react-datetime';
import axios from 'axios';
import './Register.css';
import TIENDAO_API_SERVICE_INFOS from '~/configs/api_infos';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';

const Register = () => {

  const [accountInfo, setAccountInfo] = React.useState({
    email: "",
    full_name: "",
    password: "",
    re_enter_password: "",
    role: "Reader",
  });



  const [errors, setErrors] = React.useState<{ [index: string]: any }>({});
  const navigate = useNavigate();

  const handleChange = (event: any) => {
    setErrors([]);
    const { name, value } = event.target;

    setAccountInfo((prevalue) => {
      return {
        ...prevalue,
        [name]: value
      }
    })
  }
  const handleSubmit = () => {
    const newErrors: { [index: string]: any } = {};
    setErrors([]);
    if (!accountInfo.full_name) {
      console.log(!accountInfo.full_name);
      newErrors["full_name"] = "Tên không được trống";
    }

    if (!validator.isEmail(accountInfo.email)) {
      newErrors["email"] = "Email không đúng format";
    }

    if (!accountInfo.password) {
      newErrors["password"] = "Mật khẩu không được để trống";
    };

    if (accountInfo.password !== accountInfo.re_enter_password) {
      newErrors["re_enter_password"] = "Mật khẩu không trùng khớp";
    };

    if (Object.keys(newErrors).length !== 0) {
      console.log(newErrors);
      setErrors(newErrors);
      return;
    }
    else {
      axios.post(`${TIENDAO_API_SERVICE_INFOS}/auth/register`, {
        email: accountInfo.email,
        password: accountInfo.password,
        fullName: accountInfo.full_name,
        role: accountInfo.role
      })
        .then(function (response) {
          if (response.data.status === 1) {
            navigate(`/otp/${accountInfo.email}`);
          } else {
            newErrors["register"] = response.data.message;
            setErrors(newErrors);
          }
        })
        .catch(function (error) {
          newErrors["error"] = error.message;
          setErrors(newErrors);
        });
    }
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className='text-[1.6rem] flex flex-col gap-2.5 px-[3rem]'>
      <label htmlFor="full_name" className='w-full'>Họ và Tên</label>
      <input
        type="text"
        id="full_name"
        name="full_name"
        placeholder='Nhập họ và tên'
        className={errors["full_name"] ? "register__input w-[28rem] text-[1.6rem] px-5 py-2.5 error-input text-[color:var(--red)]" : "register__input w-[28rem] text-[1.6rem] px-5 py-2.5 normal-input"}
        onChange={handleChange}
      />
      {errors["full_name"] && <span className=" text-[color:var(--red)]">{errors["full_name"]}</span>}
      {/* <label htmlFor="gender" className='w-full'>Giới tính</label>
      <select
        name="gender"
        className='sign_up_form__input'
      // value={accountInfo.gender}
      // onChange={handleChange} 
      >
        <option value="1">Nam</option>
        <option value="0">Nữ</option>
        <option value="-1">Riêng tư</option>
      </select>
      <label htmlFor="birthday" className='w-full'>Ngày sinh</label> */}
      {/* <Datetime
        // id="birthday"
        // value={format(accountInfo.birthday, "dd-MM-yyyy")}
        // onChange={handleDateChange}
        dateFormat="DD-MM-YYYY"
        timeFormat={false}
        locale="vi"
        closeOnSelect={true}
        renderMonth={(props, month) => <td {...props}>Thg {month + 1}</td>}
        // placeholderText="Chọn ngày sinh"
        // isValidDate={isValidDate}
        // className={errors["birthday"] ? "sign_up_form__input_date error-input" : "sign_up_form__input_date normal-input"}
      /> */}
      {/* {/* {errors["birthday"] && <span className=" text-[color:var(--red)]">{errors["birthday"]}</span>} */}
      <label htmlFor="email" className='w-full'>Email</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder='Nhập email'
        className={errors["email"] ? "register__input w-[28rem] text-[1.6rem] px-5 py-2.5 error-input text-[color:var(--red)]" : "register__input w-[28rem] text-[1.6rem] px-5 py-2.5 normal-input"}
        onChange={handleChange} 
      />
      {errors["email"] && <span className=" text-[color:var(--red)]">{errors["email"]}</span>} 
      <label htmlFor="role" className='w-full'>Loại tài khoản</label>
      <select
        id="role"
        name="role"
        className={errors["role"] ? "register__input w-[28rem] text-[1.6rem] px-5 py-2.5 error-input text-[color:var(--red)]" : "register__input w-[28rem] text-[1.6rem] px-5 py-2.5 normal-input"}
      // value={accountInfo.role} 
      // onChange={handleChange} 
      >
        <option value="Reader" className=''>Độc giả</option>
        <option value="Converter" className=''>Người đăng truyện</option>
      </select>
      <label htmlFor="password" className='w-full'>Mật khẩu</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder='Nhập mật khẩu'
        className={errors["password"] ? "register__input w-[28rem] text-[1.6rem] px-5 py-2.5 error-input text-[color:var(--red)]" : "register__input w-[28rem] text-[1.6rem] px-5 py-2.5 normal-input"}
        onChange={handleChange} 
      />
      {errors["password"] && <span className=" text-[color:var(--red)]">{errors["password"]}</span>}
      <label htmlFor="re_enter_password" className='w-full'>Nhập lại mật khẩu</label>
      <input
        type="password"
        id="re_enter_password"
        name="re_enter_password"
        placeholder='Nhập lại mật khẩu'
        className={errors["re_enter_password"] ? "register__input w-[28rem] text-[1.6rem] px-5 py-2.5 error-input text-[color:var(--red)]" : "register__input w-[28rem] text-[1.6rem] px-5 py-2.5 normal-input"}
        onChange={handleChange} 
      />
      {errors["re_enter_password"] && <span className=" text-[color:var(--red)]">{errors["re_enter_password"]}</span>}
      {errors["register"] && <span className=" text-[color:var(--red)]">{errors["register"]}</span>}
      {errors["error"] && <span className=" text-[color:var(--red)]">{errors["error"]}</span>}
      <button className='flex m-auto justify-center bg-[color:var(--gold)] w-[100px] text-[color:var(--white)] text-[1.6rem] px-0 py-2.5 rounded-[10px] border-[none] mb-5 mt-5' type="submit">Đăng ký</button>
    </form>
  );
};

export default Register;