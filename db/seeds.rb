
user1 = User.create!(username: 'ForrestGump', name: "Forrest Gump", password: "password", email: "forrestgump@bubbashrimp.com", phone: "4843542873", texting: true)
user2 = User.create!(username: 'ashcza', name: "Ashcon Zand", password: "password", email: "ashcon@gmail.com", phone: "4843542873", texting: false)
user3 = User.create!(username: 'parisa', name: "Parisa Salavitabar", password: "password", email: "parisa@gmail.com", phone: "4843542873", texting: true)
user4 = User.create!(username: 'kevin', name: "Kevin Sadeghipour", password: "password", email: "kevin@gmail.com", phone: "4843542873", texting: true)
user5 = User.create!(username: 'emily', name: "Emily Khalid", password: "password", email: "emily@gmail.com", phone: "4843542873", texting: true)
user6 = User.create!(username: 'pegah', name: "Pegah Safabakhsh", password: "password", email: "pegah@gmail.com", phone: "4843542873", texting: true)
user7 = User.create!(username: 'yaw', name: "Yaw Aasabere", password: "password", email: "yaw@gmail.com", phone: "4843542873", texting: true)
user8 = User.create!(username: 'bijan', name: "Bijan Barikbin", password: "password", email: "bijan@gmail.com", phone: "4843542873", texting: true)

