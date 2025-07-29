import React from 'react';
import { StyleSheet, View, Text,ImageBackground, Pressable, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { icons } from '../../icons/icons';
import { SvgXml } from 'react-native-svg';

const Delevery = () => {
    return (
        <LinearGradient
            colors={['#F0D583', '#FEFBF4']}
                start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.3 }}
            style={styles.container}
        >
      
       <View style={{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:20}}>
<View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",gap:12}}>
          <SvgXml xml={icons.searchDocs} />
          <SvgXml xml={icons.turn} />
</View>
<Text style={{fontFamily:"NotoKufiArabic_600SemiBold",fontSize:18}}>
وكالة الشحن
</Text>
         <SvgXml xml={icons.right} />
       </View>
       <View style={{width:"100%",paddingHorizontal:20,marginTop:50}}>
<View style={{width:332,flexDirection:"row",justifyContent:"space-between",backgroundColor:"#00000059",borderWidth:4,borderColor:"#ffffff81",height:98,borderRadius:12,paddingHorizontal:10}}>
    <View style={{alignItems:"center",gap:8,marginTop:-20}}>
<SvgXml xml={icons.logo} />
<Pressable style={{alignItems:"center",justifyContent:"center",borderRadius:12,width:70,height:20,backgroundColor:"#FFD949"}}>
    <Text style={{fontFamily:"NotoKufiArabic_900Black",fontSize:10}}>
تصاعد
    </Text>
</Pressable>
    </View>
<View style={{flexDirection:"row",alignItems:'center',justifyContent:"center",gap:8}}>
<View style={{alignItems:"center"}}>
<Text style={{fontFamily:"NotoKufiArabic_600SemiBold",fontSize:12,color:"white"}}>
العملات الذهبية
</Text>
<View style={{flexDirection:"row",alignItems:'center',justifyContent:"center",gap:1}}>
    <SvgXml xml={icons.coin} />
<Text style={{fontFamily:"NotoKufiArabic_300Light",fontSize:12,color:"white"}}>
1234567890
</Text>
</View>
</View>
 <SvgXml xml={icons.logo3} />
</View>
</View>
       </View>
       <View style={{width:"100%",paddingHorizontal:20,alignItems:"center"}}>
<Text style={{fontFamily:"NotoKufiArabic_900Black",fontSize:14}}>
اختر امشتري
</Text>
<View style={{width:305,alignItems:"center",justifyContent:"center",borderRadius:10,backgroundColor:"#D9D9D9",height:60,marginTop:11}}>
<TextInput style={{fontFamily:"NotoKufiArabic_900Black",fontSize:14,color:"#0000005d"}} placeholder="ابحث عن ID المشتري" />
</View>
<Pressable style={{alignItems:"center",justifyContent:"center",borderRadius:12,width:126,height:36,backgroundColor:"#FFD949",marginTop:22}}>
    <Text style={{fontFamily:"NotoKufiArabic_900Black",fontSize:15}}>
بحث
    </Text>
</Pressable>
       </View>
         <View style={{width:"100%",paddingHorizontal:20,alignItems:"center",marginTop:45}}>
<Text style={{fontFamily:"NotoKufiArabic_900Black",fontSize:14}}>
العملات الذهبية المباعة
</Text>
<View style={{width:305,alignItems:"center",justifyContent:"center",borderRadius:10,backgroundColor:"#D9D9D9",height:60,marginTop:11,flexDirection:"row"}}>
<TextInput style={{fontFamily:"NotoKufiArabic_900Black",fontSize:12,color:"#0000005d"}} placeholder="يرجى ادخال كمية العملات الذهبية" />
 <SvgXml xml={icons.bigCoin} />
</View>
<Pressable style={{alignItems:"center",justifyContent:"center",borderRadius:12,width:126,height:36,backgroundColor:"#FFD949",marginTop:22}}>
    <Text style={{fontFamily:"NotoKufiArabic_900Black",fontSize:15}}>
بيع
    </Text>
</Pressable>
       </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingTop:40
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

export default Delevery;