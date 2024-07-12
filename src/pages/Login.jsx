import { useLogin } from "../hooks/useLogin";
import { useSignup } from "../hooks/useSignup";
import { useRef } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import Button from "../components/Button";

function Login() {
  const { signUpWithGoogleProvider } = useSignup();
  const { login } = useLogin();

  const email = useRef();
  const password = useRef();
  const { isPending } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email.current.value, password.current.value);
  };
  return (
    <div className="top-0 grid h-screen place-items-center">
      <video className="h-full w-full bg-rose-300 object-cover" />
      <div className="absolute rounded-lg bg-fuchsia-200 px-10 py-10">
        <h1 className="mb-5 text-3xl font-bold text-zinc-950	">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-10 items-center">
            <label className="mr-5" htmlFor="email">
              Email:{" "}
            </label>
            <input
              ref={email}
              type="text"
              placeholder="Type here "
              id="email"
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
              type="button"
              onClick={signUpWithGoogleProvider}
              className="btn btn-accent btn-sm md:btn-md"
            >
              Google
            </button>
            <a className="btn btn-info btn-sm md:btn-md" href="/signup">
              If you do'nt have any account?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
