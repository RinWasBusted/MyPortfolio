import clockIcon from '../../../../src/assets/clockPicture.png'
import paymentIcon from '../../../../src/assets/paymentIcon.png'
import userIcon from '../../../../src/assets/userIcon.png'


export default function Features() {
    return (
        <div className="w-full flex justify-between px-10 gap-10 items-start py-10 md:flex-row flex-col">
            <div className='flex flex-col items-center gap-10 w-full md:w-[30%] text-white'>
                <figure className='w-[70px] h-[70px] scale-125'>
                    <img src={clockIcon} alt="" className='w-full h-full' />
                </figure>

                <article className='text-[18px] text-center '>
                    <h3 className='font-bold mb-3'>Save Time & Effort</h3>
                    <p className='opacity-40'>Skip the tedious design process. Our pre-built templates let you create a stunning portfolio in minutes, not hours. Focus on showcasing your work, not building from scratch.</p>
                </article>
            </div>

            <div className='flex flex-col items-center gap-10 w-full md:w-[30%] text-white'>
                <figure className='w-[70px] h-[70px]'>
                    <img src={paymentIcon} alt="" className='w-full h-full' />
                </figure>

                <article className='text-[18px] text-center '>
                    <h3 className='font-bold mb-3'>Completely Free</h3>
                    <p className='opacity-40'>Access professional-quality portfolio templates at no cost. No hidden fees, no premium tiers - just beautiful designs ready to represent your best work.</p>
                </article>
            </div>

            <div className='flex flex-col items-center gap-10 w-full md:w-[30%] text-white'>
                <figure className='w-[70px] h-[70px]'>
                    <img src={userIcon} alt="" className='w-full h-full' />
                </figure>

                <article className='text-[18px] text-center '>
                    <h3 className='font-bold mb-3'>Designer-Made Templates</h3>
                    <p className='opacity-40'>Choose from expertly crafted templates designed by professionals. Each layout is optimized for impact, ensuring your portfolio looks polished and stands out to potential clients.</p>
                </article>
            </div>
        </div>
    )
}