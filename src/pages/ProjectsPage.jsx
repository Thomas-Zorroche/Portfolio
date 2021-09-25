import React, { useEffect, useState } from 'react';
import json from "../projects.json"

import '../style/components.css';

import { Card } from '../components/Card';
import { Categories } from '../components/Categories';
import { Tags } from '../components/Tags';


export const ProjectsPage = () => {

  const [projects, setProjects] = useState(json.projects)  
  const [categorie, setCategorie] = useState("prog")
  const [tags, setTags] = useState([])

  useEffect(() => {
    updateData()
  }, [tags, categorie])

  const updateCategorie = (cat) => {
    cat = cat.toLowerCase()
    setCategorie(cat)

  }
  const updateTags = (tags) => {
    setTags(tags)
  }

  const updateData = () => {
    let data = json.projects.filter(d => d.type === categorie)
    if (tags.length !== 0)
      data = data.filter(d => d.tags.some(r => tags.indexOf(r) >= 0))

    setProjects(data)
  }
  
  return (
    <div id="Page">

      <div className="title-cover cover-projects"><p>Projects</p></div>

      <div className="filters-container">
        <Categories onCategorieChange={updateCategorie} />
        <Tags onTagsChange={updateTags}/>
      </div>


      <div id="Card-container">

        {projects.map(project => 
          <Card 
            key={project.id} 
            name={project.name} 
            date={project.date} 
            desc={project.desc}
            tags={project.tags}
            preview={project.preview}
            url={project.url}
          />
        )}

      </div>

    </div>
  )
}