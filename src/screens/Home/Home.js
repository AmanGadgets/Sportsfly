import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { render } from 'react-dom';
import {
    RobotoSlab_100Thin,
    RobotoSlab_200ExtraLight,
    RobotoSlab_300Light,
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_600SemiBold,
    RobotoSlab_700Bold,
    RobotoSlab_800ExtraBold,
    RobotoSlab_900Black
} from '@expo-google-fonts/roboto-slab'
import {
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic
} from '@expo-google-fonts/josefin-sans'

import { useFonts } from '@expo-google-fonts/roboto-slab';
import { useFont } from '@expo-google-fonts/josefin-sans';
import AppLoading from 'expo-app-loading';
const Home = ({ navigation }) => {
    let [fontsLoad] = useFonts({
        RobotoSlab_100Thin,
        RobotoSlab_200ExtraLight,
        RobotoSlab_300Light,
        RobotoSlab_400Regular,
        RobotoSlab_500Medium,
        RobotoSlab_600SemiBold,
        RobotoSlab_700Bold,
        RobotoSlab_800ExtraBold,
        RobotoSlab_900Black,

    });

    let [fontLoad] = useFonts({
        JosefinSans_100Thin,
        JosefinSans_200ExtraLight,
        JosefinSans_300Light,
        JosefinSans_400Regular,
        JosefinSans_500Medium,
        JosefinSans_600SemiBold,
        JosefinSans_700Bold,
        JosefinSans_100Thin_Italic,
        JosefinSans_200ExtraLight_Italic,
        JosefinSans_300Light_Italic,
        JosefinSans_400Regular_Italic,
        JosefinSans_500Medium_Italic,
        JosefinSans_600SemiBold_Italic,
        JosefinSans_700Bold_Italic
    })

    if (!fontLoad) {
        return <AppLoading />;
    }

    if (!fontsLoad) {
        return <AppLoading />;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View>
                <ScrollView>
                    <View style={{
                        backgroundColor: "white", borderBottomWidth: 1,
                        borderBottomColor: '#dddddd'
                    }}>
                        <Text style={{
                            fontSize: 24, fontWeight: '700', marginTop: 20,
                            paddingHorizontal: 20, fontFamily: "RobotoSlab_900Black"
                        }}>
                            What can we help to find, Sportsfly
                        </Text>

                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowColor: 'black',
                            shhadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null
                        }}>

                            <Icon name="ios-search" size={20} style={{
                                marginRight: 10
                            }} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Search here"
                                placeholderTextColor="grey"
                                style={{
                                    flex: 1, fontWeight: '700',
                                    backgroundColor: 'white'
                                }}
                            />



                        </View>
                    </View>


                    <View style={{
                        backgroundColor: 'white',
                        paddingTop: 20
                    }}>


                        <View style={{ height: 130, marginTop: 20 }}>
                            <ScrollView
                                showsHorizontalScrollIndicator={false}
                                horizontal>



                                <TouchableOpacity onPress={() => navigation.navigate('Football')} style={{ marginHorizontal: 7 }}>
                                    <Image source={require('../../../assets/football.jpg')} style={{ height: 85, width: 110}} />
                                    <Text style={{ textAlign: 'center' }}>FootBall</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('BasketBall')} style={{ marginHorizont: 7 }}>
                                    <Image source={require('../../../assets/sport4.jpg')} style={{ height: 85, width: 110}} />
                                    <Text style={{ textAlign: 'center' }}>BasketBall</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Tennies')} style={{ marginHorizontal:7 }}>
                                    <Image source={require('../../../assets/sport5.jpg')} style={{ height: 85, width: 110}} />
                                    <Text style={{ textAlign: 'center' }}>Tennies</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Vollyball')} style={{ marginHorizonta: 7 }}>
                                    <Image source={require('../../../assets/sport7.jpg')} style={{ height: 85, width: 110}} />
                                    <Text style={{ textAlign: 'center' }}>VollyBall</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Golf')} style={{ marginHorizontal: 7 }}>
                                    <Image source={require('../../../assets/golf.jpg')} style={{ height: 85, width: 110}} />
                                    <Text style={{ textAlign: 'center' }}>Golf</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Cycling')} style={{ marginHorizontal: 7 }}>
                                    <Image source={require('../../../assets/cycling.jpg')} style={{ height: 85, width: 110}} />
                                    <Text style={{ textAlign: 'center' }}>Cycling</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Yoga')} style={{ marginHorizontal: 7 }}>
                                    <Image source={require('../../../assets/yoga.jpg')} style={{ height: 85, width: 110}} />
                                    <Text style={{ textAlign: 'center' }}>Yoga</Text>
                                </TouchableOpacity>

                            </ScrollView>
                        </View>
                    </View>

                    <View style={{
                        borderWidth: 1,

                    }}>
                        <ScrollView>

                            <View style={{ marginTop: 40, marginBottom: 1000 }}>



                                <Text style={{ fontSize: 24, fontWeight: '700',textAlign:'center'}}>
                                    World Mind Sport Games
                                </Text>
                                <Text style={{ fontSize: 16, fontFamily: "RobotoSlab_900Black",textAlign:'center'}}>
                                    The Competitive Mental Behavior
                                </Text>


                                <View style={{ flexDirection: "row", flexWrap: "wrap", marginRight: -9, marginLeft: -10, height: 320, paddingHorizontal: 30}}>


                                    <View style={styles.image}>

                                        <ImageBackground style={{ height: '70%', margin: "1%", width: 175, borderRadius: 10 }} source={require("../../../assets/chess.jpg")}>
                                            <TouchableOpacity onPress={() => navigation.navigate('Chess')} style={{ width: "100%", height: 30, marginRight: "auto", marginLeft: "auto", top: "68%", backgroundColor: "orange" }}>
                                                <Text style={{ fontSize: 22, fontFamily: "RobotoSlab_600SemiBold", color: '#696969', textAlign: "center" }}>Chess</Text>
                                            </TouchableOpacity>
                                        </ImageBackground>

                                        <ImageBackground style={{ height: '70%', margin: "1%", width: 175, borderRadius: 10 }} source={require("../../../assets/mind2.jpg")}>
                                            <TouchableOpacity onPress={() => navigation.navigate('Go')} style={{ width: "100%", height: 30, marginRight: "auto", marginLeft: "auto", top: "68%", backgroundColor: "orange" }}>
                                                <Text style={{ fontSize: 22, fontFamily: "RobotoSlab_600SemiBold", color: '#696969', textAlign: "center" }}>Go</Text>
                                            </TouchableOpacity>
                                        </ImageBackground>

                                        <ImageBackground style={{ height: '70%', margin: "1%", width: 175, borderRadius: 10 }} source={require("../../../assets/mind3.jpg")}>
                                            <TouchableOpacity onPress={() => navigation.navigate('Draughts')} style={{ width: "100%", height: 30, marginRight: "auto", marginLeft: "auto", top: "68%", backgroundColor: "orange" }}>
                                                <Text style={{ fontSize: 22, fontFamily: "RobotoSlab_600SemiBold", color: '#696969', textAlign: "center" }}>Draught</Text>
                                            </TouchableOpacity>
                                        </ImageBackground>

                                        <ImageBackground style={{ height: '70%', margin: "1%", width: 175, borderRadius: 10 }} source={require("../../../assets/mind4.jpg")}>
                                            <TouchableOpacity onPress={() => navigation.navigate('Xiangqi')} style={{ width: "100%", height: 30, marginRight: "auto", marginLeft: "auto", top: "68%", backgroundColor: "orange" }}>
                                                <Text style={{ fontSize: 22, fontFamily: "RobotoSlab_600SemiBold", color: '#696969', textAlign: "center" }}>Xiangqi</Text>
                                            </TouchableOpacity>
                                        </ImageBackground>

                                        <ImageBackground style={{ height: '70%', margin: "1%", width: 175, borderRadius: 10 }} source={require("../../../assets/poker.jpeg")}>
                                            <TouchableOpacity onPress={() => navigation.navigate('Poker')} style={{ width: "100%", height: 30, marginRight: "auto", marginLeft: "auto", top: "68%", backgroundColor: "orange" }}>
                                                <Text style={{ fontSize: 22, fontFamily: "RobotoSlab_600SemiBold", color: '#696969', textAlign: "center" }}>Poker</Text>
                                            </TouchableOpacity>
                                        </ImageBackground>

                                        <ImageBackground style={{ height: '70%', margin: "1%", width: 175, borderRadius: 10 }} source={require("../../../assets/mahjong.webp")}>
                                            <TouchableOpacity onPress={() => navigation.navigate('Mahjong')} style={{ width: "100%", height: 30, marginRight: "auto", marginLeft: "auto", top: "68%", backgroundColor: "orange" }}>
                                                <Text style={{ fontSize: 22, fontFamily: "RobotoSlab_600SemiBold", color: '#696969', textAlign: "center" }}>Mahjong</Text>
                                            </TouchableOpacity>
                                        </ImageBackground>

                                        <ImageBackground style={{ height: '70%', margin: "1%", width: 175, borderRadius: 10 }} source={require("../../../assets/quoridor.jpg")}>
                                            <TouchableOpacity onPress={() => navigation.navigate('Quoridor')} style={{ width: "100%", height: 30, marginRight: "auto", marginLeft: "auto", top: "68%", backgroundColor: "orange" }}>
                                                <Text style={{ fontSize: 22, fontFamily: "RobotoSlab_600SemiBold", color: '#696969', textAlign: "center" }}>Quoridor</Text>
                                            </TouchableOpacity>
                                        </ImageBackground>

                                        <ImageBackground style={{ height: '70%', margin: "1%", width: 175, borderRadius: 10 }} source={require("../../../assets/xiangqi.jpg")}>
                                            <TouchableOpacity onPress={() => navigation.navigate('Chess')} style={{ width: "100%", height: 30, marginRight: "auto", marginLeft: "auto", top: "68%", backgroundColor: "orange" }}>
                                                <Text style={{ fontSize: 22, fontFamily: "RobotoSlab_600SemiBold", color: '#696969', textAlign: "center" }}>Xiangqi</Text>
                                            </TouchableOpacity>
                                        </ImageBackground>

                                        <ImageBackground style={{ height: '70%', margin: "1%", width: 175, borderRadius: 10 }} source={require("../../../assets/Backgammon.jpeg")}>
                                            <TouchableOpacity onPress={() => navigation.navigate('Chess')} style={{ width: "100%", height: 30, marginRight: "auto", marginLeft: "auto", top: "68%", backgroundColor: "orange" }}>
                                                <Text style={{ fontSize: 22, fontFamily: "RobotoSlab_600SemiBold", color: '#696969', textAlign: "center" }}>Backgammon</Text>
                                            </TouchableOpacity>
                                        </ImageBackground>

                                        <ImageBackground style={{ height: '70%', margin: "1%", width: 175, borderRadius: 10 }} source={require("../../../assets/Morris.png")}>
                                            <TouchableOpacity onPress={() => navigation.navigate('Chess')} style={{ width: "100%", height: 30, marginRight: "auto", marginLeft: "auto", top: "68%", backgroundColor: "orange" }}>
                                                <Text style={{ fontSize: 22, fontFamily: "RobotoSlab_600SemiBold", color: '#696969', textAlign: "center" }}>Morris</Text>
                                            </TouchableOpacity>
                                        </ImageBackground>

                                        <ImageBackground style={{ height: '70%', margin: "1%", width: 175, borderRadius: 10 }} source={require("../../../assets/reversi.jpg")}>
                                            <TouchableOpacity onPress={() => navigation.navigate('Chess')} style={{ width: "100%", height: 30, marginRight: "auto", marginLeft: "auto", top: "68%", backgroundColor: "orange" }}>
                                                <Text style={{ fontSize: 22, fontFamily: "RobotoSlab_600SemiBold", color: '#696969', textAlign: "center" }}>Reversi</Text>
                                            </TouchableOpacity>
                                        </ImageBackground>

                                        <ImageBackground style={{ height: '70%', margin: "1%", width: 175, borderRadius: 10 }} source={require("../../../assets/skat.png")}>
                                            <TouchableOpacity onPress={() => navigation.navigate('Chess')} style={{ width: "100%", height: 30, marginRight: "auto", marginLeft: "auto", top: "68%", backgroundColor: "orange" }}>
                                                <Text style={{ fontSize: 22, fontFamily: "RobotoSlab_600SemiBold", color: '#696969', textAlign: "center" }}>skat</Text>
                                            </TouchableOpacity>
                                        </ImageBackground>


                                    </View>

                                </View>

                            </View>
                        </ScrollView>
                    </View>

                    <View>
                        <ScrollView>
                            <View style={{
                                flex: 1, backgroundColor: 'black',
                                paddingTop: 20, marginTop: 10
                            }}>
                                <Text style={{ fontSize: 30, fontWeight: '700', marginTop: 20, marginBottom: 20, marginLeft: 20, color: "#696969" }}>
                                    Air Sports
                                </Text>

                                <Text style={{ textAlign: "justify",fontSize: 30, fontWeight: '500', marginRight: 10, marginLeft:10,marginBottom: 10, color: "#dddddd" }}>
                                    “Moment of victory is much too short to live
                                    for that and nothing else.”
                                </Text>

                            </View>

                            <View style = {{backgroundColor: "#000000"}}>
                                <Image style={{ width: 400, height: 300, marginRight: "auto", marginLeft: "auto", marginTop: 10, marginBottom: 10 }}
                                    source={require("../../../assets/airsport.jpg")} />
                            </View>


                            <View>
                                <View style={{
                                    flex: 1, backgroundColor: '#98AFC7',
                                    paddingTop: 20
                                }}>
                                    <Image style={{ width: "40%", height: 200, marginTop: 5, marginLeft: 20, marginBottom: 100 }}
                                        source={require("../../../assets/air-racing.jpg")}
                                    />

                                    <Text style={{ fontSize: 31, textAlign: 'center', marginRight: 15, marginLeft: 200, marginTop: -300, height: 290, fontFamily: 'JosefinSans_700Bold_Italic' }}>
                                        Air Racing
                                    </Text>
                                    <Text style={{ textAlign: 'justify', marginRight: 15, marginLeft: 200, marginTop: -230, height: 170 }}>
                                        Air racing is a type of motorsport that involves airplanes or other types of aircraft that compete over a fixed course, with the winner either returning the shortest time, the one to complete it with the most points, or to come closest to a previously estimated time.
                                    </Text>
                                </View>

                                <View style={{ backgroundColor: '#90EE90', marginTop: 2 }}>
                                    <Image style={{ width: "40%", height: 200, marginTop: 20, marginLeft: 20, marginBottom: 100 }}
                                        source={require("../../../assets/aerobatics.webp")}
                                    />

                                    <Text style={{ fontSize: 30, textAlign: 'center', marginRight: 15, marginLeft: 200, marginTop: -300, height: 290, fontFamily: 'JosefinSans_700Bold_Italic' }}>
                                        Aerobatics
                                    </Text>

                                    <Text style={{ textAlign: 'justify', marginRight: 15, marginLeft: 200, marginTop: -230, height: 170 }}>
                                        Aerobatics is an air sport which usually judges the skills of the pilots who are performing aerobatic flying. This amazing sport is usually practiced in both piston powered airplanes and single engine gliders.
                                    </Text>
                                </View>
                                <View style={{ flex: 1, backgroundColor: '#66CDAA', marginTop: 2 }}>
                                    <Image style={{ width: "40%", height: 200, marginTop: 20, marginLeft: 20, marginBottom: 100 }}
                                        source={require("../../../assets/aeromodelling.jpg")}
                                    />
                                    <Text style={{ fontSize: 31, textAlign: 'center', marginRight: 15, marginLeft: 200, marginTop: -300, height: 290, fontFamily: 'JosefinSans_700Bold_Italic' }}>
                                        Aeromodelling
                                    </Text>

                                    <Text style={{ textAlign: 'justify', marginRight: 15, marginLeft: 200, marginTop: -230, height: 170 }}>
                                        Aero modelling sport has been around since man first started to put his dreams of air flight into practice.                </Text>

                                </View>

                                <View style={{ flex: 1, backgroundColor: '#20B2AA', marginTop: 2 }}>
                                    <Image style={{ width: "40%", height: 200, marginTop: 20, marginLeft: 20, marginBottom: 100 }}
                                        source={require("../../../assets/hang_gliding.jpg")}
                                    />

                                    <Text style={{ fontSize: 30, textAlign: 'center', marginRight: 15, marginLeft: 200, marginTop: -300, height: 290, fontFamily: 'JosefinSans_700Bold_Italic' }}>
                                        Gliding
                                    </Text>

                                    <Text style={{ textAlign: 'justify', marginRight: 15, marginLeft: 200, marginTop: -230, height: 170 }}>
                                        Gliding (also known as soaring) is a sports activity in which the pilot seeks to maintain or gain altitude in unpowered flight (aided by the rising air) by flying unpowered aircrafts – the gliders or sailplanes.                                    </Text>
                                </View>
                                <View style={{ flex: 1, backgroundColor: '#566D7E', marginTop: 2 }}>
                                    <Image style={{ width: "40%", height: 200, marginTop: 20, marginLeft: 20, marginBottom: 100 }}
                                        source={require("../../../assets/humanaircraft.jpg")}
                                    />

                                    <Text style={{ fontSize: 30, textAlign: 'center', marginRight: 15, marginLeft: 200, marginTop: -300, height: 290, fontFamily: 'JosefinSans_700Bold_Italic' }}>
                                        Humanaircraft
                                    </Text>

                                    <Text style={{ textAlign: 'justify', marginRight: 15, marginLeft: 200, marginTop: -230, height: 170 }}>
                                        Air racing is a type of motorsport that involves airplanes or other types of aircraft that compete over a fixed course, with the winner either returning the shortest time, the one to complete it with the most points, or to come closest to a previously estimated time.
                                    </Text>

                                </View>
                                <View style={{ flex: 1, backgroundColor: '#566D7E', marginTop: 2 }}>
                                    <Image style={{ width: "40%", height: 200, marginTop: 20, marginLeft: 20, marginBottom: 100 }}
                                        source={require("../../../assets/drone_racing.jpg")}
                                    />
                                    <Text style={{ fontSize: 30, textAlign: 'center', marginRight: 15, marginLeft: 200, marginTop: -300, height: 290, fontFamily: 'JosefinSans_700Bold_Italic' }}>
                                        Drone Racing
                                    </Text>
                                    <Text style={{ textAlign: 'justify', marginRight: 15, marginLeft: 200, marginTop: -230, height: 170 }}>
                                        Drone Racing is a sporting event in which competitors race specially built multi-rotor drones around a natural or specifically designed course.
                                    </Text>
                                </View>
                                <View style={{ flex: 1, backgroundColor: '#566D7E', marginTop: 2 }}>
                                    <Image style={{ width: "40%", height: 200, marginTop: 20, marginLeft: 20, marginBottom: 100 }}
                                        source={require("../../../assets/balloon-race.jpg")}
                                    />
                                    <Text style={{ fontSize: 30, textAlign: 'center', marginRight: 15, marginLeft: 200, marginTop: -300, height: 290, fontFamily: 'JosefinSans_700Bold_Italic' }}>
                                        Ballooning
                                    </Text>
                                    <Text style={{ textAlign: 'justify', marginRight: 15, marginLeft: 200, marginTop: -230, height: 170 }}>
                                        Ballooning is an adventurous air sport that involves flying a hot-air balloon. Hot-air balloons are known to be used as early as the late 16th century. Ballooning was primarily a recreational activity, ...
                                    </Text>
                                </View>

                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
    )

};

const styles = StyleSheet.create({

    image: {
        width: '40%',
        height: 300,
        // marginBottom: "500%",
        borderRadius: 10,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        // flexDirection: "column",
        // flexWrap: "wrap",
        marginRight: -9,
        marginLeft: -9,
        marginTop: 10,
        marginHorizontal: '2.5%',
        flexWrap: 'wrap'

    },

}
)

export default Home