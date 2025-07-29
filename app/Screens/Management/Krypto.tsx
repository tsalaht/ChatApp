import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { icons } from '../../icons/icons';
import { SvgXml } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

const backgroundImageCrystal = require('../../../assets/back4.png'); // Replace with your actual image path
const backgroundImageCoins = require('../../../assets/back5.png'); // Replace with your actual image path
const smallBackground = require('../../../assets/bbb.png'); // Replace with your actual image path
const smallBackground2 = require('../../../assets/ccc.png'); // Replace with your actual image path
const cardImage = require('../../../assets/ddd.png'); // Replace with your actual image path

// Crystal Component
const CrystalComponent = () => {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.card}>
        <ImageBackground source={smallBackground} resizeMode="cover" style={styles.cardBackground} />
        <SvgXml xml={icons.kris} style={styles.cardIcon} />
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardValue}>5627</Text>
          <Text style={styles.cardLabel}>كريستالاتي</Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>يرجى ادخال الكمية</Text>
        </View>
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>+0</Text>
          <SvgXml xml={icons.multiCoins} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>100 كريستال = 40 عملة ذهبية</Text>
          <Text style={styles.infoText}>يمكن استبدال الكريستلات فقط بمضاعفات 100</Text>
        </View>
        <View style={styles.buttonContainer}>
          <LinearGradient
            colors={['#C474E3', '#AE00FA']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>كريستالاتي</Text>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

// Coins Component
const CoinsComponent = () => {
  return (
    <View style={styles.contentContainer}>
     <View style={styles.card}>
        <ImageBackground source={smallBackground2} resizeMode="cover" style={styles.cardBackground} />
        <SvgXml xml={icons.bigCoin2} style={styles.cardIcon} />
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardValue}>5627</Text>
          <Text style={{...styles.cardLabel,color:"#0000009f"}}>عملاتك الذهبية</Text>
        </View>
      </View>
      {/* <View style={[styles.formContainer, { backgroundColor: '#00000066', paddingVertical: 15 }]}>
        <View style={[styles.inputContainer, { width: 300, backgroundColor: '#ffffffcc' }]}>
          <Text style={[styles.inputText, { color: '#666666' }]}>أدخل عدد العملات</Text>
        </View>
        <View style={[styles.counterContainer, { gap: 5 }]}>
          <Text style={[styles.counterText, { color: '#00FF7F' }]}>+0</Text>
          <SvgXml xml={icons.multiCoins} style={{ transform: [{ scale: 1.2 }] }} />
        </View>
        <View style={[styles.infoContainer, { alignItems: 'flex-start' }]}>
          <Text style={[styles.infoText, { fontSize: 10, color: '#ffffffcc' }]}>
            50 عملة ذهبية = 120 كريستال
          </Text>
          <Text style={[styles.infoText, { fontSize: 10, color: '#ffffffcc' }]}>
            يمكن استبدال العملات بمضاعفات 50
          </Text>
        </View>
        <View style={[styles.buttonContainer, { marginTop: 20 }]}>
          <LinearGradient
            colors={['#FFD700', '#FFA500']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.button, { width: 200, height: 44 }]}
          >
            <Text style={[styles.buttonText, { fontSize: 13, color: '#1C2526' }]}>عملاتي</Text>
          </LinearGradient>
        </View>
      </View> */}
      <View style={{width:"100%",alignItems:"center",justifyContent:"center",marginTop:60,flexDirection:"row",gap:33}}>
        <View style={{width:132,height:128,alignItems:"center",justifyContent:"center",overflow:"hidden",position:"relative",borderRadius:24}}>
        <ImageBackground source={cardImage} resizeMode="cover" style={styles.cardBackground} />
             <SvgXml xml={icons.multiCoins}  />
             <Text style={{    fontFamily: 'NotoKufiArabic_900Black',fontSize:18,color:"white"}}>
7000
             </Text>
             <View style={{width:80,height:32,alignItems:"center",justifyContent:"center",borderWidth:1,borderColor:"white",backgroundColor:"#000000",borderRadius:20,}}>
             <Text style={{    fontFamily: 'NotoKufiArabic_900Black',fontSize:14,color:"white"}}>
1$
             </Text>
             </View>
        </View>
        <View style={{width:132,height:128,alignItems:"center",justifyContent:"center",overflow:"hidden",position:"relative",borderRadius:24}}>
        <ImageBackground source={cardImage} resizeMode="cover" style={styles.cardBackground} />
             <SvgXml xml={icons.multiCoins}  />
             <Text style={{    fontFamily: 'NotoKufiArabic_900Black',fontSize:18,color:"white"}}>
7000
             </Text>
             <View style={{width:80,height:32,alignItems:"center",justifyContent:"center",borderWidth:1,borderColor:"white",backgroundColor:"#000000",borderRadius:20,}}>
             <Text style={{    fontFamily: 'NotoKufiArabic_900Black',fontSize:14,color:"white"}}>
1$
             </Text>
             </View>
        </View>
      </View>
      <View style={{width:"100%",alignItems:"center",justifyContent:"center",marginTop:20,flexDirection:"row",gap:33}}>
        <View style={{width:132,height:128,alignItems:"center",justifyContent:"center",overflow:"hidden",position:"relative",borderRadius:24}}>
        <ImageBackground source={cardImage} resizeMode="cover" style={styles.cardBackground} />
             <SvgXml xml={icons.multiCoins}  />
             <Text style={{    fontFamily: 'NotoKufiArabic_900Black',fontSize:18,color:"white"}}>
7000
             </Text>
             <View style={{width:80,height:32,alignItems:"center",justifyContent:"center",borderWidth:1,borderColor:"white",backgroundColor:"#000000",borderRadius:20,}}>
             <Text style={{    fontFamily: 'NotoKufiArabic_900Black',fontSize:14,color:"white"}}>
1$
             </Text>
             </View>
        </View>
        <View style={{width:132,height:128,alignItems:"center",justifyContent:"center",overflow:"hidden",position:"relative",borderRadius:24}}>
        <ImageBackground source={cardImage} resizeMode="cover" style={styles.cardBackground} />
             <SvgXml xml={icons.multiCoins}  />
             <Text style={{    fontFamily: 'NotoKufiArabic_900Black',fontSize:18,color:"white"}}>
7000
             </Text>
             <View style={{width:80,height:32,alignItems:"center",justifyContent:"center",borderWidth:1,borderColor:"white",backgroundColor:"#000000",borderRadius:20,}}>
             <Text style={{    fontFamily: 'NotoKufiArabic_900Black',fontSize:14,color:"white"}}>
1$
             </Text>
             </View>
        </View>
      </View>
      <View style={{width:"100%",alignItems:"center",justifyContent:"center",marginTop:20,flexDirection:"row",gap:33}}>
        <View style={{width:132,height:128,alignItems:"center",justifyContent:"center",overflow:"hidden",position:"relative",borderRadius:24}}>
        <ImageBackground source={cardImage} resizeMode="cover" style={styles.cardBackground} />
             <SvgXml xml={icons.multiCoins}  />
             <Text style={{    fontFamily: 'NotoKufiArabic_900Black',fontSize:18,color:"white"}}>
7000
             </Text>
             <View style={{width:80,height:32,alignItems:"center",justifyContent:"center",borderWidth:1,borderColor:"white",backgroundColor:"#000000",borderRadius:20,}}>
             <Text style={{    fontFamily: 'NotoKufiArabic_900Black',fontSize:14,color:"white"}}>
1$
             </Text>
             </View>
        </View>
        <View style={{width:132,height:128,alignItems:"center",justifyContent:"center",overflow:"hidden",position:"relative",borderRadius:24}}>
        <ImageBackground source={cardImage} resizeMode="cover" style={styles.cardBackground} />
             <SvgXml xml={icons.multiCoins}  />
             <Text style={{    fontFamily: 'NotoKufiArabic_900Black',fontSize:18,color:"white"}}>
7000
             </Text>
             <View style={{width:80,height:32,alignItems:"center",justifyContent:"center",borderWidth:1,borderColor:"white",backgroundColor:"#000000",borderRadius:20,}}>
             <Text style={{    fontFamily: 'NotoKufiArabic_900Black',fontSize:14,color:"white"}}>
1$
             </Text>
             </View>
        </View>
      </View>
    </View>
  );
};

