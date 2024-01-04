import { useState } from 'react'; 
import CareerTimeline from './CareerTimeline'
import EducationTimeline from './EducationTimeline'
import BlogSection from './BlogSection'
import AboutMe from './AboutMe'


type PostProps = {
    posts: { date: string; title: string; id: string}[];
  }
  
const CombinedTopPanel: React.FC<PostProps> = ({ posts }) => {
    const [selectedTab, setSelectedTab] = useState('About Me');
    return (
        <>
            <div className="flex items-center justify-center">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            onClick={() => setSelectedTab('About Me')}>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-light-teal dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-black">
                About Me
            </span>
            </button>

            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            onClick={() => setSelectedTab('Blog')}>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-light-teal dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-black">
                Blog
            </span>
            </button>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            onClick={() => setSelectedTab('Career')}>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-light-teal dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-black">
                Career
            </span>
            </button>

            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            onClick={() => setSelectedTab('Education')}>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-light-teal dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-black">
                Education
            </span>
            </button>
            </div>
            <div>
                {selectedTab === 'About Me' && <AboutMe />}
                {selectedTab === 'Blog' && <BlogSection posts={ posts }/>}
                {selectedTab === 'Career' && <CareerTimeline />}
                {selectedTab === 'Education' && <EducationTimeline />}
            </div>
        </>
    )
}

export default CombinedTopPanel