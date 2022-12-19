import { useState } from "react"
import mems from '../data/memsData'
export default function Meme() {
    let [memImgUrl, setmemImgUrl] = useState('')
    //let [isGoingOut, setIsGoingOut] = useState(true)
    // let [items, setItems] = useState(['item 1', 'item 2'])
    //    const [contact, setContact] = useState({
    //     firstName: "John",
    //     lastName: "Doe",
    //     phone: "+1 (719) 555-1212",
    //     email: "itsmyrealname@example.com",
    //     isFavorite: true
    // })
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })
    const [allMemeImages,setAllMemeImages]=useState(mems)
    function getNewImage() {
        const memsArray = allMemeImages.data.memes
        const rnd = Math.floor(Math.random() * memsArray.length)
        const url = memsArray[rnd].url
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage:url
        }))
        
    }
    // function changeState(){
    //     setContact(preContact=>{
    //         return{
    //             ...preContact,
    //             isFavorite: !preContact.isFavorite
    //         }
    //     })
    // }
    // function changeState(){
    //     setContact(preContact=>({
    //             ...preContact,
    //             isFavorite: !preContact.isFavorite
    //         }))
    // }
    // const itemsEle = items.map((item) => {
    //     return (
    //         <p>{item}</p>
    //     )
    // })

    return (
        <main className="w-[500px] mt-[36px]">
            {/* {isGoingOut ? "true" : "false"} */}
            {/* {itemsEle} */}
            {/* {contact.isFavorite?"true":"false"} */}
            {memImgUrl}
            <div className="grid grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Top text"
                    className="  border-2 rounded-md py-2 indent-2 outline-none"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className=" border-2 rounded-md py-2 indent-2 outline-none"
                />
                <button
                    className="cursor-pointer 
                        border-0 
                        rounded-md 
                        col-span-2 
                        bg-purple-700 
                        py-3 
                        text-white 
                        font-medium 
                        text-xl"
                    onClick={getNewImage}
                >Get a new meme image</button>

                {/* <button
                    className="cursor-pointer 
                        border-0 
                        rounded-md 
                        col-span-2 
                        bg-purple-700 
                        py-3 
                        text-white 
                        font-medium 
                        text-xl"
                    onClick={() => setIsGoingOut(isGoingOut => !isGoingOut)}
                >flip state</button> */}
                {/* <button
                    className="cursor-pointer 
                        border-0 
                        rounded-md 
                        col-span-2 
                        bg-purple-700 
                        py-3 
                        text-white 
                        font-medium 
                        text-xl"
                    onClick={() => setItems(items => [...items,`item ${items.length+1}`])}
                >add new item</button> */}
                {/* <button
                    className="cursor-pointer 
                        border-0 
                        rounded-md 
                        col-span-2 
                        bg-purple-700 
                        py-3 
                        text-white 
                        font-medium 
                        text-xl"
                    onClick={changeState}
                >change state</button> */}
            </div>
            <div className="mt-4">
                <img alt="memes" src={meme.randomImage} className='h-[268px] w-[477px]'></img>
            </div>

        </main>
    )
}