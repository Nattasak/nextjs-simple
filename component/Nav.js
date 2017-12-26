import Link from 'next/link';

export default () => (
  <nav>
    <Link href="/"><a>Home</a></Link>
    <Link href="/posts"><a>Posts</a></Link>
    <Link href="/about"><a>About</a></Link>
    <Link href="/join-us"><a>Join Us</a></Link>

    <style jsx>{`
      nav {
        margin-bottom: 20px;
      }
      a {
        color: black;
        margin-right: 20px;
      }
      a:hover{
        color: green;
      }
    `}</style>

    <style global jsx>{`
      body {
        margin: 20px 0;
        padding: 0 20px;
        background: #fff;
      }
    `}</style>
  </nav>
);
