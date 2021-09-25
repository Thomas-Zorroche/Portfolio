import { React, useEffect, useState } from 'react';

import '../style/components.css';

const Tag = ({ label, callback, selected }) => {
  return <p className={selected ? "tag-selected" : "tag"} onClick={(e) => callback(e)}>{label}</p>
}

const tagArray = [ "C++", "OpenGL", "Python", "React", "PHP", "QT", "Unreal", "Blender" ];

export const Tags = ({ onTagsChange }) => {

  const [tags, setTags] = useState([])

  const click = (e) => {
    // if tag is already selected, remove it
    if (tags.includes(e.target.textContent)) {
      setTags(tags.filter(tag => tag !== e.target.textContent ))
    }
    // else, add it
    else {
      setTags([...tags, e.target.textContent])
    }
  }

  useEffect(() => {
    onTagsChange(tags)
  }, [tags])

  return (
    <div id="Tags">

      {tagArray.map(tag => {
        return <Tag key={tag} label={tag} callback={click} selected={tags.includes(tag)} />
      })}

    </div>
  )
}