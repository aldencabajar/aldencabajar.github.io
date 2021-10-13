import React from 'react';
import Divider from '@material-ui/core/Divider';

export default function PageHeader(props) {
    return(
        <header className='section-header'> 
                <h1>{props.title}</h1>
                <h3>{props.subtitle}</h3>
                <Divider />
        </header>    
    )
}



