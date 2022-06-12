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
        modifiedText = (<i key={index}>{text}</i>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'heading-two':
        return <h2 key={index} className="text-xl my-4 text-center">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
      case 'code-block':
        return (
          <div className="bg-orange-100 text-blue-900 rounded my-4 p-2 overflow-auto font-thin">
            <pre key={index} className="text-sm font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</pre>
          </div>
        )
      case 'paragraph':
        return <p key={index} className="my-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-six':
        return <i key={index} className={`text-md block my-2 ${styles.notes}`}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</i>;
      case 'image':
        return (
          <div data-role="imagemagnifier" data-magnifier-mode="glass" >
            <img
              key={index}
              alt={obj.title}
              height={obj.height}
              width={"100%"}
              src={obj.src}
              className="postFrontPhoto"
            />
          </div>
        );
      default:
        return modifiedText;
    }
  };

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
          post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

            return getContentFragment(index, children, typeObj, typeObj.type)
          })
        }
      </div>
    </div>
  )
}

export default PostDetails


