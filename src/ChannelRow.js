import React from 'react';
import "./ChannelRow.css";
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import Avatar from "@material-ui/core/Avatar";

function ChannelRow({ image, channel, verified, subs, noOfVideoes, description }) {
    return (
        <div className="ChannelRow">
            <Avatar className="channelRow__logo" alt={channel} src={image} />
            <div className="channelRow__text">
                <h4>
                    {channel} {verified && <VerifiedIcon />}
                </h4>
            </div>
        </div>
    );
}

export default ChannelRow

