import Email from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

const IconStyle = {
  position: 'relative',
  color: 'black',
}

const channels = [
    {'channel': 'Email',  
    'desc': 'aldencabajar@gmail.com', 
    'link': 'mailto:aldencabajar@gmail.com',
    'icon': <Email style={IconStyle}/>},
    {'channel': 'LinkedIn', 
    'desc':'https://www.linkedin.com/in/alden-cabajar-821a4010b/', 
    'link':'https://www.linkedin.com/in/alden-cabajar-821a4010b/', 
    'icon':<LinkedInIcon style={IconStyle}/>},
    {'channel':'GitHub', 
    'desc':'https://github.com/aldencabajar', 
    'link':'https://github.com/aldencabajar', 
    'icon': <GitHubIcon style={IconStyle}/>}
]
const useStyles = makeStyles((theme)=>({
  button: {
    margin: theme.spacing(1),
    textTransform: "none",
  }
}))

const Home=() => {
  const classes = useStyles()
  return (
    <div className='section-body home'>
      <header className='section-header'> 
        <h1>Hello! </h1>
        <h3>Welcome to my page.</h3>
      </header>
      <p>I am Alden, currently working as a Data Scientist for a healthcare company. This page serves as a portfolio for everything I have worked on so far. 
          This will also contain my thoughts and ramblings in the future.</p> 
      <p> For future engagements, I am active in the following channels. </p>
      {
        channels.map((data)=>{
          return(
            <div className='channels'>
              {/* {data.icon} */}
              {/* <p style={{'paddingLeft': '20px'}}>{data.link}</p> */}
              <Button 
              variant="outlined" 
              color="primary" 
              startIcon={data.icon}
              href={data.link}
              className={classes.button}>
                {data.desc}
              </Button>
            </div>
            )
        })

      }

    </div>
  )
}

export default Home
