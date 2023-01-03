export default function AnsButton(props){
    return(
        <div>
            <button className="mx-2 font-serif text-sm bg-transparent hover:bg-[#4D5B9E] text-[#293264] font-semibold hover:text-white py-1 px-4 border border-[#4D5B9E] hover:border-transparent rounded-lg">{props.value}</button>
        </div>
    )
}