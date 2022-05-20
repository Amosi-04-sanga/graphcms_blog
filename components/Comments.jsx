import moment from 'moment'
import React, { useState, useEffect } from 'react'
import parser from 'html-react-parser'
import { getComments } from '../services'


const Comments = ({ slug }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug)
      .then(res => {
        setComments(res)
      })
  }, [])

  console.log(comments);

  return (
    <>
      {
        comments.length > 0 && (
          <div className="pb-4 mb-12">
            <h3 className='mb-4' > {comments.length} {" "} comments </h3>
            {
              comments.map(comment => (
                <div key={comment.createdAt} className="mb-4">
                    <p className="mb-2 text-sm italic text-gray-600">
                      <span> {comment.name} </span>
                      {" "} on {" "}
                      <span> {moment(comment.createdAt).format("MMM DD, YYYY")} </span>
                    </p>
                    <p className="mb-4 whitespace-pre-line"> {parser(comment.comment)} </p>
                </div>
              ))
            }
          </div>
        )
      }
    </>
  )
}

export default Comments