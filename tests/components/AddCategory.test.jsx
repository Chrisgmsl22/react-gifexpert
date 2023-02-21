import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe('Pruebas en el componente de AddCategory', () => {
   test('Debe de cambiar el valor de la caja de texto', () => {
        //Establecemos el sujeto de pruebas 
        render(<AddCategory onNewValue={() => {}}/>);
        //Para disparar un evento, primero obtenemos un input
        const input = screen.getByRole('textbox');

        //Ahora disparamos el evento
        fireEvent.input(input, {target: {value: 'Saitama'}}); //Hice el cambio en mi input
        expect(input.value).toBe('Saitama');
        screen.debug();
   });

   test('Debe de llamar onNewValue si el input tiene un valor', () => {
      const inputValue = 'Saitama'; //Lo que quiero que tenga el input
      const onNewValue = jest.fn(); //Simulación de función
      render(<AddCategory onNewValue={onNewValue}/>);
      
      //Extraemos la referencia al input y form
      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');

      //Ahora disparamos los eventos
      fireEvent.input(input, {target: {value: inputValue}});
      //Disparamos el submit del formulario
      fireEvent.submit(form);
      screen.debug();

      expect(input.value).toBe('');
      expect(onNewValue).toHaveBeenCalled(); //Que haya sido llamada
      expect(onNewValue).toHaveBeenCalledTimes(1);
      expect(onNewValue).toHaveBeenCalledWith(inputValue);
   });

   test('NO debe de llamar onNewValue si el input está vacío', () => {
      const inputValue = ''; //Vacío
      const onNewValue = jest.fn();

      //Levantamos el sujeto de pruebas
      render(<AddCategory onNewValue={onNewValue}/>);

      //Extraemos la referencia al input y form
      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');

      //Disparamos eventos
      fireEvent.input(input, {target: {value: inputValue}});
      fireEvent.submit(form);

      //Aserciones
      expect(onNewValue).toHaveBeenCalledTimes(0);
      expect(onNewValue).not.toHaveBeenCalled();

   });
   
   
    
});
