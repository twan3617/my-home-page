import Link from 'next/link';
import ConnectPanel from './ConnectPanel'

const AboutMe = () => {
    return <section className="aboutme py-5">
    <h2 className="text-3xl font-mono text-center text-dark-teal py-5">
        About Me
    </h2>
    <ConnectPanel />
    <p className="py-5">
        Hi! You have somehow stumbled across my homepage. Welcome!
    </p>
    <p className="py-5">
    I am a data scientist with a strong statistics background, holding the Masters of Mathematics from UNSW and the Bachelor of Science (Advanced) (Honours in Pure Mathematics), from the University of Sydney.
    </p>
    <p className="py-5">
    Outside of work, I love to read 📚, play volleyball 🏐 and play the same three pieces on my piano over and over again 🎹.
    </p>
    <p className="py-5">
        When I get the chance, I love to pick up new technologies and build things with them. This website was built off of the starter <span className="text-dark-teal">NextJS</span> <Link href="https://nextjs.org/learn-pages-router/basics/create-nextjs-app">app</Link>, 
        with some basic <span className="text-dark-teal">HTML</span>, <span className="text-dark-teal">JavaScript</span> and <span className="text-dark-teal">TailwindCSS</span> on top. 
    </p>
    <p>
    LaTeX support for rendering mathematical equations in my blog posts (see below!) come from <Link href="https://katex.org/">KaTeX</Link> and this wonderful <Link href="https://abigailyoung.com/posts/latex-and-markdown">post by Abigail Young.</Link>
    </p>
    </section>
}

export default AboutMe
