import React, {useEffect} from 'react';
import { Link } from 'gatsby';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import  { makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
    fontSize: '75%',
    paddingLeft: '25px',
    paddingBottom: '25px',
    paddingTop: '10px',
    textDecoration: 'none'
    },
    cardLink: {
        textDecoration: 'none'
    }
})

function BlogCard(props) {
    const classes = useStyles()

    useEffect(()=>{
        console.log(props.slug)
    })
    
    return(
        <Link to={props.slug} className={classes.cardLink}>
            <Card className = 'blog-card' elevation={1}>
                <CardContent>
                    <article key={props.id}>
                        <h2>{props.title}</h2>
                        <small>{props.time}</small>
                        <p>{props.excerpt}</p>
                    </article>
                </CardContent>
            </Card>
        </Link>
    )
}
export default BlogCard

