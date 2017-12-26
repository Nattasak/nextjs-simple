import { Fragment } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

import Nav from '../component/nav';

const Posts = ({ posts }) => (
  <Fragment>
    <Head>
      <title>Posts</title>
    </Head>
    <Nav />

    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>

    <style jsx>{`
      div {
        background: #eee;
        padding: 30px;
      }
      @media (max-width: 600px) {
        div {
          background: #ccc;
        }
      }
    `}</style>
  </Fragment>
)

Posts.getInitialProps = async function() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return { posts: data }
}

export default Posts
