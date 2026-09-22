import { IconBrandFacebookFilled } from "@tabler/icons-react";
import { IconBrandMeta } from "@tabler/icons-react";
const Login = () => {
  const [isLogedin, setIsLogedin] = useState(false);
  const userLogin = () => {
    setIsLogedin(true);
  };
  return (
    <div className="px-13 flex border">
      <div className="w-[52%] border-r py-13 relative">
        <p className="rounded-full size-15 flex justify-center pt-3 bg-blue-600">
          <IconBrandFacebookFilled className="size-14 text-white" />
        </p>
        <p className="text-[58px]/[1] font-semibold absolute bottom-40 left-0">
          Explore
          <br />
          the things
          <br />
          <span className="text-blue-600">you love</span>.
        </p>
        <img
          src="login.webp"
          alt="Facebook Image"
          className="inline-block size-135 absolute right-0 top-0 mt-5"
        />
      </div>
      <div className="w-[48%] ps-13 py-30 flex flex-col justify-center">
        <p className="text-lg font-semibold mb-5">Log Into Facebook</p>
        <form method="post">
          <input
            type="text"
            id="emailOrPhone"
            placeholder="Email or mobile number"
            className="border border-gray-300 p-4 rounded-2xl w-full mb-3"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="border border-gray-300 p-4 rounded-2xl w-full mb-6"
          />
          <button
            onClick={userLogin}
            className="w-full bg-blue-600 text-white font-semibold rounded-full py-2 mb-7"
          >
            Log in
          </button>
        </form>
        <p className="text-center font-semibold mb-15">
          <a href="forgot">Forgot Password?</a>
        </p>
        <button className="w-full border border-blue-600 text-blue-600 font-semibold rounded-full py-2 mb-5">
          Create new account
        </button>
        <p className="text-center">
          <IconBrandMeta stroke={2} className="inline-block text-blue-600" />{" "}
          Meta
        </p>
      </div>
    </div>
  );
};

export default Login;
