import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function EachPost(props) {
  return (
    <>
      <article>
        <a href={props.url}>
          <h3>{props.title}</h3>
        </a>
      </article>
    </>
  );
}

export default function Posts() {
  return (
    <>
      <section>
        <h2>おすすめ記事</h2>
        <EachPost title="test1" url="/bolg/schedule" />
        <EachPost title="test2" url="/bolg/schedule" />
      </section>
    </>
  );
}

// export default function Home() {
//   const test = (
//     <main>
//       <header>HEADER</header>
//       <h1 style={{ color: "red", fontSize: "80px" }}>CUBE</h1>
//       <p>アウトプットする</p>
//       <footer>FOOTER</footer>
//     </main>
//   );
//   return test;
// }
