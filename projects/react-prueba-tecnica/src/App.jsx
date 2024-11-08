import { useEffect, useState } from "react"
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/'

export function App() {
    const [fact, setFact] = useState()
    const [imageURL, setImageURL] = useState()

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
            })
    }, [])
    useEffect(() => {
        if (!fact) return
        const firstWord = fact.split(' ', 3)

        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const url = response.tags.join(',')
                setImageURL(url)
            })
    }, [fact])

    return (
        <main>
            <h1>App de gatos</h1>
            {fact && <p>{fact}</p>}
            {imageURL && <img src={`${CAT_PREFIX_IMAGE_URL}${imageURL}`} alt={`Image extracted using the first word for ${fact}`}></img>}
        </main>
    )
}