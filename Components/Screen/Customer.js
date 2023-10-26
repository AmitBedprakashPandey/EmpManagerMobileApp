import { useState } from "react";
import { Button, Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Model = ({ close }) => {
  return (
    <Pressable
      style={{
        elevation: 10,
        width: 300,
        height: 200,
        backgroundColor: "#caccd1",
        position: "absolute",
        top: 100,
        left: 50,
        padding: 10,
        borderRadius: 5,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 28, marginTop: 5 }}>Model</Text>
        <Pressable onPress={close}>
          <Icon name="close-sharp" size={40} color={"#52565e"} />
        </Pressable>
      </View>
    </Pressable>
  );
};
export default function Customer(params) {
  const [close, setClose] = useState(true);

  return (
    <>
      <Button title="Open Model" onPress={() => setClose(true)} />
      {close && <Model close={() => setClose(false)} />}
    </>
  );
}
