import { useState } from 'react';
import MarqueeItem from './MarqueeItem';

export default function Marquee() {
    const [marqueeItems, setMarqueeItems] = useState([
        {
            id: 1,
            content: "UX Design",
        },
        {
            id: 2,
            content: "App Design",
        },
        {
            id: 3,
            content: "Dashboard",
        },
        {
            id: 4,
            content: "Wireframe",
        },
        {
            id: 5,
            content: "User Research",
        },

    ]);

    function handleChange(id, content) {
        setMarqueeItems(m => m.map((item) => item.id == id ? { id: id, content: content } : item))
    };

    function handleAddNewItem() {
        setMarqueeItems(m => [...m, { id: Date.now(), content: '' }]);
    };

    function handleDeleteItem(id) {
        setMarqueeItems(m => m.filter((item) => item.id != id))
    };

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section className=" bg-[#2C2C2C] min-h-50 flex flex-col py-20 px-40 ">
            <h2 className="text-[30px] font-[600] mb-5">Marquee</h2>
            <form action="" className="w-full min-h-10 flex flex-col items-start gap-5 overflow-hidden" onSubmit={handleSubmit}>

                <ul className='flex flex-col gap-10 w-full'>
                    {marqueeItems.map((item) => <MarqueeItem item={item} key={item.id} handleChange={handleChange} handleDeleteItem={handleDeleteItem}></MarqueeItem>)}

                    <div className="cursor-pointer bg-white w-fit text-black px-3 rounded-[5px] text-[20px]" onClick={handleAddNewItem}>Add item</div>

                </ul>


                <button type="submit" className="cursor-pointer bg-white text-black px-3 rounded-[5px] text-[20px]">Save</button>
            </form>
        </section >
    )
}