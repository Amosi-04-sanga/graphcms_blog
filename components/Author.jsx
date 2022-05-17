import React from 'react'
import { useEffect, useState } from 'react'
import { authorInfo } from '../services'
import styles from '../styles/Home.module.css'

const About = () => {
  const [articleAuthor, setArticleAuthor] = useState([])
  useEffect(() => {
    authorInfo()
      .then(mine => {
        setArticleAuthor(mine)
      })
  }, [])


  return (
    <>
      <div className="p-4">
        {
          articleAuthor.length !== 0 && (
            <div className='italic text-sm' >
              <div className={`${styles.photoWrapper} m-auto`}>
                <img
                  src={articleAuthor[0].node.author.photo.url}
                  alt={articleAuthor[0].node.author.name}
                  className='w-full h-full'
                />
              </div>
              <p className='mb-2 text-center' > {articleAuthor[0].node.author.name} </p>
              <p className='indent-2' > {articleAuthor[0].node.author.bio} </p>
            </div>
          )
        }
      </div>
    </>
  )
}

export default About
