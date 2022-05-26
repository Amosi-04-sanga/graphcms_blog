/* import React, { useEffect, useState } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

import { getComments } from '../services';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);
  console.log(comments);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length}
            {' '}
            Comments
          </h3>
            {comments.map((comment, index) => (
              <div key={index} className="border-b border-gray-100 mb-4 pb-4">
                <p className="mb-4">
                  <span className="font-semibold">{comment.name}</span>
                  {' '}
                  on
                  {' '}
                  {moment(comment.createdAt).format('MMM DD, YYYY')}
                </p>
                <p className="whitespace-pre-line text-gray-600 w-full">{parse(comment.comment)}</p>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Comments;

*/


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



