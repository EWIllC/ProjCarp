import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useState, useEffect } from "react";
import UserContext from './context/UserContext';
import CreateUser from './components/CreateUser';
import RoomSearch from './components/RoomSearch';
import CreateRoom from "./components/CreateRoom"
import Room from "./components/Room"
import Home from "./components/Home";

export default function App() {
  const Stack = createNativeStackNavigator();
  useEffect(() => {
  })

  const [user, setUser] = useState({userName: "", room: []});
  const userProps = {user, setUser};
  return (
    <UserContext.Provider value={userProps}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Create-User" component={CreateUser} />
        <Stack.Screen name="Room-Search" component={RoomSearch} />
        <Stack.Screen name="Create-Room" component={CreateRoom} />
        <Stack.Screen name="Room" component={Room} />
      </Stack.Navigator>
    </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
