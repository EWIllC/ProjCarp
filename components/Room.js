import { View, Text, Button, TextInput } from "react-native";
import { useState, useContext, useEffect } from "react";
import { io } from 'socket.io-client';
import UserContext from "../context/UserContext";
import { db } from "../config/firebase";

//const socket = io('http://localhost:3000');


const sendMessage = (msg) => {
  socket.emit('chat message', msg);
};

export default Room = () => {

  const handleLog = () => {
    console.log(db)
  }

  const dummyData = [
    {name: "joe", count: 4},
    {name: "dan", count: 10}
  ]
  const { user } = useContext(UserContext);
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  // socket.on('connect', () => {
  //   console.log('Connected to server');
  //   socket.join("a room")
  // });

  // socket.on('disconnect', () => {
  //   console.log('Disconnected from server');
  // });

  // socket.on('chat message', (msg) => {
  //   console.log('New message:', msg);
  // });

  return (
    <View>

      {users.map((elem) => <Text style={{fontSize: 30}}>{elem.userName}</Text>)}
      <Button title="log" onPress={() => {handleLog()}} />
    </View>
  )
}
