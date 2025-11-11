import { useState } from "react";

export default function Login() {
  // const [eneteredEmail, setEneteredEmail] = useState("");
  // const [enteredPassword, setEneteredPassword] = useState("");

  const [enteredValue, setEneteredValue] = useState({
    email: "",
    password: "",
  });
  const [editValue, setEditValue] = useState({
    email: false,
    password: false,
  });

  function handleValueChange(identifier, value) {
    setEneteredValue((preValue) => ({
      ...preValue,
      [identifier]: value,
    }));
    setEditValue( (preV) => ({
      ...preV,
      [identifier]: false
    }))
  }

  const isValidEmail = editValue.email && !enteredValue.email.includes('@');

  function handleBlur(identifier){
    setEditValue( (prev) =>({
      ...prev,
      [identifier]:true
    }))
  }


  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValue);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={()=>handleBlur('email')}
            onChange={(event) => handleValueChange("email", event.target.value)}
            value={enteredValue.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleValueChange("password", event.target.value)
            }
            value={enteredValue.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
