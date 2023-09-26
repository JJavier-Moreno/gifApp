import axios from "axios"

export const getGifs = async (categoria) => {
            try {
                const url = `https://api.giphy.com/v1/gifs/search?api_key=jyk0xx6dIDRGn8SCPh0OJS0mszjFKWtJ&q=${categoria}&limit=20`
                const resp = await axios(url);
                const { data } = await resp.data;

                const gifs = data.map(img => ({
                    id: img.id,
                    title: img.title,
                    url: img.images.downsized_medium.url
                }

                ))
                console.log(gifs);
                return gifs;


            } catch (error) {
                console.error(error);
            }
        }


