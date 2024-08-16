import React from 'react'
import Header from '../Header'
import Modules from '../Modules'
import CourseList from '../Courselist'
import "./index.css"
import TestSchedule from '../TestSchedule'

const modules = [
    { id: 1, total: 2, text: 'Acadamics', color: 'orange' },
    { id: 2, total: 5, text: 'Mess Management', color: 'green', },
    { id: 3, total: 10, text: 'Healthcare Center', color: 'blue' },
    { id: 4, total: 10, text: 'Scholarship', color: 'blue' },
];

const Body = () => {
    return (
        <div className='w-100 course-wrapper'>
            <Header />
            <h4 className='mx-3 d-block'>Welcome Back, User</h4>
            <div className='d-flex justify-content-around'>
                <div>
                    <div className='d-flex gap-5 mt-4 '>
                        {modules.map(m => (
                            <Modules key={m.id} each={m} />
                        ))}
                    </div>
                    <div>
                        <CourseList />
                    </div>
                </div>
                <TestSchedule />
            </div>
        </div>
    );
};

export default Body;