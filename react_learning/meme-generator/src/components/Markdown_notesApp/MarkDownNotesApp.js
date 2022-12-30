import { useEffect, useState } from 'react'
import SideBar from "./SideBar"
import Editor from "./Editor"
import Split from 'react-split'
import { nanoid } from 'nanoid'
export default function MarkDownNotes() {
    const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem('notes')) || [])
    const [currentNoteId, setCurrentNoteId] = useState((notes.length > 0 && notes[0].id) || "")

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    function createNewNote() {
        console.log('test...')
        const newNotes = {
            id: nanoid(),
            body: '# write your title here'
        }
        setNotes(prevNotes => [newNotes, ...prevNotes])
        setCurrentNoteId(newNotes.id)
        console.log(currentNoteId)
    }

    function updateNote(text) {
    //not arrage updated note at top position
        //setNotes(oldNotes => oldNotes.map(oldNote => oldNote.id === currentNoteId ? { ...oldNote, body: text } : oldNote))
    //imperative ways
        const newNotes=[]
        for(let i=0; i<notes.length;i++){
          if(notes[i].id===currentNoteId){
            notes[i] = {...notes[i],body:text}
            newNotes.unshift(notes[i])
          }else{
            newNotes.push(notes[i])
          }
        }
        setNotes(newNotes)
   
    }
    function delNote(event, noteId) {
        event.stopPropagation()
       setNotes(oldNotes=>oldNotes.filter(oldNote=>oldNote.id !== noteId))
    }
    function findCurrentNode() {
        return notes.find(note => note.id === currentNoteId) || notes[0]
    }
    function flashLocalStorage() {
        localStorage.getItem('notes') && localStorage.removeItem("notes");
        setNotes([])
    }
    return (
        <main className="">
            {notes.length > 0 ?
                <Split
                    sizes={[30, 70]}
                    minSize={100}
                    direction="horizontal"
                    className="flex w-screen h-screen  bg-gray-200"
                >
                    <SideBar notes={notes}
                        createNewNote={createNewNote}
                        setCurrentNoteId={setCurrentNoteId}
                        flashLocalStorage={flashLocalStorage}
                        delNote={delNote}>
                    </SideBar>
                    <Editor currentNote={findCurrentNode()} updateNote={updateNote} >
                    </Editor>
                </Split>
                :
                <div className='h-screen flex flex-col items-center justify-center space-y-10'>
                    <h1 className='text-4xl font-bold font-serif'>You have no notes</h1>
                    <button className='bg-purple-900 text-white text-lg px-4 py-2 rounded-lg font-serif' onClick={createNewNote}>Create one now</button>
                </div>
            }

        </main>
    )
}