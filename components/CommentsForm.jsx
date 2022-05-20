import React, { useState, useEffect, useRef } from 'react'
import { submitComment } from '../services'
import styles from '../styles/Form.module.css'

const CommentsForm = ({ slug }) => {
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  const [error, setError] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  useEffect(() => {
    const name = window.localStorage.getItem("name")
    const email = window.localStorage.getItem("email")

    nameEl.current.value = name
    emailEl.current.value = email

  }, [])


  const handleFormSubmision = async () => {
    setError(false)

    const { value: comment } = commentEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    const { checked: storeData } = storeDataEl.current

    if (!comment || !name || !email) {
      setError(true)
      return
    }

    const commentObj = {
      name,
      email,
      comment,
      slug
    }

    console.log(commentObj);

    if (storeData) {
      window.localStorage.setItem("name", name)
      window.localStorage.setItem("email", email)
    } else {
      window.localStorage.removeItem("name", name)
      window.localStorage.removeItem("email", email)
    }

    try {
      await submitComment(commentObj)
        .then(res => {
          setShowSuccessMessage(true)
          setTimeout(() => {
            setShowSuccessMessage(false)
          }, 3000)
        })
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className='mb-12 pb-8 shadow-lg' >
      <h3 className="text-center mb-4">please leave a reply</h3>
      <div className="grid grid-cols-1 gap-4 px-8 mb-4 mx-auto">
        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="10"
          className={`${styles.formInput} ${styles.textarea}`}
          ref={commentEl}
          placeholder="Enter comment here..."
        >
        </textarea>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8 mb-4 mx-auto">
        <input
          type="name"
          className={styles.formInput}
          ref={nameEl}
          placeholder="Enter your name"
        />
        <input
          type="email"
          className={styles.formInput}
          ref={emailEl}
          placeholder="Enter your email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 px-8 mb-4 mx-auto">
        <div >
          <input
            type="checkbox"
            name='storeData'
            id='storeData'
            className='mr-1'
            ref={storeDataEl}
          />
          <label htmlFor='storeData' className='text-gray-500 text-sm' >save my email and password for next time i comment</label>
        </div>
      </div>
      {
        error &&
        <p className="my-2 text-red-500 text-center italic text-sm">please fill all fields</p>

      }
      <button type='button' onClick={handleFormSubmision} className='text-sm block m-auto p-1 px-8 rounded uppercase hover:bg-purple-300 transition duration-200 ease cursor-pointer bg-purple-200' >post comment</button>
      {
        showSuccessMessage &&
        <p className="my-2 text-green-400 text-center italic text-sm">comment submited for review</p>
      }
    </div>
  )
}

export default CommentsForm


