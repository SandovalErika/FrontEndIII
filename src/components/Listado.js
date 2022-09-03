import React, { useEffect, useState } from 'react'
import Item from './Item'


// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

export default function Listado({incrementar}) {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('./data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(result => result.json(), e => {
        console.log("Obtención fallida", e);
      })
      .then( products => { 
        setData(products)
        return products
    });
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div className='container'>
      {data && data.length>0 && data.map((item, i)=> <Item key={i} item={item} incrementar={incrementar}/>)}
      
    </div>
  )
}
