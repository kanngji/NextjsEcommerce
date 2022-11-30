import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import valid from "../utils/valid";

export default function register() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const [userData, setUserDate] = useState(initialState);
  const { name, email, password, confirm_password } = userData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserDate({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errMsg = valid(name, email, password, confirm_password);
    if (errMsg) console.log(errMsg);
  };
  return (
    <div>
      <Head>
        <title>Register Page</title>
      </Head>
      <form
        className="mx-auto my-4"
        style={{ maxWidth: "500px" }}
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword2">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            name="confirm_password"
            value={confirm_password}
            onChange={handleChangeInput}
          />
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Register
        </button>
        <p className="my-2">
          Already have an account?
          <Link href="/signin">
            <span style={{ color: "crimson" }}>Login Now</span>
          </Link>
        </p>
      </form>
    </div>
  );
}
