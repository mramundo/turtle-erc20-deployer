import React from 'react'
import Navbar from '../Navbar'
import ToastContainer from '../ToastContainer'

const Page = ({ content }) => {
    return (
        <div>
            <Navbar />
            <ToastContainer />
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">{content}</div>
        </div>
    )
}

export default Page
