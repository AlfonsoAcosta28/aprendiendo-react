import { useEffect, useState } from "react"

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/'
export function useCatImage({fact}){
    
    const [imageURL, setImageURL] = useState()
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

    return {imageURL : `${CAT_PREFIX_IMAGE_URL}${imageURL}`}
}
