import { Link } from 'react-router-dom'
export default function SideBar() {

    const menus = [
        { 'text': 'airbnb', 'url': 'airbnb' },
        { 'text': 'travelJournal', 'url': 'travelJournal' },
        { 'text': 'MemGenerator', 'url': 'MemGenerator' },
        { 'text': 'counter', 'url': 'counter' },
        { 'text': 'box', 'url': 'box' },
        { 'text': 'jokes', 'url': 'jokes' },
        { 'text': 'formBinding', 'url': 'formBinding' },
        // { 'text': 'signUp', 'url': 'signUp' },
        { 'text': 'useEffect', 'url': 'useEffect' },
        { 'text': 'windowTracker', 'url': 'windowTracker' },
        { 'text': 'markDownEditor', 'url': 'markDownEditor' },
        { 'text': 'Quizz', 'url': 'Quizz' },
        { 'text': 'Tenzies', 'url': 'Tenzies' },
        { 'text': 'class counter', 'url': 'class-counter' },
        { 'text': 'class form', 'url': 'class-form' },

    ]
    const elements = menus.map((menu, index) => {
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
            >
                <Link to={`${menu.url}`}>{menu.text}</Link>
            </div>
        )
    }
    )
    return (
        <div className="flex">
            <div
                className="w-[300px] bg-gray-900 inset-y-0 left-0 fixed lg:static transform lg:translate-x-0  transition duration-500 ease-in-out z-30 lg:inset-0 overflow-y-auto">
                <div className="text-gray-200 flex items-center justify-center mt-8">
                    <div className="flex items-center">
                        <svg className="w-12 h-12" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white">
                            </path></svg>
                    </div>
                </div>
                <div className="">
                    {elements}
                </div>
            </div>
        </div>

        // <section className="h-full bg-white">
        //     <div className="flex items-center justify-between space-x-40 p-12">
        //         <h1 className="text-4xl font-bold">React Demos</h1>
        //         <div className='flex items-center justify-center space-x-4'>
        //         </div>
        //     </div>
        //     {elements}
        // </section>
    )
}