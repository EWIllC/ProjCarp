import { SafeAreaView, View, Text, Pressable, StyleSheet} from "react-native";

export default function RoomSearch({ navigation }) {
  return (
    <View>
      <Text>Room Search</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Room")}
      >
        <Text>A Room</Text>
      </Pressable>
    </View>
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
