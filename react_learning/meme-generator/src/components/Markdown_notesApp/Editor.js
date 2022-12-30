import MDEditor from '@uiw/react-md-editor'
export default function Editor(props) {
    return (
        <div className='h-full bg-white' >
            <MDEditor
                value={props.currentNote.body}
                onChange={props.updateNote}
            />
            <MDEditor.Markdown source={props.currentNote.body} style={{ whiteSpace: 'pre-wrap' }} />
        </div>
    )
}