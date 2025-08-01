import { useState, useEffect } from 'react';


export default function ProfileForm() {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [avatar, setAvatar] = useState("Choose");

    useEffect(() => {
        try {
            const savedData = localStorage.getItem("profile-data");
            if (savedData) {
                const { name, nickname, avatar } = JSON.parse(savedData);
                setName(name || "");
                setNickname(nickname || "");
                setAvatar(avatar || null);
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
                setAvatar(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            name: name,
            nickname: nickname,
            avatar: avatar
        }
        localStorage.setItem("profile-data", JSON.stringify(data));
    }

    return (
        <section className=" w-full min-h-100 py-20 px-40">
            <h2 className="text-[30px] font-[600] mb-5">Profile</h2>
            <form action="" className="w-full min-h-10 flex flex-col items-start gap-5 overflow-hidden" onSubmit={handleSubmit}>
                <label htmlFor="" className='w-full'>
                    Name
                    <input type="text" className="bg-white w-full h-10 text-black px-5 rounded-[5px]" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>

                <label htmlFor="" className='w-full'>
                    Nickname
                    <input type="text" className="bg-white w-full h-10 text-black px-5 rounded-[5px]" placeholder="Nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
                </label>

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
                        {avatar === "Choose" ? "Choose" : "Image selected"}
                    </div>
                </label>
                {avatar !== "Choose" && (
                    <img src={avatar} alt="preview" className="w-32 h-32 object-cover rounded-[5px] border-2 border-white" />
                )}
                <button type="submit" className="cursor-pointer bg-white text-black px-3 rounded-[5px] text-[20px]">Save</button>
            </form>

        </section>
    )
}