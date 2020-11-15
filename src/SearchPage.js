import React from 'react'
import ChannelRow from "./ChannelRow";
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import "./SearchPage.css";
import VideoRow from "./VideoRow";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcfxxRI4jXAzgxe8UqTZVsdH8BJU52o8ZEVg&usqp=CAU"
                channel="Hookypoo's Place"
                verified
                subs="700K"
                noOfVideos={382}
                description="Lorem ipsum Nam varius nisi quam, imperdiet imperdiet enim gravida in. Donec vel nisi sit amet sapien venenatis varius consequat a ante. Praesent non lacus sed elit interdum sollicitudin. Nam finibus metus."
            />
            <hr />

            <VideoRow
                views="600k"
                subs="300k"
                description="Perfecting and Honing web dev skills.....awsome"
                timestamp="30 mins ago"
                channel="Hookypoo's Place"
                title="Learn by Building apps with React JS"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRudU9p9BZfNulTMSw-b2iNU3jbQu7S4Tf-4g&usqp=CAU"
            />
            <VideoRow
                views="600k"
                subs="300k"
                description="Perfecting and Honing web dev skills.....awsome"
                timestamp="30 mins ago"
                channel="Hookypoo's Place"
                title="Learn by Building apps with React JS"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRudU9p9BZfNulTMSw-b2iNU3jbQu7S4Tf-4g&usqp=CAU"
            />
            <VideoRow
                views="600k"
                subs="300k"
                description="Perfecting and Honing web dev skills.....awsome"
                timestamp="30 mins ago"
                channel="Hookypoo's Place"
                title="Learn by Building apps with React JS"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRudU9p9BZfNulTMSw-b2iNU3jbQu7S4Tf-4g&usqp=CAU"
            />
            <VideoRow
                views="600k"
                subs="300k"
                description="Perfecting and Honing web dev skills.....awsome"
                timestamp="30 mins ago"
                channel="Hookypoo's Place"
                title="Learn by Building apps with React JS"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRudU9p9BZfNulTMSw-b2iNU3jbQu7S4Tf-4g&usqp=CAU"
            />
            <VideoRow
                views="600k"
                subs="300k"
                description="Perfecting and Honing web dev skills.....awsome"
                timestamp="30 mins ago"
                channel="Hookypoo's Place"
                title="Learn by Building apps with React JS"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRudU9p9BZfNulTMSw-b2iNU3jbQu7S4Tf-4g&usqp=CAU"
            />
            <VideoRow
                views="600k"
                subs="300k"
                description="Perfecting and Honing web dev skills.....awsome"
                timestamp="30 mins ago"
                channel="Hookypoo's Place"
                title="Learn by Building apps with React JS"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRudU9p9BZfNulTMSw-b2iNU3jbQu7S4Tf-4g&usqp=CAU"
            />
            <VideoRow
                views="600k"
                subs="300k"
                description="Perfecting and Honing web dev skills.....awsome"
                timestamp="30 mins ago"
                channel="Hookypoo's Place"
                title="Learn by Building apps with React JS"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRudU9p9BZfNulTMSw-b2iNU3jbQu7S4Tf-4g&usqp=CAU"
            />
            <VideoRow
                views="600k"
                subs="300k"
                description="Perfecting and Honing web dev skills.....awsome"
                timestamp="30 mins ago"
                channel="Hookypoo's Place"
                title="Learn by Building apps with React JS"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRudU9p9BZfNulTMSw-b2iNU3jbQu7S4Tf-4g&usqp=CAU"
            />
        </div>
    );
}

export default SearchPage;
