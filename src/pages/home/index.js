import React, { Component } from 'react';
import LikertScale from 'likert-react';

export default class Home extends Component {

    render() {
        const onClick = (q, n) => console.info('question: ' + q + ' answer: ' + n);
        const reviews = [
            { question: 'Code is readable' },
            { question: 'Tests are comprehensive' },
            { question: 'Webpack is configured well' }
          ];

        return(
        <LikertScale
            reviews={reviews}
            onClick={onClick}
            full-line
        />)
    }
}