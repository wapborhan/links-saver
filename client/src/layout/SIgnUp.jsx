import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { updateProfile } from "firebase/auth";

const SIgnUp = () => {
  const { createUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const inputData = {
      email,
      password,
    };

    const username = email.split("@")[0];

    if (password.length < 6) {
      toast("Password is less than 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast("Password don't have a capital letter");

      return;
    } else if (!/[!@#$%^&*()_+[\]{}|;:'"<>,.?/~`]/.test(password)) {
      toast("Password don't have a special character");
      return;
    }

    createUser(email, password, username)
      .then((result) => {
        const user = result.user;

        updateProfile(user, {
          displayName: username,
        });

        const userData = {
          username: username,
          email: user?.email,
          name: "",
          photoUrl: "",
          userType: "user",
        };

        axiosPublic
          .post(`/user`, userData)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.error(err);
          });

        form.reset();
        navigate(`/`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage);
      });

    console.log(inputData);
  };
  return (
    <div className="flex justify-between items-center w-full h-full">
      <div className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#e9e9e9] rounded-2xl shadow-xl home">
        <div className="flex flex-row gap-3 pb-4 items-center">
          <Link to="/" className="text-center">
            <img src="/logo.png" alt="Logo" width="30" />
          </Link>
          <Link to="/" className="text-4xl font-bold text-[#fff]  my-auto">
            Links Saver
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="pb-2">
            <label
              htmlFor="email"
              className="block mb-2 text-base font-medium text-[#111827]"
            >
              Email
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </span>
              <input
                type="email"
                name="email"
                className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                placeholder="name@company.com"
              />
            </div>
          </div>
          <div className="pb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-base font-medium text-[#111827]"
            >
              Password
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-square-asterisk"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M12 8v8"></path>
                  <path d="m8.5 14 7-4"></path>
                  <path d="m8.5 10 7 4"></path>
                </svg>
              </span>
              <input
                type="password"
                name="password"
                placeholder="••••••••••"
                className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-[#ffffff] !bg-[#4F46E5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6"
          >
            Login
          </button>
          <div className="text-sm font-light text-[#ffffff] text-center">
            {"Don't have an accout yet? "}
            <Link
              to="/signin"
              className="font-medium text-[#4F46E5] hover:underline"
            >
              Sign in
            </Link>
          </div>
        </form>
        <div className="relative flex py-8 items-center">
          <div className="flex-grow border-t border-[1px] border-gray-200"></div>{" "}
          <span className="flex-shrink mx-4 font-medium text-gray-500">OR</span>
          <div className="flex-grow border-t border-[1px] border-gray-200"></div>
        </div>
        <div>
          <div className="flex flex-row gap-2 justify-center">
            <button className="bg-[#3B9DF8] text-white rounded-md py-1 pl-1 pr-4 flex items-center gap-[10px] text-[1rem] hover:bg-blue-500 transition-all duration-200">
              <div className="py-2 px-2.5 rounded-l-md bg-white">
                <img
                  src="assets/google.png"
                  alt="google logo"
                  className="w-[23px]"
                />
              </div>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIgnUp;
