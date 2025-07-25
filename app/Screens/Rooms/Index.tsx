import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { icons } from '../../icons/icons';
import { SvgXml } from 'react-native-svg';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

// Placeholder components for each tab
const MyRoomScreen = () => {
  const [activeTab, setActiveTab] = useState('حديثا'); // Default active tab is "حديثا"

  const handleTabPress = (tabName:any) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      <View style={{width:"100%", alignItems:"center",gap:14}}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' ,gap:42,marginTop:20}}>
          <View style={{ width: 280, height: 67, borderRadius: 12, backgroundColor:"#D9D9D9",position:"relative",overflow:"visible" }}>
            <SvgXml xml={icons.avatar} style={{position:"absolute",left:115,top:-15}} />
          </View>
        </View>
      </View>
      <View style={{width:"100%",alignItems:"center" }}>
        <View style={{width:320,height:40,backgroundColor:"#00000033",borderRadius:12,overflow:"hidden",alignItems:"center",marginTop:20,flexDirection:"row",justifyContent:"space-between",paddingHorizontal:10}}>
          <TouchableOpacity onPress={() => handleTabPress('الاصدقاء')}>
            <Text style={{fontFamily:"NotoKufiArabic_900Black",color: activeTab === 'الاصدقاء' ? "#ffffff" : "#A9A9A9",fontSize:12}}>
              الاصدقاء
            </Text>
          </TouchableOpacity>
          <View style={{height:"100%",width:2,backgroundColor:"#FFFFFF4D"}}></View>
          <TouchableOpacity onPress={() => handleTabPress('تم المتابعة')}>
            <Text style={{fontFamily:"NotoKufiArabic_900Black",color: activeTab === 'تم المتابعة' ? "#ffffff" : "#A9A9A9",fontSize:12}}>
              تم المتابعة
            </Text>
          </TouchableOpacity>
          <View style={{height:"100%",width:2,backgroundColor:"#FFFFFF4D"}}></View>
          <TouchableOpacity onPress={() => handleTabPress('تم الانضمام')}>
            <Text style={{fontFamily:"NotoKufiArabic_900Black",color: activeTab === 'تم الانضمام' ? "#ffffff" : "#A9A9A9",fontSize:12}}>
              تم الانضمام
            </Text>
          </TouchableOpacity>
          <View style={{height:"100%",width:2,backgroundColor:"#FFFFFF4D"}}></View>
          <TouchableOpacity onPress={() => handleTabPress('حديثا')}>
            <Text style={{fontFamily:"NotoKufiArabic_900Black",color: activeTab === 'حديثا' ? "#ffffff" : "#A9A9A9",fontSize:12}}>
              حديثا
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{width:"100%", alignItems:"center",gap:14,marginTop:60}}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <View style={{ width: 178, height: 178, borderRadius: 12, overflow: 'hidden', backgroundColor:"#D9D9D9" }}></View>
          <View style={{ width: 178, height: 178, borderRadius: 12, overflow: 'hidden', backgroundColor:"#D9D9D9" }}></View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <View style={{ width: 178, height: 178, borderRadius: 12, overflow: 'hidden', backgroundColor:"#D9D9D9" }}></View>
          <View style={{ width: 178, height: 178, borderRadius: 12, overflow: 'hidden', backgroundColor:"#D9D9D9" }}></View>
        </View>
      </View>
    </View>
  );
};

const PopularScreen = () => (
  <View style={styles.container}>
    <View style={{width:"100%", alignItems:"center",gap:14}}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' ,gap:42}}>
          <View style={{ width: 150, height: 67, borderRadius: 12, overflow: 'hidden', backgroundColor:"#D9D9D9" }}></View>
          <View style={{ width: 150, height: 67, borderRadius: 12, overflow: 'hidden', backgroundColor:"#D9D9D9" }}></View>
        </View>
    </View>
    <View style={{width:"100%", alignItems:"center",gap:14,marginTop:60}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <View style={{ width: 178, height: 178, borderRadius: 12, overflow: 'hidden', backgroundColor:"#D9D9D9" }}></View>
        <View style={{ width: 178, height: 178, borderRadius: 12, overflow: 'hidden', backgroundColor:"#D9D9D9" }}></View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <View style={{ width: 178, height: 178, borderRadius: 12, overflow: 'hidden', backgroundColor:"#D9D9D9" }}></View>
        <View style={{ width: 178, height: 178, borderRadius: 12, overflow: 'hidden', backgroundColor:"#D9D9D9" }}></View>
      </View>
    </View>
  </View>
);

const DiscoverScreen = () => (
  <View style={styles.container}>
    <Text style={styles.tabText}> الدخول السريع</Text>
    <View style={{width:"100%", alignItems:"center",gap:14}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <View style={{ width: 178, height: 42, borderRadius: 12, overflow: 'hidden', backgroundColor:"#D9D9D9" }}></View>
        <View style={{ width: 178, height: 42, borderRadius: 12, overflow: 'hidden', backgroundColor:"#D9D9D9" }}></View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <View style={{ width: 178, height: 42, borderRadius: 12, overflow: 'hidden', backgroundColor:"#D9D9D9" }}></View>
        <View style={{ width: 178, height: 42, borderRadius: 12, overflow: 'hidden', backgroundColor:"#D9D9D9" }}></View>
      </View>
    </View>
    <Text style={styles.tabText}> الدخول السريع</Text>
    <View style={{width:"100%", alignItems:"center",gap:14}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <View style={{ width: 178, height: 178, borderRadius: 12, overflow: 'hidden', backgroundColor:"#D9D9D9" }}></View>
        <View style={{ width: 178, height: 178, borderRadius: 12, overflow: 'hidden', backgroundColor:"#D9D9D9" }}></View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <View style={{ width: 178, height: 178, borderRadius: 12, overflow: 'hidden', backgroundColor:"#D9D9D9" }}></View>
        <View style={{ width: 178, height: 178, borderRadius: 12, overflow: 'hidden', backgroundColor:"#D9D9D9" }}></View>
      </View>
    </View>
  </View>
);

const Rooms = () => {
  return (
    <View style={{...styles.container,padding:0}}>
      <View style={styles.header}>
        <SvgXml xml={icons.search} />
        <SvgXml xml={icons.avatar} />
      </View>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: '#99D399',
            paddingBottom: 10,
          },
          tabBarLabel: ({ focused, color }) => (
            <View style={focused ? styles.focusedIconContainer : null}>
              <Text
                style={[
                  styles.tabLabel,
                  {
                    fontSize: focused ? 18 : 15, // Larger font size for focused tab
                    color: focused ? "#ffffffff":'#344E34',
                  },
                ]}
              >
                {route.name}
              </Text>
            </View>
          ),
          tabBarIndicatorStyle: {
            backgroundColor: 'transparent',
          },
        })}
      >
        <Tab.Screen name="غرفتي" component={MyRoomScreen} />
        <Tab.Screen name="شائعة" component={PopularScreen} />
        <Tab.Screen name="اكتشاف" component={DiscoverScreen} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding:8
  },
  header: {
    width: '100%',
    paddingTop: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#99D399',
    justifyContent: 'space-between',
  },
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontFamily: 'NotoKufiArabic_900Black',
    fontSize: 12,
    color: '#131313ff',
    textAlign: 'right',
  },
  tabLabel: {
    fontFamily: 'NotoKufiArabic_900Black',
    textAlign: 'center',
  },
  focusedIconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
    borderRadius: 999999999,
    padding: 8,
  },
});

export default Rooms;