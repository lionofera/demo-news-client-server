import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BriefNewsCard from '../Shared/BreifNewsCard/BriefNewsCard';


const Category = () => {
    const catgeronews = useLoaderData();

    return (
        <div>
            <h2>Thiss category has {catgeronews.length} news.</h2>
            {
                catgeronews.map( news => <BriefNewsCard
                key={news._id}
                news = {news}
                ></BriefNewsCard>)
            }
        </div>
    );
};

export default Category;