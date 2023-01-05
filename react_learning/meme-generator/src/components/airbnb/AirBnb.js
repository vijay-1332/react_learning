import NavBar from "./NavBar"
import Hero from "./Hero"
import data from '../../data/airbnbData.js'
import Card from './Card'
console.log(data)
export default function AirBnb() {
    const cards = data.map((item, index) => {
        return (
            <Card
                key={index}
                {...item}
            />
        )

    })
    return (
        <div className="spac-y-9">
            <NavBar />
            <div className="flex flex-col items-center">
                <Hero />
            </div>
            <div className="flex justify-center px-2">
                {cards}
            </div>
        </div>

    )
}