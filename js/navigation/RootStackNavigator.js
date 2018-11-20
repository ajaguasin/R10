import { createStackNavigator, createAppContainer } from "react-navigation";
import AboutScreen from "../screens/About";
import AboutStack from "./NavigationLayout";
const AppNavigator = createStackNavigator(
  {
    About: AboutStack
  },
  { headerMode: "none" }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
