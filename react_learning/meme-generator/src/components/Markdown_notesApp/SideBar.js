import { FaTrashAlt,FaPlus } from 'react-icons/fa';
export default function SideBar(props) {
    const elements = props.notes.map((note, index) => {
        return (
            <div
                key={index}
                className="group flex items-center justify-between bg-purple-900 
            my-2 
            p-4 
            cursor-pointer 
            text-white 
            font-serif 
            hover:bg-purple-400"
            onClick={()=>props.setCurrentNoteId(note.id)}>
                Note -{note.body.split("\n")[0]}
                <button className='hidden group-hover:block' onClick={(event)=>{props.delNote(event,note.id)}}><FaTrashAlt/></button>
            </div>
        )
    }
    )
    return (
        <section className="h-full bg-white">
            <div className="flex items-center justify-between space-x-40 p-12">
                <h1 className="text-4xl font-bold">Notes</h1>
                <div className='flex items-center justify-center space-x-4'>
                <button className="flex items-center justify-center bg-purple-900 h-[40px] w-[40px] text-2xl text-white rounded-lg" onClick={props.createNewNote}><FaPlus/></button>
                <button className='flex items-center justify-center bg-purple-900 h-[40px] w-[40px] text-2xl text-white rounded-lg' onClick={props.flashLocalStorage}><FaTrashAlt/></button>
                </div>
                
            </div>
            {elements}
        </section>
    )
}