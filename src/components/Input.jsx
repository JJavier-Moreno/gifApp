import React, { useState } from 'react'

const Input = ({ setCategorias, categorias, setMessage}) => {

    const [nombreCategoria, setNombreCategoria] = useState('');

    const handleSetCategoria = (e) => {
        setNombreCategoria(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(nombreCategoria.trim().length <= 1) return;
            

        if(categorias.includes(nombreCategoria)){
            setMessage('La categoría ya ha sido añadida');
            setTimeout(()=>{
                setMessage('');
            },3000)
            return;
        };
        
        setCategorias(nombreCategoria);
        setMessage('');


    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                type="text"
                placeholder='Buscar gifs'
                value={nombreCategoria}
                onChange={(e) => handleSetCategoria(e)}
                className='mt-5' />

        </form>

    )
}

export default Input