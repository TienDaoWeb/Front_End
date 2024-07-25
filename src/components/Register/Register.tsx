// import Datetime from 'react-datetime';
import './Register.css';

const Register = () => {

  const handleSubmit = () => { }

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className='text-[1.6rem] flex flex-col gap-2.5 px-[3rem]'>
      <label htmlFor="last_name" className='w-full'>Họ và Tên</label>
      <input
        type="text"
        id="last_name"
        name="last_name"
        placeholder='Nhập tên'
        className='w-[28rem] text-[1.6rem] px-5 py-2.5 border border-solid border-black rounded-xl'
      // className={errors.last_name ? "sign_up_form__input_name error-input" : "sign_up_form__input_name normal-input"}
      // onChange={handleChange}
      />
      {/* {errors["last_name"] && <span className="error">{errors["last_name"]}</span>} */}
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
        // className={errors.birthday ? "sign_up_form__input_date error-input" : "sign_up_form__input_date normal-input"}
      /> */}
      {/* {/* {errors["birthday"] && <span className="error">{errors["birthday"]}</span>} */}
      <label htmlFor="email" className='w-full'>Email</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder='Nhập email'
              className='w-[28rem] text-[1.6rem] px-5 py-2.5 border border-solid border-black rounded-xl'
      // className={errors.email ? "sign_up_form__input error-input" : "sign_up_form__input normal-input"}
      // onChange={handleChange} 
      />
      {/* {/* {errors["email"] && <span className="error">{errors["email"]}</span>} */}
      <label htmlFor="role" className='w-full'>Loại tài khoản</label>
      <select
        id="role"
        name="role"
              className='w-[28rem] text-[1.6rem] px-5 py-2.5 border border-solid border-black rounded-xl'
      // value={accountInfo.role} 
      // onChange={handleChange} 
      >
        <option value="customer" className=''>Độc giả</option>
        <option value="business" className=''>Tác giả</option>
      </select>
      <label htmlFor="password" className='w-full'>Mật khẩu</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder='Nhập mật khẩu'
              className='w-[28rem] text-[1.6rem] px-5 py-2.5 border border-solid border-black rounded-xl'
      // className={errors.password ? "sign_up_form__input error-input" : "sign_up_form__input normal-input"}
      // onChange={handleChange} 
      />
      {/* {/* {errors["password"] && <span className="error">{errors["password"]}</span>} */}
      <label htmlFor="re_enter_password" className='w-full'>Nhập lại mật khẩu</label>
      <input
        type="password"
        id="re_enter_password"
        name="re_enter_password"
        placeholder='Nhập lại mật khẩu'
              className='w-[28rem] text-[1.6rem] px-5 py-2.5 border border-solid border-black rounded-xl'
      // className={errors.re_enter_password ? "sign_up_form__input error-input" : "sign_up_form__input normal-input"}
      // onChange={handleChange} 
      />
      {/* {/* {errors["re_enter_password"] && <span className="error">{errors["re_enter_password"]}</span>} */}
      {/* {/* {errors["sign-up"] && <span className="error">{errors["sign-up"]}</span>} */}
      {/* {errors["error"] && <span className="error">{errors["error"]}</span>} */}
      <button className='flex m-auto justify-center bg-[color:var(--gold)] w-[100px] text-[color:var(--white)] text-[1.6rem] px-0 py-2.5 rounded-[10px] border-[none] mb-5 mt-5' type="submit">Đăng ký</button>
    </form>
  );
};

export default Register;