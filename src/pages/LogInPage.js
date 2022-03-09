import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/authOperation";
import style from "../components/ContactForm/ContactForm.module.css";

function LogInPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={style.form}>
        <h2 className={style.text}>Email</h2>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          className={style.input}
          required
        />
        <h2 className={style.text}>Password</h2>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          className={style.input}
          required
        />
        <button type="submit" name="button" className={style.button}>
          LogIn
        </button>
      </form>
    </>
  );
}

export default LogInPage;
