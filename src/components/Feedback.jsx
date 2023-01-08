import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';


const Feedback = ({feedback, rating, username, position}) => {
  return (
    <div className='feedback-container'>
        <div className="feedback">
            <p>{feedback}</p>
        </div>
        <div className="rating">
            <div className="stars">
                {
                    new Array(5).fill(null).map((_,idx)=>{
                       return <>
                       {
                        idx>=rating ? <StarBorderIcon sx = {{color:"#00F59B" }}/> : <StarIcon sx={{color:"#00F59B" }}/>
                       }
                       </>
                    })
                }
            </div>
        </div>
        <div className="user">
            <h3>{username}</h3>
            <p>{position}</p>
        </div>
    </div>
  )
}

export default Feedback