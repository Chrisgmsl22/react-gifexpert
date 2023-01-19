import React, { useState } from 'react'

export const AddCategory = ({onNewValue}) => {
    //Cada componente puede tener su propio estado
    const [inputValue, setInputValue] = useState('Dragon Ball');
    const onInputChange = ({target}) => {
        //console.log(target.value);
        setInputValue(target.value);
        //EL valor del set debe ser el valor del evento
        //setCategories(.... inputValue)
        
    }

    const onSubmit = (event) => {
        
        //Para no tener que hacer un refresh del naveador
        event.preventDefault();
        console.log(inputValue);
        //VAlidador para no introducir espacios en blanco
        if (inputValue.trim().length <=1){return;}

        //setCategories(categories => [inputValue, ...categories]);
        //Solo mandamos a llamar a la función pasada desde el padre
        onNewValue(inputValue.trim()); //pasamos el valor limpio
        
        //Despues vaciamos el contenido del inputValue
        setInputValue('');
    }
  return (
    
        <form onSubmit={(event) => {onSubmit(event)}}>
            <input 
                type="text"
                placeholder='Buscar Gifs'
                value={inputValue}
                onChange={(event) => {
                    onInputChange(event)
                }} />
        </form>
        
    
  );
}
