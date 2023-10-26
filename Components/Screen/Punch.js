import React, { useRef, useState, useEffect } from "react";
import {  Text,TextInput,  View,Pressable,FlatList,TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import moment from "moment/moment";
import AsyncStorage from "@react-native-async-storage/async-storage";


const trpMod = [
  { trpid: "Afghanistan", trpnm: "Bike", action: "false" },
  { trpid: "Afghanis", trpnm: "Train", action: "false" },
];
export default function Punch({ route, navigation }) {


  const [mode, setMode] = useState();
  const [punch, setPunch] = useState('OUT');
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(trpMod);
  const [selectedTrp, setSelectedTrp] = useState("Select Trasnport Mode");

  const getAsStorag = async () =>{
    const Punch =  await AsyncStorage.getItem('Punch');    
    setPunch(Punch);
    const Mode =  await AsyncStorage.getItem('Mode');
    setMode(Mode);
    const Time =  await AsyncStorage.getItem('Time');
    const Date =  await AsyncStorage.getItem('Date');
    console.log(Punch,Mode,Time,Date);    
    console.log('Data : ',punch);
  }

  useEffect(() => {     
  getAsStorag();
  }, [getAsStorag]);
  const getTime = () => {    
    return  moment().format("h:mm:ss A");;
  };
  const getDate = () => {
    return moment().format("DD MMM YY");
  };
  const generateRandomString = () => {
    const length = 10;
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    return randomString;
  };
  const getCameraUri = () => {
    return route.params.uri;
  };
  const StartPunchSave = async () => {                 
    if (punch === 'OUT') {      
      await AsyncStorage.setItem("Punch", 'IN');     
      await AsyncStorage.setItem('Mode',selectedTrp); 
      await AsyncStorage.setItem('Date',JSON.stringify(getDate())); 
      await AsyncStorage.setItem('Time',JSON.stringify(getTime())); 
      setPunch('IN');
      setMode('Bike');
    } else if (selectedTrp === "Train") {      
      await AsyncStorage.setItem("Punch", 'IN');     
      await AsyncStorage.setItem('Mode',selectedTrp); 
      await AsyncStorage.setItem('Date',JSON.stringify(getDate())); 
      await AsyncStorage.setItem('Time',JSON.stringify(getTime())); 
      setPunch('IN');
      setMode('Train');
    }
  };
  const EndPunchSave = async () => {
    const Punch = await AsyncStorage.getItem("Punch");    
    if (Punch === "IN" ) {
      await AsyncStorage.setItem("Punch", 'OUT');           
      await AsyncStorage.setItem('Date',getDate()); 
      await AsyncStorage.setItem('Time',getTime());     
      setPunch('OUT');
    } else if (Punch === "IN") {
      await AsyncStorage.setItem("Punch", 'OUT');           
      await AsyncStorage.setItem('Date',JSON.stringify(getDate())); 
      await AsyncStorage.setItem('Time',JSON.stringify(getTime()));   
      setPunch('OUT');
    }
  };
  const PunchForm = () => {
    if (selectedTrp == "Bike") {
      if (punch ==='OUT') {
        return (
          <>
            <View style={{ paddingTop: 10, paddingBottom: 10 }}>
              <Text style={{ color: "#caccd1", paddingBottom: 5, fontSize: 18 }}>Start KM</Text>
              <TextInput inputMode="numeric" placeholder="Enter Start Kilometar"style={{padding: 10,fontWeight: "500",fontSize: 18,width: 360,height: 60,backgroundColor: "#f3f4f7",borderRadius: 5,}}/>
            </View>
            <Pressable style={{paddingTop: 10,paddingBottom: 10,display: "flex",flexDirection: "row",}}>
              <Icon name="camera-outline" size={40} color={"#ffc845"} />
              <Text style={{ paddingLeft: 10, paddingTop: 10, fontSize: 24 }}>
                Take Photo
              </Text>
            </Pressable>

            <Pressable style={{backgroundColor: "#00c16e",width: 150,height: 60,borderRadius: 10,justifyContent: "center",alignItems: "center",alignSelf: "center",marginTop: 20,}}onPress={StartPunchSave}>
              <Text style={{ color: "#fff", fontSize: 24, fontWeight: "600" }}>
                Punch in
              </Text>
            </Pressable>
          </>
        );
      } else if (punch === 'IN') {
        return (
          <>
            <View style={{ paddingTop: 10, paddingBottom: 10 }}>
              <Text style={{ color: "#caccd1", paddingBottom: 5, fontSize: 18 }}>
                End KM
              </Text>
              <TextInput inputMode="numeric"placeholder="Enter Transportation mode"style={{padding: 10,fontWeight: "500",fontSize: 18,width: 360,height: 60,backgroundColor: "#f3f4f7",borderRadius: 5,}}/>
              <Pressable style={{paddingTop: 10,paddingBottom: 10,display: "flex",flexDirection: "row",}}>
                <Icon name="camera-outline" size={40} color={"#ffc845"} />
                <Text style={{ paddingLeft: 10, paddingTop: 10, fontSize: 24 }}>
                  Take Photo
                </Text>
              </Pressable>
              <Pressable style={{backgroundColor: "#00c16e",width: 150,height: 60,borderRadius: 10,justifyContent: "center",alignItems: "center",alignSelf: "center",marginTop: 20,}}onPress={EndPunchSave}>
                <Text style={{ color: "#fff", fontSize: 24, fontWeight: "600" }}>
                  Punch out
                </Text>
              </Pressable>
            </View>
          </>
        );
      }
    } else if (selectedTrp === "Train") {
      if (punch === 'OUT') {
        return (
          <>
            <Pressable style={{backgroundColor: "#00c16e",width: 150,height: 60,borderRadius: 10,justifyContent: "center",alignItems: "center",alignSelf: "center",marginTop: 20,}}onPress={StartPunchSave}>
              <Text style={{ color: "#fff", fontSize: 24, fontWeight: "600" }}>
                Punch in
              </Text>
            </Pressable>
          </>
        );
      } else if (punch === 'IN') {
        return (
          <>
            <Pressable style={{backgroundColor: "#00c16e",width: 150,height: 60,borderRadius: 10,justifyContent: "center",alignItems: "center",alignSelf: "center",marginTop: 20,}}onPress={EndPunchSave}>
              <Text style={{ color: "#fff", fontSize: 24, fontWeight: "600" }}>
                Punch out
              </Text>
            </Pressable>
          </>
        );
      }
    }
  };
  const trpSelctor=()=>{
    if (punch === 'OUT') {
      return<View>
      <Text style={{fontSize: 18,color: "#caccd1",paddingTop: 5,paddingBottom: 5,}}>Choose Transportation Mode</Text>
     <View style={{paddingTop: 5,paddingBottom: 5,position: "relative",}}>
       <Pressable style={{width: "100%",height: 50,borderRadius: 0,borderBottomWidth: 1,borderColor: "#caccd1",alignSelf: "center",flexDirection: "row",alignItems: "center",}}onPress={() => setClicked(!clicked)}>
         <View style={{display: "flex",flexDirection: "row",position: "relative",}}>
           <Text style={{paddingTop: 5,fontWeight: "500",width: 330,height: 40,fontSize: 18,}}>
                 {selectedTrp == "" ? "selectedTrp Country" : selectedTrp}
           </Text>
           {clicked ? (<Icon name="close-outline" size={30} color={"#caccd1"} />
           ) : (<Icon name="chevron-down-outline"size={30}color={"#caccd1"}/>
           )}
         </View>
       </Pressable>
       {clicked ? (
         <View style={{position: "absolute",zIndex: 1,top: 55,minHeight: "auto",maxHeight: 200,backgroundColor: "#fff",width: 360,borderWidth: 0.5,borderColor: "#caccd1",}}>
           <FlatList data={data} renderItem={({ item, index }) => {
               return (
                 <TouchableOpacity style={{width: "100%",alignSelf: "center",height: 50,justifyContent: "center",borderBottomWidth: 0.5,borderColor: "#8e8e8e"}}onPress={() => {setSelectedTrp(item.trpnm),setClicked(!clicked)}}>
                   <Text style={{fontWeight: "600",paddingLeft: 15,fontSize: 18,}}>
                     {item.trpnm}
                   </Text>
                 </TouchableOpacity>
               );
             }}
           />
         </View>
       ) : null}
     </View>
</View>  
    }
    
  }
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#fff" }}>
      <View style={{width: 380,height: "auto",padding: 10,borderRadius: 10,}}>
        <View>
          <Text style={{ fontSize: 26, paddingTop: 10 }}>
            Transportation Mode
          </Text>         
           
         {trpSelctor()}
          {PunchForm()}
        </View>
      </View>
    </View>
  );
}
