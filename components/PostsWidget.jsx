import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'
import { getRecentPosts, getSimilarPosts } from '../services'
import styles from '../styles/Home.module.css'


const PostsWidget = ({ categories, slug }) => {

    const [relatedPosts, setrelatedPosts] = useState([])

    useEffect(() => {
        if (slug) {
            getSimilarPosts(categories, slug).then((result) => {
                setrelatedPosts(result);
            });
        } else {
            getRecentPosts().then((result) => {
                setrelatedPosts(result);
            });
        }
    }, [slug, categories]);

    return (
        <>
            <div className="rounded">
                <h1 className='py-2' >
                    {
                        slug ?
                            "Related Posts" :
                            "Recent Posts"
                    }
                </h1>
                <div className={styles.PostsWidget}>
                    {
                        relatedPosts.length !== 0 && relatedPosts.map((post, index) => (
                            <div key={index} className="flex items-top my-2">
                                <div>
                                    <div className={styles.PostWidgetPhotoWrapper} >
                                        <img className={styles.PostWidgetPhoto} src={post.featuredImage.url} alt={post.slug} />
                                    </div>
                                </div>
                                <div className="px-2">
                                    <Link href={`/post/${post.slug}`} >
                                        <p className='cursor-pointer' > {post.title} </p>
                                    </Link>
                                    <p className='opacity-60' >posted on {moment(post.createdAt).fromNow()} </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default PostsWidget


