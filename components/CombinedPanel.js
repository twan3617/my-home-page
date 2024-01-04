import { useState } from 'react'; 
import CareerTimeline from './CareerTimeline'
import EducationTimeline from './EducationTimeline'

const CombinedTimelinePanel = () => {
    const [selectedTab, setSelectedTab] = useState('Career');
    return (
        <div>
            <div>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            onClick={() => setSelectedTab('Career')}>
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-light-teal dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-black">
                Career
            </span>
            </button>

            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            onClick={() => setSelectedTab('Education')}>
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-light-teal dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-black">
                Education
            </span>
            </button>
            </div>
            <div>
                {selectedTab === 'Career' && <CareerTimeline />}
                {selectedTab === 'Education' && <EducationTimeline />}
            </div>
        </div>
    )
}


export default CombinedTimelinePanel;