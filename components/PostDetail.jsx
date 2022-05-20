import moment from 'moment'
import React from 'react'
import styles from '../styles/Post.module.css'

const PostDetails = ({ post }) => {

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'heading-two':
        return <h2 key={index} className="text-xl mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
      case 'code-block':
        return <div className="bg-blue-500 rounded text-white my-4 p-2 overflow-auto font-thin">
          <pre key={index} className="text-sm font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</pre>;
        </div>
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={"100%"}
            src={obj.src}
            className="postFrontPhoto"
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className='pr-2'>
      <div className={styles.featuredImage}>
        <img
          src={post.featuredImage.url}
          alt={post.slug}
          className='w-full h-full'
        />
      </div>
      <div className="my-2 md:justify-start flex items-cemter justify-between text-sm opacity-80">
        <p className='md:mr-4 mr-px' >posted on {moment(post.createdAt).format("DD/MM/YYYY")} </p>
        <p>author: {post.author.name} </p>
      </div>
      <p className='text-center my-4 uppercase text-sm' > {post.title} </p>
      {
        post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

          return getContentFragment(index, children, typeObj, typeObj.type)
        })
      }
    </div>
  )
}

export default PostDetails


