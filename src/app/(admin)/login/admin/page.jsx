'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import FormLoader from '@/components/FormLoader/FormLoader';
import Image from 'next/image';


export default function page() {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  })
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
  const [disableBtn, setDisableBtn] = useState(true)

  function handleChange(e) {
    const { name, value } = e.target
    setLoginData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }
  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    toast.promise(
      axios
        .post("/api/login", loginData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log("Admin Login Successfully", response);
          if (response.data.success) {
            setLoginData({
              username: "",
              password: ""
            });
          }
          setLoading(false)
          router.push("/admin/dashboard");
        })
        .catch((error) => {
          console.log("Login Failed :- ", error.response.data.message);
          setError(error.response.data.message);
          setLoading(false)
          throw error;
        })
        .finally(() => {
          setLoading(false);
        }),
      {
        loading: "Submitting",
        success: "Admin Login Successful",
        error: "Error while login. Please try again.",
      }
    );

  }
  useEffect(() => {
    if (loginData.username.length >= 3 && loginData.password.length >= 3) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [loginData.username, loginData.password]);

  useEffect(() => {
    let timeout;
    if (error) {
      timeout = setTimeout(() => {
        setError('')
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [error]);


  return (
    <section className='section'>
      <div className="section-wraper">
        <div className="login-outer">
          <div className="login-img-container">
            <Image src='/images/login.png' width={1000} height={1000} alt='login' />
          </div>
          <div className="login-container">
            <div className="login-wraper">
              <div className="login-heading">
                <h1>Admin Login</h1>
              </div>

              <div className="login-form-container">
                <div className="input-container">
                  <input type="text"
                    placeholder='Username'
                    name='username'
                    required
                    value={loginData.username}
                    onChange={handleChange} />
                </div>
                <div className="input-container">
                  <input type="password"
                    placeholder='Password'
                    name='password'
                    required
                    value={loginData.password}
                    onChange={handleChange} />
                  {error && <p className='error'>{error}</p>}
                  {/* <p className='error'>Error</p> */}
                </div>
                <div className="input-container btn">
                  <button
                    disabled={disableBtn}
                    onClick={handleSubmit}
                    style={{ cursor: `${disableBtn ? 'not-allowed' : 'pointer'}` }}
                  >
                    {loading ? <FormLoader /> : "Submit"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  )
}
