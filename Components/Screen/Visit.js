import React, { useState } from "react";
import { Pressable, Text, View ,FlatList,TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function Visit({ route, navigation }) {
   const [radioBtnText,setRadioBtntext]=useState('doctor');
   const [radioBtnStatus,setRadioBtnStatus] =useState(true);
   const [punchId, setPunchId] = useState();
   const [selected, setSelected] = useState('Select Area');
   const [clicked, setClicked] = useState(false);
const [punchBtn,setPunchBtn]=useState(false);
const [punchText,setPunchText]=useState('Punch In');
const [punchColor,setPunchColor]=useState('#52565e');
   const areaData = [
    { trpid: "Afghanistan", trpnm: "Bike", action: "false" },
    { trpid: "Afghanis", trpnm: "Train", action: "false" },
    { trpid: "Afghanistan", trpnm: "Bike", action: "false" },
    { trpid: "Afghanis", trpnm: "Train", action: "false" },
    { trpid: "Afghanistan", trpnm: "Bike", action: "false" },
    { trpid: "Afghanis", trpnm: "Train", action: "false" },
    { trpid: "Afghanistan", trpnm: "Bike", action: "false" },
    { trpid: "Afghanis", trpnm: "Train", action: "false" },
    { trpid: "Afghanistan", trpnm: "Bike", action: "false" },
    { trpid: "Afghanis", trpnm: "Train", action: "false" },
    { trpid: "Afghanistan", trpnm: "Bike", action: "false" },
    { trpid: "Afghanis", trpnm: "Train", action: "false" },
    { trpid: "Afghanistan", trpnm: "Bike", action: "false" },
    { trpid: "Afghanis", trpnm: "Train", action: "false" },
    { trpid: "Afghanistan", trpnm: "Bike", action: "false" },
    { trpid: "Afghanis", trpnm: "Train", action: "false" },
    { trpid: "Afghanistan", trpnm: "Bike", action: "false" },
    { trpid: "Afghanis", trpnm: "Train", action: "false" },
    { trpid: "Afghanistan", trpnm: "Bike", action: "false" },
    { trpid: "Afghanis", trpnm: "Train", action: "false" },
    { trpid: "Afghanistan", trpnm: "Bike", action: "false" },
    { trpid: "Afghanis", trpnm: "Train", action: "false" },
    { trpid: "Afghanistan", trpnm: "Bike", action: "false" },
    { trpid: "Afghanis", trpnm: "Train", action: "false" },
    { trpid: "Afghanistan", trpnm: "Bike", action: "false" },
    { trpid: "Afghanis", trpnm: "Train", action: "false" },
    { trpid: "Afghanistan", trpnm: "Bike", action: "false" },
    { trpid: "Afghanis", trpnm: "Train", action: "false" },
  ];
  const customerData=[];
  const [data, setData] = useState(areaData);

  const punchBtnIn=()=>{
    setPunchBtn(true);
    setPunchColor('#00c16e');
    setPunchText('Punch Out');
  }
  const punchBtnOut=()=>{
    setPunchBtn(false);
    setPunchColor('#52565e');
    setPunchText('Punch Out');
  }
   return<>
   {/* Box 1 2 radio btn */}
    <View style={{backgroundColor:'#caccd1',height:70,width:350,margin:20,padding:10,display:'flex',flexDirection:'row',justifyContent:'space-around'}}>        
            <Pressable onPress={()=>setRadioBtntext('doctor')}  style={{display:'flex',flexDirection:'row',padding:10}}>
                {radioBtnText === 'doctor' ? <Icon name="radio-button-on-sharp" size={20} style={{margin:5}}/> : <Icon name="radio-button-off-sharp" size={20} style={{margin:5}}/>}                
                <Text style={{fontSize:26}}>Doctor visit</Text>
            </Pressable>
            <Pressable onPress={()=>setRadioBtntext('other')} style={{display:'flex',flexDirection:'row',padding:10}}>
            {radioBtnText == 'other' ? <Icon name="radio-button-on-sharp" size={20} style={{margin:5}}/> : <Icon name="radio-button-off-sharp" size={20} style={{margin:5}}/>}
                <Text style={{fontSize:26}}>Other visit</Text>
            </Pressable>
    </View>

    <View style={{width:350,height:'auto',margin:20}}>
        {/* Customer status */}
        <View>
            <Text style={{fontSize:20,paddingLeft:15,paddingTop:15}}>Customer Status</Text>
            <View style={{display:'flex',flexDirection:'row'}}>
            <Pressable onPress={()=>setRadioBtnStatus(true)}  style={{display:'flex',flexDirection:'row',padding:10}}>
                        {radioBtnStatus === true ? <Icon name="radio-button-on-sharp" size={20} style={{margin:5}}/> : <Icon name="radio-button-off-sharp" size={20} style={{margin:5}}/>}                
                        <Text style={{fontSize:26}}>Active</Text>
                    </Pressable>
                    <Pressable onPress={()=>setRadioBtnStatus(false)} style={{display:'flex',flexDirection:'row',padding:10}}>
                    {radioBtnStatus == false ? <Icon name="radio-button-on-sharp" size={20} style={{margin:5}}/> : <Icon name="radio-button-off-sharp" size={20} style={{margin:5}}/>}
                        <Text style={{fontSize:26}}>Inactive</Text>
                    </Pressable>

            </View>
        </View>
        {/* area */}
        <View>
            <Text style={{fontSize:20,paddingLeft:15,color:'#caccd1'}}>Area</Text>
            {/* Select */}
            <View style={{paddingLeft: 15,paddingBottom: 5,position: "relative"}}>
                <Pressable style={{width: "100%",height: 40,borderRadius: 0,borderBottomWidth: 1,borderColor: "#caccd1",alignSelf: "center",flexDirection: "row",alignItems: "center",}}onPress={() => setClicked(!clicked)}>
                  <View style={{display: "flex",flexDirection: "row",position: "relative",}}>
                    <Text style={{paddingTop: 5,fontWeight: "600",width: 300,height: 40,fontSize: 18,}}>
                      {selected == "" ? "Select Area" : selected}
                    </Text>
                    {clicked ? (<Icon name="close-outline" size={30} color={"#52565e"} />) : (<Icon name="chevron-down-outline"size={30}color={"#52565e"}/>)}
                  </View>
                </Pressable>
                {clicked ? (<View style={{position: "absolute",zIndex: 1,top: 40,left:15,minHeight: "auto",maxHeight: 200,backgroundColor: "#fff",width: 335,borderWidth: 0.5,borderColor: "#caccd1",}}>
                    <FlatList data={data}renderItem={({ item, index }) => {
                        return (
                          <TouchableOpacity
                            style={{width: "100%",alignSelf: "center",height: 50,justifyContent: "center",borderBottomWidth: 0.5,borderColor: "#8e8e8e",}}onPress={() => {setSelected(item.trpnm);setClicked(!clicked);}}>
                            <Text style={{fontWeight: "500",paddingLeft: 15,fontSize: 24,}}>
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
        {/* customer name */}
        <View>
            <Text style={{fontSize:20,paddingLeft:15,color:'#caccd1'}}>Customer Name</Text>
            {/* Select */}
            <View style={{paddingLeft: 15,paddingBottom: 5,position: "relative"}}>
                <Pressable style={{width: "100%",height: 40,borderRadius: 0,borderBottomWidth: 1,borderColor: "#caccd1",alignSelf: "center",flexDirection: "row",alignItems: "center",}}onPress={() => setClicked(!clicked)}>
                  <View style={{display: "flex",flexDirection: "row",position: "relative",}}>
                    <Text style={{paddingTop: 5,fontWeight: "600",width: 300,height: 40,fontSize: 18,}}>
                      {selected == "" ? "Select Area" : selected}
                    </Text>
                    {clicked ? (<Icon name="close-outline" size={30} color={"#52565e"} />) : (<Icon name="chevron-down-outline"size={30}color={"#52565e"}/>)}
                  </View>
                </Pressable>
                {clicked ? (<View style={{position: "absolute",zIndex: 1,top: 40,left:15,minHeight: "auto",maxHeight: 200,backgroundColor: "#fff",width: 335,borderWidth: 0.5,borderColor: "#caccd1",}}>
                    <FlatList data={data}renderItem={({ item, index }) => {
                        return (
                          <TouchableOpacity
                            style={{width: "100%",alignSelf: "center",height: 50,justifyContent: "center",borderBottomWidth: 0.5,borderColor: "#8e8e8e",}}onPress={() => {setSelected(item.trpnm);setClicked(!clicked);}}>
                            <Text style={{fontWeight: "500",paddingLeft: 15,fontSize: 24,}}>
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

<View style={{display:'flex',justifyContent:'center'}}>

<View style={{height:100,width:100,borderWidth:2,borderRadius:50,display:'flex',justifyContent: 'center',alignItems:'center',margin:20,marginBottom:0}}>
{punchBtn == false ? 
<Pressable onPress={punchBtnIn} style={{height:90,width:90,borderRadius:50,backgroundColor:punchColor,display:'flex',justifyContent: 'center',alignItems:'center'}}>
<Icon name="finger-print-sharp" size={70} color={'#fff'}/>
    </Pressable> :
    <Pressable onPress={punchBtnOut} style={{height:90,width:90,borderRadius:50,backgroundColor:punchColor,display:'flex',justifyContent: 'center',alignItems:'center'}}>
<Icon name="finger-print-sharp" size={70} color={'#fff'}/>
    </Pressable>
}
</View>
<Text style={{fontSize:26,marginLeft:40}}>Punch In</Text>
    </View>
    </View>





    
    </>
} 