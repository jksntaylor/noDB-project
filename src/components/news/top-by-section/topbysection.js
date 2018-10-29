import React from 'react';

function TopBySection (props) {
    return (
        <div>
            <a href={props.link} target='_blank'>{props.title}</a>
            <h5>{props.byline}</h5>
            <h2>{props.abstract}</h2>
            <h3>{props.date}</h3>
        </div>
    )
}

export default TopBySection;