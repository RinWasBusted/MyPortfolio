import { useState, useEffect } from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import { useQuery } from '@tanstack/react-query';
import { getProjectById } from '../../../services/projectManagementAPI';
import { useParams } from 'react-router-dom';

export default function ProjectCard({ type = 'post' }) {
    const [tagValue, setTagValue] = useState('');
    const [previewPic, setPreviewPic] = useState();
    const { id } = useParams();

    const { data: postData } = useQuery({
        queryKey: ['projects', id],
        queryFn: () => getProjectById(id),
        enabled: type != 'post' && !!id,
    })

    // useEffect(() => {
    //     console.log(postData)
    // }, [postData])

    const getDefaultValues = () => {
        if (type == 'post') {
            return {
                title: "",
                description: "",
                date: "2025-01-01",
                thumbnailUrl: null,
                tags: []
            };
        } else {
            return postData || {
                title: "",
                description: "",
                date: "2025-01-01",
                thumbnailUrl: null,
                tags: []
            };
        }
    }

    const { register, control, handleSubmit, reset } = useForm({
        defaultValues: getDefaultValues()
    });

    useEffect(() => {
        if (postData && type != 'post') {
            const formData = {
                ...postData,
                tags: postData.tags ? postData.tags.map(tag => ({ name: tag })) : []
            };
            reset(formData);

            if (postData.thumbnailUrl) setPreviewPic(postData.thumbnailUrl);
        }
    }, [postData, reset, type])


    const { fields, append, remove } = useFieldArray({
        control,
        name: 'tags'
    })

    const onPictureChange = (e) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            const pic = URL.createObjectURL(file);
            setPreviewPic(pic);
        } else {
            setPreviewPic(null);
        }
    }

    const onSubmit = (data) => {
        const projectData = {
            ...data,
            tags: data.tags.length > 0 ? data.tags.map((tag) => (tag.name)) : []
        }
        console.log(projectData)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-full border-1 border-[#343C6A] shadow-2xs bg-white p-5 sm:p-10 rounded-[5px] flex flex-col gap-5'>
            <div className="w-full flex justify-between">
                <h3 className="text-[20px] font-[600]">Project </h3>

                <button type="button" className='cursor-pointer bg-red-600 text-black px-3 w-fit rounded-[5px] text-[20px]'>Delete</button>
            </div>

            <section className="flex flex-col gap-3">
                Picture
                <input id="projectPic" type="file" accept="image/*" onChange={onPictureChange} />
                <label htmlFor={`projectPic`} className='cursor-pointer bg-[#F5F7FA] border-1 border-[#343C6A] text-black px-3 w-fit rounded-[5px] text-[20px] py-1' >
                    Choose a picture
                </label>
                <div className="">
                    <img src={previewPic || null} alt="preview picture" className=" w-32 h-32 object-cover rounded-[5px] bg-[#F5F7FA] border-1 border-[#343C6A]" />
                </div>
            </section>

            <label className='w-full'>
                Title
                <input
                    type="text"
                    className="bg-[#F5F7FA] border-1 border-[#343C6A] w-full h-10 text-black px-5 rounded-[5px]"
                    placeholder="Title"
                    {...register(`title`)}
                />
            </label>

            <label className='w-full'>
                Description
                <textarea
                    className="bg-[#F5F7FA] min-h-10 border-1 border-[#343C6A] w-full h-10 text-black px-5 rounded-[5px]"
                    placeholder="Description"
                    {...register(`description`)}
                />
            </label>

            <label htmlFor="" className='w-full flex flex-col'>
                Date
                <input type="date" className="bg-[#F5F7FA] cursor-pointer border-1 border-[#343C6A] w-fit h-10 text-black px-5 rounded-[5px]" placeholder="Date" {...register(`date`, {
                    valueAsDate: true
                }
                )} />
            </label>

            <section className="flex flex-col w-full gap-3">
                <h3>Tags:</h3>

                <div className="flex sm:flex-row flex-col gap-5">
                    <input type="text" className="outline-none bg-[#F5F7FA] border-1 border-[#343C6A] rounded-[5px] text-black px-5 py-1" placeholder="Tag name" value={tagValue} onChange={(e) => setTagValue(e.target.value)} />
                    <button type="button" className="duration-100 bg-[#343C6A] text-white hover:text-[#343C6A] border-1 border-[#343C6A] px-3 py-1 rounded-[5px] cursor-pointer duration hover:bg-white/5" onClick={() => { append({ name: tagValue }); setTagValue('') }}>Add tag</button>
                </div>

                <ul className="flex flex-wrap gap-5">
                    {fields.map((tag, index) => <div key={tag.id} className="bg-[#F5F7FA] border-1 border-[#343C6A] text-blac px-5 rounded-[5px] hover:bg-red-600 cursor-pointer duration-100 hover:text-white py-1" onClick={() => remove(index)} >{tag.name}</div>)}
                </ul>
            </section>

            {/* <label className='w-full'>
                Project link
                <input type="text" className=" w-full h-10 text-black px-5 rounded-[5px] bg-[#F5F7FA] border-1 border-[#343C6A]" placeholder="Project link" {...register(`projects.${index}.link`)} />
            </label> */}

            <button type="submit" className="duration-100 mt-5 bg-[#343C6A] text-white hover:text-[#343C6A] border-1 border-[#343C6A] px-3 py-1 rounded-[5px] cursor-pointer duration hover:bg-white/5">Save</button>

        </form >
    )
}