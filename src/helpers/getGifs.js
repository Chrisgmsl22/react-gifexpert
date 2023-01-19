export const getGifs = async(category) => {
    
    console.log(category);
    const apiKey = 'XdHQnet06i9aXDFiwfdiDOFmblLl8Wzk';
    const urlLimitNumber = 10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${urlLimitNumber}`;
    //const url2 = `https://api.giphy.com/v1/gifs/search?api_key=XdHQnet06i9aXDFiwfdiDOFmblLl8Wzk&q=${category}&limit=${urlLimitNumber}&offset=0&rating=g&lang=en`;


    //Hacemos una petición http
    const resp = await fetch(url);
    //console.log(resp);
    const {data} = await resp.json();
    //console.log(data);

    const gifsTaken = data.map(img => (
        {
            id: img.id, 
            title: img.title,
            url: img.images.downsized_medium.url
        }
    ));
    //console.log(gifsTaken);

    return gifsTaken;
}