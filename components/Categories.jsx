import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'
import { getCategories } from '../services'
import styles from '../styles/Home.module.css'



const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <h3 className={`${styles.underline} relative inline-block uppercase text-xl mb-8 font-semibold border-b`}>Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className={`${styles.connectedDots} capitalize relative cursor-pointer block pl-6 mb-3`}>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories; 

