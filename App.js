import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./screens/Splash";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import Dashboard from "./screens/Dashboard";
import AccountSettings from "./screens/AccountSettings";
import ChangePassword from "./screens/ChangePassword";
import ChangeLocation from "./screens/ChangeLocation";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Account Settings"
          component={AccountSettings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Change Password"
          component={ChangePassword}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Change Location"
          component={ChangeLocation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
