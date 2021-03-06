// Zeigt eine Liste aller Messages

import React from "react";
import MessageList from "../containers/MessageList";
import UserAside from "./UserAside"

const MessageTimeline = props => {
    return (
        <div className="row mt-4">
            <UserAside profileImageUrl={props.profileImageUrl} username={props.username}/>
            <MessageList />
        </div>
    )
}

export default MessageTimeline;