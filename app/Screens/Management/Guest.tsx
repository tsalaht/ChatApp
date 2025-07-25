import React from 'react';
import { StyleSheet, View, Text, ImageBackground ,TextInput} from 'react-native';
import { icons } from '../../icons/icons';
import { SvgXml } from 'react-native-svg';

const backgroundImage = require('../../../assets/back3.png'); // 🟡 Replace with your actual image path

const Guest = () => {
  return (
    <ImageBackground source={backgroundImage} resizeMode="cover"  style={styles.container}>
  <View style={{width:"100%",flexDirection:"row",alignItems:"center", justifyContent:"space-between",paddingTop:40,paddingHorizontal:12}}>
<View
      style={{
        paddingHorizontal: 2,
        paddingVertical: 1,
        backgroundColor: '#232424',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'space-between', // Adjusted for better spacing
        position: 'relative', // Needed for arrow positioning
        borderTopRightRadius: 10, // Optional: curve the top-right corner
        borderBottomRightRadius: 10, // Optional: curve the bottom-right corner
      }}
    >
      {/* Circle with initial */}
      <View
        style={{
          borderRadius: 9999999,
          backgroundColor: '#FB00FF',
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 19,
            color: 'white',
            fontFamily: 'NotoKufiArabic_400Regular',
          }}
        >
          i
        </Text>
      </View>

      {/* Text content */}
      <View>
        <Text
          style={{
            fontSize: 12,
            color: 'white',
            fontFamily: 'NotoKufiArabic_900Black',
          }}
        >
          Ibrahim ibrahim
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: 'white',
            fontFamily: 'NotoKufiArabic_400Regular',
            marginTop:-5
          }}
        >
          Id: 746389302
        </Text>
      </View>

      {/* Add icon */}
      <SvgXml xml={icons.add} />

      {/* Arrow on the right */}
      <View
        style={{
          position: 'absolute',
          right: -10, // Adjust to position the arrow tip
          width: 0,
          height: 0,
          borderLeftWidth: 10, // Width of the arrow
          borderLeftColor: '#232424', // Matches container background
          borderTopWidth: 20, // Half of container height
          borderBottomWidth: 20, // Half of container height
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent',
        }}
      />
    </View>
    <View style={{flexDirection:"row",alignItems:"center", justifyContent:"space-between",gap:8}}>
<SvgXml xml={icons.post} />

<View style={{height:10,width:1,backgroundColor:"white"}}/>
<SvgXml xml={icons.sheare} />
<View style={{height:10,width:1,backgroundColor:"white"}}/>
<SvgXml xml={icons.off} />
    </View>
  </View>
  <View style={{width:"100%",flexDirection:"row",alignItems:"center", justifyContent:"space-between",paddingTop:40,paddingHorizontal:12}}>
<View style={{flexDirection:"row",alignItems:"center", justifyContent:"space-between",gap:2}}>
   <SvgXml xml={icons.cup} />
   <Text      style={{
       fontSize: 14,
       color: '#FFCC66',
       fontFamily: 'NotoKufiArabic_900Black',
    }}>
    33
   </Text>
              <SvgXml xml={icons.right2} />
</View>
<View style={{alignItems:"center",}}>
 <SvgXml xml={icons.eye} />
    <Text      style={{
       fontSize: 12,
       color: '#ffffffff',
       fontFamily: 'NotoKufiArabic_900Black',
       marginTop:-4
    }}>
11
   </Text>
</View>
  </View>
 <View style={{width:"100%",flexDirection:"row",alignItems:"center", justifyContent:"center",paddingTop:10,paddingHorizontal:12,gap:4}}>
<SvgXml xml={icons.sh} />
<SvgXml xml={icons.sh} />
<SvgXml xml={icons.sh} />
<SvgXml xml={icons.sh} />
<SvgXml xml={icons.sh} />
 </View>
 <View style={{width:"100%",flexDirection:"row",alignItems:"center", justifyContent:"center",paddingHorizontal:12,gap:4}}>
<SvgXml xml={icons.sh} />
<SvgXml xml={icons.sh} />
<SvgXml xml={icons.sh} />
<SvgXml xml={icons.sh} />
<SvgXml xml={icons.sh} />
 </View>

    <View style={{paddingHorizontal:8,alignItems:"center",position:"absolute",bottom:260,right:20,gap:8}}>
<SvgXml xml={icons.message} />
<SvgXml xml={icons.trager} />
<SvgXml xml={icons.star} />
    </View>
<View style={{width:"100%",flexDirection:"row",alignItems:"center", justifyContent:"space-between",paddingTop:40,paddingHorizontal:12,position:"absolute",bottom:40}}>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
          <SvgXml xml={icons.voice} />
          <SvgXml xml={icons.emojji} />
          <SvgXml xml={icons.chatpersone} />
          <TextInput
            style={{
              fontSize: 12,
              color: 'white',
              fontFamily: 'NotoKufiArabic_400Regular',
              marginLeft: 4,
              marginTop: 10,
              // Add additional TextInput-specific styles if needed
              width: 100, // Example width, adjust as needed
              height: 40, // Example height, adjust as needed
              paddingHorizontal: 8, // Optional: for better text input appearance
            }}
            placeholder="Enter..." // Placeholder text
            placeholderTextColor="#ffffff" // Optional: color for placeholder
          />
        </View>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",gap:5}}>
          <SvgXml xml={icons.trager2} />
          <SvgXml xml={icons.paly} />
          <SvgXml xml={icons.menu} />
          <SvgXml xml={icons.gift2} />
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

export default Guest;
