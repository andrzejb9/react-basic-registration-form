import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const [submitted, setSubmitted] = useState(false);
  const [validInput, setValidInput] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidInput(true);
    if (form.firstName && form.lastName && form.email) {
      setValidInput(false);
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">
            Success! Thank you for registering.
          </div>
        ) : null}
        <input
          value={form.firstName}
          onChange={handleChange}
          className="form-field"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && validInput ? (
          <span>Please enter a first name.</span>
        ) : null}
        <input
          value={form.lastName}
          onChange={handleChange}
          className="form-field"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && validInput ? (
          <span>Please enter a last name.</span>
        ) : null}
        <input
          value={form.email}
          onChange={handleChange}
          className="form-field"
          placeholder="Email"
          name="email"
        />
        {submitted && validInput ? <span>Please enter an email.</span> : null}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
