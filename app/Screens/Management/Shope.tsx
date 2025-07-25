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
  const horseone = require('../../../assets/horse.png'); 
  const horseone2 = require('../../../assets/horse2.png'); 
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
        <View style={{width: "100%", flexDirection: "row", alignItems: 'center', justifyContent: "space-between", paddingHorizontal: 18}}>
          <View style={{backgroundColor: "white", borderRadius: 8, paddingVertical: 5, paddingHorizontal: 8}}>
            <Text style={{color: "#7F7F7F", fontFamily: "NotoKufiArabic_400Regular", textAlign: "right", marginBottom: 8}}>
              ركوب الخيل الصحراوي
            </Text>
            <View style={{width: 155, height: 65, borderRadius: 16, overflow: "hidden"}}>
              <ImageBackground
                source={horseone}
                resizeMode="cover"
                style={{width: "100%", height: "100%"}}
              />
            </View>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15}}>
              <SvgXml xml={icons.gift} />
              <Pressable style={{paddingHorizontal: 18, paddingVertical: 10, borderRadius: 24, backgroundColor: "#61050B"}}>
                <Text style={{color: "#ffffffff", fontFamily: "NotoKufiArabic_800ExtraBold", fontSize: 10}}>
                  شراء الان
                </Text> 
              </Pressable>
            </View>
          </View>
          <View style={{backgroundColor: "white", borderRadius: 8, paddingVertical: 5, paddingHorizontal: 8}}>
            <Text style={{color: "#7F7F7F", fontFamily: "NotoKufiArabic_400Regular", textAlign: "right", marginBottom: 8}}>
              حصان
            </Text>
            <View style={{width: 155, height: 65, borderRadius: 16, overflow: "hidden"}}>
              <ImageBackground
                source={horseone2}
                resizeMode="cover"
                style={{width: "100%", height: "100%"}}
              />
            </View>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15}}>
              <SvgXml xml={icons.gift} />
              <Pressable style={{paddingHorizontal: 18, paddingVertical: 10, borderRadius: 24, backgroundColor: "#61050B"}}>
                <Text style={{color: "#ffffffff", fontFamily: "NotoKufiArabic_800ExtraBold", fontSize: 10}}>
                  شراء الان
                </Text> 
              </Pressable>
            </View>
          </View>
        </View>
        <View style={{width: "100%", flexDirection: "row", alignItems: 'center', justifyContent: "space-between", paddingHorizontal: 18}}>
          <View style={{backgroundColor: "white", borderRadius: 8, paddingVertical: 5, paddingHorizontal: 8}}>
            <Text style={{color: "#7F7F7F", fontFamily: "NotoKufiArabic_400Regular", textAlign: "right", marginBottom: 8}}>
              ركوب الخيل الصحراوي
            </Text>
            <View style={{width: 155, height: 65, borderRadius: 16, overflow: "hidden"}}>
              <ImageBackground
                source={horseone}
                resizeMode="cover"
                style={{width: "100%", height: "100%"}}
              />
            </View>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15}}>
              <SvgXml xml={icons.gift} />
              <Pressable style={{paddingHorizontal: 18, paddingVertical: 10, borderRadius: 24, backgroundColor: "#61050B"}}>
                <Text style={{color: "#ffffffff", fontFamily: "NotoKufiArabic_800ExtraBold", fontSize: 10}}>
                  شراء الان
                </Text> 
              </Pressable>
            </View>
          </View>
          <View style={{backgroundColor: "white", borderRadius: 8, paddingVertical: 5, paddingHorizontal: 8}}>
            <Text style={{color: "#7F7F7F", fontFamily: "NotoKufiArabic_400Regular", textAlign: "right", marginBottom: 8}}>
              حصان
            </Text>
            <View style={{width: 155, height: 65, borderRadius: 16, overflow: "hidden"}}>
              <ImageBackground
                source={horseone2}
                resizeMode="cover"
                style={{width: "100%", height: "100%"}}
              />
            </View>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15}}>
              <SvgXml xml={icons.gift} />
              <Pressable style={{paddingHorizontal: 18, paddingVertical: 10, borderRadius: 24, backgroundColor: "#61050B"}}>
                <Text style={{color: "#ffffffff", fontFamily: "NotoKufiArabic_800ExtraBold", fontSize: 10}}>
                  شراء الان
                </Text> 
              </Pressable>
            </View>
          </View>
        </View>
        <View style={{width: "100%", flexDirection: "row", alignItems: 'center', justifyContent: "space-between", paddingHorizontal: 18}}>
          <View style={{backgroundColor: "white", borderRadius: 8, paddingVertical: 5, paddingHorizontal: 8}}>
            <Text style={{color: "#7F7F7F", fontFamily: "NotoKufiArabic_400Regular", textAlign: "right", marginBottom: 8}}>
              ركوب الخيل الصحراوي
            </Text>
            <View style={{width: 155, height: 65, borderRadius: 16, overflow: "hidden"}}>
              <ImageBackground
                source={horseone}
                resizeMode="cover"
                style={{width: "100%", height: "100%"}}
              />
            </View>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15}}>
              <SvgXml xml={icons.gift} />
              <Pressable style={{paddingHorizontal: 18, paddingVertical: 10, borderRadius: 24, backgroundColor: "#61050B"}}>
                <Text style={{color: "#ffffffff", fontFamily: "NotoKufiArabic_800ExtraBold", fontSize: 10}}>
                  شراء الان
                </Text> 
              </Pressable>
            </View>
          </View>
          <View style={{backgroundColor: "white", borderRadius: 8, paddingVertical: 5, paddingHorizontal: 8}}>
            <Text style={{color: "#7F7F7F", fontFamily: "NotoKufiArabic_400Regular", textAlign: "right", marginBottom: 8}}>
              حصان
            </Text>
            <View style={{width: 155, height: 65, borderRadius: 16, overflow: "hidden"}}>
              <ImageBackground
                source={horseone2}
                resizeMode="cover"
                style={{width: "100%", height: "100%"}}
              />
            </View>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15}}>
              <SvgXml xml={icons.gift} />
              <Pressable style={{paddingHorizontal: 18, paddingVertical: 10, borderRadius: 24, backgroundColor: "#61050B"}}>
                <Text style={{color: "#ffffffff", fontFamily: "NotoKufiArabic_800ExtraBold", fontSize: 10}}>
                  شراء الان
                </Text> 
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};



