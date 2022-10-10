import React, { useState } from "react";
import socket from "./socket.js";
import axios from "axios";


export default function JoinBlock({ onLogin }) {
  const [roomId, setRoomId] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);

  const onEnter = async () => {
    if (!roomId || !userName) {
      return alert('Неверные данные');
    }
    const obj ={
      roomId,userName
    }
    setLoading(true)
    await axios.post('/rooms',obj)
    onLogin(obj);
  };


  return (
    <div>
      <div className="join-block">
        <input
          className="join-block input"
          type="text"
          placeholder="Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Ваше имя"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          disabled={isLoading}
          onClick={onEnter}
          className="button button-success"
        >
          {isLoading ? "ВХОД..." : "ВОЙТИ"}
        </button>
      </div>
    </div>
  );
}
