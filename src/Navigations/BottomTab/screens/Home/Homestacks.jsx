import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../../../../screens/home/Home"
import Dashboard from "../../../../screens/home/Dashboard"
import withProtectedRoute from "../../../ProtectedRoute"


const Homestacksnavigations=createNativeStackNavigator()
const Homestacks = () => {
  return (
    <Homestacksnavigations.Navigator>
        <Homestacksnavigations.Screen
        component={Home}
        name="maindashboard"
        // options={{
        //     headerShown:false
        // }}
        >

        </Homestacksnavigations.Screen>
        <Homestacksnavigations.Screen
        component={Dashboard}
        name="dashboardcount"
        >

        </Homestacksnavigations.Screen>
    </Homestacksnavigations.Navigator>
  )
}

export default Homestacks