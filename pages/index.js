import Head from 'next/head';
import SafeLink from '../src/components/safe-link';
import NoPrefetchLink from '../src/components/no-prefetching-link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Pre-rendering</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Pre-rendering using Next.js</h1>

        <p className={styles.description}>
          Check out the different types of renderings available when using
          Next.js
        </p>

        <div className={styles.grid}>
          <NoPrefetchLink href="/about" className={styles.card}>
            <h2>About &rarr;</h2>
            <p>Static Generation without data.</p>
          </NoPrefetchLink>

          <NoPrefetchLink href="/no-prerendering" className={styles.card}>
            <h2>About &rarr;</h2>
            <p>Without pre-rendering.</p>
          </NoPrefetchLink>

          <NoPrefetchLink href="/posts" className={styles.card}>
            <h2>Posts &rarr;</h2>
            <p>Static Generation with data.</p>
          </NoPrefetchLink>

          <NoPrefetchLink href="/profile" className={styles.card}>
            <h2>Profile &rarr;</h2>
            <p>Server-side Rendering.</p>
          </NoPrefetchLink>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>Developed by</span>
        <span>Juan Enrique Segebre Zaghmout</span>
        <div>
          <SafeLink href="https://github.com/Segebre" noA11yIcon>
            <img
              src="/github.png"
              alt="Juan's GitHub page"
              className={styles.logo}
            />
          </SafeLink>
          <SafeLink href="https://de.linkedin.com/in/segebre" noA11yIcon>
            <img
              src="/linkedin.png"
              alt="Juan's LinkedIn page"
              className={styles.logo}
            />
          </SafeLink>
        </div>
      </footer>
    </div>
  );
}
