import React from "react";
import { View, SafeAreaView, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useState, useContext, useEffect } from "react"
import UserContext from "../context/UserContext";
import CreateUser from "./CreateUser";

export default function Home({ navigation }) {

  const { user, setUser } = useContext(UserContext);

  return (
    <View>
      {user.userName.length === 0 ?
        <Pressable
          style={styles.button}
          onPress = {(() => {navigation.navigate("Create-User")
          })}
        >
          <Text>Create a temporary user?</Text>
        </Pressable>
        :
        <SafeAreaView>
          <Text>Hello {user.userName}</Text>
          <Pressable
            style={styles.button}
            onPress = {(() => {navigation.navigate("Room-Search")
            })}
          >
            <Text>Search for a room</Text>
          </Pressable>
        </SafeAreaView>

      }
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30
  },
  button: {
    flexDirection:"column",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    borderStyle: "solid",
    borderWidth: 1.5,
    borderColor: "white",
    backgroundColor: "#5391f5",
  },
})
