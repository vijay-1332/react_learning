export default function Card(props){
    return(
        <div className="flex">
            <img alt="location" src={`travel_journal/${props.image}`} className="h-[168px] w-[125px]"></img>
            <div className="flex flex-col ml-5">
            <div className="flex items-center mt-4">
                <img alt="map-icon" src="travel_journal/map-pin.png" className="h-[10px] w-[7px] mr-1"></img>
                <span className="text-[10px] mr-3 text-gray-400">{props.location}</span>
                <span className="text-[10px] text-gray-400 underline">View on Google Map</span>
            </div>
            <div className="w-[326px] h-[30px] mt-2">
                <h1 className="text-25px] font-bold">{props.title}</h1>
            </div>
            <div className="text-[10px]">
                <span>{props.startDate}</span>
                <span>{props.endDate}</span>
            </div>
            <div className="w-[326px] text-gray-400 text-[10px]">
                <p>
                  {props.description}
                </p>
            </div>
            </div>
           
        </div>
    )
}