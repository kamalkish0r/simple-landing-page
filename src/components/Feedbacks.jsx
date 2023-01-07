import React from 'react'
import Feedback from './Feedback'

const feedbacks = [
    {
        id : 1,
        feedback : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque! Repellat voluptate doloribus provident nulla.",
        rating : 5,
        username : "Ronald Richards",
        position : "CEO-Ultra"
    },
    {
        id : 2,
        feedback : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque! Repellat voluptate doloribus provident nulla.",
        rating : 5,
        username : "Ronald Richards",
        position : "CEO-Ultra"
    },
    {
        id : 3,
        feedback : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque! Repellat voluptate doloribus provident nulla.",
        rating : 5,
        username : "Ronald Richards",
        position : "CEO-Ultra"
    },
    {
        id : 4,
        feedback : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque! Repellat voluptate doloribus provident nulla.",
        rating : 5,
        username : "Ronald Richards",
        position : "CEO-Ultra"
    },
    {
        id : 5,
        feedback : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque! Repellat voluptate doloribus provident nulla.",
        rating : 5,
        username : "Ronald Richards",
        position : "CEO-Ultra"
    },
    {
        id : 6,
        feedback : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque! Repellat voluptate doloribus provident nulla.",
        rating : 5,
        username : "Ronald Richards",
        position : "CEO-Ultra"
    },
    {
        id : 7,
        feedback : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque! Repellat voluptate doloribus provident nulla.",
        rating : 5,
        username : "Ronald Richards",
        position : "CEO-Ultra"
    },
    {
        id : 8,
        feedback : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque! Repellat voluptate doloribus provident nulla.",
        rating : 5,
        username : "Ronald Richards",
        position : "CEO-Ultra"
    },
    {
        id : 9,
        feedback : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque! Repellat voluptate doloribus provident nulla.",
        rating : 5,
        username : "Ronald Richards",
        position : "CEO-Ultra"
    },
];

const Feedbacks = () => {
  return (
    <div className='feedbacks-container'>
        <div className="feedbacks-intro">
            <h2>Don't take our words for it - listen to our clients</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum aut incidunt mollitia, laboriosam numquam nemo?
            </p>
        </div>

        <div className="floating-feedbacks">
            <div className="row">
                {feedbacks.map((data, index) => {
                    return <Feedback feedback={data.feedback} rating={data.rating} username={data.username} position={data.position} />
                })}
            </div>
            <div className="row">
                {
                    feedbacks.map((data, index) => {
                    return <Feedback feedback={data.feedback} rating={data.rating} username={data.username} position={data.position} />
                })}
            </div>
        </div>
    </div>
  )
}

export default Feedbacks