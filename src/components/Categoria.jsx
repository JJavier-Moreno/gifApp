import Spinner from "./Spinner";
import Gif from "./Gif";
import useFetchGifs from "../hooks/useFetchGifs";


const Categoria = ({ categoria }) => {

    const { images, isLoading } = useFetchGifs(categoria);



    return (

        <>
            <h3 className="uppercase text-center font-bold m-5 ">{categoria}</h3>

            {isLoading && <Spinner />}
            <div className="card-grid">
                {images.map(imagen => (
                    <Gif
                        key={imagen.id}
                        imagen={imagen}
                    />


                ))}
            </div>

        </>
    )
}

export default Categoria