import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Pressable,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useState, Fragment, useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import FAIcon from "react-native-vector-icons/FontAwesome5";
import { TextInput } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home({ route, navigation }) {
  const action = route.pramas;
  const [punch, setPunch] = useState();
  const[time,setTime] = useState();
  const[date,setDate] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const getAsStorag = async () =>{
    const Punch =  await AsyncStorage.getItem('Punch');
        setPunch(Punch);
    const Time =  await AsyncStorage.getItem('Time');
    setTime(JSON.parse(Time));
    const Date =  await AsyncStorage.getItem('Date');
    setDate(JSON.parse(Date));
    console.log(Punch,Time,Date);
  }


  useEffect(() =>{
  getAsStorag();  
  },[getAsStorag()]);

  return (
    <View style={{position:'relative'}}>
      <StatusBar backgroundColor={"#f85a40"} />
      {/* Navbar */}
      <View style={styles.navbar}>
        {/* <Pressable onPress={() => drawer.current.openDrawer()}>
            <Icon name="menu" size={40} color="#fff" />
          </Pressable> */}
        <Text style={{ color: "#fff", fontSize: 40 }}>Dashbord</Text>
        <View style={{ display: "flex", flexDirection: "row", gap: 15 }}>
          <Pressable>
            <Icon name="mail-outline" size={30} color={"#fff"} />
          </Pressable>
          <Pressable>
            <Icon name="notifications-outline" size={30} color={"#fff"} />
          </Pressable>
          <Pressable>
            <Icon name="sync-outline" size={30} color={"#fff"} />
          </Pressable>
        </View>
      </View>
      {/* Punch Box */}
      <View style={styles.PunchBox}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Icon name="person-circle-outline" size={100} color={"#fff"} />
          <View
            style={{ display: "flex", flexDirection: "column", marginTop: 20 }}
          >
            <Text style={{ color: "#fff", fontSize: 14 }}>Hello</Text>
            <Text style={{ color: "#fff", fontSize: 24 }}>Amit Pandey</Text>
            <Text style={{ color: "#fff", fontSize: 14 }}>
              You Have Punched in @
            </Text>
            <Text style={{ color: "#fff", fontSize: 14 }}>
              {date} {time}
            </Text>
          </View>
        </View>
        <View style={{ marginRight: 15 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Punch")}style={{borderRadius: 50,borderColor: punch == 'IN' ? '#34bf49' : '#fff',borderWidth: 2,padding: 10,marginTop: 10,}}>            
             <Icon name="finger-print-outline"size={60}color={punch === 'IN' ? '#34bf49' : '#fff'}/>
          </TouchableOpacity>
        </View>
      </View>
      {/* Home Count */}
      <View style={{ backgroundColor: "#037ef3",padding: 10,margin: 15,borderRadius: 5,display: "flex",flexDirection: "row",justifyContent: "space-around",elevation: 5}}>
          {/* Total Visit */}
          <View style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Text style={{color:'#fff',fontSize:20}}>Total Visit</Text>
            <Text style={{color:'#fff',fontSize:20}}>14</Text>
          </View>  
          {/* Divider Bar */}
          <View style={{borderWidth:1,borderColor:'#fff',backgroundColor:'#fff',marginLeft:15}}></View>
          {/* Total Collection */}
          <View style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <Text style={{color:'#fff',fontSize:20}}>Total Collection</Text>
          <Text style={{color:'#fff',fontSize:20}}>0</Text>
          </View>
      </View>
      {/* home Menu */}
      <View style={{width:400,height:'auto',padding:16,backgroundColor:'#f3f4f7'}}>
     {/* Row 1 Vist Expense Cutomer */} 
          <View style={{display:'flex',flexDirection:'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate("Visit")} style={{width:120,height:130,borderWidth:0.3,display:'flex',justifyContent:'center'}}>
            <View style={{display:'flex',flexDirection:'column',alignItems:'center'}}>      
          <Text style={{color:'#52565e'}}><Icon name="person-sharp" size={60}/></Text>
          <Text style={{color:'#52565e',fontSize:30}}>Visit</Text>
          </View>
            </TouchableOpacity>        
            <TouchableOpacity onPress={() => navigation.navigate("Expense")} style={{width:120,height:130,borderWidth:0.3,display:'flex',justifyContent:'center'}}>
            <View style={{display:'flex',flexDirection:'column',alignItems:'center'}}>      
          <Text style={{color:'#52565e'}}><Icon name="wallet-sharp" size={60}/></Text>
          <Text style={{color:'#52565e',fontSize:30}}>Expense</Text>      
            </View>
            </TouchableOpacity>        
            <TouchableOpacity onPress={() => navigation.navigate("Customer")} style={{width:120,height:130,borderWidth:0.3,display:'flex',justifyContent:'center'}}>
            <View style={{display:'flex',flexDirection:'column',alignItems:'center'}}>      
          <Text style={{color:'#52565e'}}><Icon name="people-sharp" size={60}/></Text>
          <Text style={{color:'#52565e',fontSize:30}}>Customer</Text>
          </View>

            </TouchableOpacity>        
          </View>      
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#f85a40",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#ecf0f1",
  },
  PunchBox: {
    backgroundColor: "#037ef3",
    padding: 10,
    margin: 15,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
