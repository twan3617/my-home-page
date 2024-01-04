import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import { GetStaticProps } from 'next';

import CombinedTopPanel from '../components/CombinedTopPanel';

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <CombinedTopPanel posts={ allPostsData }/>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const fs = require('fs') // need this due to client-side / server-side shenanigans
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
