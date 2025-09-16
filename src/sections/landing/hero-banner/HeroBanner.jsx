import portfolioPic from '../../../../src/assets/Portfolio - Product Designer Portfolio Website (Community).png'
import { Link } from 'react-router-dom'

export default function HeroBanner() {
    const accessToken = localStorage.getItem('accessToken');

    return (
        <div className="w-full min-h-150 flex flex-col py-10 px-10 lg:px-0 lg:flex-row justify-between items-center gap-20">
            <section className='flex flex-col justify-between gap-10 items-center lg:items-starts'>
                <h1 className='text-white text-[40px] sm:text-[60px] font-[600] text-center lg:text-left'>Create your portfolio in minutes</h1>

                <p className='text-white text-[13px] sm:text-[18px] opacity-40 font-[300] text-center lg:text-left'>Showcase your best work, highlight your unique skills, and land your dream job faster than ever. Our intuitive tools make the process effortless, so you can focus on what matters: your creativity.</p>

                <a href={accessToken ? `/admin` : '/login'} target='_blank' className='bg-[#F8D57E] rounded-[15px] text-[#333333] h-12 w-45 text-[18px] cursor-pointer border-white hover:border-3 flex justify-center items-center'>Get started</a>
            </section>

            <figure className='w-full lg:w-1/2 shrink-0 rounded-[20px] overflow-hidden'>
                <img src={portfolioPic} alt="" />
            </figure>
        </div>
    )
}