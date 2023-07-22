import Head from "next/head";
import PostCard from "../components/PostCard";
import Categories from "../components/Categories";
import PostsWidget from "../components/PostsWidget";
import Author from "../components/Author";
import styles from "../styles/Home.module.css";
import { getPosts } from "../services";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts.reverse());
    };
    fetchPosts();
  }, []);

  console.log(posts);
  return (
    <>
      <Head>
        <title>Godlove</title>
      </Head>

      <div className="p-2 mx-auto md:py-4 mb-8">
        <Hero />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 mt-8">
          <div className="col-span-1 md:col-span-8">
            <h1
              className={`${styles.underline} inline-block relative mx-auto text-3xl mb-4 capitalize`}
            >
              latest articles
            </h1>
            <div className={styles.postsContainer}>
              {posts.map((post, index) => (
                <div key={index}>
                  <PostCard post={post.node} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1 md:col-span-4 px-4">
            <div className="md:sticky top-16">
              <PostsWidget />
              <Categories />
              <Author />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
