import { useState } from "react"

export default function DropDownBox(props) {
    const [selected, setSelected] = useState(props.selected)
    function handleOnChange(e) {
        
        setSelected(e.target.value)
        props.handleSelectionChange(e.target.value)
    }
    const options = props.list && props.list.map(item => <option key={item.value} value={item.value}>{item.text}</option> )
return (
    <select
        id="selectionBox"
        name="selectionBox"
        className="p-2 rounded-lg outline-none border-2 border-[#4D5B9E] font-serif text-[#4D5B9E]"
        value={selected}
        onChange={handleOnChange}
    > {options}
    </select>
)
}