import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";

describe('Pruebas en GifGrid', () => {
   
    const category = 'One Punch'
    
    test('Debe de mostrar el loading inicialmente', () => {
        render(<GifGrid
            category={category}
        />);

        screen.debug();

        //Aserciones
        expect(screen.getByText('Cargando ...'));
        expect(screen.getByText(category));
    });

    test('sDebe de mostrar items cuando se cargan las imagebes mediante el useFetch', () => {
        
    })
    
    
    
});
