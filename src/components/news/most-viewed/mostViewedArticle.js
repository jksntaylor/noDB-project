import React from 'react';

function MostViewedArticle (props) {
    return (
        <div className="article">
            <img src={props.photourl} alt={props.caption}/>

            <div className='article-info-container'>
                <a href={props.link} target='_blank' rel='noopener noreferrer'>{props.title}</a>
                <p className="byline">{props.byline}</p>
                <p className="date">{props.date}</p>
            </div>
        </div>
    )
}

export default MostViewedArticle;