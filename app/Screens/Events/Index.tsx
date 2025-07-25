import React from 'react';
import { StyleSheet, View, Text,ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { icons } from '../../icons/icons';
import { SvgXml } from 'react-native-svg';

const Events = () => {
    return (
        <LinearGradient
            colors={['#009000', '#FEFBF4']}
            style={styles.container}
        >
            <View style={styles.header}>
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
            <View style={{width: '100%',paddingHorizontal:16,alignItems:"center",gap:24,marginTop: 20}}>
<View style={{width: '100%',height:85,borderRadius: 12,overflow:'hidden'}}>
  <ImageBackground source={require('../../../assets/event.png')} style={{width:"100%",height:"100%"}}  />
</View>
<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%',gap:8}}>
<View style={{width: 118,height:66,borderRadius: 12,overflow:'hidden'}}>
  <ImageBackground source={require('../../../assets/buil.png')} style={{width:"100%",height:"100%"}}  />
</View>
<View style={{width: 118,height:66,borderRadius: 12,overflow:'hidden'}}>
  <ImageBackground source={require('../../../assets/dumono.png')} style={{width:"100%",height:"100%"}}  />
</View>
<View style={{width: 118,height:66,borderRadius: 12,overflow:'hidden'}}>
  <ImageBackground source={require('../../../assets/uno.png')} style={{width:"100%",height:"100%"}}  />
</View>
</View>
<View style={{width: '100%',height:85,borderRadius: 12,overflow:'hidden'}}>
  <ImageBackground source={require('../../../assets/event.png')} style={{width:"100%",height:"100%"}}  />
</View>
<View style={{width: '100%',height:85,borderRadius: 12,overflow:'hidden'}}>
  <ImageBackground source={require('../../../assets/event.png')} style={{width:"100%",height:"100%"}}  />
</View>
<View style={{width: '100%',height:85,borderRadius: 12,overflow:'hidden'}}>
  <ImageBackground source={require('../../../assets/event.png')} style={{width:"100%",height:"100%"}}  />
</View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        backgroundColor: '#99D399', 
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

export default Events;