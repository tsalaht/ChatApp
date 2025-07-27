import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Battle from "./Battle/Index";
import Events from "./Events/Index";
import Rooms from "./Rooms/Index";
import Colors from "../Colors/Color";
import Home from "./Home/Index";
import { icons } from "../icons/icons";
import { SvgXml } from "react-native-svg";
import Freinds from "./Freinds/Index"; // Importing the Freinds screen
import Profile from "./Profile/Profile";
import ProfileScreens from "./Profile/Index";
interface Screen {
  name: string;
  component: React.FC<any>;
  icon: (props: { focused: boolean; color: string; size: number }) => React.ReactNode;
}

const Tab = createBottomTabNavigator();

const ProtectedScreens: React.FC = () => {
  const [focusedTab, setFocusedTab] = useState<string>("");

  const handleTabPress = (name: string) => {
    if (focusedTab !== name) {
      setFocusedTab(name);
    }
  };

  const commonTabBarStyle:any = {
    height: 110,
    backgroundColor: "transparent", // Set to transparent to show screen's background
    borderTopWidth: 0,
    marginBottom: 0,
    paddingBottom: 20,
    position: "absolute", // Ensure tab bar floats over the screen content
    bottom: 0,
    left: 0,
    right: 0,
        elevation: 0,
    
  };

  const screens: Screen[] = [
    {
      name: "انا",
      component: ProfileScreens, // changed from Profile to ProfileScreens
      icon: ({ focused, color, size }) => (
        <View
          style={[
            styles.iconContainer,
            focused && styles.focusedIconContainer,
          ]}
        >
          <SvgXml
            xml={icons.profile}
            width={focused ? size + 8 : size}
            height={focused ? size + 8 : size}
            color={focused ? Colors.primaryRed : "#989C9F"}
          />
        </View>
      ),
    },
    {
      name: "الاصدقاء",
      component: Freinds,
      icon: ({ focused, color, size }) => (
        <View
          style={[
            styles.iconContainer,
            focused && styles.focusedIconContainer,
          ]}
        >
          <SvgXml
            xml={icons.freinds}
            width={focused ? size + 8 : size}
            height={focused ? size + 8 : size}
            color={focused ? Colors.primaryRed : "#989C9F"}
          />
        </View>
      ),
    },
    {
      name: "غرف",
      component: Rooms,
      icon: ({ focused, color, size }) => (
        <View
          style={[
            styles.iconContainer,
            focused && styles.focusedIconContainer,
          ]}
        >
          <SvgXml
            xml={icons.rooms}
            width={focused ? size + 8 : size}
            height={focused ? size + 8 : size}
            color={focused ? Colors.primaryRed : "#989C9F"}
          />
        </View>
      ),
    },
    {
      name: "الاحداث",
      component: Events,
      icon: ({ focused, color, size }) => (
        <View
          style={[
            styles.iconContainer,
            focused && styles.focusedIconContainer,
          ]}
        >
          <SvgXml
            xml={icons.events}
            width={focused ? size + 8 : size}
            height={focused ? size + 8 : size}
            color={focused ? Colors.primaryRed : "#989C9F"}
          />
        </View>
      ),
    },
    {
      name: "المعركة",
      component: Battle,
      icon: ({ focused, color, size }) => (
        <View
          style={[
            styles.iconContainer,
            focused && styles.focusedIconContainer,
          ]}
        >
          <SvgXml
            xml={icons.battle}
            width={focused ? size + 8 : size}
            height={focused ? size + 8 : size}
            color={focused ? Colors.primaryRed : "#989C9F"}
          />
        </View>
      ),
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName="انا"
      screenOptions={{
        tabBarStyle: commonTabBarStyle,
        headerShown: false,
      }}
    >
      {screens.map((screen, index) => (
        <Tab.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarIcon: ({ focused, color, size }) =>
              screen.icon({ focused, color, size: focused ? 32 : 24 }),
            tabBarLabel: ({ focused }: { focused: boolean }) => (
              <Text
                style={{
                  color: focused ? "#000" : "#514F4F",
                  fontWeight: "500",
                  fontSize: focused ? 14 : 11,
                  marginBottom: 5,
                  fontFamily: focused ? "NotoKufiArabic_900Black" : "NotoKufiArabic_700Bold",
                }}
              >
                {screen.name}
              </Text>
            ),
          }}
          listeners={{
            tabPress: () => handleTabPress(screen.name),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  focusedIconContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
    borderRadius: 999999999,
    padding: 8,
  },
});

export default ProtectedScreens;