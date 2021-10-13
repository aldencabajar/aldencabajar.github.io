import Email from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import PageHeader from 'components/utils/header';
import React from 'react';
import Layout from 'components/layout';

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
    'desc':'LinkedIn Profile', 
    'link':'https://www.linkedin.com/in/alden-cabajar-821a4010b/', 
    'icon':<LinkedInIcon style={IconStyle}/>},
    {'channel':'GitHub', 
    'desc':'GitHub Profile', 
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
    <Layout>
      <div className='section-body home'>
        <PageHeader title={'Hello!'} subtitle={'Welcome to my page.'}/>

        <p>I am <b>Alden Cabajar</b>, currently working as a <b> Data Scientist </b> for a healthcare company. This page serves as a portfolio for everything I have worked on so far. 
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
    </Layout>
  )
}

export default Home
