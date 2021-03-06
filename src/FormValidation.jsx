import React from "react";
import "./validation.scss";
const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: "",
  number: "",
  numberError: ""
};

export default class FormValidation extends React.Component {
  state = initialState;

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    let numberError = "";

    const { name, email, password, number } = this.state;
    if (!name) {
      nameError = "Name cannot be Blank";
    }

    if (!email.includes("@")) {
      emailError = "Invalid Email,Enter valid Email";
    }

    if (password.length <= 5) {
      passwordError = "Password should be between 5 and 10 characters";
    }
    if (number.length < 11) {
      numberError = "Password should be between 5 and 10 characters";
    }
    if (nameError || emailError || passwordError || numberError) {
      this.setState({ nameError, emailError, passwordError, numberError });
      return false;
    }
    return true;
  };
  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
    }
  };
  render() {
    const {
      name,
      email,
      password,
      nameError,
      emailError,
      passwordError,
      number,
      numberError
    } = this.state;
    return (
      <div className="valid">
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            value={name}
            placeholder="Enter Your Name"
            onChange={this.handleChange}
          />
          <p style={{ color: "red" }}>{nameError}</p>
          <input
            name="email"
            type="text"
            value={email}
            placeholder="Enter Your Email"
            onChange={this.handleChange}
          />
          <p style={{ color: "red" }}>{emailError}</p>
          <input
            name="password"
            type="password"
            value={password}
            placeholder="Enter Your Password"
            onChange={this.handleChange}
          />
          <p style={{ color: "red" }}>{passwordError}</p>
          <>
            <input
              value={number}
              type="tel"
              id="phone"
              name="number"
              required
              onChange={this.handleChange}
              placeholder="Enter your number"
            />
            <p style={{ color: "red" }}>{numberError}</p>
          </>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
