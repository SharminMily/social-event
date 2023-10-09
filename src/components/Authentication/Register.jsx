import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext)



    const [showPassword, setPassword] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        // //get field value
        const name = e.target.name.value
        const email = e.target.email.value
        const img = e.target.img.value
        const password = e.target.password.value
        console.log('hello', name, email, img, password)

        // validation
        if (password.length < 6) {
            toast.error("Please must be at least 6 characters")
            return;
        }
        // else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(password)) {

        //     toast.error("Please must be a capital letter and special character")
        //     return;
        // }  

        // create a new user
        createUser(email, password)
            .then(res => {
                console.log(res.user)
            })
            .catch(error => {
                console.log(error)
            })




        //  signIn(email, password)

        // .then(res => {
        //     // toast.success('user login successfully')
        //     // navigate('/')
        //     console.log(res.user)
        // })

        // .catch(error => {
        //     toast.error(error.message)
        // })
        // signIn(email, password)
        //     .then(res => {
        //         // handleUpdateProfile(name, img)
        //         //     .then(() => {
        //         //         toast.success('user create successfully')
        //         //         navigate('/')
        //         //     })
        //         console.log(res.user)
        //     })
        //     .catch(error => {
        //         toast.error(error.message)
        //     })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex flex-col">
                    <h1 className="text-3xl p-6 font-bold text-blue-900">Please Register Here...</h1>
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100 px-10">
                        <div className="pb-8">

                            <form onSubmit={handleSubmit} className="card-body ">
                                <div className="form-control ">
                                    <label className="label ">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="Full name" className="input input-bordered" name='name' />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input  input-bordered" name='email' />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Url</span>
                                    </label>
                                    <input type="text" placeholder="image url" name='img' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>

                                    <div className="mb-6">
                                        <input type={showPassword ? "text" : "password"} placeholder="password" className="input absolute input-bordered" name='password' />
                                        <span onClick={() => setPassword(!showPassword)}>{showPassword ? <FaEye className="relative top-4 left-48"></FaEye> : <FaEyeSlash className="relative top-4 left-48"></FaEyeSlash>} </span>

                                    </div>

                                </div>
                                <div className="form-control mt-6 p-0">
                                    <button className="btn btn-neutral" type='submit'>Register</button>
                                </div>
                            </form>


                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover text-blue-900 font-bold underline">Please Login</Link>
                            </label>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;