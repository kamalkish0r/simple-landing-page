import React from 'react'
import Feature from './Feature'
import CheckIcon from '@mui/icons-material/Check';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import kamal from "../images/kamal.jpg"

const features = [
    {
        id : 1,
        title : "Manage and Track Your Projects",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, sapiente asperiores sunt ipsam fugit iusto!", 
        bullets : ["Create posts, reels and stories", "Publish your facebook posts dynamically", "Schedule any Twitter posts"]
    },
    {
        id : 2,
        title : "Easily manage your team's tasks",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, sapiente asperiores sunt ipsam fugit iusto!", 
        bullets : ["Create posts, reels and stories", "Publish your facebook posts dynamically", "Schedule any Twitter posts"]
    },
    {
        id : 3,
        title : "Simple financial overview for you",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, sapiente asperiores sunt ipsam fugit iusto!", 
        bullets : ["Create posts, reels and stories", "Publish your facebook posts dynamically", "Schedule any Twitter posts"]
    },
];

const FeatureExplanation = () => {
  return (
    <div className='feature-explaination-container'>
        <div className="feature-block">
            <div className="feature-img-container">
                <div className="feature-img">
                    <h3>Your Task</h3>
                    <ul>
                        <li>
                            <div className="bullet-style">
                                <CheckIcon />
                            </div>
                            <div className="text">
                                <h4>Get your soft done</h4>
                                <p>Completed</p>
                            </div>
                        </li>
                        <li>
                             <div className="bullet-style">
                                <CheckIcon />
                            </div>
                            <div className="text">
                                <h4>Get your soft done</h4>
                                <p>Completed</p>
                            </div>
                        </li>
                        <li>
                             <div className="bullet-style">
                                <CheckIcon />
                            </div>
                            <div className="text">
                                <h4>Get your soft done</h4>
                                <p>Completed</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="feature-description-container">
                <Feature title = {features[0].title} description = {features[0].desc} bullets = {features[0].bullets} />
            </div>
        </div>

        <div className="feature-block fb-2">
            <div className="feature-img-container">
                <div className="feature-img">
                    <h3>Total members</h3>
                    <ul>
                        <li>
                            <div className="bullet-style">
                                <img src={kamal} alt="" />
                            </div>
                            <div className="text">
                                <h4>Fred Marcos</h4>
                                <p>Finance</p>
                            </div>
                            <div className="options">
                                <MoreHorizIcon />
                            </div>
                        </li>
                        <li>
                             <div className="bullet-style">
                                 <img src={kamal} alt="" />
                            </div>
                            <div className="text">
                                <h4>Mark Tesla</h4>
                                <p>Marketing</p>
                            </div>
                            <div className="options">
                                <MoreHorizIcon />
                            </div>
                        </li>
                        <li>
                             <div className="bullet-style">
                                <img src={kamal} alt="" />
                            </div>
                            <div className="text">
                                <h4>Elan Lanvend</h4>
                                <p>Tech</p>
                            </div>
                            <div className="options">
                                <MoreHorizIcon />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
             <div className="feature-description-container">
                <Feature title = {features[1].title} description = {features[1].desc} bullets = {features[1].bullets} />
            </div>
        </div>

        <div className="feature-block">
            <div className="feature-img-container">
                <div className="feature-img">
                    <h3>Your Task</h3>
                    <ul>
                        <li>
                            <div className="bullet-style">
                                <CheckIcon />
                            </div>
                            <div className="text">
                                <h4>Get your soft done</h4>
                                <p>Completed</p>
                            </div>
                        </li>
                        <li>
                             <div className="bullet-style">
                                <CheckIcon />
                            </div>
                            <div className="text">
                                <h4>Get your soft done</h4>
                                <p>Completed</p>
                            </div>
                        </li>
                        <li>
                             <div className="bullet-style">
                                <CheckIcon />
                            </div>
                            <div className="text">
                                <h4>Get your soft done</h4>
                                <p>Completed</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="feature-description-container">
                <Feature title = {features[2].title} description = {features[2].desc} bullets = {features[2].bullets} />
            </div>
        </div>
    </div>
  )
}

export default FeatureExplanation