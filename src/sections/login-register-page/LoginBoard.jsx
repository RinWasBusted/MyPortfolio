import Logo from '../../assets/QuickPortfolioLogo.png'
import googleIcon from '../../assets/googleIcon.png'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { loginUser } from '../../services/userManagementAPI';
import { useMutation } from '@tanstack/react-query';


export default function LoginBoard() {
    const [showPwd, setShowPwd] = useState(false);
    const [remmeberMe, setRememberMe] = useState(false);

    const navigate = useNavigate();

    const loginSchema = z.object({
        username: z.string()
            .min(1, "Username is required")
            .min(3, "Username must be at least 3 characters"),
        password: z.string()
            .min(1, "Password is required")
            .min(6, "Password must be at least 6 characters")
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: '',
            password: '',
        }
    });

    const { mutate, isPending } = useMutation({
        mutationFn: loginUser,
        onSuccess: (response) => {
            localStorage.setItem('accessToken', response.data.accessToken)
            toast.success('Login successfully')
            navigate('/admin/profile')
        },
        onError: (e) => toast.error(e.message)
    })

    async function onSubmit(data) {
        mutate(data);
    }

    return (
        <section className="w-full h-fit bg-white shrink-0  pb-10 flex flex-col gap-12 ">

            <figure className='flex text-[30px] font-[600] h-12 items-center gap-5'>
                <img src={Logo} alt="Logo" className='h-full' />
                <h2>Quick Portfolio</h2>
            </figure>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 w-full pb-10 border-[#E5E5E5] border-b-1' noValidate>
                <h3 className='text-[#1A1A1A] text-[20px] font-semibold'>Get your own portfolio</h3>

                <label htmlFor="usernameInput" className='flex flex-col gap-1 text-[11px] text-[#333333] '>Username
                    <input type="text" id='usernameInput' {...register('username')} className='h-12 bg-[#F2F2F2] w-full px-5 rounded-[5px] focus:border-2 outline-none border-[#007AFF] text-[15px]' placeholder='Username' />
                    {errors.username && <p className='text-red-500'>{errors.username.message}</p>}
                </label>


                <label htmlFor="passwordInput" className='flex flex-col gap-1 text-[11px] text-[#333333] '>Password
                    <div className='h-12 w-full flex relative'>
                        <input type={showPwd ? 'text' : 'password'} id='passwordInput' {...register('password')} className='h-12 bg-[#F2F2F2] w-full px-5 rounded-[5px] focus:border-2 outline-none border-[#007AFF] text-[15px]' placeholder='Password' />

                        <div className='h-12 w-12 shrink-0 flex justify-center items-center absolute right-[-48px] cursor-pointer text-[17px]' onClick={() => setShowPwd(s => !s)}>
                            <i className={`fa-solid ${showPwd ? 'fa-eye' : "fa-eye-slash"}`}></i>
                        </div>
                    </div>
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </label>

                <div className='w-full h-5 flex justify-between text-[12px]'>
                    <div className='flex gap-2'>
                        <div className={`w-10 h-5 flex items-center border-[#F2F2F2] duration-200 ${remmeberMe ? 'after:translate-x-[20px] bg-[#007AFF]' : 'bg-[#E5E5E5]'} after:duration-200  rounded-[10px] after:left-[2px] cursor-pointer after:bg-white after:rounded-[8px] after:absolute relative after:h-4 after:w-4 after:shadow-2xl`} onClick={() => setRememberMe(r => !r)} ></div>
                        Remember me
                    </div>

                    <Link className='text-[#007AFF] hover:underline'>Forgot password?</Link>
                </div>

                <button type='submit' disabled={isPending} className='w-full disable:opacity-80 h-10 flex justify-center items-center bg-[#007AFF] text-white font-bold cursor-pointer rounded-[6px] hover:opacity-80'>Sign in</button>
            </form >

            <button type='button' className='w-full h-10 flex justify-center items-center bg-[#333333] text-[12px] font-[400] text-white cursor-pointer rounded-[6px]  hover:opacity-80'>
                <img src={googleIcon} alt="google icon" className='h-5 mr-2' />
                Or sign in with google
            </button>

            <div className='text-[12px] text-center'>
                Dont have an account? <Link to={'/register'} className='text-[#007AFF] hover:underline cursor-pointer'>Sign up now</Link>
            </div>

        </section >
    )
}