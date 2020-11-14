import React from 'react'
import ChannelRow from "./ChannelRow";
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import "./SearchPage.css";

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
                Channel="Hookypoo's Place"
                verified=""
                subs="700K"
                noOfVideos={382}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper nisl nec varius iaculis. Suspendisse luctus dui ac lobortis volutpat. Nam varius nisi quam, imperdiet imperdiet enim gravida in. Donec vel nisi sit amet sapien venenatis varius consequat a ante. Praesent non lacus sed elit interdum sollicitudin. Nam finibus metus."
            />
        </div>
    );
}

export default SearchPage;
