import { useState } from "react";
import Input from "./components/Input";
import Categoria from "./components/Categoria";

function App() {

  const [categorias, setCategorias] = useState('gifs');
  const [message, setMessage] = useState('');


  return (
    <>

      {message && <div className="bg-red-200 text-red-700 w-full text-center p-3 font-bold rounded-lg border-red-700">{message}</div>}

      <div className="">
        <h1 className="font-bold text-6xl">GifApp</h1>
      </div>

      <Input
        setCategorias={setCategorias}
        categorias={categorias}
        setMessage={setMessage}
      />

      <Categoria key={categorias} categoria={categorias} />



    </>
  )
}

export default App
