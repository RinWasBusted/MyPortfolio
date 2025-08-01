import { useState } from 'react';

export default function WhyHireMeForm() {
    const data = {
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat atque dolore voluptate! Asperiores provident odio quod id.",
        projectCount: 1,
        pic: null,
    };

    const [content, setContent] = useState(data.content);
    const [projectCount, setProjectCount] = useState(data.projectCount);
    const [pic, setPic] = useState(data.pic);


    function handleSavePic(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setPic(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

    }

    return (
        <section className=" bg-[#2C2C2C] min-h-50 flex flex-col py-20 px-40 ">
            <h2 className="text-[30px] font-[600] mb-5">Hero Banner</h2>
            <form action="" className="w-full min-h-10 flex flex-col items-start gap-5 overflow-hidden" onSubmit={handleSubmit}>
                <label htmlFor="" className='w-full'>
                    Content
                    <textarea type="text" className="bg-white w-full min-h-10 h-fit text-black px-5 rounded-[5px]" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
                </label>

                <label htmlFor="" className='w-full'>
                    Project count
                    <input type="number" className="bg-white w-full h-10 text-black px-5 rounded-[5px]" placeholder="Number of project" value={projectCount} onChange={(e) => setProjectCount(e.target.value)} />
                </label>

                <label className="flex items-center gap-2">
                    <h3>Picture:</h3>
                    <input
                        type="file"
                        accept="image/*"
                        className="bg-gray-500 cursor-pointer hidden"
                        id="fileInput"
                        onChange={(e) => handleSavePic(e)}
                    />
                    <div
                        className="bg-white px-2 cursor-pointer rounded-[5px] text-black border-2"
                    >
                        {pic === "Choose" ? "Choose" : "Image selected"}
                    </div>
                </label>
                {pic !== "Choose" && (
                    <img src={pic} alt="Picture" className="w-32 h-32 object-cover rounded-[5px] border-2 border-white" />
                )}
                <button type="submit" className="cursor-pointer bg-white text-black px-3 rounded-[5px] text-[20px]">Save</button>
            </form>
        </section >
    )
}