// Main Krypto Component
const Krypto = () => {
  const [activeTab, setActiveTab] = useState('كريستال');

  const handleTabPress = (tab:any) => {
    setActiveTab(tab);
  };

  return (
    <ImageBackground
      source={activeTab === 'كريستال' ? backgroundImageCrystal : backgroundImageCoins}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'كريستال' ? styles.activeTab : styles.inactiveTab]}
          onPress={() => handleTabPress('كريستال')}
        >
          <Text style={[styles.tabText, activeTab === 'كريستال' ? styles.activeTabText : styles.inactiveTabText]}>
            كريستال
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'كوينز' ? styles.activeTab : styles.inactiveTab]}
          onPress={() => handleTabPress('كوينز')}
        >
          <Text style={[styles.tabText, activeTab === 'كوينز' ? styles.activeTabText : styles.inactiveTabText]}>
            كوينز
          </Text>
        </TouchableOpacity>
      </View>
      {activeTab === 'كريستال' ? <CrystalComponent /> : <CoinsComponent />}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    width: '100%',
    paddingTop: 40,
  },
  tabContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    justifyContent: 'center',
  },
  tab: {
    width: 139,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
  },
  activeTab: {
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: '#00000041',
  },
  inactiveTab: {
    backgroundColor: '#ffffff41',
  },
  tabText: {
    fontFamily: 'NotoKufiArabic_900Black',
  },
  activeTabText: {
    fontSize: 18,
    color: 'white',
  },
  inactiveTabText: {
    fontSize: 14,
    color: '#ABABAB',
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
  },
  card: {
    width: 310,
    position: 'relative',
    height: 94,
    overflow: 'hidden',
    borderRadius: 12,
    marginTop: 80,
  },
  coinsCard: {
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  cardBackground: {
    position: 'absolute',
    width: '100%',
    left: 0,
    height: '100%',
  },
  cardIcon: {
    bottom: 0,
    position: 'absolute',
    left: 20,
  },
  cardTextContainer: {
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  cardValue: {
    fontFamily: 'NotoKufiArabic_300Light',
    fontSize: 32,
    color: 'white',
  },
  cardLabel: {
    fontFamily: 'NotoKufiArabic_900Black',
    fontSize: 14,
    color: '#ffffff8c',
    marginTop: -15,
  },
  formContainer: {
    paddingHorizontal: 27,
    paddingVertical: 10,
    backgroundColor: '#ffffff41',
    borderRadius: 12,
    alignItems: 'flex-end',
    marginTop: 50,
  },
  inputContainer: {
    width: 316,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffffff',
    borderRadius: 8,
  },
  inputText: {
    fontFamily: 'NotoKufiArabic_500Medium',
    fontSize: 12,
    color: '#ABABAB',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  counterText: {
    fontFamily: 'NotoKufiArabic_900Black',
    fontSize: 22,
    color: '#F7D82C',
  },
  infoContainer: {
    alignItems: 'flex-end',
  },
  infoText: {
    fontFamily: 'NotoKufiArabic_500Medium',
    fontSize: 9,
    color: '#ffffffff',
  },
  buttonContainer: {
    width: 316,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 34,
  },
  button: {
    width: 223,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: 'NotoKufiArabic_900Black',
    fontSize: 14,
    color: '#ffffffff',
  },
});

export default Krypto;