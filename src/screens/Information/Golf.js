//import liraries
import { View, Text, ScrollView, ImageBackground, FlatList } from 'react-native'
import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react'

// create a component
const Golf = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <View style={{ marginBottom: 50 }}>
                    <ScrollView>
                        <View>
                            <Text>
                                “Golf is assuredly a mystifying game. It would seem that if a person has hit a golf ball correctly a thousand times,
                                he should be able to duplicate the performance at will. But such is certainly not the case.”
                            </Text>
                            <View style={{ height: 400,marginBottom:-99 }}>
                                <ImageBackground style={{ height: "80%", width: 400, marginLeft: 10, marginTop: 20, borderRadius: 10 }} source={require("../../../assets/golf.jpg")}>
                                </ImageBackground>
                            </View>
                        </View>
                        <View>
                            <Text>
                                Golf is a club-and-ball sport in which players use various clubs to hit balls into a series of holes on a course in as few strokes as possible.

                                Golf, unlike most ball games, cannot and does not utilize a standardized playing area, and coping with the varied terrains encountered on different courses is a key part of the game. The game at the usual level is played on a course with an arranged progression of 18 holes, though recreational courses can be smaller, often having nine holes. Each hole on the course must contain a teeing ground to start from, and a putting green containing the actual hole or cup 4+1⁄4 inches (11 cm) in diameter. There are other standard forms of terrain in between, such as the fairway, rough (long grass), bunkers (or "sand traps"), and various hazards (water, rocks) but each hole on a course is unique in its specific layout and arrangement.

                                Golf is played for the lowest number of strokes by an individual, known as stroke play, or the lowest score on the most individual holes in a complete round by an individual or team, known as match play. Stroke play is the most commonly seen format at all levels, but most especially at the elite level.

                                The modern game of golf originated in 15th century Scotland. The 18-hole round was created at the Old Course at St Andrews in 1764. Golf's first major, and the world's oldest tournament in existence, is The Open Championship, also known as the British Open, which was first played in 1860 at the Prestwick Golf Club in Ayrshire, Scotland. This is one of the four major championships in men's professional golf, the other three being played in the United States: The Masters, the U.S. Open, and the PGA Championship.
                            </Text>
                        </View>
                        <View>
                            <Text>
                                Origin and history
                            </Text>
                            <View style={{ height: 400 }}>
                                <ImageBackground style={{ height: "90%", width: 400, marginLeft: 10, marginTop: 20, borderRadius: 10, marginBottom: -60 }} source={require("../../../assets/golfHistory1.jpg")}>
                                </ImageBackground>
                            </View>

                            <Text>
                                While the modern game of golf originated in 15th-century Scotland, the game's ancient origins are unclear and much debated.

                                Some historians[3] trace the sport back to the Roman game of paganica, in which participants used a bent stick to hit a stuffed leather ball. One theory asserts that paganica spread throughout Europe as the Romans conquered most of the continent, during the first century BC, and eventually evolved into the modern game.[4]

                                Others cite chuiwan (捶丸; "chui" means striking and "wan" means small ball)[5] as the progenitor, a Chinese game played between the eighth and fourteenth centuries.[6] A Ming Dynasty scroll by the artist Youqiu dating back to 1368 entitled "The Autumn Banquet" shows a member of the Chinese Imperial court swinging what appears to be a golf club at a small ball with the aim of sinking it into a hole.[5] The game is thought to have been introduced into Europe during the Middle Ages.[7]


                                The MacDonald boys playing golf, attributed to William Mosman. 18th century, National Galleries of Scotland.
                                Another early game that resembled modern golf was known as cambuca in England and chambot in France.[7] The Persian game chowkan is another possible ancient origin, albeit being more polo-like. In addition, kolven (a game involving a ball and curved bats) was played annually in Loenen, Netherlands, beginning in 1297, to commemorate the capture of the assassin of Floris V, a year earlier.
                            </Text>
                            <View style={{ height: 470 }}>
                                <ImageBackground style={{ height: "70%", width: 400, marginLeft: 10, marginTop: 20, borderRadius: 10, marginBottom: -90 }} source={require("../../../assets/golfHistory2.jpg")}>
                                </ImageBackground>
                            </View>
                        </View>

                        <View>
                            <Text>
                                Golf course
                            </Text>
                            <View style = {{height: 400}}>
                                <ImageBackground style={{ height: "70%", width: 400, marginLeft: 10, marginTop: 20, borderRadius: 10, marginBottom: -50 }} source={require("../../../assets/golfField.jpg")}>
                                </ImageBackground>
                            </View>

                            <Text>
                                A golf course consists of either 9 or 18 holes, each with a teeing ground or "tee box" that is set off by two markers showing the bounds of the legal tee area, fairway, rough and other hazards, and the putting green surrounded by the fringe with the pin (normally a flagstick) and cup.

                                The levels of grass are varied to increase difficulty, or to allow for putting in the case of the green. While many holes are designed with a direct line-of-sight from the teeing area to the green, some holes may bend either to the left or to the right. This is commonly called a "dogleg", in reference to a dog's knee. The hole is called a "dogleg left" if the hole angles leftwards and "dogleg right" if it bends right. Sometimes, a hole's direction may bend twice; this is called a "double dogleg".

                                A regular golf course consists of 18 holes, but nine-hole courses are common and can be played twice through for a full round of 18 holes.[17][18]

                                Early Scottish golf courses were primarily laid out on links land, soil-covered sand dunes directly inland from beaches. The word "links" derives from the Scots language and the Old English word hlinc ("rising ground, ridge"): traditionally these are coastal sand dunes but sometimes open parkland.[19] This gave rise to the term "golf links", particularly applied to seaside courses and those built on naturally sandy soil inland.[20]

                                The first 18-hole golf course in the United States was on a sheep farm in Downers Grove, Illinois, in 1892. The course is still there today.
                            </Text>
                            <View style={{ height: 400 }}>
                                <ImageBackground style={{ height: "90%", width: 400, marginLeft: 10, marginTop: 20, borderRadius: 10, marginBottom: -50 }} source={require("../../../assets/golfField2.jpg")}>
                                </ImageBackground>
                            </View>

                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
};

//make this component available to the app
export default Golf;
