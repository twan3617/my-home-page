import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Footer from './Footer'


const name = 'Tony Wang';
const tag_line = 'Mathematics, Statistics and Everything Else';

const profile_img = "/images/profile.jpeg";
export const siteTitle = 'A Mathematical Structure named Blog';

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="A Mathematical Structure named Blog"
          content="A Mathematical Structure named Blog"
        />
        <meta
          property="og:image"
          content="/favicon.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src={profile_img}
              className={utilStyles.borderCircle}
              height={250}
              width={250}
              alt={name}
            />
            <span className={"text-center text-4xl font-mono py-5"}>{name}</span>
            <span className={"text-center text-2xl font-mono p-2.5"}>{tag_line}</span>

          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src={profile_img}
                  className={utilStyles.borderCircle}
                  height={250}
                  width={250}
                  alt={name}
                />
              </a>
            </Link>
            <span className={"text-center text-4xl font-mono py-5"}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </span>
            <span className={"text-center text-2xl font-mono p-2.5"}>{tag_line}</span>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer />
    </div>

  )
}
