import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';

type BlogSectionProps = {
  posts: { date: string; title: string; id: string}[];
}


const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
    return (
    <div className="p-5">
    <h2 className="text-3xl text-center font-mono text-dark-teal p-5">
      Blog
    </h2>
<p className="py-5">
I know I don't truly understand something until I can explain it well to an audience. Below, you can find my attempts to go through topics in mathematics, statistics and programming in my blog.
</p>

<ul className={`${utilStyles.list} p-50`}>
  {posts.map((post) => (
    <li className={`${utilStyles.listItem}`} key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <a>{post.title}</a>
      </Link>
      <br />
      <small className={utilStyles.lightText}>
        <Date dateString={post.date} />
      </small>
    </li>
  ))}
</ul>
</div>
    )
}

export default BlogSection