import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";

const Login = () => {

    const [showPassword, setPassword] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        //get field value  
        const email = e.target.email.value
        const password = e.target.password.value
        console.log('hello', email, password)

        // validation
        // if(password.length < 6){
        //    toast.error("Please must be at least 6 characters")
        //    return
        // }

        // // create a new user
        // singIn(email, password)

        //         .then(res => {
        //             toast.success('user login successfully')
        //             navigate('/')
        //         })

        //     .catch(error => {
        //         toast.error(error.message)
        //     })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">          
                <div className="hero-content flex flex-col ">           
                <h1 className="text-3xl p-4 font-bold text-blue-900">Please Login Here...</h1>       
                    <div className="card px-10 w-full max-w-sm shadow-2xl bg-base-100 ">
                  
                    
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="mb-6">
                                    <input type={showPassword ? "text" : "password"} placeholder="password" className="input absolute input-bordered" name='password' />
                                    <span onClick={() => setPassword (!showPassword)}>{showPassword ? <FaEye className="relative top-4 left-48"></FaEye> : <FaEyeSlash className="relative top-4 left-48"></FaEyeSlash>} </span>
                                    
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover mt-4">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-2 p-0">
                                <button type='submit' className="btn btn-neutral">Login</button>
                            </div>
                            <label className="label">
                                New here? <Link to="/register" className="label-text-alt link link-hover text-blue-900 font-bold underline">Create an account</Link>
                            </label>
                            <SocialLogin />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;