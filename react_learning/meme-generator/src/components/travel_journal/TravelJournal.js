import NavBar from "./NavBar"
import Hero from './Hero'
export default function TravelJournal() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-[550px] h-[704px] shadow-lg">
                <NavBar />
                <div className="pl-10 pt-10"><Hero /></div>
            </div>
        </div>

    )
}