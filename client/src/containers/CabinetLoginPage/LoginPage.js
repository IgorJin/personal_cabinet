import React, { useState } from "react";

const LoginPage = ({ handleSubmit, handleClickGoogle }) => {
  const [username, setUsername] = useState("i.zubenko2012@yandex.ru");
  const [password, setPassword] = useState("11111");

  return (
    <form>
      <h1>Войти в личный кабинет</h1>
      <div className="form_pair">
        <label>Username/Email</label>
        <input
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="form_pair">
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <span className="" onClick={handleClickGoogle}>with google</span>

      <input
        className="submit_button"
        type="submit"
        onClick={(e) => handleSubmit(e, username, password)}
      />
    </form>
  );
};
export default LoginPage;
