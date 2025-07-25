import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { icons } from '../../icons/icons';
import { SvgXml } from 'react-native-svg';

// Placeholder components for each tab
const Messages = () => (
<View style={styles.container}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', gap: 8 }}>
      <View style={{ width: 118, height: 80, borderRadius: 12, overflow: 'hidden', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#000000' }}>
        <LinearGradient
          colors={['#0707CF', '#FFFFFF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}
        >
          <SvgXml xml={icons.addF} />
          <Text style={{ fontFamily: 'NotoKufiArabic_900Black', color: '#131313ff', fontSize: 10, marginTop: 4 }}>
            طلبات الصداقة
          </Text>
        </LinearGradient>
      </View>
      <View style={{ width: 118, height: 80, borderRadius: 12, overflow: 'hidden', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#000000' }}>
        <LinearGradient
          colors={['#FF6200', '#FFFFFF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}
        >
          <SvgXml xml={icons.active} />
          <Text style={{ fontFamily: 'NotoKufiArabic_900Black', color: '#131313ff', fontSize: 10, marginTop: 4 }}>
            النشاط
          </Text>
        </LinearGradient>
      </View>
      <View style={{ width: 118, height: 80, borderRadius: 12, overflow: 'hidden', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#000000' }}>
        <LinearGradient
          colors={['#F7C80B', '#FFFFFF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}
        >
          <SvgXml xml={icons.sys} />
          <Text style={{ fontFamily: 'NotoKufiArabic_900Black', color: '#131313ff', fontSize: 10, marginTop: 4 }}>
            النظام
          </Text>
        </LinearGradient>
      </View>
    </View>
    <View style={{ width: '100%', alignItems: 'center', gap: 14, marginTop: 60 }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%',paddingHorizontal:10 ,gap: 14 }}>
        <View style={{ width: "100%", height: 54, borderRadius: 12, overflow: 'hidden', backgroundColor: '#D9D9D9', justifyContent: "center", alignItems: 'center',flexDirection:"row",paddingHorizontal:15 }}>
             <View style={{flex:1}}></View>
             <SvgXml xml={icons.avatar} />
        </View>
        <View style={{ width: "100%", height: 54, borderRadius: 12, overflow: 'hidden', backgroundColor: '#D9D9D9', justifyContent: "center", alignItems: 'center',flexDirection:"row",paddingHorizontal:15 }}>
             <View style={{flex:1}}></View>
             <SvgXml xml={icons.avatar} />
        </View>
        <View style={{ width: "100%", height: 54, borderRadius: 12, overflow: 'hidden', backgroundColor: '#D9D9D9', justifyContent: "center", alignItems: 'center',flexDirection:"row",paddingHorizontal:15 }}>
             <View style={{flex:1}}></View>
             <SvgXml xml={icons.avatar} />
        </View>
        <View style={{ width: "100%", height: 54, borderRadius: 12, overflow: 'hidden', backgroundColor: '#D9D9D9', justifyContent: "center", alignItems: 'center',flexDirection:"row",paddingHorizontal:15 }}>
             <View style={{flex:1}}></View>
             <SvgXml xml={icons.avatar} />
        </View>
       
      </View>
    
    </View>
  </View>
);

const YourFreinds = () => (
  <View style={styles.container}>
   <View  style={{ width: '100%', alignItems: 'center', gap: 14 ,justifyContent:"center",position:'absolute',bottom: 150,  }}>
<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", width: 300,paddingVertical:0,backgroundColor:"#887068",borderRadius:12,overflow:"hidden",paddingRight:25,borderWidth:8,borderColor:"#68676733"}}>
   <SvgXml xml={icons.addMore} />
<Text style={{fontFamily:"NotoKufiArabic_900Black",color:"#ffffff",fontSize:16}}>
اضف صديق 
</Text>
</View>
   </View>
  </View>
);

const Freinds = () => {
  const [activeTab, setActiveTab] = useState('friends');

  return (
    <View style={{...styles.container, padding: 0}}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'friends' ? styles.activeTab : {}]}
          onPress={() => setActiveTab('friends')}
        >
          <Text style={[styles.tabLabel, activeTab === 'friends' ? styles.activeTabText : {}]}>
            اصدقائك
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'messages' ? styles.activeTab : {}]}
          onPress={() => setActiveTab('messages')}
        >
          <Text style={[styles.tabLabel, activeTab === 'messages' ? styles.activeTabText : {}]}>
            الرسائل
          </Text>
        </TouchableOpacity>
      </View>
      {activeTab === 'friends' ? <YourFreinds /> : <Messages />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 8
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#99D399',
    justifyContent: 'space-between',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 10,
  },
  activeTab: {
    backgroundColor: '#189710',
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
    fontSize: 16,
    color: '#344E34',
    textAlign: 'center',
  },
  activeTabText: {
    color: '#ffffffff',
    fontSize: 20,
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

export default Freinds;