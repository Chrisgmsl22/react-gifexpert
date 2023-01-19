import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


    

export const useFetchGifs = (category) => {
    
    const [images, setImages] = useState([]); //Arreglo vacío
    const [isLoading, setIsLoading] = useState(true);
    
    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        //Una vez ya tengamos las imagenes, entonces ya no está cargando
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);
    
    return {
        images,
        isLoading
    
    }
}
