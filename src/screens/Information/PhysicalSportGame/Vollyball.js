import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'

const BasketBall = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ marginBottom: 50 }}>
          <ScrollView>

            <Text style={{ fontSize: 20, fontFamily: "JosefinSans_500Medium_Italic", textAlign: "justify", marginLeft: "2%", marginRight: "2%" }}>
              “You don’t play against opponents, you play against the game of basketball.”
              “A key basketball skill is imagery. The best players “see” situations before they happen so they can be prepared”
            </Text>

            <View style={{ height: 250 }}>
              <ImageBackground style={{ height: "90%", width: 400, marginLeft: 10, marginTop: 20, borderRadius: 10, marginBottom: -50 }} source={require("../../../assets/BasketBall.jpg")}>
              </ImageBackground>
            </View>

            <Text style={{ fontSize: 30, fontFamily: "RobotoSlab_700Bold", marginLeft: 10, marginBottom: 10 }}>
              Let's talk about
            </Text>

            <Text style={{ fontSize: 20, fontFamily: "RobotoSlab_600SemiBold", textAlign: "justify", marginLeft: 15, marginRight: 15 }}>
              Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules.[1] It has been a part of the official program of the Summer Olympic Games since Tokyo 1964. Beach volleyball was introduced to the programme at the Atlanta 1996. The adapted version of volleyball at the Summer Paralympic Games is sitting volleyball.

              The complete set of rules is extensive,[2] but play essentially proceeds as follows: a player on one of the teams begins a 'rally' by serving the ball (tossing or releasing it and then hitting it with a hand or arm), from behind the back boundary line of the court, over the net, and into the receiving team's court.[3] The receiving team must not let the ball be grounded within their court. The team may touch the ball up to three times to return the ball to the other side of the court, but individual players may not touch the ball twice consecutively.[3] Typically, the first two touches are used to set up for an attack. An attack is an attempt to direct the ball back over the net in such a way that the team receiving the ball is unable to pass the ball and continue the rally, thus, losing the point. The team that wins the rally is awarded a point and serves the ball to start the next rally. A few of the most common faults include:

              causing the ball to touch the ground or floor outside the opponents' court or without first passing over the net;
              catching and throwing the ball;
              double hit: two consecutive contacts with the ball made by the same player;
              four consecutive contacts with the ball made by the same team;
              net foul: touching the net during play;
              foot fault: the foot crosses over the boundary line when serving or under the net when a front row player is trying to keep the ball in play.
              The ball is usually played with the hands or arms, but players can legally strike or push (short contact) the ball with any part of the body.

              A number of consistent techniques have evolved in volleyball, including spiking and blocking (because these plays are made above the top of the net, the vertical jump is an athletic skill emphasized in the sport) as well as passing, setting, and specialized player positions and offensive and defensive structures.
            </Text>
            <View style={{ height: 250 }}>
              <ImageBackground style={{ height: "90%", width: 400, marginLeft: 10, marginTop: 20, borderRadius: 10, marginBottom: -50 }} source={require("../../../assets/volleyball.jpg")}>
              </ImageBackground>
            </View>

            <View>


              <Text style={{ marginLeft: 10, fontSize: 20, fontFamily: "RobotoSlab_700Bold", marginBottom: 10, textAlign: "center" }}>
                The Rules
              </Text>

              <Text style={{ marginLeft: 15, marginRight: 15, fontFamily: "RobotoSlab_600SemiBold", textAlign: "justify" }}>
                Basketball is a team sport.

                Two teams of five players each try to score by shooting a ball through a hoop elevated 10 feet above the ground.

                The game is played on a rectangular floor called the court, and there is a hoop at each end.

                The court is divided into two main sections by the mid-court line.

                If the offensive team puts the ball into play behind the mid-court line, it has ten seconds to get the ball over the mid-court line.

                If it doesn't, then the defense gets the ball.

                Once the offensive team gets the ball over the mid-court line, it can no longer have possession of the ball in the area behind the midcourt line.

                If it does, the defense is awarded the ball.



                The ball is moved down the court toward the basket by passing or dribbling. The team with the ball is called the offense. The team without the ball is called the defense.

                The defense tries to steal the ball, contest shots, deflect passes, and garner rebounds.
              </Text>

              <Text style={{ marginLeft: 15, marginRight: 15, fontSize: 20, fontFamily: "RobotoSlab_700Bold", marginBottom: 10, textAlign: "center" }}>
                Points
              </Text>

              <Text style={{ marginLeft: 10, fontFamily: "RobotoSlab_600SemiBold", textAlign: "justify" }}>
                When a team makes a basket, they score two points and the ball goes to the other team.

                If a basket, or field goal, is made outside of the three-point arc, then that basket is worth three points. A free throw is worth one point.

                Free throws are awarded to a team according to some formats involving the number of fouls committed in a half and/or the type of foul committed.

                Fouling a shooter always results in two or three free throws being awarded the shooter, depending upon where he was when he shot. If he was beyond the three-point line, then he gets three shots.

                Other types of fouls do not result in free throws being awarded until a certain number have accumulated during a half (called “team fouls”).

                Once that number is reached, then the player who was fouled is awarded a '1-and-1' opportunity. If he makes his first free throw, he gets to attempt a second. If he misses the first shot, the ball is live on the rebound.
              </Text>
              <Text style={{ fontSize: 20, fontFamily: "RobotoSlab_700Bold", marginBottom: 10, textAlign: "center" }}>
                Game Clock
              </Text>

              <Text style={{ fontFamily: "RobotoSlab_600SemiBold", textAlign: "justify", marginLeft: 15, marginRight: 15 }}>
                Each game is divided into sections, and all levels have two halves.

                In college, each half is twenty minutes long.

                In high school and below, the halves are divided into eight (and sometimes, six) minute quarters. In the pros, quarters are twelve minutes long.

                There is a gap of several minutes between halves. Gaps between quarters are relatively short.

                If the score is tied at the end of regulation, then overtime periods of various lengths are played until a winner emerges.
              </Text>

              <Text style={{ marginLeft: 15, marginRight: 15, fontFamily: "RobotoSlab_600SemiBold", textAlign: "justify" }}>
                Also, each team is assigned a basket or goal to defend.

                This means that the other basket is their scoring basket.

                At halftime, the teams switch goals.

                The game begins with one player from either team at center court.

                A referee will toss the ball up between the two. The player that gets his hands on the ball will tip it to a teammate. This is called a tip-off.

                (NOTE: Looking for a simple plan you can follow with your youth team? Or just some additional drills and plays to keep your players engaged and set them up for success? Check out our FREE 72 Winning Youth Drills and Plays eBooks to help your players develop AND have fun doing it.)
              </Text>


              <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 20, fontFamily: "RobotoSlab_700Bold", marginBottom: 10, textAlign: "center" }}>
                Fouls and Violations
              </Text>

              <Text>
                In addition to stealing the ball from an opposing player, there are other ways for a team to get the ball.

                One such way is if the other team commits a foul or violation.
              </Text>


              <Text style={{ fontSize: 20, marginBottom: 10, marginLeft: 10, marginTop: 10 }}>
                FOULS
              </Text>

              <Text style={{ marginLeft: 15, marginRight: 15, fontFamily: "RobotoSlab_600SemiBold", textAlign: "justify" }}>
                Recommended Resources for Youth Coaches

                • Coaching Youth Basketball Successfully
                • 60+ Youth Basketball Drills
                • Simple Offense for Youth Basketball

                Personal fouls: Personal fouls include any type of illegal physical contact.

                Hitting
                Pushing
                Slapping
                Holding
                Illegal pick/screen -- when an offensive player is moving. When an offensive player sticks out a limb and makes physical contact with a defender in an attempt to block the path of the defender.
                Personal foul penalties: If a player is shooting while a being fouled, then he gets two free throws if his shot doesn't go in, but only one free throw if his shot does go in.

                Three free throws are awarded if the player is fouled while shooting for a three-point goal and they miss their shot. If a player is fouled while shooting a three-point shot and makes it anyway, he is awarded one free throw. Thus, he could score four points on the play.

                Inbounds. If fouled while not shooting, the ball is given to the team the foul was committed upon. They get the ball at the nearest side or baseline, out of bounds, and have 5 seconds to pass the ball onto the court.

                One & one. If the team committing the foul has seven or more fouls in the game, then the player who was fouled is awarded one free throw. If he makes his first shot, then he is awarded another free throw.

                Ten or more fouls. If the team committing the foul has ten or more fouls, then the fouled player receives two free throws.

                Charging. An offensive foul that is committed when a player pushes or runs over a defensive player. The ball is given to the team that the foul was committed upon.

                Blocking. Blocking is illegal personal contact resulting from a defender not establishing position in time to prevent an opponent's drive to the basket.

                Flagrant foul. Violent contact with an opponent. This includes hitting, kicking, and punching. This type of foul results in free throws plus the offense retaining possession of the ball after the free throws.

                Intentional foul. When a player makes physical contact with another player with no reasonable effort to steal the ball. It is a judgment call for the officials.

                Technical foul. Technical foul. A player or a coach can commit this type of foul. It does not involve player contact or the ball but is instead about the 'manners' of the game. Foul language, obscenity, obscene gestures, and even arguing can be considered a technical foul, as can technical details regarding filling in the scorebook improperly or dunking during warm-ups.
              </Text>
              <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 20, fontFamily: "RobotoSlab_700Bold", textAlign: "center" }}>
                VIOLATIONS
              </Text>

              <View>
                <Text style={{ fontFamily: "RobotoSlab_900Black", marginLeft: 15, marginRight: 15, textAlign: "justify" }}>
                  Walking/Traveling. Taking more than 'a step and a half' without dribbling the ball is traveling. Moving your pivot foot once you've stopped dribbling is traveling.
                  Carrying/palming. When a player dribbles the ball with his hand too far to the side of or, sometimes, even under the ball.

                  Double Dribble. Dribbling the ball with both hands on the ball at the same time or picking up the dribble and then dribbling again is a double dribble.

                  Held ball. Occasionally, two or more opposing players will gain possession of the ball at the same time. In order to avoid a prolonged and/or violent tussle, the referee stops the action and awards the ball to one team or the other on a rotating basis.

                  Goaltending. If a defensive player interferes with a shot while it's on the way down toward the basket, while it's on the way up toward the basket after having touched the backboard, or while it's in the cylinder above the rim, it's goaltending and the shot counts. If committed by an offensive player, it's a violation and the ball is awarded to the opposing team for a throw-in.

                  Backcourt violation. Once the offense has brought the ball across the mid-court line, they cannot go back across the line during possession. If they do, the ball is awarded to the other team to pass inbounds.

                  Time restrictions. A player passing the ball inbounds has five seconds to pass the ball. If he does not, then the ball is awarded to the other team. Other time restrictions include the rule that a player cannot have the ball for more than five seconds when being closely guarded and, in some states and levels, shot-clock restrictions requiring a team to attempt a shot within a given time frame.

                </Text>
              </View>
              <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: "center" }}>
                  Player Positions
                </Text>
              </View>



              <Text style={{ marginLeft: 15, marginRight: 15, fontFamily: "RobotoSlab_600SemiBold", textAlign: "justify" }}>
                Center. Centers are generally your tallest players. They generally are positioned near the basket.

                Offensive -- The center's goal is to get open for a pass and to shoot. They are also responsible for blocking defenders, known as picking or screening, to open other players up for driving to the basket for a goal. Centers are expected to get some offensive rebounds and put-backs.

                Defensive -- On defense, the center's main responsibility is to keep opponents from shooting by blocking shots and passes in the key area. They also are expected to get a lot of rebounds because they're taller.

                Forward. Your next tallest players will most likely be your forwards. While a forward may be called upon to play under the hoop, they may also be required to operate in the wings and corner areas.

                Offensive -- Forwards are responsible to get free for a pass, take outside shots, drive for goals, and rebound.

                Defensive -- Responsibilities include preventing drives to the goal and rebounding.

                Guard. These are potentially your shortest players and they should be really good at dribbling fast, seeing the court, and passing. It is their job to bring the ball down the court and set up offensive plays.

                Offensive -- Dribbling, passing, and setting up offensive plays are a guard's main responsibilities. They also need to be able to drive to the basket and to shoot from the perimeter.

                Defensive -- On defense, a guard is responsible for stealing passes, contesting shots, preventing drives to the hoop, and for boxing out.

              </Text>

            </View>
          </ScrollView>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default BasketBall