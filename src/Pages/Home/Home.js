import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BriefNewsCard from '../Shared/BreifNewsCard/BriefNewsCard';

const Home = () => {
    const allnews = useLoaderData();
    return (
        <div>
            <h2> Demo news, totala {allnews.length} news.</h2>
            {
                allnews.map( news => <BriefNewsCard
                key={news._id}
                news={news}>
                </BriefNewsCard>)
            }
        </div>
    );
};

export default Home;