import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import React from 'react';
import TIENDAO_API_SERVICE_INFOS from '~/configs/api_infos';
import axios from 'axios';
import validator from 'validator';

const Login = () => {
  const navigate = useNavigate();

  const [accountInfo, setAccountInfo] = React.useState({ username: "", password: "" });
  const [errors, setErrors] = React.useState<{ [index: string]: any }>({});



  const handleChange = (event: any) => {
    setErrors([]);
    let value = event.target.value;
    let name = event.target.name;

    setAccountInfo((prevalue) => {
      return {
        ...prevalue,
        [name]: value
      }
    })
  }

  const handleSubmit = () => {
    const newErrors: { [index: string]: any } = {}
    setErrors([]);

    if (!validator.isEmail(accountInfo.username)) {
      newErrors["email"] = "Email không đúng định dạng";
    }

    if (!accountInfo.password) {
      newErrors["password"] = "Mật khẩu không được để trống";
    };

    if (Object.keys(newErrors).length !== 0) {
      setErrors(newErrors);
      return;
    } else {
      console.log(accountInfo);
      axios.post(`${TIENDAO_API_SERVICE_INFOS}/auth/login`, {
        email: accountInfo.username,
        password: accountInfo.password,
      })
        .then(function (response) {
          console.log(response);
          console.log(response.data.isSuccess);
          if (response.data.isSuccess === true) {
            localStorage.setItem('access', response.data.data.accessToken);
            localStorage.setItem('refresh', response.data.data.refreshToken);
            localStorage.setItem("id", response.data.data.profile.id);
            localStorage.setItem("email", response.data.data.profile.email);
            localStorage.setItem("full_name", response.data.data.profile.fullName);
            localStorage.setItem("gender", response.data.data.profile.gender);
            localStorage.setItem("birthday", response.data.data.profile.birthDay);
            localStorage.setItem("avatar_url", response.data.data.profile.avatarUrl);
            localStorage.setItem("phone_number", response.data.data.profile.phoneNumber);
            // localStorage.setItem("status", response.data.data.profile.status);
            localStorage.setItem("role", response.data.data.profile.role);
            navigate('/');
            // if(response.data.data.profile.role === 'customer'){
            //     navigate('/');
            // } else if(response.data.data.profile.role === 'business'){
            //     navigate('/dashboard-business');
            // } else{
            //     navigate('/dashboard-admin');
            // }
          } else {
            newErrors["login"] = response.data.message;
            setErrors(newErrors);
          }
        })
        .catch(function (error) {
          newErrors["error"] = error.message;
          setErrors(newErrors);
        });
    }
  }

  return (<form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className='Login__form text-[1.6rem] flex flex-col gap-2.5 px-[3rem]'>
    <label htmlFor="username">Tài khoản</label>
    <input
      type="text"
      id="username"
      name="username"
      value={accountInfo.username}
      onChange={handleChange}
      // className='sm:w-[28rem] text-[1.6rem] px-5 py-2.5 normal-input'
      placeholder='Nhập tài khoản'
      className={errors.email ? "login__input sm:w-[28rem] text-[1.6rem] px-5 py-2.5 error-input text-[color:var(--red)]" : "login__input sm:w-[28rem] text-[1.6rem] px-5 py-2.5 normal-input"}
    />
    {errors["email"] && <span className="w-full text-[color:var(--red)]">{errors["email"]}</span>}
    <label htmlFor="password">Mật khẩu</label>
    <input
      type="password"
      id="password"
      name="password"
      value={accountInfo.password}
      onChange={handleChange}
      className={errors.email ? "login__input sm:w-[28rem] text-[1.6rem] px-5 py-2.5 error-input text-[color:var(--red)]" : "login__input sm:w-[28rem] text-[1.6rem] px-5 py-2.5 normal-input"}
      placeholder='Nhập mật khẩu'
    />
    {errors["password"] && <span className="w-full text-[color:var(--red)]">{errors["password"]}</span>}
    <Link to={'/reset-password'} className="w-full text-[color:var(--purple)]">Bạn không nhớ mật khẩu?</Link>
    {errors["login"] && <span className="w-full text-[color:var(--red)]">{errors["login"]}</span>}
    {errors["error"] && <span className="w-full text-[color:var(--red)]">{errors["error"]}</span>}
    <button className='flex m-auto justify-center bg-[color:var(--gold)] w-[100px] text-[color:var(--white)] text-[1.6rem] px-0 py-2.5 rounded-[10px] border-[none] mb-5 mt-5' type="submit">Đăng nhập</button>
  </form>
  );
};

export default Login;