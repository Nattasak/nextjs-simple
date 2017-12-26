import { Fragment } from 'react';
import Head from 'next/head';

import Nav from '../component/nav';

export default () => (
  <Fragment>
    <Head>
      <title>Home</title>
    </Head>
    <Nav />

    <div>
      <h1>Home page</h1>
      <p>home description</p>

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
    </div>
  </Fragment>
);