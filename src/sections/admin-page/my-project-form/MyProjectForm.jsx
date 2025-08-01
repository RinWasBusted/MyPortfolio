// import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { useForm, useFieldArray } from 'react-hook-form';

export default function MyProjectForm() {

    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            projects: [
                {
                    title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
                    creater: 'Thai Pham',
                    date: '2006-08-27',
                    tags: [{ tag: 'UX/UI Design' }, { tag: 'App Design' }, { tag: 'Web dev' }],
                    pic: null,
                    link: '',
                },
                {
                    id: 2,
                    title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
                    creater: 'Thai Pham',
                    date: '2024-07-28',
                    tags: [{ tag: 'UX/UI Design' }, { tag: 'App Design' }, { tag: 'Web dev' }],
                    pic: null,
                    link: '',
                },
                {
                    id: 3,
                    title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
                    creater: 'Thai Pham',
                    date: '2024-07-28',
                    tags: [{ tag: 'UX/UI Design' }, { tag: 'App Design' }, { tag: 'Web dev' }],
                    pic: null,
                    link: '',
                },
            ]
        }
    });

    const { fields, append, remove } = useFieldArray(
        {
            control,
            name: 'projects'
        }
    );

    function onSubmit(data) {
        console.log("Submitted! ", data);
    }


    return (
        <section className=" bg-[#2C2C2C] min-h-50 flex flex-col py-20 px-40 ">
            <h2 className="text-[30px] font-[600] mb-5">My project</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full min-h-10 flex flex-col items-start gap-5 overflow-hidden" noValidate>

                <ul className='flex flex-col gap-10 w-full'>
                    {fields.map((field, index) =>
                        <ProjectCard
                            // project={project}
                            index={index}
                            register={register}
                            key={field.id}
                            remove={remove}
                            control={control}
                        >

                        </ProjectCard>)}

                    <button type='button' onClick={() => append({
                        title: "",
                        creater: '',
                        date: '',
                        tags: [],
                        pic: null,
                        link: '',
                    },)} className="cursor-pointer bg-white text-black px-3 rounded-[5px] text-[20px]">Add project</button>
                </ul>

                <button type="submit" className="cursor-pointer bg-white text-black px-3 rounded-[5px] text-[20px]">Save</button>
            </form>
        </section >
    )
}