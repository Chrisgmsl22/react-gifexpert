import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components";

describe('Pruebas dentro del componente de gifgriditem', () => { 

   //Variables locales
   const title = 'Spyro';
   const url = 'https://www.playstation.com/es-mx/games/spyro-reignited-trilogy/'
    test('Debe de evaluar el snapshot ', () => {
       const {container} = render(<GifGridItem
         title={title} url={url}
       />);
      
       expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el url y el alt indicado', () => { 
      render(<GifGridItem title={title} url={url} />);

      //screen.debug();
      // expect(screen.getByRole('img').src).toBe(url);
      // expect(screen.getByRole('img').alt).toBe(title);
      const {src, alt} = screen.getByRole('img');
      expect(src).toBe(url);
      expect(alt).toBe(alt);
      
     });

     test('Debe de mostrar el titulo en el componente', () => {

      render(<GifGridItem title={title} url={url} />);
      expect(screen.getByText(title)).toBeTruthy();
      
     });
     
    
 });