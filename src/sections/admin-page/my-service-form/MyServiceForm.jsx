import { useState, useEffect } from 'react';

export default function MyServiceForm() {
    const [description, setDescription] = useState('');
    const [cards, setCards] = useState([]);


    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('my-service-data'));
        if (savedData) {
            setDescription(savedData.description);
            setCards(savedData.cards)
        }
    }, []);

    function handleChange(cardName, cardPic, id) {
        setCards(c => c.map((card) => card.id == id ? { id: card.id, name: cardName, pic: cardPic } : card));
    };

    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            description: description,
            cards: cards,
        };
        localStorage.setItem('my-service-data', JSON.stringify(data))
    }

    function handleAddNewCard() {
        setCards(c => [...c, { id: Date.now(), name: '', pic: null }]);
    };

    function handleDeleteCard(id) {
        setCards(c => c.filter((card) => card.id != id));
    };

    return (
        <section className=" bg-[#2C2C2C] min-h-50 flex flex-col py-20 px-40 ">
            <h2 className="text-[30px] font-[600] mb-5">My Service</h2>
            <form action="" className="w-full min-h-10 flex flex-col items-start gap-5 overflow-hidden" onSubmit={handleSubmit}>
                <label htmlFor="" className='w-full'>
                    Description
                    <textarea type="text" className="bg-white w-full h-10 text-black px-5 rounded-[5px]" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>

                <ul className='flex flex-col gap-10 w-full'>
                    {cards.map((card) => <Card card={card} handleChange={handleChange} key={card.id} handleDeleteCard={handleDeleteCard}></Card>)}

                    <div className="cursor-pointer bg-white w-fit text-black px-3 rounded-[5px] text-[20px]" onClick={handleAddNewCard}>Add card</div>

                </ul>


                <button type="submit" className="cursor-pointer bg-white text-black px-3 rounded-[5px] text-[20px]">Save</button>
            </form>
        </section >
    )
}

function Card({ card, handleChange, handleDeleteCard }) {
    const [cardName, setCardName] = useState(card.name);
    const [cardPic, setCardPic] = useState(card.pic);

    useEffect(() => {
        handleChange(cardName, cardPic, card.id);
    }, [cardName, cardPic, card.id]);

    function handleSaveCardPic(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setCardPic(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <li className='w-full border-2 border-[#444444] p-10 rounded-[5px] flex flex-col gap-5'>
            <label htmlFor="" className='w-full'>
                Card name
                <input type="text" className="bg-white w-full h-10 text-black px-5 rounded-[5px]" placeholder="Card name" onChange={(e) => setCardName(e.target.value)} value={cardName} />
            </label>

            <label className="flex items-center gap-2">
                <h3>Card picture:</h3>
                <input
                    type="file"
                    accept="image/*"
                    className="bg-gray-500 cursor-pointer hidden"
                    id={`fileInput`}
                    onChange={(e) => handleSaveCardPic(e)}
                />
                <div
                    className="bg-white px-2 cursor-pointer rounded-[5px] text-black border-2"
                >
                    {cardPic === null ? "Choose" : "Image selected"}
                </div>
            </label>
            {cardPic !== null && (
                <img src={cardPic} alt="preview" className="w-32 h-32 object-cover rounded-[5px] border-2 border-white" />
            )}

            <div className='cursor-pointer bg-red-600 text-black px-3 w-fit rounded-[5px] text-[20px]' onClick={() => handleDeleteCard(card.id)}>Delete card</div>
        </li>
    )
}