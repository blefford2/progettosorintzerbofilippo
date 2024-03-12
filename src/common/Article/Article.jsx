import React, {useState} from 'react'
import './Article.css'
import {FaRegStar, FaStar} from "react-icons/fa"

const Article = ({ data, click}) => {
  const [likes, setLikes] = useState(data.likes)
  const [isLiked, setIsLiked] = useState(data.isLiked)

  const handleClick = () => {
    if (isLiked) {
      setLikes(likes -1);
    }else{
      setLikes(likes +1);
    }
    setIsLiked(!isLiked)

    console.log(isLiked)
      
  };
  return (
    <article>
        <img src={data.image} alt={data.title} className='article-img' />
        
    <div className='article-header'>
        <p>{data.date}</p>
        <button onClick={handleClick}>
          {likes} 
          {isLiked ? <FaStar /> : <FaRegStar /> }
        </button>
    </div>
    
        <h2>{data.title}</h2>
        <p>Intro</p>
        <button onClick={click}>Leggi di più</button>
    </article>
  )
}

export default Article