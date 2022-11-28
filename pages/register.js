import Head from "next/head";
import Link from "next/link";

export default function register() {
  return (
    <div>
      <Head>
        <title>Register Page</title>
      </Head>
      <form className="mx-auto my-4" style={{ maxWidth: "500px" }}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
