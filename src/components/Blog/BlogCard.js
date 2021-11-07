import React, {useEffect} from 'react';
import { Link } from 'gatsby';
import  { makeStyles} from '@material-ui/styles';
import ContentBox from 'components/utils/ContentBox';

const useStyles = makeStyles({
    root: {
    fontSize: '75%',
    paddingLeft: '25px',
    paddingBottom: '25px',
    paddingTop: '25px',
    textDecoration: 'none',
    color: 'rgb(29, 29, 29)'
    },
    cardLink: {
        textDecoration: 'none'
    },
})

function BlogCard(props) {
    const classes = useStyles()
    useEffect(()=>{
        console.log(props.slug)
    }, [])
    return(
        <ContentBox>
            <Link to={props.slug} className={'blog-link'}>
            <div className = {'blog-card'}>
                <article key={props.id}>
                    <h2>{props.title}</h2>
                    <small>{props.time}</small>
                    <p>{props.excerpt}</p>
                </article>
            </div>
            </Link>
        </ContentBox>
    )
}
export default BlogCard

