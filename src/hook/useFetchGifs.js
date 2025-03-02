import { useState,useEffect } from "react";
import { GetApi } from "../helpers/GetApi";

export const useFetchGifs = (category)=>{
    const [images, setimages] = useState([]); 
    const [isLoading, setisLoading] = useState(true); 
    const getImages = async()=>{
        const newImages = await GetApi(category); 
        setimages(newImages);
        setisLoading(false); 
    }
    useEffect(()=>{
        getImages()
    },[category])
    return{
        images,
        isLoading
    }
}