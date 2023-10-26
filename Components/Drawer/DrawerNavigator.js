import { Text, View ,Button} from "react-native";
import react from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Main from "./Main";
const Drawer = createDrawerNavigator();
export default function DrawerNavigator({navigation}) {

    function HomeScreen({ navigation }) {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
              onPress={() => navigation.navigate('Punch')}
              title="Go to notifications"
            />
          </View>
        );
      }
      
      function NotificationsScreen({ navigation }) {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
          </View>
        );
      }

  return (
    <Drawer.Navigator >
        <Drawer.Screen name="Main"  component={Main} style={{backgroundColor: 'black'}} options={{headerShown:false,}} />        
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />   
    </Drawer.Navigator>
  );
}


