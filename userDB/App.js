import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import UsuarioView from "./screens/InsertarUsuarioScreen";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name="Usuarios" 
          component={UsuarioView} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
