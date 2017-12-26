import { Fragment } from 'react';
import Head from 'next/head';

import Nav from '../component/nav';

export default () => (
  <Fragment>
    <Head>
      <title>Join Us</title>
    </Head>
    <Nav />

    <div>
      <h1>Join Us</h1>
      <p>join us description</p>

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
