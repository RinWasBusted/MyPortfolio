import { useState, useEffect } from 'react';

export default function HeroBannerForm() {
    const [name, setName] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [leftArticle, setLeftArticle] = useState("");
    const [rightArticle, setRightArticle] = useState("");
    const [userPic, setUserPic] = useState("Choose");

    useEffect(() => {
        try {
            const savedData = localStorage.getItem("hero-banner-data");
            if (savedData) {
                const { name, jobTitle, leftArticle, rightArticle, userPic } = JSON.parse(savedData);
                setName(name || "");
                setJobTitle(jobTitle || "");
                setLeftArticle(leftArticle || "");
                setRightArticle(rightArticle || "");
                setUserPic(userPic || null);
            }
        } catch (error) {
            console.error("Error loading data from localStorage:", error);
        }
    }, []);

    function handleSaveUserPic(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setUserPic(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            name: name,
            jobTitle: jobTitle,
            leftArticle: leftArticle,
            rightArticle: rightArticle,
            userPic: userPic
        }
        localStorage.setItem("hero-banner-data", JSON.stringify(data));
    }

    return (
        <section className=" bg-[#2C2C2C] w-[50%] min-h-50 rounded-3xl flex flex-col items-center border-white border-1 p-5 ">
            <h2 className="text-[30px] font-[600] mb-5">Hero Banner</h2>
            <form action="" className="w-full min-h-10 flex flex-col items-start gap-5 overflow-hidden" onSubmit={handleSubmit}>
                <input type="text" className="bg-white w-full h-10 text-black px-5 rounded-[5px]" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" className="bg-white w-full h-10 text-black px-5 rounded-[5px]" placeholder="Job title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
                <input type="text" className="bg-white w-full h-10 text-black px-5 rounded-[5px]" placeholder="Left article" value={leftArticle} onChange={(e) => setLeftArticle(e.target.value)} />
                <input type="text" className="bg-white w-full h-10 text-black px-5 rounded-[5px]" placeholder="Right article" value={rightArticle} onChange={(e) => setRightArticle(e.target.value)} />
                <label className="flex items-center gap-2">
                    <h3>Your photo:</h3>
                    <input
                        type="file"
                        accept="image/*"
                        className="bg-gray-500 cursor-pointer hidden"
                        id="fileInput"
                        onChange={(e) => handleSaveUserPic(e)}
                    />
                    <div
                        className="bg-white px-2 cursor-pointer rounded-[5px] text-black border-2"
                    >
                        {userPic === "Choose" ? "Choose" : "Image selected"}
                    </div>
                </label>
                {userPic !== "Choose" && (
                    <img src={userPic} alt="preview" className="w-32 h-32 object-cover rounded-[5px] border-2 border-white" />
                )}
                <button type="submit" className="cursor-pointer bg-white text-black px-3 rounded-[5px] text-[20px]">Save</button>
            </form>
        </section >
    )
}