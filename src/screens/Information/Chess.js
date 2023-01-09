import { View, Text, ScrollView, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Chess = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>

        <View style={{ marginBottom: 20 }}>
          <ScrollView>
            <View>
              <Text>
                “Chess is a war over the board. The object is to crush the opponent’s mind.”
              </Text>
            </View>
            <View style={{ height: 400 }}>
              <ImageBackground style={{ height: "90%", width: 400, marginLeft: 10, marginTop: 20, borderRadius: 10, marginBottom: -50 }} source={require("../../../assets/ChessSet.jpg")}>
              </ImageBackground>
            </View>

            <View>
              <Text style={{ fontSize: 20, marginLeft: 10, marginRight: 10, textAlign: "justify", fontFamily: "RobotoSlab_400Regular" }}>
                Chess is a board game played between two players. It is sometimes called Western chess or international chess to distinguish it from related games such as xiangqi and shogi.
                The current form of the game emerged in Southern Europe during the second half of the 15th century after evolving from chaturanga, a similar but much older game of Indian origin. Today, chess is one of the world's most popular games, played by millions of people worldwide.
              </Text>
              <Text style={{ fontSize: 20, marginLeft: 10, marginRight: 10, textAlign: "justify", fontFamily: "RobotoSlab_400Regular" }}>
                Organized chess arose in the 19th century. Chess competition today is governed internationally by FIDE (International Chess Federation). The first universally recognized World Chess Champion, Wilhelm Steinitz, claimed his title in 1886; Magnus Carlsen is the current World Champion. A huge body of chess theory has developed since the game's inception. Aspects of art are found in chess composition, and chess in its turn influenced Western culture and art and has connections with other fields such as mathematics, computer science, and psychology.

                One of the goals of early computer scientists was to create a chess-playing machine. In 1997, Deep Blue became the first computer to beat the reigning World Champion in a match when it defeated Garry Kasparov. Today's chess engines are significantly stronger than the best human players, and have deeply influenced the development of chess theory.
              </Text>
            </View>
            <View>
              <Text>
                Rules Of Chess
              </Text>


              <Text>
                The Chess Pieces
              </Text>
              <Text style={{ fontSize: 20, marginLeft: 10, marginRight: 10, textAlign: "justify", fontFamily: "RobotoSlab_400Regular" }}>
                The great game of chess has two opposing sides, light colored and dark colored. The two sides are briefly called White and Black. White always goes first.

                For starters, let's go over how many pieces there are in chess, plus the chess piece names.
              </Text>
            </View>
            <View>
              <Text>
                Each player has 16 pieces:chess pieces
              </Text>



              <View style={{ marginLeft: 10, marginRight: 10, flexDirection: "row", marginBottom: 30, marginTop: 20 }}>
                <FlatList
                  data={[
                    { key: '1 King' },
                    { key: '1 Queen ' },
                    { key: '2 Bishops' },
                    { key: '2 Knights' },
                    { key: '8 Pawns ' },
                  ]}
                  renderItem={({ item }) => <Text style={{ textAlign: "justify" }}>{'\u2B24' + ' '}{item.key}</Text>}
                />
                <ImageBackground style={{ height: "110%", width: 80, borderRadius: 10, marginRight: 50 }} source={require("../../../assets/chessKing.gif")}>
                </ImageBackground>
              </View>
            </View>
            <View>

              <Text>
                How the Chess Pieces Move
              </Text>
              <View style={{ marginLeft: 10, marginRight: 10, flexDirection: "row", marginBottom: 30, marginTop: 20 }}>
                <FlatList
                  data={[
                    { key: 'The King moves from its square to a neighboring square,' },
                    { key: 'the Rook can move in its line or row,' },
                    { key: 'the Bishop moves diagonally,'},
                    { key: 'the Queen may move like a Rook or a Bishop,'},
                    { key: 'the Knight jumps in making the shortest move that is not a straight one'},
                    { key: 'the Pawn moves one square straight ahead.'}
                  ]}
                  renderItem={({ item }) => <Text style={{ textAlign: "justify" }}>{'\u2B24' + ' '}{item.key}</Text>}
                />
              </View>
              <Text>
                But the above moves are only permitted if the square the piece lands on is empty or occupied by a hostile piece.
              </Text>
              <Text>
                Times when two pieces move at the same time:

              </Text>
              <View>

                <FlatList
                  data={[
                    { key: 'When a hostile piece is "captured," (i.e. removed from the board),' },
                    { key: 'In "Castling,"' },
                    { key: 'Or in "Queening" a pawn.' },
                    { key: 'Moreover, the motion of a Rook, Bishop or Queen stops when they strike an occupied square.' }

                  ]}
                  renderItem={({ item }) => <Text style={{ textAlign: "justify" }}>{'\u2B24' + ' '}{item.key}</Text>}
                />
              </View>
              <View style={{ height: 400 }}>
                <ImageBackground style={{ height: "100%", width: 390, marginLeft: 20, marginTop: 20, borderRadius: 10 }} source={require("../../../assets/chessRule1.webp")}>
                </ImageBackground>
              </View>

            </View>



          </ScrollView>
        </View>
      </View>
    </SafeAreaView>

  )
}

export default Chess