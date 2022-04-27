import React from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';

import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
    {
        id: 'q1',
        author: 'Max',
        text: 'learning react is fun'
    },
    {
        id: 'q2',
        author: 'David',
        text: 'Second quote goes here'
    },
];

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>No Quote found</p>;
    };

    return (
        <React.Fragment>            
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={match.path} exact>
                <div className="centered">
                    <Link className='btn--flat' 
                        to={`${match.url}/comments`}>Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </React.Fragment>
    );
};

export default QuoteDetail;