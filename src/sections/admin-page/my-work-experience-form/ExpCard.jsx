import { useEffect, useState } from 'react';

export default function ExpCard({ exp, handleChange, handleDeleteExp }) {
    const [title, setTitle] = useState(exp.title);
    const [subtitle, setSubtitle] = useState(exp.subtitle);
    const [skill, setSkill] = useState(exp.skill);
    const [desc, setDesc] = useState(exp.desc);

    useEffect(() => {
        const deleteExp = {
            id: exp.id,
            title: title,
            subtitle: subtitle,
            skill: skill,
            desc: desc
        };
        handleChange(deleteExp);
    }, [title, subtitle, skill, desc, exp.id])

    return (
        <li className='w-full border-2 border-[#444444] p-10 rounded-[5px] flex flex-col gap-5'>
            <label htmlFor="" className='w-full'>
                Title
                <input type="text" className="bg-white w-full h-10 text-black px-5 rounded-[5px]" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title} />
            </label>

            <label htmlFor="" className='w-full'>
                Subtitle
                <input type="text" className="bg-white w-full h-10 text-black px-5 rounded-[5px]" placeholder="Subtitle" onChange={(e) => setSubtitle(e.target.value)} value={subtitle} />
            </label>

            <label htmlFor="" className='w-full'>
                Skill
                <input type="text" className="bg-white w-full h-10 text-black px-5 rounded-[5px]" placeholder="Skill" onChange={(e) => setSkill(e.target.value)} value={skill} />
            </label>

            <label htmlFor="" className='w-full'>
                Description
                <input type="text" className="bg-white w-full h-10 text-black px-5 rounded-[5px]" placeholder="Description" onChange={(e) => setDesc(e.target.value)} value={desc} />
            </label>

            <div className='cursor-pointer bg-red-600 text-black px-3 w-fit rounded-[5px] text-[20px]' onClick={() => handleDeleteExp(exp.id)}>Delete card</div>
        </li>
    )
};