import { NavigationContainer } from "@react-navigation/native";
import "./global.css"
import { Text, View } from "react-native";
import Rootstack from "./src/Navigations/Rootstack";

global.currentRoutePath = null;

function App()  {

  return (
  
   <NavigationContainer
   onStateChange={(state) => {
    if (state) {
      // Update the global variable when navigation state changes
      global.currentRoutePath = state.routes[state.index]?.name;
      console.log("Current path:", global.currentRoutePath);
    }
  }}
   >
    <Rootstack></Rootstack>
   </NavigationContainer>
  );
}



export default App;
