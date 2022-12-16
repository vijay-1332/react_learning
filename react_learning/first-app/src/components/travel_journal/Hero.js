import Card from './Card'
import travelJOurnals from '../../data/travelJournal'
export default function Hero() {
    const cards = travelJOurnals.map((travelJournal, index) => {
        return (
            <Card 
            key={index} 
            {...travelJournal}
            />
        )
    })
    return (
        <div className='flex flex-col space-y-8 justify-center'>
            {cards}
        </div>

    )
}