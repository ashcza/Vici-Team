# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


user1 = User.create!(username: 'ForrestGump', name: "Forrest Gump", password: "password", email: "forrestgump@bubbashrimp.com")
user2 = User.create!(username: 'ashcza', name: "Ashcon Zand", password: "password", email: "ashcon@gmail.com")
user3 = User.create!(username: 'parisa', name: "Parisa Salavitabar", password: "password", email: "parisa@gmail.com")
user4 = User.create!(username: 'kevin', name: "Kevin Sadeghipour", password: "password", email: "kevin@gmail.com")
user5 = User.create!(username: 'emily', name: "Emily Khalid", password: "password", email: "emily@gmail.com")
user6 = User.create!(username: 'pegah', name: "Pegah Safabakhsh", password: "password", email: "pegah@gmail.com")
user7 = User.create!(username: 'yaw', name: "Yaw Aasabere", password: "password", email: "yaw@gmail.com")
user8 = User.create!(username: 'bijan', name: "Bijan Barikbin", password: "password", email: "bijan@gmail.com")

group1 = Group.create!(name: "NYC Football in the Park", description: "This group is for anyone who loves playing Flag Football, but has trouble consistently finding enough people for weekly games in the real world. If you're down to play some friendly games of pickup football with new people, then we'd love to have you! We'll start out trying to organize a game every weekend, and then see what the interest is like. Definitely bring any friends/coworkers/etc who've also been looking for pickup football games in the city.

Also, we welcome all girls to join our games! This group is NOT guys-only.", location: "New York, NY", lat: 40.7127837, lng: -74.00594130000002, organizer_id: 1, organizer_name: "Forrest Gump", creation_date: Time.now, img: "http://res.cloudinary.com/ashcon/image/upload/v1472750709/football_ynagjs.jpg")
group2 = Group.create!(name: "SF Ice Dancers United", description: "We love ice dancing", location: "San Francisco, CA", lat: 37.7749295, lng: -122.41941550000001, organizer_id: 2, organizer_name: "Ashcon Zand", creation_date: Time.now, img:"http://res.cloudinary.com/ashcon/image/upload/v1472750711/ice_skating_l2mtcn.jpg"  )
group3 = Group.create!(name: "Ultimate Frisbee Stars", description: "We love playing ultimate frisbee", location: "Berkeley, CA", lat: 37.8715926, lng: -122.27274699999998, organizer_id: 3, organizer_name: "Parisa Salavitabar", creation_date: Time.now, img: "http://res.cloudinary.com/ashcon/image/upload/v1472750717/ultimate-frisbee_hy2th3.jpg" )
group4 = Group.create!(name: "Friday Night Daly Bowling", description: "We love Bowling", location: "Daly City, CA", lat: 37.6879241, lng: -122.47020789999999, organizer_id: 4, organizer_name: "Kevin Sadeghipour", creation_date: Time.now, img: "http://res.cloudinary.com/ashcon/image/upload/v1472750711/bowling_evyggd.jpg" )
group5 = Group.create!(name: "SF Palo Alto Tennis Club", description: "We love playing tennis", location: "Palo Alto, CA", lat: 37.4418834, lng: -122.14301949999998, organizer_id: 5, organizer_name: "Emily Khalid", creation_date: Time.now, img:"http://res.cloudinary.com/ashcon/image/upload/v1472750713/tennis_udkfl1.jpg"  )
group6 = Group.create!(name: "West Philadelphia Raquetball", description: "We love playing raquetball", location: "Phildelphia, PA", lat: 39.9525839, lng: -75.16522150000003, organizer_id: 6, organizer_name: "Pegah Safabakhsh", creation_date: Time.now, img: "http://res.cloudinary.com/ashcon/image/upload/v1472750712/raquetball_wc8xao.jpg" )
group7 = Group.create!(name: "Jose Croquet Forever", description: "We love playing croquet", location: "San Jose, CA", lat: 37.3382082, lng: 121.88632860000001, organizer_id: 7, organizer_name: "Yaw Aasabere", creation_date: Time.now, img:"http://res.cloudinary.com/ashcon/image/upload/v1472750718/croquet_plubeo.jpg" )
group8 = Group.create!(name: "Posh Weekend Golf", description: "We love playing golf", location: "Monterrey, CA", lat: 36.6002378, lng: -121.89467609999997, organizer_id: 8, organizer_name: "Bijan Barikbin", creation_date: Time.now, img:"http://res.cloudinary.com/ashcon/image/upload/v1472750712/golf_jba2h9.jpg" )
group9 = Group.create!(name: "Sac Pickup Soccer", description: "We love playing pickup soccer", location: "Sacramento, CA", lat: 38.5815719, lng: -121.49439960000001, organizer_id: 1, organizer_name: "Forrest Gump", creation_date: Time.now, img:"http://res.cloudinary.com/ashcon/image/upload/v1472750718/soccer_jbmidk.jpg" )
group10 = Group.create!(name: "Softball Club Oakland", description: "We love playing softball", location: "Oakland, CA", lat: 37.8043637, lng: -122.2711137, organizer_id: 2, organizer_name: "Ashcon Zand", creation_date: Time.now, img:"http://res.cloudinary.com/ashcon/image/upload/v1472750711/softball_axbsbm.jpg" )

membership1 = Membership.create!(user_id: 1, group_id: 1)
membership2 = Membership.create!(user_id: 2, group_id: 1)
membership3 = Membership.create!(user_id: 3, group_id: 1)
membership4 = Membership.create!(user_id: 4, group_id: 1)
membership5 = Membership.create!(user_id: 5, group_id: 1)
membership6 = Membership.create!(user_id: 6, group_id: 1)

membership7 = Membership.create!(user_id: 1, group_id: 2)
membership8 = Membership.create!(user_id: 2, group_id: 2)
membership9 = Membership.create!(user_id: 3, group_id: 2)
membership10 = Membership.create!(user_id: 4, group_id: 3)
membership11 = Membership.create!(user_id: 5, group_id: 3)
membership12 = Membership.create!(user_id: 6, group_id: 3)

membership13 = Membership.create!(user_id: 1, group_id: 4)
membership14 = Membership.create!(user_id: 2, group_id: 4)
membership15 = Membership.create!(user_id: 3, group_id: 4)
membership16 = Membership.create!(user_id: 4, group_id: 5)
membership17= Membership.create!(user_id: 5, group_id: 5)
membership18 = Membership.create!(user_id: 6, group_id: 5)

membership16 = Membership.create!(user_id: 1, group_id: 6)
membership17= Membership.create!(user_id: 2, group_id: 6)
membership18 = Membership.create!(user_id: 3, group_id: 6)
membership16 = Membership.create!(user_id: 4, group_id: 6)
membership17= Membership.create!(user_id: 5, group_id: 6)
membership18 = Membership.create!(user_id: 6, group_id: 6)

membership16 = Membership.create!(user_id: 1, group_id: 7)
membership17= Membership.create!(user_id: 2, group_id: 7)
membership18 = Membership.create!(user_id: 4, group_id: 7)

membership16 = Membership.create!(user_id: 3, group_id: 8)
membership17= Membership.create!(user_id: 6, group_id: 8)
membership18 = Membership.create!(user_id: 8, group_id: 8)
membership18 = Membership.create!(user_id: 1, group_id: 8)

membership16 = Membership.create!(user_id: 1, group_id: 9)
membership17= Membership.create!(user_id: 4, group_id: 9)
membership18 = Membership.create!(user_id: 6, group_id: 9)

membership16 = Membership.create!(user_id: 2, group_id: 10)
membership17= Membership.create!(user_id: 3, group_id: 10)
membership18 = Membership.create!(user_id: 8, group_id: 10)

event1 = Event.create!(user_id: 1, title: "Sign Ups For Spring Touch Football League Now Open!", description: "Come play with us this spring in our Touch Football League!
ZogSports is a charity-focused, co-ed social sports league for young professionals in the Bay Area. We run weekly sports leagues with happy hours after every game and we donate a portion of the proceeds to winning teams’ charities of choice.", date: "10/9/2016", duration: 3, group_id: 1)

event2 = Event.create!(user_id: 1, title: "Football at Paxon Hollow Playground", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "25/9/2016", duration: 4, group_id: 1)
event3 = Event.create!(user_id: 2, title: "Ice Dancing Open Rink", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "12/9/2016", duration: 4, group_id: 2)
event4 = Event.create!(user_id: 3, title: "Frisbee Session Late Night", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "16/9/2016", duration: 4, group_id: 3)
event5 = Event.create!(user_id: 4, title: "Bowling Competition - All Welcome", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "18/9/2016", duration: 4, group_id: 4)
event6 = Event.create!(user_id: 5, title: "Doubles Tennis (individuals welcome)", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "14/9/2016", duration: 4, group_id: 5)
event7 = Event.create!(user_id: 6, title: "Lunch Raquetball", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "22/9/2016", duration: 4, group_id: 6)
event8 = Event.create!(user_id: 7, title: "Croquet then Tea", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "21/9/2016", duration: 4, group_id: 7)
event9 = Event.create!(user_id: 8, title: "Golf Outing Jackson Course", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "17/9/2016", duration: 4, group_id: 8)
event10 = Event.create!(user_id: 1, title: "Pickup Session, Friends Welcome!", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "16/9/2016", duration: 4, group_id: 9)
event11 = Event.create!(user_id: 2, title: "Co-ed Softball Tourney", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "13/9/2016", duration: 4, group_id: 10)
event12=  Event.create!(user_id: 3, title: "Two-Hand Touch Pickup", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "21/9/2016", duration: 4, group_id: 1)


rsvp1 = Rsvp.create!(event_id: 1, user_id: 1)
rsvp2 = Rsvp.create!(event_id: 1, user_id: 2)
rsvp3 = Rsvp.create!(event_id: 1, user_id: 3)
rsvp4 = Rsvp.create!(event_id: 2, user_id: 1)
rsvp5 = Rsvp.create!(event_id: 2, user_id: 2)
rsvp6 = Rsvp.create!(event_id: 2, user_id: 3)
rsvp7 = Rsvp.create!(event_id: 2, user_id: 4)
rsvp8 = Rsvp.create!(event_id: 2, user_id: 5)
rsvp9 = Rsvp.create!(event_id: 2, user_id: 6)
rsvp10 = Rsvp.create!(event_id: 3, user_id: 1)
rsvp11 = Rsvp.create!(event_id: 3, user_id: 2)
rsvp12 = Rsvp.create!(event_id: 3, user_id: 2)
rsvp13 = Rsvp.create!(event_id: 4, user_id: 3)
rsvp14 = Rsvp.create!(event_id: 4, user_id: 1)
rsvp15 = Rsvp.create!(event_id: 4, user_id: 2)
rsvp16 = Rsvp.create!(event_id: 5, user_id: 3)
rsvp17 = Rsvp.create!(event_id: 5, user_id: 4)
rsvp18 = Rsvp.create!(event_id: 5, user_id: 5)
rsvp19 = Rsvp.create!(event_id: 6, user_id: 7)
rsvp19 = Rsvp.create!(event_id: 7, user_id: 8)
rsvp19 = Rsvp.create!(event_id: 7, user_id: 1)
rsvp19 = Rsvp.create!(event_id: 8, user_id: 6)
rsvp19 = Rsvp.create!(event_id: 8, user_id: 2)
rsvp19 = Rsvp.create!(event_id: 9, user_id: 3)
rsvp19 = Rsvp.create!(event_id: 9, user_id: 4)
rsvp19 = Rsvp.create!(event_id: 10, user_id: 5)
rsvp19 = Rsvp.create!(event_id: 10, user_id: 6)
rsvp19 = Rsvp.create!(event_id: 10, user_id: 7)
