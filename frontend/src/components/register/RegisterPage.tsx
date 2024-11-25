import { useState } from "react";
import { IRegisterInfo } from "../../types/register";

const RegisterPage = () => {
  const [objRegister, setObjRegister] = useState<IRegisterInfo>({
    name: "",
    email: "",
    pic: null,
    password: "",
  });

  const handleChange = (obj: Partial<IRegisterInfo>) => {
    setObjRegister((prev: IRegisterInfo) => ({
      ...prev,
      ...obj,
    }));
  };

  const onRegister = (e: any) => {
    e.preventDefault();
    console.log(objRegister, "-----register states");
  };

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="px-5 py-24 w-full flex justify-center items-center">
          <form
            onSubmit={onRegister}
            className="w-1/3 bg-white flex flex-col p-4"
          >
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Register
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                onChange={(e) => {
                  handleChange({ name: e.target.value });
                }}
                value={objRegister.name || ""}
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                required
                type="email"
                onChange={(e) => {
                  handleChange({ email: e.target.value });
                }}
                value={objRegister.email || ""}
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="pic" className="leading-7 text-sm text-gray-600">
                Profile Picture
              </label>
              <input
                required
                type="file"
                accept="image/*"
                onChange={(e: any) => {
                  handleChange({ pic: (e.target.files[0] as any) || "" });
                }}
                id="pic"
                name="pic"
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
                required
                type="text"
                onChange={(e) => {
                  handleChange({ password: e.target.value });
                }}
                value={objRegister.password || ""}
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Register
            </button>
            <p className="text-gray-500 mt-3 text-sm text-right">
              Already account please click to{" "}
              <a className="text-blue-700 font-medium underline" href="/login">
                login
              </a>{" "}
              here
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
