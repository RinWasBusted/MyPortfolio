import Logo from '../../assets/QuickPortfolioLogo.png'
import googleIcon from '../../assets/googleIcon.png'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


export default function RegisterBoard() {
    const [showPwd, setShowPwd] = useState(false);

    const registerSchema = z.object({
        email: z.string().email("Please enter a valid email"),
        username: z.string().min(8, "Username must be at least 8 characters"),
        password: z.string().min(8, "Password must be at least 8 characters"),
        confirmPwd: z.string()
    }).refine((data) => data.password === data.confirmPwd, {
        message: "Passwords don't match",
        path: ["confirmPwd"]
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: '',
            username: '',
            password: '',
            confirmPwd: '',
        }
    });

    function onSubmit(data) {
        const { confirmPwd: _confirmPwd, ...submitData } = data;
        console.log("Form data:", submitData);
    }

    return (
        <section className="w-full h-fit bg-white shrink-0  pb-10 flex flex-col ">
            <figure className='flex text-[30px] font-[600] h-12 items-center gap-5 mb-12'>
                <img src={Logo} alt="Logo" className='h-full' />
                <h2>Quick Portfolio</h2>
            </figure>

            <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className='flex flex-col gap-5 w-full pb-10 border-[#E5E5E5] border-b-1 mb-5' noValidate>
                <h3 className='text-[#1A1A1A] text-[20px] font-semibold'>Create your account</h3>

                <label htmlFor="emailInput" className='flex flex-col gap-1 text-[11px] text-[#333333] '>Email
                    <input type="text" id='emailInput' {...register('email')} className='h-12 bg-[#F2F2F2] w-full px-5 rounded-[5px] focus:border-2 outline-none border-[#007AFF] text-[15px]' placeholder='Email' />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </label>

                <label htmlFor="usernameInput" className='flex flex-col gap-1 text-[11px] text-[#333333] '>Username
                    <input type="text" id='usernameInput' {...register('username')} className='h-12 bg-[#F2F2F2] w-full px-5 rounded-[5px] focus:border-2 outline-none border-[#007AFF] text-[15px] ' placeholder='Username' />
                    {errors.username && <p className='text-red-500'>{errors.username.message}</p>}
                </label>


                <label htmlFor="passwordInput" className='flex flex-col gap-1 text-[11px] text-[#333333] '>Password
                    <div className='h-12 w-full relative mb-5'>
                        <input type={showPwd ? 'text' : 'password'} id='passwordInput' {...register('password')} className='h-12 bg-[#F2F2F2] w-full px-5 rounded-[5px] focus:border-2 outline-none border-[#007AFF] text-[15px]' placeholder='Password' />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                        <div className='h-12 w-12 shrink-0 flex justify-center items-center absolute right-[-48px] top-0 cursor-pointer text-[17px]' onClick={() => setShowPwd(s => !s)}>
                            <i className={`fa-solid ${showPwd ? 'fa-eye' : "fa-eye-slash"}`}></i>
                        </div>
                    </div>

                    <div className='h-12 w-full relative'>
                        <input type={showPwd ? 'text' : 'password'} id='confirmPasswordInput' {...register('confirmPwd')} className='h-12 bg-[#F2F2F2] w-full px-5 rounded-[5px] focus:border-2 outline-none border-[#007AFF] text-[15px]' placeholder='Confirm your password' />
                        {errors.confirmPwd && <p className='text-red-500'>{errors.confirmPwd.message}</p>}
                    </div>

                </label>


                <button type='submit' className='w-full h-10 flex justify-center items-center bg-[#007AFF] text-white font-bold cursor-pointer rounded-[6px] hover:opacity-80'>Sign up</button>
            </form >

            <div className='text-[12px] text-center mb-5'>
                Already have an account? <Link to={'/login'} className='text-[#007AFF] hover:underline cursor-pointer'>Sign in</Link>
            </div>

            <button type='submit' className='w-full h-10 flex justify-center items-center bg-[#333333] text-[12px] font-[400] text-white cursor-pointer rounded-[6px]  hover:opacity-80'>
                <img src={googleIcon} alt="google icon" className='h-5 mr-2' />
                Or sign in with google
            </button>


        </section >
    )
}