import { useState } from "react";
import { ILogin } from "../../types/register";

const LoginPage = () => {
  const [objLogin, setObjLogin] = useState<ILogin>({
    email: "",
    password: "",
  });

  const handleChange = (obj: Partial<ILogin>) => {
    setObjLogin((prev: ILogin) => ({
      ...prev,
      ...obj,
    }));
  };

  const onLogin = (e:any) => {
    e.preventDefault();
    console.log(objLogin, "-----login states");
  };

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="px-5 py-24 w-full flex justify-center items-center">
          <form onSubmit={onLogin} className="w-1/3 bg-white flex flex-col p-4">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Login
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                onChange={(e) => {
                  handleChange({
                    email: e.target.value,
                  });
                }}
                value={objLogin.email || ""}
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="text"
                required
                onChange={(e) => {
                  handleChange({
                    password: e.target.value,
                  });
                }}
                value={objLogin.password || ""}
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Login
            </button>
            <p className="text-gray-500 mt-3 text-sm text-right">
              Want to create new account please click to{" "}
              <a
                className="text-blue-700 font-medium underline"
                href="/register"
              >
                register
              </a>{" "}
              here
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
