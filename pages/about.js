import { Fragment } from 'react';
import Head from 'next/head';

import Nav from '../component/Nav';

export default () => (
  <Fragment>
    <Head>
      <title>About</title>
    </Head>
    <Nav />

    <div>
      <h1>About</h1>
      <p>about description</p>
    </div>

    <style jsx>{`
      p {
        color: blue;
      }
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
);
