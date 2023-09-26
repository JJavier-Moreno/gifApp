import { useState,useEffect} from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (categoria) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading]=useState(false);

    const getImages = async () => {
        setIsLoading(true);
        const newImages = await getGifs(categoria);
        setTimeout(()=>{
            setIsLoading(false);
            setImages(newImages);
        },1000)

    }

    useEffect(() => {
        getImages();
    }, [categoria])

    return {
        images,
        isLoading
    }
}

export default useFetchGifs