import {React, useState} from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    //React Hook para mantener el estado
    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {
      console.log(newCategory);
      if(categories.includes(newCategory)) return;
      
      //setCategories(category => [...category, 'Spyro']);
      setCategories([newCategory , ...categories]);
    }

    console.log(categories);
  return (
    <>
        {/* Título */}
        <h1>GifExpertApp</h1>
        

        {/* Input (componente independiente) */}
        <AddCategory
            //setCategories={setCategories}
            onNewValue = {(event) => onAddCategory(event)}
            
            
        />
        {/* Listado de tarjetas */}
        
        <ol>
            {categories.map(category => (
                <GifGrid key={category} category={category}/>    
              ))
            }
            
        </ol>
            {/* Gif item */}
    </>
  )
}

//Creamos un functional component con un fragmento
/**
 * map() barre todos los elementos de un arreglo y regresa un elemento nuevo ¡
 * 
 * cuando se pone "on" hace referencia a que se está emitiendo un valor
 */