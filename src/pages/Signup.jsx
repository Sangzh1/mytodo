import { useSignup } from "../hooks/useSignup";
import { useRef } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import Button from "../components/Button";

function Signup() {
  const displayName = useRef();
  const email = useRef();
  const password = useRef();
  const { isPending } = useGlobalContext();
  const { signUpWithGoogleProvider, signup } = useSignup();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signUpWithGoogleProvider();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(
      displayName.current.value,
      email.current.value,
      password.current.value,
    );
  };
  return (
    <div className="grid h-screen place-items-center">
      <video className="h-full w-full bg-blue-200 object-cover" />
      <div className=" absolute rounded-lg bg-sky-400 px-10 py-10">
        <h1 className="mb-5 text-3xl font-bold text-zinc-950	">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-10 items-center">
            <label className="mr-5" htmlFor="username ">
              Name:{" "}
            </label>
            <input
              ref={displayName}
              type="text"
              placeholder="Type your username"
              id="username"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="mb-10 items-center">
            <label className="mr-5" htmlFor="username">
              Email:{" "}
            </label>
            <input
              ref={email}
              type="email"
              placeholder="Type your username"
              id="username"
              className="input input-bordered input-primary w-full max-w-xs"
              required
            />
          </div>
          <div className="mb-10 items-center">
            <label className="mr-5" htmlFor="password">
              Password
            </label>
            <input
              ref={password}
              type="password"
              id="password"
              placeholder="Type your password"
              className="input input-bordered input-error w-full max-w-xs"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            {!isPending && <Button text={"Login"} disabled={false} />}
            {isPending && <Button text={"Loading..."} disabled={true} />}
            <button
              onClick={handleGoogleLogin}
              className="btn btn-neutral btn-sm md:btn-md "
            >
              Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
