import React,{useEffect,useState} from "react";
import queryString from "query-string";
import './Chat.css'

const Chat=({location})=>{
    let parsedString=queryString.parse(location.search)
    console.log(parsedString)
    return(
        <h1>Chat</h1>
    )
}


export default Chat;