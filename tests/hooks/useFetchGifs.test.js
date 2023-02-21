import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
    test('Debe de regresar el estado inicial', () => {
       
        //Para hacer pruebas con hooks, se usa el objeto renderHook
        //Este objeto regresa varias cosas, por lo que se recomiendas desestructurizarlo
        const {result} = renderHook( () => useFetchGifs('One Punch'));
        
        const {images, isLoading} = result.current;

        console.log(result);

        //Aserciones
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

        

    });

    test('Debe de retornar un arreglo de imagenes e isLoading en false', async() => {
        
        const {result} = renderHook( () => useFetchGifs('One Punch'));
        
        //Espera que...
        //esta esperando que mande un callback
        await waitFor(
            
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );
        

        console.log(result);
        const {images, isLoading} = result.current;

        //Aserciones
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });
    
    
});
