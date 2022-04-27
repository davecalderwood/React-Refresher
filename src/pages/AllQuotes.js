import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

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

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES} />
    );
};

export default AllQuotes;