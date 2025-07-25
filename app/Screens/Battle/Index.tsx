import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { icons } from '../../icons/icons';
import { SvgXml } from 'react-native-svg';

const backgroundImage = require('../../../assets/back.png'); // 🟡 Replace with your actual image path

const Battle = () => {
  return (
    <ImageBackground source={backgroundImage} resizeMode="cover"  style={styles.container}>
      <View  style={styles.header}>
        <View style={styles.box}>
          <SvgXml xml={icons.plus} />
          <Text style={styles.headerTexts}>283</Text>
          <SvgXml xml={icons.diamond} />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <View style={styles.box}>
            <SvgXml xml={icons.plus} />
            <Text style={styles.headerTexts}>283</Text>
            <SvgXml xml={icons.coin} />
          </View>
          <SvgXml xml={icons.avatar} />
        </View>
      </View>
      <View style={styles.box2Container}>

        <View style={styles.box2}>
          <SvgXml xml={icons.lock} />
          <Text style={styles.box2Texts}>ستفتح البطولة في المستوى  الرابع</Text>
  
        </View>
        <View style={styles.box2}>
      
          <Text style={styles.box2Texts}>No . 1000</Text>
          <SvgXml xml={icons.world} />
        </View>

      </View>
      <View style={{width:'100%',    alignItems: 'center',
    justifyContent: 'center',marginTop:34,marginBottom:43}} >
<SvgXml xml={icons.bigfb} />
      </View>
      <View>
        <View style={styles.rowGmes}>
          <View style={styles.gameBox}>
            <View style={styles.imageContainer}>

            <ImageBackground source={require('../../../assets/buil.png')} style={styles.gameImage} />
            </View>
            <Text style={styles.gameText}>بيلياردو</Text>
          </View>
          <View style={styles.gameBox}>
                <View style={styles.imageContainer}>

            <ImageBackground source={require('../../../assets/ludo.png')} style={styles.gameImage} />
            </View>
            <Text style={styles.gameText}>لودو</Text>
          </View>
        </View>
         <View style={styles.rowGmes}>
          <View style={styles.gameBox}>
            <View style={styles.imageContainer}>

            <ImageBackground source={require('../../../assets/uno.png')} style={styles.gameImage} />
            </View>
            <Text style={styles.gameText}>هونو</Text>
          </View>
          <View style={styles.gameBox}>
                <View style={styles.imageContainer}>

            <ImageBackground source={require('../../../assets/dumono.png')} style={styles.gameImage} />
            </View>
            <Text style={styles.gameText}>دومينو</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    width: '100%',
  },
  header: {
    width: '100%',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
    backgroundColor: '#99D399', // Semi-transparent background
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
  box2:{
     paddingHorizontal: 12,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    backgroundColor:  '#1A801A',
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 24,
    elevation: 8,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#104910',
  },
  box2Container:{
     width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
  },
  box2Texts: {
    fontSize: 10,
    fontFamily: 'NotoKufiArabic_600SemiBold',
    color: '#ffff',},
    rowGmes:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        marginTop: 10,
    },
    gameBox:{
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,

       
    },
    gameImage:{
        width: "100%",
        height:"100%",

    
    },
    gameText:{
        fontSize: 16,
        fontFamily: 'NotoKufiArabic_800ExtraBold',
        color: '#000',
        textAlign: 'center',
    },
    imageContainer:{
                width: 150,
        height: 150,
        borderRadius: 12,
        borderWidth: 4,
        borderColor: '#ffffff',
        overflow: 'hidden',
    }
});

export default Battle;
