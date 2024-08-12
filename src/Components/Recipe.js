import React,{useState} from 'react';
import RecipeDetails from './RecipeDetails';

const Recipe = ({recipe}) => {
    const [show,setShow] = useState(false);
    const {label,image,url,ingredients} = recipe.recipe;
    const onShow = () =>{
      setShow(!show);
    }
    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label}/>
            <a href={url} target="_blank" rel="noopener noreferrer">URL</a>
            <button onClick={onShow}>Ingredients</button>
            {show && <RecipeDetails ingredients={ingredients}/>}
        </div>
    )
}

export default Recipe;
