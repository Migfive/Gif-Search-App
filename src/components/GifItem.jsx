
export const GifItem=({title, url})=>{
    return(<div className="GifItem">
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>)
}