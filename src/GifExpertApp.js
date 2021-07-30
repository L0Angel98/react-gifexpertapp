import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export default function GifExpertApp (){
  const [categories, setCategories] = useState(['Dragon Ball']);
  /*const handleAdd = () =>{
    //setCategories(['HunterXHunter', ...categories])
    setCategories( cats =>['HunterXHunter', ...cats])
  }*/
  return(
    <>
      <h1>GifExpertApp</h1>
        <AddCategory setCategories={setCategories} />
      <hr/>
    <ol>
      {
        categories.map(category =>(  
          <GifGrid 
            key={category}
            category={category} 
          />
          ))
      }
    </ol>

    </>
  )
}