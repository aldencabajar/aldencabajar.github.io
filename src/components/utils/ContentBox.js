import React from 'react';
import { makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    borderStyle: {
        boxShadow: "0px 0px 12px 0px rgba(82, 82, 82, 0.20)",
        borderRadius: "15px",
        color: "rgba(70, 70, 70, 0.9)",
    }
})


export default function ContentBox(props) {
    const classes = useStyles()

    return(
        <div className={classes.borderStyle}>
            {props.children}
        </div>
    )
}