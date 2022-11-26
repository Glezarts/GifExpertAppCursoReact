import { useState } from "react";
import React from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState();
    
    const onInputChange = ( { target } )=>{

        setInputValue(target.value);
    }

    const onSubmit = ( event ) =>{
        event.preventDefault();
        const cleanValue = inputValue.trim(); 

        if(cleanValue.length <= 1) return;
        onNewCategory( cleanValue );
        //setCategories(categories => [inputValue, ...categories] );
        setInputValue('');
    }

  return (
    <>
        <form onSubmit={ (event)=> onSubmit(event) }>
                <input
                type="text"
                placeholder='Search a GIF'
                value= { inputValue }
                onChange= { onInputChange }/>
            

        </form>
    </>
   
  )
}
