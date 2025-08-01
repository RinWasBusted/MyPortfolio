import { useState } from 'react';
import ExpCard from './ExpCard';

export default function MyWorkExperienceForm() {
    const [expList, setExpList] = useState([
        {
            id: 1,
            title: "Cognizant, Mumbai",
            subtitle: "Sep 2016- July 2020",
            skill: "Experience Designer",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione iste quibusdam neque rerum at repudiandae tempore?",
        },
        {
            id: 3,
            title: "Cognizant, Mumbai",
            subtitle: "Sep 2016- July 2020",
            skill: "Experience Designer",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione iste quibusdam neque rerum at repudiandae tempore?",
        },
        {
            id: 2,
            title: "Cognizant, Mumbai",
            subtitle: "Sep 2016- July 2020",
            skill: "Experience Designer",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione iste quibusdam neque rerum at repudiandae tempore?",
        },
    ]);

    function handleSubmit(e) {
        e.preventDefault();
        console.log("My work exp submitted!");
    }

    function handleChange(exp) {
        setExpList(e => e.map((item) => item.id == exp.id ? exp : item));
    };

    function handleAddExp() {
        const newExp = {
            id: Date.now(),
            title: '',
            subtitle: '',
            skill: '',
            desc: ''
        };
        setExpList(e => [...e, newExp]);
    };

    function handleDeleteExp(deleteId) {
        setExpList(e => e.filter((item) => item.id != deleteId));
    };

    return (
        <section className="px-40 py-20 w-full ">
            <h2 className="text-[30px] font-[600] mb-5">My work experience</h2>

            <form action="" className="w-full min-h-10 flex flex-col items-start gap-5 overflow-hidden" onSubmit={handleSubmit}>
                <ul className='flex flex-col gap-10 w-full'>
                    {expList.map((item) => <ExpCard exp={item} key={item.id} handleDeleteExp={handleDeleteExp} handleChange={handleChange}></ExpCard>)}

                    <div className="cursor-pointer bg-white w-fit text-black px-3 rounded-[5px] text-[20px]" onClick={handleAddExp}>Add card</div>
                </ul>

                <button type="submit" className="cursor-pointer bg-white text-black px-3 rounded-[5px] text-[20px]">Save</button>

            </form>
        </section>
    )
}