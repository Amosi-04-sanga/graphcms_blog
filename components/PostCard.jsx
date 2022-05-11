import React from 'react'
import styles from '../styles/Home.module.css'

const PostCard = ({post}) => {
  return (
    <>
        <div className={`${styles.postContainer} my-4 hover:opacity-90 transition duration-100 cursor-pointer pb-2`}>
          <img className={styles.featuredImage} src={post.featuredImage.url} alt={post.title} />
          <div className="px-2">
            <h5 className='text-center my-4' > {post.title} </h5>
            <p className='text-sm' > {post.excerpt} </p>
          </div>
          <button className={`block mx-auto my-4 capitalize bg-orange-200 p-2`} >read more</button>
        </div>
    </>
  )
}

export default PostCard