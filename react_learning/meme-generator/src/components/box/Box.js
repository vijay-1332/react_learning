export default function Box(props) {
 
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    return (
        <div
            style={styles}
            className="h-[100px] 
        w-1/4 
        border-2 
        rounded-lg  
        border-black 
        bg-transparent"
        onClick={props.handleClick}
        ></div>
    )
}