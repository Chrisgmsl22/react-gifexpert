import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getgifs', () => {
   test('Debe de retornar un arreglo de gifs', async() => {
    const gifs = await getGifs('Spyro');
    console.log(gifs);

    expect(gifs.length).toBeGreaterThan(0); //Que tenga un largo de al menos un elemento

    expect(gifs[0]).toEqual({
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String),

   });

   
   });

   
    
});
