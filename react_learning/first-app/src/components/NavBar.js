import logo from '../assets/images/React-icon.png'
export default function NavBar() {
    return (
        <nav className='bg-black flex justify-between items-center py-2 px-4'>
            <div className='flex items-center'>
                <img alt="react-icon" src={logo} height="100px" width="100px" />
                <h3 className="ml-2 text-sky-400 font-bold text-2xl">ReactFacts</h3>
            </div>
            <div>
                <h4 className="text-white font-bold">React Course- project1</h4>
            </div>

        </nav>

    )
}