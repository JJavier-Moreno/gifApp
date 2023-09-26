import React from 'react'

const Gif = ({ imagen }) => {

    const { title, url } = imagen;
    return (
        <div className='card'>
            <img
                src={url}
                alt={`Imagen ${title}`}
            />
            <p >{title}</p>

        </div>
    )
}

export default Gif