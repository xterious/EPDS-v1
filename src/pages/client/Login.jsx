import { AuthState } from "@/atoms/Atoms";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

const Login = () => {
  const authState = useRecoilValue(AuthState);
  const [phone, setPhone] = useState({
    number: "",
    otp: "",
    otpMode: false,
  });
  const logo = "/tngovt.png";

  const styles = {
    input:
      "py-2 px-2 rounded-md focus:outline-none placeholder:text-slate-400 w-full border border-slate-400 mt-5 text-slate-700",
  };
  const handleClick = () => {
    if (phone.number.length !== 10) {
      alert("Enter valid phone number");
      return;
    }
    axios
      .post(`${import.meta.env.VITE_APP_API_URL}/auth/getOTP/${phone.number}`)
      .then((res) => {
        setPhone((prev) => ({ ...prev, otpMode: true }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setPhone((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        `${import.meta.env.VITE_APP_API_URL}/auth/validateOTP/${
          phone.number
        }&&${phone.otp}`
      )
      .then((res) => {
        localStorage.setItem("token-client", res.data.token);
        window.location.reload();
      })
      .catch((err) => {
        alert("Invalid Credentials");
        console.log(err);
      });
    console.log(phone);
  };

  if (authState.isClientLoggedIn) return <Navigate to='/' />;

  return (
    <>
      <Header />
      <div className='bg-slate-100 flex justify-center items-center h-[80.7vh]'>
        <section className='border p-2 bg-white h-fit'>
          <div className='flex justify-center items-center gap-4'>
            <img src={logo} alt='tn-govt-logo' className='h-12 md:h-20' />
            <div className='text-xl font-bold'>
              E-Public Distribution System
            </div>
          </div>
          <div className='h-full flex justify-center p-10'>
            <form className='flex flex-col items-center w-[50vh] px-10'>
              <div className='text-lg font-medium'>
                {phone.otpMode ? <>Enter OTP</> : <>User Login</>}
              </div>
              {!phone.otpMode && (
                <div className='flex flex-col justify-evenly w-full h-[20vh]'>
                  <input
                    className={styles.input}
                    placeholder='Phone Number'
                    type='text'
                    name='number'
                    onChange={handleChange}
                  />
                  <div
                    onClick={handleClick}
                    className='bg-slate-600 shadow-lg px-2 py-2 rounded-lg cursor-pointer text-center font-bold text-white'>
                    Continue
                  </div>
                </div>
              )}
              {phone.otpMode && (
                <div className='flex flex-col justify-evenly w-full h-[20vh]'>
                  <input
                    className={styles.input}
                    name='otp'
                    placeholder='OTP'
                    type='text'
                    onChange={handleChange}
                  />
                  <button
                    onClick={handleLogin}
                    className='bg-slate-600 shadow-lg px-2 py-2 rounded-lg font-bold text-white'>
                    Login
                  </button>
                </div>
              )}
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Login;
