import React from 'react';
import { View,Text} from 'react-native';
import {ChatRoom} from "../../types";

export type ChatListItemProps={
    chatRoom:ChatRoom;
}

const ChatListItem =(props:ChatListItemProps) => {
    const {chatRoom}=props;

   // const user = chatRoom.users[1];

    return(
        <View >
           
            <Text>{chatRoom.lastMessage.content}</Text>
        </View>
    )
};
export default ChatListItem;