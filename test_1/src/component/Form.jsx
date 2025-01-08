import React, { useState } from 'react'
import { use } from 'react'
import { useForm } from "react-hook-form"


function Form() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const [datas, setData] = useState([{
        username: 'John Doe',
        email: ' example@gmail.com'
    }])

    const handleData = (data) => {
        console.log(datas);
        reset()
        setData((pre) => [...pre, data])

    }

    return (
        <>
            <div className='w-[50%]'>
                <section className="bg-gray-50 dark:bg-gray-900 w-full">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <a
                            href="#"
                            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                        >
                            <img
                                className="w-8 h-8 mr-2"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                                alt="logo"
                            />
                            Flowbite
                        </a>
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Sign in to your account
                                </h1>
                                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(handleData)}>
                                    <div>
                                        <label
                                            htmlFor="username"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            username
                                        </label>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            placeholder="username"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            {...register("username", { required: true, minLength: 3, message: "This is a required field and username is at least 3 characters long" })}
                                        />
                                        {
                                            errors.username && <div role="alert" className=" mt-5 alert alert-error">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 shrink-0 stroke-current"
                                                    fill="none"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className='text-white'>This is a required field and username is at least 3 characters long</span>
                                            </div>
                                        }

                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Your email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="name@company.com"
                                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                        />
                                        {
                                            errors.email && <div role="alert" className=" mt-5 alert alert-error">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 shrink-0 stroke-current"
                                                    fill="none"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className='text-white'>enter valid email or email is required </span>
                                            </div>
                                        }
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-outline btn-accent"
                                    >
                                        Sign in
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className='w-[50%]'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>username</th>
                                <th>email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                datas.map((data, index) => {
                                    return (
                                        <tr key={index} className="bg-base-200">

                                            <td>{data.username}</td>
                                            <td>{data.email}</td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Form