import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'
import { getCategories } from '../services'
import styles from '../styles/Home.module.css'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      await getCategories()
        .then(newCategories => {
          setCategories(newCategories)
        })
    }
    fetchCategories()
  }, [])


  return (
    <>
      <div className="rounded">
        <h1 className='pt-2' >
          Categories
        </h1>
        <div className={styles.categories}>
          {
            categories.length !== 0 && categories.map((category, index) => (
              <div key={index} className="py-px">
                <Link href={`/category/${category.slug}`} >
                  <span className='cursor-pointer' > {category.name} </span>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Categories