import Head from "next/head";
import Link from "next/link";
import { useState, useContext } from "react";

import valid from "../utils/valid";
import { DataContext } from "../store/GlobalState";
import { postData } from "../utils/fetchData";
import Cookie from "js-cookie";

export default function signin() {
  const initialState = {
    email: "",
    password: "",
  };
  const [userData, setUserDate] = useState(initialState);
  const { email, password } = userData;

  const { state, dispatch } = useContext(DataContext);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserDate({ ...userData, [name]: value });
    dispatch({ type: "NOTIFY", payload: {} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "NOTIFY", payload: { loading: true } });
    const res = await postData("auth/login", userData);
    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });
    dispatch({ type: "NOTIFY", payload: { success: res.msg } });
    dispatch({
      type: "AUTH",
      payload: {
        token: res.access_token,
        user: res.user,
      },
    });
    Cookie.set("refreshToken", res.resfresh_token, {
      path: "api/auth/accessToken",
      expires: 7,
    });
    localStorage.setItem("firstLogin", true);
  };
  return (
    <div>
      <Head>
        <title>Sign in Page</title>
      </Head>
      <form
        className="mx-auto my-4"
        style={{ maxWidth: "500px" }}
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Login
        </button>
        <p className="my-2">
          You don't have an account?
          <Link href="/register">
            <span style={{ color: "crimson" }}>Register Now</span>
          </Link>
        </p>
      </form>
    </div>
  );
}