group1 = Group.create!(name: "NYC Football in the Park", description: "This group is for anyone who loves playing Flag Football, but has trouble consistently finding enough people for weekly games in the real world. If you're down to play some friendly games of pickup football with new people, then we'd love to have you! We'll start out trying to organize a game every weekend, and then see what the interest is like. Definitely bring any friends/coworkers/etc who've also been looking for pickup football games in the city.

Also, we welcome all girls to join our games! This group is NOT guys-only.", organizer_id: 1, organizer_name: "Forrest Gump", creation_date: Time.now, img: "http://res.cloudinary.com/ashcon/image/upload/v1472750709/football_ynagjs.jpg", code: "nycfootball")
group2 = Group.create!(name: "SF Ice Dancers United", description: "We love ice dancing", organizer_id: 2, organizer_name: "Ashcon Zand", creation_date: Time.now, img:"http://res.cloudinary.com/ashcon/image/upload/v1472750711/ice_skating_l2mtcn.jpg", code: "sfice"  )
group3 = Group.create!(name: "Ultimate Frisbee Stars", description: "We love playing ultimate frisbee", organizer_id: 3, organizer_name: "Parisa Salavitabar", creation_date: Time.now, img: "http://res.cloudinary.com/ashcon/image/upload/v1472750717/ultimate-frisbee_hy2th3.jpg", code: "frisbeestars")
group4 = Group.create!(name: "Friday Night Daly Bowling", description: "We love Bowling", organizer_id: 4, organizer_name: "Kevin Sadeghipour", creation_date: Time.now, img: "http://res.cloudinary.com/ashcon/image/upload/v1472750711/bowling_evyggd.jpg", code: "dalybowling" )
group5 = Group.create!(name: "SF Palo Alto Tennis Club", description: "We love playing tennis", organizer_id: 5, organizer_name: "Emily Khalid", creation_date: Time.now, img:"http://res.cloudinary.com/ashcon/image/upload/v1472750713/tennis_udkfl1.jpg", code: "palotennis"  )
group6 = Group.create!(name: "West Philadelphia Raquetball", description: "We love playing raquetball", organizer_id: 6, organizer_name: "Pegah Safabakhsh", creation_date: Time.now, img: "http://res.cloudinary.com/ashcon/image/upload/v1472750712/raquetball_wc8xao.jpg", code: "phillyraquet" )
group7 = Group.create!(name: "Jose Croquet Forever", description: "We love playing croquet", organizer_id: 7, organizer_name: "Yaw Aasabere", creation_date: Time.now, img:"http://res.cloudinary.com/ashcon/image/upload/v1472750718/croquet_plubeo.jpg", code: "josecroquet" )
group8 = Group.create!(name: "Posh Weekend Golf", description: "We love playing golf", organizer_id: 8, organizer_name: "Bijan Barikbin", creation_date: Time.now, img:"http://res.cloudinary.com/ashcon/image/upload/v1472750712/golf_jba2h9.jpg", code: "poshgolf" )
group9 = Group.create!(name: "Sac Pickup Soccer", description: "We love playing pickup soccer", organizer_id: 1, organizer_name: "Forrest Gump", creation_date: Time.now, img:"http://res.cloudinary.com/ashcon/image/upload/v1472750718/soccer_jbmidk.jpg", code: "sacsoccer" )
group10 = Group.create!(name: "Softball Club Oakland", description: "We love playing softball", organizer_id: 2, organizer_name: "Ashcon Zand", creation_date: Time.now, img:"http://res.cloudinary.com/ashcon/image/upload/v1472750711/softball_axbsbm.jpg", code: "sotballoakland" )

membership1 = Membership.create!(user_id: 1, group_id: 1)
membership2 = Membership.create!(user_id: 2, group_id: 1)
membership3 = Membership.create!(user_id: 3, group_id: 1)
membership4 = Membership.create!(user_id: 4, group_id: 1)
membership5 = Membership.create!(user_id: 5, group_id: 1)
membership6 = Membership.create!(user_id: 6, group_id: 1)

membership5 = Membership.create!(user_id: 7, group_id: 2)
membership6 = Membership.create!(user_id: 8, group_id: 2)



event1 = Event.create!(user_id: 1, title: "Sign Ups For Spring Touch Football League Now Open!", description: "Come play with us this spring in our Touch Football League!
ZogSports is a charity-focused, co-ed social sports league for young professionals in the Bay Area. We run weekly sports leagues with happy hours after every game and we donate a portion of the proceeds to winning teams’ charities of choice.", date: "10/9/2016", duration: 3, group_id: 1, max: 4)

event2 = Event.create!(user_id: 1, title: "Football at Paxon Hollow Playground", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "25/9/2016", duration: 4, group_id: 1, max: 5)
event3 = Event.create!(user_id: 2, title: "Ice Dancing Open Rink", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "12/9/2016", duration: 4, group_id: 2, max: 5)
event4 = Event.create!(user_id: 3, title: "Frisbee Session Late Night", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "16/9/2016", duration: 4, group_id: 3, max: 5)
event5 = Event.create!(user_id: 4, title: "Bowling Competition - All Welcome", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "18/9/2016", duration: 4, group_id: 4, max: 5)
event6 = Event.create!(user_id: 5, title: "Doubles Tennis (individuals welcome)", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "14/9/2016", duration: 4, group_id: 5, max: 5)
event7 = Event.create!(user_id: 6, title: "Lunch Raquetball", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "22/9/2016", duration: 4, group_id: 6, max: 5)
event8 = Event.create!(user_id: 7, title: "Croquet then Tea", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "21/9/2016", duration: 4, group_id: 7, max: 5)
event9 = Event.create!(user_id: 8, title: "Golf Outing Jackson Course", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "17/9/2016", duration: 4, group_id: 8, max: 5)
event10 = Event.create!(user_id: 1, title: "Pickup Session, Friends Welcome!", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "16/9/2016", duration: 4, group_id: 9, max: 5)
event11 = Event.create!(user_id: 2, title: "Co-ed Softball Tourney", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "13/9/2016", duration: 4, group_id: 10, max: 5)
event12=  Event.create!(user_id: 3, title: "Two-Hand Touch Pickup", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "21/9/2016", duration: 4, group_id: 1, max: 5)


rsvp1 = Rsvp.create!(event_id: 1, user_id: 1, color: "black")
rsvp2 = Rsvp.create!(event_id: 1, user_id: 2, color: "white")
rsvp3 = Rsvp.create!(event_id: 1, user_id: 3, color: "none")
rsvp4 = Rsvp.create!(event_id: 1, user_id: 4, color: "black")
rsvp5 = Rsvp.create!(event_id: 1, user_id: 5, color: "white")
rsvp6 = Rsvp.create!(event_id: 3, user_id: 7, color: "black")
rsvp7 = Rsvp.create!(event_id: 3, user_id: 8, color: "white")
