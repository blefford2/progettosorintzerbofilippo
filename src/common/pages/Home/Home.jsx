import React from 'react'
import './Home.css'
import Article from '../../Article/Article'
import articles from '../../../article.json'

const Home = () => {
  const buttonClick = () => {
    console.log('click !')
  }
  return (
    <div id="home" className='wrapper'>
        <h1>Article Home</h1>

        <div className='article-section'>

          {articles.map((item, i)=>{
            return (<Article key={item.image} data={item} Click={buttonClick} />)
          })}

        </div>
    </div>
  )
}

export default Home