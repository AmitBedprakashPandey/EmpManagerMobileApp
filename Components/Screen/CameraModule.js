import { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,  
  View,
  Image,
} from "react-native";
import { Camera} from "expo-camera";
import * as mediaLibrary from "expo-media-library";
import Icons from "react-native-vector-icons/Ionicons";

export default function CameraModule({ navigation }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFLash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);
  
  useEffect(() => {
    async () => {   
      mediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    };
  }, []);

  const saveImage = async () => {
    if (image) {
    const data = await mediaLibrary.createAssetAsync(image);
    navigation.navigate("Punch",{uri:data.uri});
    } else {
      console.log(e);
    }
  };
  const takePic = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    } else {
    }
  };
  if (hasCameraPermission === false) {
    return <Text>No Access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      {!image ? (
        <Camera
          style={styles.camera}
          type={type}
          flashMode={flash}
          ref={cameraRef}
        >
          {/* FLesh Light */}
        </Camera>
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}
      <View>
        {image ? (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 50,
            }}
          >
            <Icons
              style={styles.Retakebtn}
              name="close-outline"
              size={80}
              onPress={() => setImage(null)}
            />
            <Icons
              style={styles.saveBtn}
              name="checkmark-outline"
              size={80}
              onPress={saveImage}
            />
          </View>
        ) : (
          <Icons
            style={styles.camBtn}
            name="camera-outline"
            color={"black"}
            size={50}
            onPress={takePic}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#52565e",
    alignItems: "center",
  },
  camera: {
    width: 350,
    height: 350,
    borderRadius: 10,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 90,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  camBtn: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 100,
    marginTop: 20,
  },
  Retakebtn: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 50,
    marginRight: 50,
  },
  saveBtn: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 50,
    marginLeft: 50,
  },
});
