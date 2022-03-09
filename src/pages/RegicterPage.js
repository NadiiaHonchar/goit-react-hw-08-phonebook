import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/authOperation";
import style from "../components/ContactForm/ContactForm.module.css";

function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
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
    dispatch(register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={style.form}>
        <h2 className={style.text}>Name</h2>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          className={style.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
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
          Register
        </button>
      </form>
    </>
  );
}

export default RegisterPage;
