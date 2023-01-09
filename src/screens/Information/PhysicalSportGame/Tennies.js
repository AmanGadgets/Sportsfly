import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as SplashScreen from "expo-splash-screen";
import MarkedList, { MarkedListItem, useMarkedList } from '@jsamr/react-native-li'
// import { FlatList } from 'react-native-gesture-handler'


const Tennie = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ marginBottom: 50 }}>
          <ScrollView>
            <View style={{ height: 400 }}>
              <View style={{}}>
                <Text style={{ textAlign: "center", fontSize: 20, marginTop: 20, marginLeft: "auto", marginRight: "auto", fontFamily: "JosefinSans_400Regular_Italic" }}>
                  Tennis is a tough sport – there are no draws. But if there was one, I would have been happy to accept a draw with Rafa tonight, really.
                </Text>
                 <ImageBackground style={{ height: "80%", width: 400, marginLeft: 15, marginTop: 40, borderRadius: 10, marginBottom: -50 }} source={require("../../../../assets/tennis.jpg")}>
                </ImageBackground>
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 20, marginLeft: 10, marginRight: 10, textAlign: "justify", fontFamily: "RobotoSlab_400Regular" }}>
                Tennis, original name lawn tennis, game in which two opposing players (singles) or pairs of players (doubles) use tautly strung rackets to hit a ball of specified size, weight, and bounce over a net on a rectangular court. Points are awarded to a player or team whenever the opponent fails to correctly return the ball within the prescribed dimensions of the court. Organized tennis is played according to rules sanctioned by the International Tennis Federation (ITF), the world governing body of the sport.
                Tennis originally was known as lawn tennis, and formally still is in Britain, because it was played on grass courts by Victorian gentlemen and ladies. It is now played on a variety of surfaces. The origins of the game can be traced to a 12th–13th-century French handball game called jeu de paume (“game of the palm”), from which was derived a complex indoor racket-and-ball game: real tennis. This ancient game is still played to a limited degree and is usually called real tennis in Britain, court tennis in the United States, and royal tennis in Australia.
              </Text>
            </View>
            <View>
              <Text>
                Tennies Rules
              </Text>

              <Text style={{ flex: 1, textAlign: "justify", marginLeft: 10, marginRight: 10 }}>
                First of all, the rules of tennis are different (although mostly similar) for singles matches and doubles matches. But before we go over that stuff, let’s review some of the general tennis rules and regulations that apply to all of tennis before we learn how to play tennis for singles and doubles.
              </Text>



              <View style={{ marginLeft: 10, marginRight: 10 }}>

                <FlatList
                  data={[
                    { key: ' A ball must land within bounds for play to continue; if a player hits the ball outside of bounds, this results in the loss of the point for them.' },
                    { key: ' Players/teams cannot touch the net or posts or cross onto the opponent’s side.' },
                    { key: ' Players/teams cannot carry the ball or catch it with the racquet.' },
                    { key: ' Players cannot hit the ball twice.' },
                    { key: 'Players must wait until the ball passes the net before they can return it.' },
                    { key: 'A player that does not return a live ball before it bounces twice loses the point.' },
                    { key: 'If the ball hits or touches the players, that counts as a penalty.' },
                    { key: ' If the racquet leaves the hand or verbal abuse occurs, a penalty is given.' },
                    { key: ' Any ball that bounces on the lines of boundary are considered good.' },
                    { key: 'A serve must bounce first before the receiving player can return it.' }
                  ]}
                  renderItem={({ item }) => <Text>{'\u2B24' + ' '}{item.key}</Text>}
                />
              </View>
            </View>


            <View>


              <Text>
                {"\n"}
                Equipment
                {"\n"}

              </Text>

              <Text style = {{}}>

                Racquet – A racquet is comprised of a handle, a frame, and strings that are bound in a crisscross weaving pattern. A racquet’s frame should not exceed 32 inches in length, with a handle no longer than 12.5 inches in width, and a surface no more than 15.5 inches in overall length or 11.5 inches in width. There can also be no objects or devices on the racquet except for ones that prevent vibration and wear and tear.
                Ball – A tennis ball is white or yellow in color for tournaments, with measurements of 2-1/2 to 2-5/8 inches in diameter and weighing anywhere from 2 to 2-1/16 ounces. The elasticity of the ball and the uniform outer surface are also determined by approved specifications.
                Scoring

                Points – Smallest unit of measurement. Points increment from Love(0)-15-30-40-game.
                Games – Games consist of 4 points each, and is won when a player reaches 4 points with at least a 2 point advantage.
                Sets – A set consists of 6 games and is won by the player/team who reaches 6 games first with least a 2 point lead.
                Advantage Set – If a game score of 6-6 is reached and advantage set rules are used, a player/team can only win a set with a 2 game lead.
                Matches – A match is usually played as best of 3 or best of 5 sets.
                Deuce – Occurs if a score of 40-40 is reached. In order to win the game, a player/team must win 2 consecutive points in order to take the game. If a player wins one point, they have advantage, but if they lose the next point, the score returns to deuce.
                Tie-break game – If a game score of 6-6 is reached and tie-break set rules are used, players must play a tie-break game in order to decide who wins the set. In a tie-break game, a player/team must reach 7 points with a two point advantage to win. For the serving format of a tie-break game, player 1 serves for the first point, player 2 serves for the next two points, player 1 serves for the next two points after that, etc.
                You can find a more in-depth look at   tennis is scored here and all the terms that are used (including alternate tennis rules terms) here.
              </Text>
            </View>
            <View>
              <View style={{ height: 400 }}>

                <ImageBackground style={{ height: "80%", width: 400, marginLeft: 15, marginTop: 40, borderRadius: 10 }} source={require("../../../../assets/tennisCourt.png")}>
                </ImageBackground>
              </View>
              <View>
                <Text style={{ fontSize: 20, marginLeft: 10, marginRight: 10, marginTop: 300, textAlign: "justify", fontFamily: "RobotoSlab_600Regular" }}>

                  Baseline – The baselines are the lines on either end of the court that determines the boundaries of play going lengthwise. They are also where a player serves behind.
                  Center Mark – The center mark determines the two halves of the tennis court. It mainly helps with service to determine where a player should stand prior to serving.
                  Center Line – The center line divides the two service boxes into a distinct left service box and right service box on either side of the court. Landing a serve on the line is considered good.
                  Net – The net stands 3 feet and 6 inches high where the posts lie while the middle of the net is 3 feet tall, with the posts 3 feet outside of the court on either side.
                  Hitting a ball into the net is considered an out while any ball that hits the net cord and falls onto the other side is considered good except for a serve, which allows for a re-do, or let.
                  Service Line – The service line separates the forecourt from the back court, and it also marks the length of the service box.
                  Singles Sideline – The singles sideline is the innermost line running lengthwise and determines the boundary of play for singles matches as well as the width of the service box.
                  Doubles Sideline – The doubles sideline is the outermost line running lengthwise and is only used in doubles matches.
                </Text>

              </View>

            </View>

            <View>
              <View>
                <Text style={{ textAlign: "justify", fontSize: 40, marginLeft: 10 }}>
                  History of tennis
                </Text>
              </View>

              <View style={{ height: 400 }}>
                <Text style={{ textAlign: "justify", fontSize: 20, marginLeft: 10, marginRight: 10 }}>
                  The racket sport traditionally named lawn tennis, invented in Croydon, England now commonly known simply as tennis, is the direct descendant of what is now denoted real tennis or royal tennis, which continues to be played today as a separate sport with more complex rules. Most rules of (lawn) tennis derive from this precursor and it is reasonable to see both sports as variations of the same game. Most historians believe that tennis was originated in the monastic cloisters in northern France in the 12th century, but the ball was then struck with the palm of the hand; hence, the name jeu de paume ("game of the palm").
                </Text>

                <ImageBackground style={{ height: "90%", width: 400, marginLeft: 15, marginTop: 40, borderRadius: 10, marginBottom: -50 }} source={require("../../../../assets/historyTennis.jpg")}>
                </ImageBackground>
              </View>
              <View>
                <Text style={{ fontSize: 20, marginLeft: 10, marginRight: 10, marginTop: 300, textAlign: "justify", fontFamily: "RobotoSlab_400Regular" }}>
                  It was not until the 16th century that rackets came into use, and the game began to be called "tennis." It was popular in England and France, and Henry VIII of England was a big fan of the game, now referred to as real tennis.[2]

                  Many original tennis courts remain, including courts at Oxford, Cambridge, Falkland Palace in Fife where Mary Queen of Scots regularly played, and Hampton Court Palace.

                </Text>
                <Text style={{ fontSize: 20, marginLeft: 10, marginRight: 10, textAlign: "justify", fontFamily: "RobotoSlab_400Regular" }}>
                  Many of the French courts were decommissioned with the terror that accompanied the French Revolution.
                  The Tennis Court Oath (Serment du Jeu de Paume) was a pivotal event during the first days of the French Revolution.
                  The Oath was a pledge signed by 576 of the 577 members from the Third Estate who were locked out of a meeting of the Estates-General on 20 June 1789.
                  Marylebone Cricket Club's Rules of Lawn Tennis have been official, with periodic slight modifications, ever since 1875.
                </Text>

                 <View style={{ height: 400 }}>
                  <ImageBackground style={{ height: "90%", width: 400, marginLeft: 15, marginTop: 40, borderRadius: 10, marginBottom: -50 }} source={require("../../../../assets/historyTennis2.jpg")}>
                  </ImageBackground>
                </View> 

                <Text style={{ fontSize: 20, marginLeft: 10, marginRight: 10, textAlign: "justify", fontFamily: "RobotoSlab_400Regular" }}>
                  Those rules were adopted by the All England Lawn Tennis and Croquet Club for the first Lawn Tennis Championship, The Championships, Wimbledon in 1877.

                  The Davis Cup, an annual competition between men's national teams, dates to 1900. The analogous competition for women's national teams, the Fed Cup, was founded as the Federation Cup in 1963 to celebrate the 50th anniversary of the founding of the International Tennis Federation, also known as the ITF.

                  Promoter C. C. Pyle created the first professional tennis tour in 1926, with a group of American and French tennis players playing exhibition matches to paying audiences.
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View >

    </SafeAreaView >



  )
}

export default Tennie