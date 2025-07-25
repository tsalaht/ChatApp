import React,{useState} from 'react';
import { StyleSheet, View, Text, ImageBackground, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { icons } from '../../icons/icons';
import { SvgXml } from 'react-native-svg';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from "@react-navigation/native";
const Tab = createMaterialTopTabNavigator();

// Tab Components with Consistent Background
const CarEntry = () => {
  const backgroundImage = require('../../../assets/startbg.png'); 
  const empty = require('../../../assets/empty.png'); 

  // Replace with your actual image path
  return (
    <View style={styles.tabContainer}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.backgroundImage}
      />
      <LinearGradient
        colors={['#f43e4aa8', '#FEFBF4']}
        style={styles.linearGradient}
      />
      <View style={{...styles.tabContent, paddingTop: 12, gap: 10,alignItems:"center",justifyContent:"center"}}>
    <View style={{width:250,height:250,zIndex:1}}>
    <ImageBackground
        source={empty}
        resizeMode="cover"
        style={{width:"100%",height:"100%"}}
      />
    </View>
    <Text style={{fontFamily:"NotoKufiArabic_900Black", fontSize:20,zIndex:100,color:"#00000070"}}>
        حقيبتك فارغة
    </Text>
      </View>
    </View>
  );
};



const Play = () => {
      const empty = require('../../../assets/empty.png');
  const backgroundImage = require('../../../assets/startbg.png'); 
  const horseone = require('../../../assets/horse.png'); 
  const horseone2 = require('../../../assets/horse2.png'); 
   const [activeTab, setActiveTab] = useState('dice');
     const renderTab = (tabName:any, label:any) => {
    const isActive = activeTab === tabName;
    const Container:any = isActive ? LinearGradient : View;
    const containerProps = isActive
      ? {
          colors: ['rgba(195, 7, 7, 0.95)', 'rgba(238, 238, 238, 0.4)'],
          start: { x: 0.5, y: 1 }, // Bottom
          end: { x: 0.5, y: 0 },   // Top, approximates 0.67deg
          locations: [0.0059, 0.7627],
        }
      : { backgroundColor: '#FFFFFF' };

    return (
      <Pressable onPress={() => setActiveTab(tabName)} style={{ flex: 1, height: '100%' }}>
        <Container
          {...containerProps}
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%' }}
        >
          <Text style={{
            color: isActive ? '#ffffffff' : '#CB2A2A',
            fontFamily: 'NotoKufiArabic_800ExtraBold',
            fontSize: 10,
            textAlign: 'center',
          }}>
            {label}
          </Text>
        </Container>
      </Pressable>
    );
  };
  // Replace with your actual image path
  return (
    <View style={styles.tabContainer}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.backgroundImage}
      />
      <LinearGradient
        colors={['#f43e4ac9', '#FEFBF4']}
        style={styles.linearGradient}
      />
      <View style={{...styles.tabContent, paddingTop: 12, gap: 10}}>
        <View style={{width:"100%",alignItems:'center',justifyContent:"center",zIndex:100}}>
    <View style={{ width: 243, height: 43, flexDirection: 'row', alignItems: 'center', borderRadius: 14, overflow: 'hidden' }}>
      {renderTab('chess', 'رقعة الشطرنج')}
      {renderTab('dice', 'النرد')}
    </View>
        </View>
        <View style={{...styles.tabContent, paddingTop: 12, gap: 10,alignItems:"center",justifyContent:"center"}}>
    <View style={{width:250,height:250,zIndex:1}}>
    <ImageBackground
        source={empty}
        resizeMode="cover"
        style={{width:"100%",height:"100%"}}
      />
    </View>
    <Text style={{fontFamily:"NotoKufiArabic_900Black", fontSize:20,zIndex:100,color:"#00000070"}}>
        حقيبتك فارغة
    </Text>
      </View>
 
    
      </View>
    </View>
  );
};



const Bage = () => {
    const navigation = useNavigation<any>();
  const backgroundImage = require('../../../assets/startbg.png'); // Replace with your actual image path
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.backgroundImage}
      />
      <LinearGradient
        colors={['#f43e4aff', '#FEFBF4']}
        style={styles.linearGradient}
      />
      <View style={[styles.header, { zIndex: 3 }]}>
        <View />
        <Text style={{ fontFamily: 'NotoKufiArabic_600SemiBold', fontSize: 20, color: '#000000' }}>
          المتجر
        </Text>
        <Pressable style={{width:40,height:40,alignItems:"center",justifyContent:"center"}} onPress={() => navigation.goBack()}>
          <SvgXml xml={icons.right} />
        </Pressable>
      </View>
      <Tab.Navigator
      initialRouteName='دخول السيارة'
        style={{ zIndex: 3, flex: 1 }}
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12, paddingHorizontal: 4 },
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#000000',
          tabBarStyle: { backgroundColor: 'transparent', marginTop: 10, paddingHorizontal: 0, elevation: 0, width: "100%" },
          tabBarIndicatorStyle: { backgroundColor: '#3B0202', width: 0.2 },
          tabBarScrollEnabled: true,
          tabBarItemStyle: { width: 'auto', paddingHorizontal: 10 },
          tabBarLabel: ({ focused, children }) => (
            <Text style={{ 
              fontFamily: focused ? 'NotoKufiArabic_900Black' : 'NotoKufiArabic_600SemiBold',
              fontSize: 9,
              color: '#000000',
              paddingHorizontal: 4
            }}>
              {children}
            </Text>
          ),
        }}
      >
        <Tab.Screen name="لعب" component={Play} />
        <Tab.Screen name="رقم جيد" component={CarEntry} />
        <Tab.Screen name="تظليل الدردشة" component={CarEntry} />
        <Tab.Screen name="اطار الصورة الرمزية" component={CarEntry} />
        <Tab.Screen name="اشعار الدخول" component={CarEntry} />
        <Tab.Screen name="تموج المايك" component={CarEntry} />
        <Tab.Screen name="دخول السيارة" component={CarEntry} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  linearGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 2,
  },
  tabContainer: {
    flex: 1,
    width: '100%',
  },
  tabContent: {
    flex: 1,
    backgroundColor: 'transparent',
    // zIndex: 3,
  },
  dot: {
    width: 6,
    height: 6,
    backgroundColor: '#61050B',
    borderRadius: 3,
    marginHorizontal: 2,
  },
  tabText: {
    fontFamily: 'NotoKufiArabic_600SemiBold',
    fontSize: 16,
    color: '#000000',
  },
  header: {
    width: '100%',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,

  },
  box: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
    backgroundColor: '#36454F',
    borderRadius: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: '#f5eeee7e',
  },
  headerTexts: {
    fontSize: 12,
    fontFamily: 'NotoKufiArabic_900Black',
    color: '#ffff',
  },
});

export default Bage;