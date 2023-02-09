import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState( [ 'OnePunch']);
  
 const onAddCategory = ( newCategory) => {

    if( categories.includes(newCategory) )return;
    setCategories ([ newCategory,...categories,]);
  
  }
  

  return (
    <>
    {/*Titulo*/}
    <h1>GifExpertApp</h1>


    {/*Input*/}
    <AddCategory  onNewCategory={onAddCategory}/>
    {/*Listado gif*/}
    {
      categories.map( category => (
        <GifGrid
          key={category}
          category={category}
        />
      ))
    }
      {/*gif item*/}
    </>
    
  )
}
