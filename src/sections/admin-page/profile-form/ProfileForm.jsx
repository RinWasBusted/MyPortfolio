import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';


export default function ProfileForm() {
    const [previewPic, setPreviewPic] = useState('../../assets/vyvy.jpg');

    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            name: 'Pham Hoang Thai',
            nickname: 'Rin',
            avatar: null,
            phoneNumber: '0819124125',
            email: "thaian0609asd@gmail.com",
        }
    });

    function onSubmit(data) {
        console.log(data)
    }

    return (
        <section className=" w-full min-h-100 py-20 px-40">
            <h2 className="text-[30px] font-[600] mb-5">Profile</h2>
            <form action="" className="w-full min-h-10 flex flex-col items-start gap-5 overflow-hidden" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="" className='w-full'>
                    Name
                    <input type="text" className="bg-white w-full h-10 text-black px-5 rounded-[5px]" placeholder="Name" {...register('name')} />
                </label>

                <label htmlFor="" className='w-full'>
                    Nickname
                    <input type="text" className="bg-white w-full h-10 text-black px-5 rounded-[5px]" placeholder="Nickname" {...register('nickname')} />
                </label>

                <div className="flex items-center gap-2 flex-col">
                    <h3>Your photo:</h3>
                    <Controller
                        name='avatar'
                        control={control}
                        render={({ field }) => (
                            <input
                                type="file"
                                accept="image/*"
                                className=" hidden"
                                id="fileInput"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    field.onChange(file);
                                    setPreviewPic(URL.createObjectURL(file));
                                }}
                            />
                        )}
                    />

                    <label htmlFor='fileInput'
                        className="bg-white px-2 cursor-pointer rounded-[5px] text-black border-2"
                    >
                        Choose picture
                    </label>

                    <div>
                        <img src={previewPic || null} alt="User avatar" className='w-32 h-32 object-cover rounded-[5px] border-2 border-white' />
                    </div>
                </div>

                <h2 className="text-[30px] font-[600] mb-5 mt-10">Contact</h2>

                <label htmlFor="" className='w-full'>
                    Phone number
                    <input type="text" className="bg-white w-full h-10 text-black px-5 rounded-[5px]" placeholder="Phone number" {...register('phoneNumber')} />
                </label>

                <label htmlFor="" className='w-full'>
                    Email
                    <input type="text" className="bg-white w-full h-10 text-black px-5 rounded-[5px]" placeholder="Email" {...register('email')} />
                </label>

                <button type="submit" className="cursor-pointer bg-white text-black px-3 rounded-[5px] text-[20px]">Save</button>
            </form>

        </section>
    )
}