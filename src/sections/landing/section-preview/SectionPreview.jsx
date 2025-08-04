import PreviewCard from "./PreviewCard"
import pic1 from '../../../assets/previewPic1.png'
import pic2 from '../../../assets/previewPic2.png'
import pic3 from '../../../assets/previewPic3.png'

export default function SectionPreview() {
    const cardList = [
        {
            picture: pic1,
            title: 'Lorem, ipsum dolor.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eos accusantium dignissimos sit perspiciatis consectetur?',
        },
        {
            picture: pic2,
            title: 'Lorem, ipsum dolor.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eos accusantium dignissimos sit perspiciatis consectetur?',
        },
        {
            picture: pic3,
            title: 'Lorem, ipsum dolor.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eos accusantium dignissimos sit perspiciatis consectetur?',
        }
    ]

    return (
        <div className="w-full py-10 flex flex-col gap-10 items-center px-10 lg:px-0">
            <h2 className="text-white font-[600] text-[40px] sm:text-[50px]">Show your skill & project!</h2>

            <ul className="w-full flex flex-col gap-10 items-center">
                {cardList.map((item, index) => <PreviewCard item={item} index={index} key={index}></PreviewCard>)}
            </ul>
        </div>
    )
}