export const GetApi=async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=BnevL66Jvn1oU6GE97S5kNWypTKcMEZe&q=${category}&limit=10`;
    const resp = await fetch(url); 
    const {data} = await resp.json();
    console.log(data) 
    const gif =data.map(img=>({
        id :img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    
    return gif;
    
}