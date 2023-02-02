import { useEffect, useState } from "react"
//import mems from '../data/memsData'
export default function Meme() {
    // let [memImgUrl, setmemImgUrl] = useState('')

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
    const [mems, setMems] = useState({})
    // useEffect(() => {
    //     fetch('https://api.imgflip.com/get_memes')
    //     .then(res => res.json())
    //     .then(data=>setMems(data.data.memes))
    // },[])
    useEffect(() => {
        async function getMemes() {
            const res = await fetch('https://api.imgflip.com/get_memes')
            const data = await res.json()
            setMems(data.data.memes)
        }
        getMemes()
    }, [])
    console.log(mems)
    function getNewImage() {
        const memsArray = mems
        const rnd = Math.floor(Math.random() * memsArray.length)
        const url = memsArray[rnd].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
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
    function handleChange(event) {
        const { name, value } = event.target
        setMeme((prevMem) => {
            return {
                ...prevMem,
                [name]: value
            }
        })
    }
    return (
        <main className="w-[500px] mt-[36px]">
            {/* {JSON.stringify(mems,null,2)} */}
            {/* {isGoingOut ? "true" : "false"} */}
            {/* {itemsEle} */}
            {/* {contact.isFavorite?"true":"false"} */}
            {/* {memImgUrl} */}
            <div className="grid grid-cols-2 gap-4">
                <input
                    name="topText"
                    type="text"
                    placeholder="Top text"
                    className="  border-2 rounded-md py-2 indent-2 outline-none"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    name="bottomText"
                    type="text"
                    placeholder="Bottom text"
                    className=" border-2 rounded-md py-2 indent-2 outline-none"
                    value={meme.bottomText}
                    onChange={handleChange}
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
            
            <div className="mt-4 relative">
            <div className="absolute left-[0%] top-[0%] p-4">
                <h1 className="text-center  text-4xl break-normal text-white  w-full overflow-hidden">{meme.topText} </h1>
            </div>
                <img alt="memes" src={meme.randomImage} className='h-[268px] w-[477px]'></img>

                <div className="absolute left-[0%] bottom-[0%] p-4">
                    <h1 className="break-normal  text-4xl text-white w-full overflow-hidden">{meme.bottomText} </h1>
                </div>

            </div>

        </main>
    )
}