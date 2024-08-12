import React,{useState} from 'react';
import './App.css';
import Axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import Recipe from './Components/Recipe';
import Alert from './Components/Alert';

function App() 
{
  const [query, setQuery] = useState("");
  const [recipes,setRecipes] = useState([]);
  const [alert,setAlert] = useState("");

  const YOUR_APP_ID = '47fe9014';
  const YOUR_APP_KEY = '55e346eca7284c542e20ca9d9446df75';
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  const getData = async() =>{
    if(query !== "")
    {
      const result = await Axios.get(url);
      if(!result.data.more)
      {
         return setAlert("Please fill the appropriate food ");
      }
      setRecipes(result.data.hits);
      console.log(result);
      setAlert("");
      setQuery("");
    }else{
      setAlert("Please Fill the food-item.")
    }
   
  }
  const onSubmit = (e)=>{
    e.preventDefault();
    getData();

  }
  const onChange = (e) =>{
    setQuery(e.target.value);
    
    
  }
  return (
    <div className="App">
    <h1>FOOD SEARCHING APP</h1>
    <form className="search-form" onSubmit={onSubmit}>
      {alert !== "" && <Alert alert={alert}/>}
      <input type="text" placeholder="Search food" autoComplete="off" onChange={onChange} value={query}/>
      <input type="submit" value="search"/>
    </form>
    <div className="recipes">
      {recipes !== [] && recipes.map(recipe => 
      <Recipe key={uuidv4} recipe={recipe}/>
      )}
    </div>
    </div>
  );
}

export default App;
