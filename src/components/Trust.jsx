import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Service from './Service';

const factors = [
    {
        id : 1,
        logo : <PersonIcon />,
        title : "7,000 Happy users",
        msg : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum obcaecati quo incidunt atque totam hic in delectus voluptatibus error doloremque.",
    },
    {
        id : 2,
        logo : <SupportAgentIcon />,
        title : "24/7 Support",
        msg : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum obcaecati quo incidunt atque totam hic in delectus voluptatibus error doloremque.",
    },
    {
        id : 1,
        logo : <ConnectWithoutContactIcon />,
        title : "Global community",
        msg : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum obcaecati quo incidunt atque totam hic in delectus voluptatibus error doloremque.",
    },
];

const Trust = () => {
  return (
    <div className='trust-container'>
        <div className="trust-intro">
            <h2>
                Build a powerful website for your startup.
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic explicabo modi repellat dolores nesciunt exercitationem amet quas unde laboriosam repudiandae.</p>

            <a href="#" className='btn-filled'>Read more</a>
        </div>

        <div className="trust-gainers">
            {
                factors.map((data, index) => {
                    return <Service logo = {data.logo} title = {data.title} description = {data.msg} />
                })
            }
        </div>
    </div>
  )
}

export default Trust