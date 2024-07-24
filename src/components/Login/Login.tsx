import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

  const handleSubmit = ()=>{}

  return (<form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className='Login__form text-[1.6rem] flex flex-col gap-5 px-[3rem]'>
    <label htmlFor="username">Tài khoản</label>
    <input
      type="text"
      id="username"
      name="username"
      // value={accountInfo.username}
      // onChange={handleChange}
      className='w-[28rem] text-[1.6rem] px-5 py-2.5 border border-solid border-black rounded-xl'
      placeholder='Nhập tài khoản'
      // className={errors.email ? "Login_form__input error-input" : "Login_form__input normal-input"}
    />
    {/* {errors["email"] && <span className="error">{errors["email"]}</span>} */}
    <label htmlFor="password">Mật khẩu</label>
    <input
      type="password"
      id="password"
      name="password"
      // value={accountInfo.password}
      // onChange={handleChange}
      className='w-[28rem] text-[1.6rem] px-5 py-2.5 border border-solid border-black rounded-xl'
      placeholder='Nhập mật khẩu'
      // className={errors.password ? "Login_form__input error-input" : "Login_form__input normal-input"}
    />
    <Link to={'/reset-password'} className="w-full text-[color:var(--purple)]">Bạn không nhớ mật khẩu?</Link>
    {/* {errors["password"] && <span className="error">{errors["password"]}</span>}
    {errors["login"] && <span className="error">{errors["login"]}</span>}
    {errors["error"] && <span className="error">{errors["error"]}</span>} */}
    <button className='flex m-auto justify-center bg-[color:var(--gold)] w-[100px] text-[color:var(--white)] text-[1.6rem] px-0 py-2.5 rounded-[10px] border-[none] mb-5 mt-5' type="submit">Đăng nhập</button>
  </form>
  );
};

export default Login;