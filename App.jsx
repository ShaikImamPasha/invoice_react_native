import { NavigationContainer } from "@react-navigation/native";
import "./global.css"
import { Text, View } from "react-native";
import Rootstack from "./src/Navigations/Rootstack";
import { useEffect } from "react";
import BootSplash from "react-native-bootsplash";



function App()  {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);
  return (
  
   <NavigationContainer
   >
    <Rootstack></Rootstack>
   </NavigationContainer>
  );
}



export default App;
