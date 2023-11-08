
export const handleSubmit = (props) => {
  if(props.type === "setUserName") {
    const { userNameText, user, setUser, navigation } = props;
    const update = {
      userName: userNameText,
      room: user.room
    }
    setUser(update);
    navigation.navigate("Home");
  }
  if(props.type === "createRoom") {
    const { roomNameText, passWordText } = props;
    console.log("firebase will have to do the rest");
  }
}
