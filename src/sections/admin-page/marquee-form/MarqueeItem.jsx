import { useState, useEffect } from 'react';

export default function MarqueeItem({ item, handleChange, handleDeleteItem }) {
    const [content, setContent] = useState(item.content);

    useEffect(() => {
        handleChange(item.id, content);
    }, [content])

    return (
        <li className='w-full border-2 border-[#444444] p-10 rounded-[5px] flex flex-col gap-5'>
            <label htmlFor="" className='w-full'>
                Item
                <input type="text" className="bg-white w-full h-10 text-black px-5 rounded-[5px]" placeholder="Content" onChange={(e) => setContent(e.target.value)} value={content} />
            </label>

            <div className='cursor-pointer bg-red-600 text-black px-3 w-fit rounded-[5px] text-[20px]' onClick={() => handleDeleteItem(item.id)}>Delete item</div>
        </li>
    )
}