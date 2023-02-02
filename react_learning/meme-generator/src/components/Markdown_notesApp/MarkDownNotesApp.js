import { useEffect, useState } from 'react'
import SideBar from "./SideBar"
import Editor from "./Editor"
import Split from 'react-split'
import { nanoid } from 'nanoid'
export default function MarkDownNotes() {
    const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem('notes')) || [])
    const [displayNotes, setDisplayNotes] = useState((notes.length > 0 && notes) || [])
    const [currentNoteId, setCurrentNoteId] = useState((notes.length > 0 && notes[0].id) || "")
    // const [test,setTest]=useState(()=>console.log('test')) 
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
        displayNoteList()
        setCurrentNoteId(newNotes.id)
        console.log(currentNoteId)
    }
    function displayNoteList() {
        setDisplayNotes([...notes])
    }
    function updateNote(text) {
        //not arrage updated note at top position
        //setNotes(oldNotes => oldNotes.map(oldNote => oldNote.id === currentNoteId ? { ...oldNote, body: text } : oldNote))
        //imperative ways
        const newNotes = []
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id === currentNoteId) {
                notes[i] = { ...notes[i], body: text }
                newNotes.unshift(notes[i])
            } else {
                newNotes.push(notes[i])
            }
        }
        setNotes(newNotes)
        searchText()
    }
    function delNote(event, noteId) {
        event.stopPropagation()
        setNotes(oldNotes => oldNotes.filter(oldNote => oldNote.id !== noteId))
    }
    function findCurrentNode() {
        return notes.find(note => note.id === currentNoteId) || notes[0]
    }
    function flashLocalStorage() {
        localStorage.getItem('notes') && localStorage.removeItem("notes");
        setNotes([])
    }
    function searchText(e){
       console.log(e.timeStamp)
            const searchText= e.target.value
            console.log(searchText)
              if(searchText){
                  setDisplayNotes(prevNotes => {
                      return prevNotes.filter((note) => {
                          return note.body.includes(searchText)
                      })
                  })
              }else{
                  setDisplayNotes(notes)
              }   
    }
    const onSearch = debounce((e)=>searchText(e))
    function debounce (fn,timeout=1000){
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => { fn.apply(this, args); }, timeout);
        };
      }
    return (
        <main className="w-full">
            {notes.length > 0 ?
                <Split
                    sizes={[30, 70]}
                    direction="horizontal"
                    className="flex w-full h-screen  bg-gray-200"
                >
                    <SideBar notes={displayNotes} onSearch={onSearch}
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