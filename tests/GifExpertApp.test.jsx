import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en el componente', () => {
    test('should ', () => {

        render(<GifExpertApp/>);
        screen.debug();

    });

    test('Debe de mostrar el titulo "GifExpertApp" en el inicio de la página web', () => {
        
        render(<GifExpertApp/>);
        
        const titleElement = screen.getByText(/GifExpertApp/i);
        expect(titleElement).toBeTruthy();
    });

    test('Debe de agregar una nueva categoría y mostrarla en pantalla', () => {
        render(<GifExpertApp/>);
    
        const inputElement = screen.getByRole('textbox');
        const addButton = screen.getByRole('button');
    
        const newCategory = 'Pokemon';
    
        // Simular la acción de agregar una nueva categoría
        fireEvent.change(inputElement, { target: { value: newCategory } });
        fireEvent.click(addButton);
    
        // Verificar que la nueva categoría está en pantalla
        const newCategoryElement = screen.getByText(newCategory);
        expect(newCategoryElement).toBeTruthy();
    });

    test('Debe de mostrar gifs al buscar una categoría', async () => {
        render(<GifExpertApp/>);
    
        const inputElement = screen.getByRole('textbox');
        const searchButton = screen.getByRole('button', { name: /buscar/i });
    
        const category = 'Dragon Ball';
    
        // Simular la acción de buscar gifs de una categoría
        fireEvent.change(inputElement, { target: { value: category } });
        fireEvent.click(searchButton);
    
        // Esperar a que se carguen los gifs
        await waitFor(() => {
            const gifElements = screen.getAllByRole('img');
            expect(gifElements.length).toBeGreaterThan(0);
        });
    });
    
    
    
    
});
