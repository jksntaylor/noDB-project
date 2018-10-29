import React, { Component} from 'react';
import axios from 'axios';
import MostViewedArticle from './most-viewed/mostViewedArticle';
const apiKey = require('../../config')
const nytKey = apiKey.nytKey;

export default class News extends Component {
    constructor() {
        super()
        this.state = {
            results: [],
        }
        this.getMostViewedByDay = this.getMostViewedByDay.bind(this);
        this.getMostViewedByWeek = this.getMostViewedByWeek.bind(this);
        this.getMostViewedByMonth = this.getMostViewedByMonth.bind(this);
    }

    getMostViewedByDay () {
        axios.get(`https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json?api-key=${nytKey}`).then(response => {
                let results = response.data.results;
                this.setState({results: results})
         })
    }
    
    getMostViewedByWeek () {
        axios.get(`https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=${nytKey}`).then(response => {
                let results = response.data.results;
                this.setState({results: results})
         })
    }
    
    getMostViewedByMonth () {
        axios.get(`https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/30.json?api-key=${nytKey}`).then(response => {
                let results = response.data.results;
                this.setState({results: results})
         })
    }

    componentDidMount () {
        this.getMostViewedByDay();
    }

    render() {
        var articleList = this.state.results.map(e => {
            return <MostViewedArticle
            key = {e.id} 
            title= {e.title}
            link={e.url}
            byline={e.byline}
            abstract={e.abstract}
            date={e.published_date}
            photourl={e.media[0]['media-metadata'][4].url}
            caption={e.media[0].caption}
            />
        })
        
        return (
            <div className="news-component">
                <h1>MOST POPULAR STORIES</h1>
                <div className="buttons">
                    <button onClick={() => this.getMostViewedByDay()}>Day</button>
                    <button className='week-button' onClick={() => this.getMostViewedByWeek()}>Week</button>
                    <button onClick={() => this.getMostViewedByMonth()}>Month</button>
                </div>
                <div className="article-container">
                    {articleList}
                </div>
            </div>
        )
    }
};