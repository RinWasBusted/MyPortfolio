import { useFieldArray, Controller } from "react-hook-form";
import { useState } from 'react';

export default function ProjectCard({ index, register, control, remove }) {
    const [tagValue, setTagValue] = useState('');
    const [previewPic, setPreviewPic] = useState();

    const { fields, append, remove: removeTag } = useFieldArray({
        control,
        name: `projects.${index}.tags`,
    });

    return (
        <li className='w-full border-2 border-[#444444] p-10 rounded-[5px] flex flex-col gap-5'>
            <div className="w-full flex justify-between">
                <h3 className="text-[20px] font-[600]">Project {index + 1}</h3>

                <button type="button" className='cursor-pointer bg-red-600 text-black px-3 w-fit rounded-[5px] text-[20px]' onClick={() => remove(index)}>Delete</button>
            </div>

            <label htmlFor="" className='w-full'>
                Title
                <input
                    type="text"
                    className="bg-white w-full h-10 text-black px-5 rounded-[5px]"
                    placeholder="Title"
                    {...register(`projects.${index}.title`)}
                />
            </label>

            <label htmlFor="" className='w-full'>
                Creater
                <input type="text" className="bg-white w-full h-10 text-black px-5 rounded-[5px]" placeholder="Creater" {...register(`projects.${index}.creater`)} />
            </label>

            <label htmlFor="" className='w-full flex flex-col'>
                Date
                <input type="date" className="bg-white w-fit h-10 text-black px-5 rounded-[5px]" placeholder="Date" {...register(`projects.${index}.date`, {
                    valueAsDate: true,
                }
                )} />
            </label>

            <section className="flex flex-col w-full gap-3">
                <h3>Tags:</h3>

                <div className="flex gap-5">
                    <input type="text" className="outline-none bg-white border-black border-2 rounded-[5px] text-black px-5 py-1" placeholder="Tag name" value={tagValue} onChange={(e) => setTagValue(e.target.value)} />
                    <button type="button" className="bg-[#444444] px-3 py-1 rounded-[5px] cursor-pointer duration hover:bg-white/5" onClick={() => {
                        if (tagValue.trim()) {
                            append({ tag: tagValue }); setTagValue('')
                        }
                    }}>Add tag</button>
                </div>

                <ul className="flex flex-wrap gap-5">
                    {fields.map((field, tagIndex) => <div key={field.id} className="text-black bg-white px-5 rounded-[5px] hover:bg-red-600 cursor-pointer duration-100 hover:text-white py-1" onClick={() => removeTag(tagIndex)}>{field.tag}</div>)}
                </ul>
            </section>

            <section className="flex flex-col gap-3">
                Picture
                <Controller
                    name={`projects.${index}.pic`}
                    control={control}
                    render={({ field }) => (
                        <input type="file"
                            className="hidden"
                            id={`projectPic${index}`}
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files?.[0] || null;
                                field.onChange(file);
                                setPreviewPic(URL.createObjectURL(file) || null);
                            }} />)}
                />
                <label htmlFor={`projectPic${index}`} className='cursor-pointer bg-white text-black px-3 w-fit rounded-[5px] text-[20px] py-1' >
                    Choose a picture
                </label>
                <div className="">
                    <img src={previewPic || null} alt="preview picture" className="w-32 h-32 object-cover rounded-[5px] border-2 border-white" />
                </div>
            </section>

            <label className='w-full'>
                Project link
                <input type="text" className="bg-white w-full h-10 text-black px-5 rounded-[5px]" placeholder="Project link" {...register(`projects.${index}.link`)} />
            </label>



        </li >
    )
}