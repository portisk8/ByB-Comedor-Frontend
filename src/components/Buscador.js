import { AutoComplete, Input } from 'antd';
import React, { useEffect, useState } from 'react';




const Buscador = () => {
  const [tutor, setTutor] = useState([])

    useEffect(() => {
      const obtenerTutores=async()=>{
        try {
          const url='http://localhost:4000/tutores'
          const respuesta=await fetch(url)
          const resultado=await respuesta.json()
          setTutor(resultado)
          console.log(tutor)
          
        } catch (error) {
          console.log(error)
        }


      }
      obtenerTutores()
    },[])

    const options =  tutor.map((t) => ({
      value: JSON.stringify(t.nombre)
     
    }
    ))
    
    


  return(
    <>
      <AutoComplete
      options={options}
      style={{
        width: 200,
      }}
      
      placeholder="input here"
    >
    
      
    </AutoComplete>
    </>

  )
 
};

export default Buscador;
