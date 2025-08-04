export default function PreviewCard({ item, index }) {
    return (
        <li className={`w-full p-10 flex ${index % 2 == 0 ? '' : 'sm:flex-row-reverse'} flex-col sm:flex-row gap-5 `}>
            <figure className="w-full sm:w-2/5 bg-[#F2F4F7] rounded-3xl overflow-hidden shrink-0">
                <img src={item.picture} alt="preview picture" />
            </figure>

            <article className={` ${index % 2 == 0 ? '' : 'sm::text-end'} text-white`}>
                <h3 className="font-[600] text-[20px] mg:text-[30px] mb-5">{item.title}</h3>

                <p className="opacity-40 text-[13px] md:text-[18px]">{item.desc}</p>
            </article>
        </li>
    )
}