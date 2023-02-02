export default function Card(props) {
    let bedgeText=''
    if(props.openSpot ===0){
        bedgeText="SOLD OUT"
    }else if(props.location==="Online"){
        bedgeText="ONLINE"
    }
    return (
        <div className="w-56 h-72 px-2  relative">
            {bedgeText !== '' && <div className="absolute left-4 top-2 bg-gray-100 px-2  rounded font-bold">{bedgeText}</div>}
            <img alt="grid" src={`/${props.coverImg}`} className="h-60"></img>
            <div className='flex'>
                <img alt="star" src={'/Star.png'} className="h-4"></img>
                <span className='text-xl'>{props.stats.rating}</span>
                <span className='text-xl'>({props.stats.reviewCount}) .</span>
                <span className='text-gray-400 text-xl'>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='font-bold text-xl'>From ${props.price}</span> / person</p>
        </div>
    )
}