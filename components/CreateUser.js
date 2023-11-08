import React from "react";
import { SafeAreaView, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useState, useContext } from "react"
import UserContext from "../context/UserContext";
import { handleSubmit } from "../functions/functions";

export default function CreateUser({ navigation }) {
  const { user, setUser } = useContext(UserContext);
  const [userNameText, setUserNameText] = useState("");

  return (
    <SafeAreaView>
      <Text style={styles.title}>Home</Text>
      <Text>Enter your username</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUserNameText}
        value={userNameText}
      />
      <Pressable
        style={styles.button}
        onPress={() => handleSubmit({
          userNameText, type: "setUserName",
          user, setUser, navigation
        })}
      >
        <Text>Submit</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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
  buttonInnerText: {
    fontSize: 30,
    color: "white",
  }
})
