import { React, useState } from 'react';

import '../style/components.css';


const Categorie = ({ label, callback, selected }) => {
  return <p 
    className={selected ? "categorie-selected" : "categorie"}
    onClick={(e) => callback(e)}>
      {label}
  </p>
}

const categories = ["Web", "Prog", "ShortFilms"]

export const Categories = ({ onCategorieChange }) => {

  const [categorieSelected, setCategorieSelected] = useState("Prog")

  const click = (e) => {
    setCategorieSelected(e.target.textContent)
    onCategorieChange(e.target.textContent)
  }

  return (
    <div id="Categories">
      {categories.map(label => {
        return <Categorie key={label} label={label} callback={click} selected={label === categorieSelected} /> 
      })}
      
    </div>
  )
}