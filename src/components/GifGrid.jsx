import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

//Aquí es donde hacemos la petición http para las API's


export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);
    
    //MAndamos a llamar a la función de inmediato
    
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading
                ? (<h2>Cargando ...</h2>)
                : null
            }
            
            
            <div className='card-grid'>
                {
                    images.map((image) => {
                            return <GifGridItem
                                key={image.id}
                                {...image  }                               
                            />
                        }
                    )
                }
            </div>
                
            
        </>
    )
}


//Agregamos los propTypes
GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}

/**
 *  const [images, setImages] = useState([]); //Arreglo vacío
    
    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, [])    
 */