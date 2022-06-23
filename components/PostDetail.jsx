import { RichText } from '@graphcms/rich-text-react-renderer'
import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Post.module.css'


const PostDetails = ({ post }) => {

  return (
    <div className={styles.whitePaper} >
      <div className={styles.featuredImage}>
        <img
          src={post.featuredImage.url}
          alt={post.slug}
          className='w-full h-full'
        />
      </div>
      <div className="my-2 md:justify-start flex items-center justify-between text-sm opacity-80">
        <p className='md:mr-4 mr-px' >updated on {moment(post.updatedAt).format("DD/MM/YYYY")} </p>
        <p>author: {post.author.name} </p>
      </div>
      <p className='text-center mb-4 mt-12 font-bold uppercase text-sm' > {post.title} </p>
      <div className="p-2">
        {
          console.log(post.content)
        }

        < RichText
          content={post.content.raw}
          renderers={{
            h6: ({ children }) => <h6 className={`text-md block my-2 ${styles.notes}`} >{children}</h6>,
            h2: ({ children }) => <h2 className="text-center font-bold" >{children}</h2>,

            a: ({ children, openInNewTab, href, rel, ...rest }) => {
              if (href.match(/^https?:\/\/|^\/\//i)) {
                return (
                  <a
                    href={href}
                    className="text-red-800"
                    target={openInNewTab ? '_blank' : '_self'}
                    rel="noreferrer"
                    {...rest}
                  >
                    {children}
                  </a>
                );
              }

              return (
                <Link href={href}>
                  <a {...rest}>{children}</a>
                </Link>
              );
            },

            img: ({ src }) => <img className={styles.postImage} src={src} alt="" />,
            code_block: ({ children }) => {
              return (
                <div className="relative">
                  <div className="bg-orange-100 text-blue-900 rounded my-4 p-2 overflow-auto font-thin">
                    <svg className='fill-blue-400 hover:fill-blue-600 transition duration-200 w-5 h-5 absolute right-2 top-2 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M384 96L384 0h-112c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48H464c26.51 0 48-21.49 48-48V128h-95.1C398.4 128 384 113.6 384 96zM416 0v96h96L416 0zM192 352V128h-144c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h192c26.51 0 48-21.49 48-48L288 416h-32C220.7 416 192 387.3 192 352z" /></svg>
                    <pre className="text-sm font-semibold mb-4">{children}</pre>
                  </div>
                </div>
              )
            },

            p: ({ children }) => <p className="my-4" >{children}</p>,


          }}
        />
      </div>
    </div>
  )
}

export default PostDetails

