import { useState } from "react";
import { SafeAreaView, Pressable, TextInput, StyleSheet } from "react-native";
import { handleSubmit } from "../functions/functions";

export default CreateRoom = () => {
  const [roomNameText, setRoomNameText] = useState("");
  const [passWordText, setPassWordText] = useState("");

  return (
    <SafeAreaView>
    <Text>Enter Room Name</Text>
    <TextInput
      style={styles.input}
      onChangeText={setRoomNameText}
      value={""}
    />
    <TextInput
      style={styles.input}
      onChangeText={setPassWordText}
      value={""}
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
});
