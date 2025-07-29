import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Pressable, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { icons } from '../../icons/icons';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import Management from '../Management/Index';

const Profile = () => {
    const navigation:any = useNavigation();
    const backgroundImage = require('../../../assets/me.jpg');
    const backgroundImage2 = require('../../../assets/manage.png');
    return (
        <LinearGradient
            colors={['#F3D686', '#FEFBF4']}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <View style={{ width: '100%', paddingTop: 30, paddingBottom: 10, alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                    <View style={{ width: 100, height: 100, borderRadius: 9999999, overflow: 'hidden', borderWidth: 2, borderColor: '#000000', padding: 0 }}>
                        <ImageBackground source={backgroundImage} resizeMode="cover" style={{ width: "100%", height: '100%' }}></ImageBackground>
                    </View>
                    <Text style={{ fontSize: 20, fontFamily: 'NotoKufiArabic_900Black', color: '#000000' }}>
                        علاء الدين
                    </Text>
                    <View style={{ backgroundColor: "#D9D9D9", width: 97, height: 26 }}></View>
                    <View style={{ width: "100%", flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 10 }}>
                        <View style={{ backgroundColor: "#D9D9D9", width: 97, height: 26 }}></View>
                        <View style={{ backgroundColor: "#D9D9D9", width: 97, height: 26 }}></View>
                        <View style={{ backgroundColor: "#D9D9D9", width: 97, height: 26 }}></View>
                    </View>
                    <View style={{ width: "100%", flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 10 }}>
                        <Pressable>
                            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 0 }}>
                                <SvgXml xml={icons.addMore} />
                            </View>
                        </Pressable>
                        <Pressable>
                            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 0 }}>
                                <SvgXml xml={icons.addF} />
                            </View>
                        </Pressable>
                        <Pressable>
                            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 0 }}>
                                <SvgXml xml={icons.active} />
                            </View>
                        </Pressable>
                        <Pressable>
                            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 0 }}>
                                <SvgXml xml={icons.gender} />
                            </View>
                        </Pressable>
                    </View>
                    <View style={{ width: "100%", flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 10 }}>
                        <Pressable>
                            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 0 }}>
                                <SvgXml xml={icons.addF} />
                                <Text style={{ fontFamily: "NotoKufiArabic_500Medium" }}>
                                    متابعون
                                </Text>
                            </View>
                        </Pressable>
                        <Pressable>
                            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 0 }}>
                                <SvgXml xml={icons.addF} />
                                <Text style={{ fontFamily: "NotoKufiArabic_500Medium" }}>
                                    متابعة
                                </Text>
                            </View>
                        </Pressable>
                        <Pressable>
                            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 0 }}>
                                <SvgXml xml={icons.addF} />
                                <Text style={{ fontFamily: "NotoKufiArabic_500Medium" }}>
                                    اصدقاء
                                </Text>
                            </View>
                        </Pressable>
                    </View>
                    <View style={{ width: "100%", flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 24, marginTop: 10 }}>
                        <Pressable>
                            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 0 }}>
                                <SvgXml xml={icons.heart} />
                                <Text style={{ fontFamily: "NotoKufiArabic_500Medium" }}>
                                    CP
                                </Text>
                            </View>
                        </Pressable>
                        <Pressable>
                            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 0 }}>
                                <SvgXml xml={icons.level} />
                                <Text style={{ fontFamily: "NotoKufiArabic_500Medium" }}>
                                    المستوى
                                </Text>
                            </View>
                        </Pressable>
                        <Pressable>
                            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 0 }}>
                                <SvgXml xml={icons.ivite} />
                                <Text style={{ fontFamily: "NotoKufiArabic_500Medium" }}>
                                    دعوة
                                </Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('AllManagement', { screen: "Krypto" })}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 0 }}>
                                <SvgXml xml={icons.wallet} />
                                <Text style={{ fontFamily: "NotoKufiArabic_500Medium" }}>
                                    المحفظة
                                </Text>
                            </View>
                        </Pressable>
                    </View>
                    <View style={{ width: "100%", flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 24, marginTop: 10 }}>
                        <Pressable>
                            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 0 }}>
                                <SvgXml xml={icons.win} />
                                <Text style={{ fontFamily: "NotoKufiArabic_500Medium" }}>
                                    ميدالية
                                </Text>
                            </View>
                        </Pressable>
                        <Pressable>
                            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 0 }}>
                                <SvgXml xml={icons.vip} />
                                <Text style={{ fontFamily: "NotoKufiArabic_500Medium" }}>
                                    VIP
                                </Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('AllManagement', { screen: "Bage" })}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 0 }}>
                                <SvgXml xml={icons.bag} />
                                <Text style={{ fontFamily: "NotoKufiArabic_500Medium" }}>
                                    الحقيبة
                                </Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('AllManagement', { screen: "Shope" })}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                                <SvgXml xml={icons.shope} />
                                <Text style={{ fontFamily: "NotoKufiArabic_500Medium" }}>
                                    المتجر
                                </Text>
                            </View>
                        </Pressable>
                    </View>
                    <Pressable style={{ marginTop: 10 }} >
                        <View style={{ alignItems: "center", justifyContent: "center", width: 350, height: 95, overflow: 'hidden' }}>
                            <ImageBackground
                                source={backgroundImage2}
                                resizeMode="cover"
                                style={{ width: "100%", height: "100%" }}
                            >
                                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                                    <Text
                                        style={{
                                            fontSize: 28,
                                            fontFamily: 'NotoKufiArabic_900Black',
                                            color: '#FFBF00',
                                            zIndex: 44,
                                            textShadowColor: '#FFFFFF',
                                            textShadowOffset: { width: 1, height: 1 },
                                            textShadowRadius: 1,
                                        }}
                                    >
                                        فريق الادارة
                                    </Text>
                                </View>
                                <LinearGradient
                                    colors={['rgba(0, 0, 0, 0.89)', 'rgba(255, 250, 250, 0)']}
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 0, y: 0 }}
                                    style={{ width: "100%", height: "100%", position: 'absolute' }}
                                />
                            </ImageBackground>
                        </View>
                    </Pressable>
                </View>
             <View style={{ width: "100%", alignItems: "center", justifyContent: 'center', marginTop: 20, gap: 18, paddingHorizontal: 20,paddingBottom:150 }}>
                              <Pressable style={{ width: "100%" }}>
                                  <LinearGradient
                                      colors={['rgba(67, 163, 45, 0.95)', 'rgba(248, 229, 178, 0.95)']}
                                      start={{ x: 0, y: 1.1 }}
                                      end={{ x: 0, y: 0 }}
                                      style={{ width: "100%", justifyContent: "space-between", alignItems: "center", flexDirection: 'row', padding: 10 }}
                                  >
                                      <SvgXml xml={icons.left} />
                                      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                                          <Text style={{ fontFamily: "NotoKufiArabic_900Black", fontSize: 16 }}>
                                              BD
                                          </Text>
                                          <SvgXml xml={icons.sys2}  />
                                      </View>
                                  </LinearGradient>
                              </Pressable>
                              <Pressable style={{ width: "100%" }}>
                                  <LinearGradient
                                      colors={['rgba(67, 163, 45, 0.95)', 'rgba(248, 229, 178, 0.95)']}
                                      start={{ x: 0, y: 1.1 }}
                                      end={{ x: 0, y: 0 }}
                                      style={{ width: "100%", justifyContent: "space-between", alignItems: "center", flexDirection: 'row', padding: 10 }}
                                  >
                                      <SvgXml xml={icons.left} />
                                      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                                          <Text style={{ fontFamily: "NotoKufiArabic_900Black", fontSize: 16 }}>
                                         الوكالة
                                          </Text>
                                          <SvgXml xml={icons.agence}  />
                                      </View>
                                  </LinearGradient>
                              </Pressable>
                              <Pressable style={{ width: "100%" }} onPress={() => navigation.navigate('AllManagement', { screen: "Guest" })}>
                                  <LinearGradient
                                      colors={['rgba(67, 163, 45, 0.95)', 'rgba(248, 229, 178, 0.95)']}
                                      start={{ x: 0, y: 1.1 }}
                                      end={{ x: 0, y: 0 }}
                                      style={{ width: "100%", justifyContent: "space-between", alignItems: "center", flexDirection: 'row', padding: 10 }}
                                  >
                                      <SvgXml xml={icons.left} />
                                      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                                          <Text style={{ fontFamily: "NotoKufiArabic_900Black", fontSize: 16 }}>
                                     المضيف
                                          </Text>
                                          <SvgXml xml={icons.guest}  />
                                      </View>
                                  </LinearGradient>
                              </Pressable>
                              <Pressable style={{ width: "100%" }} onPress={() => navigation.navigate('AllManagement', { screen: "Delevery" })}>
                                  <LinearGradient
                                      colors={['rgba(67, 163, 45, 0.95)', 'rgba(248, 229, 178, 0.95)']}
                                      start={{ x: 0, y: 1.1 }}
                                      end={{ x: 0, y: 0 }}
                                      style={{ width: "100%", justifyContent: "space-between", alignItems: "center", flexDirection: 'row', padding: 10 }}
                                  >
                                      <SvgXml xml={icons.left} />
                                      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                                          <Text style={{ fontFamily: "NotoKufiArabic_900Black", fontSize: 16 }}>
                             وكالة الشحن
                                          </Text>
                                          <SvgXml xml={icons.delevryAgency}  />
                                      </View>
                                  </LinearGradient>
                              </Pressable>
                              <Pressable style={{ width: "100%" }}>
                                  <LinearGradient
                                      colors={['rgba(67, 163, 45, 0.95)', 'rgba(248, 229, 178, 0.95)']}
                                      start={{ x: 0, y: 1.1 }}
                                      end={{ x: 0, y: 0 }}
                                      style={{ width: "100%", justifyContent: "space-between", alignItems: "center", flexDirection: 'row', padding: 10 }}
                                  >
                                      <SvgXml xml={icons.left} />
                                      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                                          <Text style={{ fontFamily: "NotoKufiArabic_900Black", fontSize: 16 }}>
                          اللغة
                                          </Text>
                                          <SvgXml xml={icons.trenslate}  />
                                      </View>
                                  </LinearGradient>
                              </Pressable>
                              <Pressable style={{ width: "100%" }}>
                                  <LinearGradient
                                      colors={['rgba(67, 163, 45, 0.95)', 'rgba(248, 229, 178, 0.95)']}
                                      start={{ x: 0, y: 1.1 }}
                                      end={{ x: 0, y: 0 }}
                                      style={{ width: "100%", justifyContent: "space-between", alignItems: "center", flexDirection: 'row', padding: 10 }}
                                  >
                                      <SvgXml xml={icons.left} />
                                      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                                          <Text style={{ fontFamily: "NotoKufiArabic_900Black", fontSize: 16 }}>
                  الاعدادات
                                          </Text>
                                          <SvgXml xml={icons.setting}  />
                                      </View>
                                  </LinearGradient>
                              </Pressable>
                          </View>
            </ScrollView>
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

export default Profile;