const Play = () => {
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
        <View style={{width:"100%",alignItems:'center',justifyContent:"center"}}>
    <View style={{ width: 243, height: 43, flexDirection: 'row', alignItems: 'center', borderRadius: 14, overflow: 'hidden' }}>
      {renderTab('chess', 'رقعة الشطرنج')}
      {renderTab('dice', 'النرد')}
    </View>
        </View>
        <View style={{width: "100%", flexDirection: "row", alignItems: 'center', justifyContent: "space-between", paddingHorizontal: 18}}>
          <View style={{backgroundColor: "white", borderRadius: 8, paddingVertical: 5, paddingHorizontal: 8}}>
            <Text style={{color: "#7F7F7F", fontFamily: "NotoKufiArabic_400Regular", textAlign: "right", marginBottom: 8}}>
              ركوب الخيل الصحراوي
            </Text>
            <View style={{width: 155, height: 65, borderRadius: 16, overflow: "hidden"}}>
              <ImageBackground
                source={horseone}
                resizeMode="cover"
                style={{width: "100%", height: "100%"}}
              />
            </View>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15}}>
              <SvgXml xml={icons.gift} />
              <Pressable style={{paddingHorizontal: 18, paddingVertical: 10, borderRadius: 24, backgroundColor: "#61050B"}}>
                <Text style={{color: "#ffffffff", fontFamily: "NotoKufiArabic_800ExtraBold", fontSize: 10}}>
                  شراء الان
                </Text> 
              </Pressable>
            </View>
          </View>
          <View style={{backgroundColor: "white", borderRadius: 8, paddingVertical: 5, paddingHorizontal: 8}}>
            <Text style={{color: "#7F7F7F", fontFamily: "NotoKufiArabic_400Regular", textAlign: "right", marginBottom: 8}}>
              حصان
            </Text>
            <View style={{width: 155, height: 65, borderRadius: 16, overflow: "hidden"}}>
              <ImageBackground
                source={horseone2}
                resizeMode="cover"
                style={{width: "100%", height: "100%"}}
              />
            </View>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15}}>
              <SvgXml xml={icons.gift} />
              <Pressable style={{paddingHorizontal: 18, paddingVertical: 10, borderRadius: 24, backgroundColor: "#61050B"}}>
                <Text style={{color: "#ffffffff", fontFamily: "NotoKufiArabic_800ExtraBold", fontSize: 10}}>
                  شراء الان
                </Text> 
              </Pressable>
            </View>
          </View>
        </View>
        <View style={{width: "100%", flexDirection: "row", alignItems: 'center', justifyContent: "space-between", paddingHorizontal: 18}}>
          <View style={{backgroundColor: "white", borderRadius: 8, paddingVertical: 5, paddingHorizontal: 8}}>
            <Text style={{color: "#7F7F7F", fontFamily: "NotoKufiArabic_400Regular", textAlign: "right", marginBottom: 8}}>
              ركوب الخيل الصحراوي
            </Text>
            <View style={{width: 155, height: 65, borderRadius: 16, overflow: "hidden"}}>
              <ImageBackground
                source={horseone}
                resizeMode="cover"
                style={{width: "100%", height: "100%"}}
              />
            </View>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15}}>
              <SvgXml xml={icons.gift} />
              <Pressable style={{paddingHorizontal: 18, paddingVertical: 10, borderRadius: 24, backgroundColor: "#61050B"}}>
                <Text style={{color: "#ffffffff", fontFamily: "NotoKufiArabic_800ExtraBold", fontSize: 10}}>
                  شراء الان
                </Text> 
              </Pressable>
            </View>
          </View>
          <View style={{backgroundColor: "white", borderRadius: 8, paddingVertical: 5, paddingHorizontal: 8}}>
            <Text style={{color: "#7F7F7F", fontFamily: "NotoKufiArabic_400Regular", textAlign: "right", marginBottom: 8}}>
              حصان
            </Text>
            <View style={{width: 155, height: 65, borderRadius: 16, overflow: "hidden"}}>
              <ImageBackground
                source={horseone2}
                resizeMode="cover"
                style={{width: "100%", height: "100%"}}
              />
            </View>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15}}>
              <SvgXml xml={icons.gift} />
              <Pressable style={{paddingHorizontal: 18, paddingVertical: 10, borderRadius: 24, backgroundColor: "#61050B"}}>
                <Text style={{color: "#ffffffff", fontFamily: "NotoKufiArabic_800ExtraBold", fontSize: 10}}>
                  شراء الان
                </Text> 
              </Pressable>
            </View>
          </View>
        </View>
        <View style={{width: "100%", flexDirection: "row", alignItems: 'center', justifyContent: "space-between", paddingHorizontal: 18}}>
          <View style={{backgroundColor: "white", borderRadius: 8, paddingVertical: 5, paddingHorizontal: 8}}>
            <Text style={{color: "#7F7F7F", fontFamily: "NotoKufiArabic_400Regular", textAlign: "right", marginBottom: 8}}>
              ركوب الخيل الصحراوي
            </Text>
            <View style={{width: 155, height: 65, borderRadius: 16, overflow: "hidden"}}>
              <ImageBackground
                source={horseone}
                resizeMode="cover"
                style={{width: "100%", height: "100%"}}
              />
            </View>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15}}>
              <SvgXml xml={icons.gift} />
              <Pressable style={{paddingHorizontal: 18, paddingVertical: 10, borderRadius: 24, backgroundColor: "#61050B"}}>
                <Text style={{color: "#ffffffff", fontFamily: "NotoKufiArabic_800ExtraBold", fontSize: 10}}>
                  شراء الان
                </Text> 
              </Pressable>
            </View>
          </View>
          <View style={{backgroundColor: "white", borderRadius: 8, paddingVertical: 5, paddingHorizontal: 8}}>
            <Text style={{color: "#7F7F7F", fontFamily: "NotoKufiArabic_400Regular", textAlign: "right", marginBottom: 8}}>
              حصان
            </Text>
            <View style={{width: 155, height: 65, borderRadius: 16, overflow: "hidden"}}>
              <ImageBackground
                source={horseone2}
                resizeMode="cover"
                style={{width: "100%", height: "100%"}}
              />
            </View>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15}}>
              <SvgXml xml={icons.gift} />
              <Pressable style={{paddingHorizontal: 18, paddingVertical: 10, borderRadius: 24, backgroundColor: "#61050B"}}>
                <Text style={{color: "#ffffffff", fontFamily: "NotoKufiArabic_800ExtraBold", fontSize: 10}}>
                  شراء الان
                </Text> 
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const GoodNumber = () => {
  const backgroundImage = require('../../../assets/startbg.png'); 
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
      <View style={styles.tabContent}>
   <View style={{width:"100%",alignItems:"center",justifyContent:'center',marginTop:20,gap:8}}>
<View style={{width:320,alignItems:"center",flexDirection:"row",borderRadius:12,backgroundColor:"white",height:60,justifyContent:"flex-end",paddingRight:16}}>
<View style={{alignItems:"center",justifyContent:"center",flexDirection:"row",gap:12,}}>
<View style={{width:98,height:21,backgroundColor:"#D9D9D9"}}>

</View>
<View style={{width:30,height:21,backgroundColor:"#D9D9D9"}}>

</View>
<Text style={{   fontFamily: 'NotoKufiArabic_800ExtraBold',
    fontSize: 14,
    color: '#000000',}}>
  الID الخاص بك
</Text>
</View>
</View>
<View style={{width:320,borderRadius:12,backgroundColor:"white",justifyContent:"flex-end",paddingRight:16,paddingVertical:16,alignItems:"flex-end"}}>
<View style={{  flexDirection: "row", gap: 8}}>
  <Text style={{
    fontFamily: 'NotoKufiArabic_600SemiBold',
    fontSize: 10,
    color: '#000000',
  }}>
    التسلسلي ID
  </Text>
  <Text style={{
    fontFamily: 'NotoKufiArabic_600SemiBold',
    fontSize: 10,
    color: '#000000',
  }}>
    قصير ID
  </Text>
  <View style={{
    borderBottomWidth: 2,
    borderBottomColor: '#3B0202', // Matches tabBarIndicatorStyle color for active state
    paddingBottom: 4, // Creates a 4-pixel gap between text and underline
  }}>
    <Text style={{
      fontFamily: 'NotoKufiArabic_900Black',
      fontSize: 10,
      color: '#000000',
      marginBottom:-5
    }}>
      اعلى ID
    </Text>
  </View>
</View>
<View style={{marginTop:20 ,flexDirection:"row",gap:8}}>
<View style={{paddingHorizontal:12,paddingVertical:2,backgroundColor:"#D9D9D9",borderRadius:16}}>
<Text style={{fontFamily:"NotoKufiArabic_500Medium",fontSize:10}}>
ABCD
</Text>
</View>
<View style={{paddingHorizontal:12,paddingVertical:2,backgroundColor:"#D9D9D9",borderRadius:16}}>
<Text style={{fontFamily:"NotoKufiArabic_500Medium",fontSize:10}}>
AAAAA
</Text>
</View>
<View style={{paddingHorizontal:12,paddingVertical:2,backgroundColor:"#D9D9D9",borderRadius:16}}>
<Text style={{fontFamily:"NotoKufiArabic_500Medium",fontSize:10}}>
AAAA
</Text>
</View>
</View>
</View>
<View style={{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:12,marginTop:20}}>
<View style={{width: 178, height: 178, backgroundColor: "white", justifyContent: "flex-end"}}>
  <LinearGradient
    colors={['rgba(255, 255, 255, 0.73)', 'rgba(234, 255, 0, 0.73)']}
    start={{x: 0, y: 1.2}} // Top-left
    end={{x: 0, y: 0}}   // Bottom-right, approximates 171.13deg
    locations={[0.0664, 0.9336]}
    style={{width: "100%", height: 42, elevation:4}}
  />
</View>
<View style={{width: 178, height: 178, backgroundColor: "white", justifyContent: "flex-end"}}>
  <LinearGradient
    colors={['rgba(255, 255, 255, 0.73)', 'rgba(234, 255, 0, 0.73)']}
    start={{x: 0, y: 1.2}} // Top-left
    end={{x: 0, y: 0}}   // Bottom-right, approximates 171.13deg
    locations={[0.0664, 0.9336]}
    style={{width: "100%", height: 42, elevation:4}}
  />
</View>
</View>
<View style={{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:12}}>
<View style={{width: 178, height: 178, backgroundColor: "white", justifyContent: "flex-end"}}>
  <LinearGradient
    colors={['rgba(255, 255, 255, 0.73)', 'rgba(234, 255, 0, 0.73)']}
    start={{x: 0, y: 1.2}} // Top-left
    end={{x: 0, y: 0}}   // Bottom-right, approximates 171.13deg
    locations={[0.0664, 0.9336]}
    style={{width: "100%", height: 42, elevation:4}}
  />
</View>
<View style={{width: 178, height: 178, backgroundColor: "white", justifyContent: "flex-end"}}>
  <LinearGradient
    colors={['rgba(255, 255, 255, 0.73)', 'rgba(234, 255, 0, 0.73)']}
    start={{x: 0, y: 1.2}} // Top-left
    end={{x: 0, y: 0}}   // Bottom-right, approximates 171.13deg
    locations={[0.0664, 0.9336]}
    style={{width: "100%", height: 42, elevation:4}}
  />
</View>
</View>

   </View>
      </View>
    </View>
  );
};

const Shope = () => {
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
        colors={['#f43e4ac9', '#FEFBF4']}
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
        <Tab.Screen name="رقم جيد" component={GoodNumber} />
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
    zIndex: 3,
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

export default Shope;