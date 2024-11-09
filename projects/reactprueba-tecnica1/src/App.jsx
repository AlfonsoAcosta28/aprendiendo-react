
import './App.css'
import { useCatFact } from './hooks/useCatFacts'
import { useCatImage } from "./hooks/useCatImage"


export function App() {
    const {fact, refreshFact} = useCatFact()
    const {imageURL} = useCatImage({fact})
    
    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App de gatos</h1>
            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageURL && <img src={imageURL} alt={`Image extracted using the first word for ${fact}`}></img>}
        </main>
    )
}