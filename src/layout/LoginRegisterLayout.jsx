import LoginBackground from '../assets/LoginBackground.jpg'

export default function LoginRegisterLayout({ children }) {


    return (
        <div className='w-full min-h-screen flex justify-center bg-white'>
            <figure className=' text-[50px] gap-5 justify-center w-full grow-1 overflow-hidden hidden lg:flex flex-col h-screen bg-linear-to-t from-sky-500 to-indigo-500 items-center text-white'>
                <h1 className='text-[50px] font-[700] text-center'>Start writing your
                    <br />
                    own portfolio?</h1>
                <p className='text-[30px]'>Let us help you</p>
            </figure>

            <section className='px-10 sm:px-30 pt-10 max-w-150 w-full h-full shrink-0'>
                {children}
            </section>
        </div>

    )
}