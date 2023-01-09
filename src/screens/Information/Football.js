import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const Football = () => {
  return (

    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ marginBottom: 25, backgroundColor: "#D3D3D3" }}>
          <ScrollView style={{}}>

            <View style={{ height: 400 }}>
              <View style={{}}>
                <Text style={{ textAlign: "center", fontSize: 20, marginTop: 20, marginLeft: "auto", marginRight: "auto", fontFamily: "JosefinSans_400Regular_Italic" }}>
                  "Football is like life. It requires perseverance, self-denial, hard work, sacrifice, dedication, and respect for authority."
                </Text>
                <ImageBackground style={{ height: "80%", width: 400, marginLeft: 15, marginTop: 40, borderRadius: 10, marginBottom: -50 }} source={require("../../../assets/subfootball.webp")}>
                </ImageBackground>
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 20, marginLeft: 10, marginRight: 10, textAlign: "justify", fontFamily: "RobotoSlab_400Regular" }}>
                Football, also called association football or soccer, game in which two teams of 11 players, using any part of their bodies except their hands and arms, try to maneuver the ball into the opposing team’s goal. Only the goalkeeper is permitted to handle the ball and may do so only within the penalty area surrounding the goal. The team that scores more goals wins.

                Football is the world’s most popular ball game in numbers of participants and spectators. Simple in its principal rules and essential equipment, the sport can be played almost anywhere, from official football playing fields (pitches) to gymnasiums, streets, school playgrounds, parks, or beaches. Football’s governing body, the Fédération Internationale de Football Association (FIFA), estimated that at the turn of the 21st century there were approximately 250 million football players and over 1.3 billion people “interested” in football; in 2010 a combined television audience of more than 26 billion watched football’s premier tournament, the quadrennial month-long World Cup finals.
              </Text>
            </View>
            <View style={{ marginTop: 20 }}>

              <Text style={{ fontSize: 40, marginLeft: 20, marginTop: -10, fontFamily: "RobotoSlab_900Black" }}>
                History
              </Text>
              <View style={{ height: 300 }}>
                <ImageBackground style={{ height: "90%", width: 400, marginLeft: 15, marginTop: 40, borderRadius: 10 }} source={require("../../../assets/historyfootball.jpg")}>
                </ImageBackground>
              </View>

              <Text style={{ fontSize: 25, marginLeft: 20, marginBottom: 20, }}>
                The early years
              </Text>

            </View>


            <View>

              <Text style={{ fontSize: 20, marginLeft: 10, marginRight: 10, textAlign: "justify", fontFamily: "RobotoSlab_400Regular" }}>
                Modern football originated in Britain in the 19th century. Since before medieval times, “folk football” games had been played in towns and villages according to local customs and with a minimum of rules.
                Industrialization and urbanization, which reduced the amount of leisure time and space available to the working class, combined with a history of legal prohibitions against particularly violent and destructive forms of folk football to undermine the game’s status from the early 19th century onward.
                However, football was taken up as a winter game between residence houses at public (independent) schools such as Winchester, Charterhouse, and Eton. Each school had its own rules; some allowed limited handling of the ball and others did not.
                The variance in rules made it difficult for public schoolboys entering university to continue playing except with former schoolmates. As early as 1843 an attempt to standardize and codify the rules of play was made at the University of Cambridge, whose students joined most public schools in 1848 in adopting these “Cambridge rules,” which were further spread by Cambridge graduates who formed football clubs. In 1863 a series of
                meetings involving clubs from metropolitan London and surrounding counties produced the printed rules of football, which prohibited the carrying of the ball. Thus, the “handling” game of rugby remained outside the newly formed Football Association (FA). Indeed, by 1870 all handling of the ball except by the goalkeeper was prohibited by the FA.
              </Text>

              <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 30, marginBottom: 5, marginLeft: 15 }}>
                The Field
              </Text>

              <View style={{ height: 300 }}>
                <ImageBackground style={{ height: "90%", width: 400, marginLeft: 15, marginTop: 40, borderRadius: 10 }} source={require("../../../assets/footballfield.png")}>
                </ImageBackground>
              </View>

              <Text style={{ textAlign: "justify", marginLeft: 10, marginRight: 10, fontFamily: "JosefinSans_600SemiBold" }}>
                Two 11-player teams play the game on a turf or synthetic field measuring 100 yards long and 53 yards wide.
                White lines cross the field at 10-yard intervals, starting from zero at each end with the 50-yard line marked at mid-field.
                Smaller white hash marks at 1-yard intervals help the players,officials and fans gauge a team's progress more precisely.
                Beyond each goal line is an end zone 10 yards deep. That's where the points pile up. Each team defends its own end zone.
                When the offensive team, which has the ball, can fight through the defenders and take the ball into its opponent's end zone, it scores points.
              </Text>

              <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 30, marginBottom: 20, marginLeft: 15 }}>
                Scoring
              </Text>
              <Text style={{ textAlign: "justify", marginLeft: 10, marginRight: 10, fontFamily: "RobotoSlab_400Regular" }}>
                In football, the highest score wins. A touchdown scores six points when the offensive team carries the ball into the end zone or catches it there or intercepts a pass or recovers a fumbled ball.
                A touchdown earns an attempt to score one or two extra points. A football kicked through the goal posts wins one point. A run or catch in the end zone wins two. The play starts at the defense's 2-yard line.
                Field goals score three points for the offensive team if they cannot fight their way to the defender's end zone. The offensive place kicker must kick the football between the goal posts from anywhere on the field for this score, though successful attempts from beyond the 45-yard line are rare.
                The defense can score two points on a safety when the offensive ball carrier is caught behind his goal line and tackled by the defense to stop the play.
              </Text>

              <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 30, marginBottom: 20, marginLeft: 15 }}>
                Timing
              </Text>

              <Text style={{ textAlign: "justify", marginLeft: 10, marginRight: 10, fontFamily: "RobotoSlab_400Regular" }}>
                Regulation time for a football game is one hour, divided into four 15-minute quarters. A halftime between quarters two and three allows 12 minutes for each team to convene off-field to discuss strategy. Between the other quarters, the teams have two minutes to switch the end zones they defend. Each half of the game begins with the defensive team's kickoff, delivering the ball to the offensive side.
              </Text>

              <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 30, marginBottom: 20, marginLeft: 15 }}>
                Rules
              </Text>

              <Text style={{ textAlign: "justify", marginLeft: 10, marginRight: 10, fontFamily: "RobotoSlab_400Regular" }}>
                Football is played by some of the most powerful athletes in sports, sometimes topping 300 lbs., who often hurl themselves at each other at full speed. Without rules the game could become a spectacle of injuries and unfair advantages.
                The NFL and NCAA promote extensive and continually evolving rules regulating protective uniform and equipment standards, legal tackling and blocking practices, standards of sportsmanlike conduct and fair scoring.
                Fans want to see intense competition but appreciate the rules that make the sport fair and protect the players to play another day.
              </Text>
            </View>


          </ScrollView>
        </View>

      </View >

    </SafeAreaView >
  )
}

const styles = StyleSheet.create({

})
export default Football