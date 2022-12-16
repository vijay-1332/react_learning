import Header from './Header'
import Meme from './Meme'
export default function MemGenerator() {
    return (
        <div>
            <Header />
            <div className='flex justify-center'>
                <Meme />
            </div>

        </div>

    )
}