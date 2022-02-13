import React from 'react';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import s from './Form.module.scss';
// import { signup, login } from '../../redux/auth/auth-operations';
import { signup, login } from '../../reduxV2/auth/auth-operation';

import images from '../../images/google.png';

// -------- !!! ----------
export default function RegistrationForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // console.log({ email, password });

  // const [values, setValues] = useState({
  //   email: '',
  //   password: '',
  // });
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleChange = e => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const user = { email, password };
  //   dispatch(signup(user));
  //   reset();
  // };

  // const validate = values => {
  //   let errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  //   if (!values.email) {
  //     errors.email = 'Email is required';
  //   } else if (!regex.test(values.email)) {
  //     errors.email = 'Invalid Email';
  //   }

  //   if (!values.password) {
  //     errors.password = 'Password is required';
  //   } else if (values.password.length < 6) {
  //     errors.password = 'Password too short';
  //   }

  //   return errors;
  // };

  // const reset = () => {
  //   setValues('');
  // };

  // const submitForm = values => {
  //   // console.log(values);
  // };

  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmitting) {
  //     submitForm();
  //   }
  // }, [formErrors]);

  // const handleLogin = e => {
  //   e.preventDefault();
  //   dispatch(login(values));
  //   setFormErrors(validate(values));
  //   setIsSubmitting(true);
  //   console.log(e);
  // };
  const validateEmail = value => {
    const re = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    return re.test(String(value).trim().toLowerCase());
  };
  // console.log(validateEmail('naira@mail.com'));

  const validatePassword = value => {
    const re = /^(?=.*[0-9a-zA-Z]{2,})(?=.{3,5}$)/;
    return re.test(String(value).trim().toLowerCase());
  };
  console.log(validatePassword('1Qqqqq'));

  const loginUser = () => {
    if (!validateEmail(email)) {
      return alert('Невалидная почта');
    }
    console.log(`login user ${email}, ${password}`);
  };

  const signupUser = () => {
    console.log(`signup user  ${email}, ${password}`);
  };

  return (
    <div className={s.container}>
      <form
        // onSubmit={handleSubmit}
        className={s.container_form}
      >
        <h1 className={s.title_gb}>
          Вы можете авторизоваться с помощью <br /> Google Account:
        </h1>
        <a
          href=" https://capusta2.herokuapp.com/api/user  "
          className={s.g_link}
          title="Google Account"
        >
          <div className={s.g_btn}>
            <img src={images} alt="" className="g_svg" width="17" height="18" />
            Google
          </div>
        </a>
      </form>
      <form className={s.container_form}>
        <h1 className={s.title_registe}>
          Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
        </h1>
        <div className={s.form_row}>
          <label htmlFor="email">Электронная почта:</label>
          <input
            type="mail"
            name="email"
            id="email"
            placeholder="your@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            // className={validate(values)?.email && touched.email ? 'input_error' : null}
          />
          {/* {errors.email && touched.email && <span className="error">{errors.email}</span>} */}
        </div>

        <div className={s.form_row}>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            // className={errors.password && touched.password ? 'input_error' : null}
          />

          {/* {errors.password && touched.password && <span className="error">{errors.password}</span>} */}
        </div>
      </form>
      <div className={s.btn_form}>
        <button
          type="submit"
          onClick={loginUser}
          // className={!(dirty && isValid) ? 'disabled_btn' : 'btn_login'}
          // disabled={!(dirty && isValid)}
        >
          ВОЙТИ
        </button>
        <button type="button" className={s.btn_reg} onClick={signupUser}>
          РЕГИСТРАЦИЯ
        </button>
      </div>
    </div>
  );
}