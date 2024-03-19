import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Login = () => {
  const [phone, setPhone] = useState(false);
  const logo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/TamilNadu_Logo.svg/819px-TamilNadu_Logo.svg.png";

  // async function loginUser(e) {
  //   e.preventDefault();
  //   if (phone.length !== 10) {
  //     setMessage("Enter a valid phone");
  //     setSeverity("error");
  //     setOpen(true);
  //     return;
  //   }

  //   const response = await fetch(
  //     "http://localhost:8080/api/auth/getOTP/" + phone,
  //     {
  //       method: "POST",
  //     }
  //   );
  //   if (response.status === 200) setOtp(true);
  // }

  // // eslint-disable-next-line
  // async function test() {
  //   const response = await fetch("http://localhost:8080/api/auth");
  //   const data = await response.text();
  //   console.log(data);
  // }

  // async function verifyUser(e) {
  //   e.preventDefault();

  //   const response = await fetch(
  //     "http://localhost:8080/api/auth/validateOTP/" + phone + "&&" + code,
  //     {
  //       method: "POST",
  //     }
  //   );
  //   const data = await response.json();
  //   if (response.status === 200) {
  //     context.setLoggedIn(true);
  //     localStorage.setItem("user", data.token);
  //   } else {
  //     setOpen(true);
  //     setSeverity("error");
  //     setMessage("Invalid OTP");
  //   }
  // }
  const styles = {
    input:
      "py-2 px-2 rounded-sm focus:outline-none placeholder:text-slate-400 w-full border border-slate-400 mt-5 text-slate-700",
  };
  const handleClick = () => {
    setPhone((prev) => !prev);
  };
  const handleLogin = () => {
    console.log("Login");
  };

  return (
    <div className="bg-slate-30 py-2 flex flex-col items-center h-[80.7vh] pt-20">
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="tn-govt-logo"
          className="h-12 md:h-20 place-self-center"
        />
        <div className="text-4xl font-bold">E-Public Distribution System</div>
      </div>
      <div className="h-full flex justify-center p-10">
        <form className="flex flex-col items-center h-[40vh] w-[50vh] px-10">
          <div className="text-3xl font-medium">
            {phone ? <>Enter OTP</> : <>User Login</>}
          </div>
          {!phone && (
            <div className="flex flex-col justify-evenly w-full h-[20vh]">
              <input
                className={styles.input}
                placeholder="Phone Number"
                type="text"
              />
              <div
                onClick={handleClick}
                className="bg-green-400 shadow-lg px-2 py-2 rounded-lg cursor-pointer text-center font-bold text-white"
              >
                Continue
              </div>
            </div>
          )}
          {phone && (
            <div className="flex flex-col justify-evenly w-full h-[20vh]">
              <input className={styles.input} placeholder="OTP" type="text" />
              <button
                onClick={handleLogin}
                className="bg-green-400 shadow-lg px-2 py-2 rounded-lg font-bold text-white"
              >
                Login
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
