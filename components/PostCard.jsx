import React from 'react'
import styles from '../styles/Home.module.css'
import moment from 'moment'
import Link from 'next/link'


const PostCard = ({ post }) => {
  return (
    <>
      <div className={`${styles.postContainer} my-4 pb-2`}>
        <img className={styles.featuredImage} src={post.featuredImage.url} alt={post.title} />
        <div className="px-2">
          <h5 className='text-center h-20 flex items-center italic my-4' > {post.title} </h5>
          <div className="flex justify-center items-center my-2">
            <svg className='fill-blue-400 w-4 h-4 mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM192 304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304zM336 256C327.2 256 320 263.2 320 272V304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336zM64 432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80C71.16 384 64 391.2 64 400V432zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208zM320 432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336C327.2 384 320 391.2 320 400V432z" /></svg>
            <p className='opacity-80 text-sm' >posted on {moment(post.createdAt).format("DD-MM-YYYY")} </p>
          </div>
          <p className='indent-4 text-sm' > {post.excerpt.slice(0, 200)}... </p>
        </div>
        <Link href={`/post/${post.slug}`} >
          <button className={`block cursor-pointer mx-auto my-4 capitalize bg-orange-200 p-2`} >read more</button>
        </Link>
      </div>
    </>
  )
}

export default PostCard


