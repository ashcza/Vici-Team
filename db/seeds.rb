
user1 = User.create!(username: 'mmir', name: "Mike Mir", password: "sunday", email: "mmir@audiojamonline.com", phone: "3026688082", texting: true)
user2 = User.create!(username: 'ForrestGump', name: "Forrest Gump", password: "password", email: "forrestgump@bubbashrimp.com", phone: "4086757591", texting: false)
user3 = User.create!(username: 'ashcza1', name: "Ashcon Zand", password: "password", email: "ashcza1@gmail.com", phone: "4843542873", texting: false)
user4 = User.create!(username: 'parisa', name: "Parisa Salavitabar", password: "password", email: "parisa@gmail.com", phone: "4086757591", texting: false)
user5 = User.create!(username: 'kevin', name: "Kevin Sadeghipour", password: "password", email: "kevin@gmail.com", phone: "4086757591", texting: false)
user6 = User.create!(username: 'emily', name: "Emily Khalid", password: "password", email: "emily@gmail.com", phone: "4086757591", texting: false)
user7 = User.create!(username: 'pegah', name: "Pegah Safabakhsh", password: "password", email: "pegah@gmail.com", phone: "4086757591", texting: false)
user8 = User.create!(username: 'yaw', name: "Yaw Aasabere", password: "password", email: "yaw@gmail.com", phone: "4086757591", texting: false)
user9 = User.create!(username: 'bijan', name: "Bijan Barikbin", password: "password", email: "bijan@gmail.com", phone: "4086757591", texting: false)
user10 = User.create!(username: 'ashcza', name: "Ashcon Zand", password: "password", email: "ashcon.zand@gmail.com", phone: "4843542873", texting: true)

group1 = Group.create!(name: "Cyrus United", description: "We play pickup soccer on Wednesday nights and Sunday mornings.", organizer_id: 1, organizer_name: "Mike Mir", creation_date: Time.now, img:"http://res.cloudinary.com/ashcon/image/upload/v1475638277/vici/DSC_6713.jpg", code: "mir"  )
group2 = Group.create!(name: "SF Football in the Park", description: "This group is for anyone who loves playing Flag Football, but has trouble consistently finding enough people for weekly games in the real world. If you're down to play some friendly games of pickup football with new people, then we'd love to have you! We'll start out trying to organize a game every weekend, and then see what the interest is like. Definitely bring any friends/coworkers/etc who've also been looking for pickup football games in the city.", organizer_id: 2, organizer_name: "Forrest Gump", creation_date: Time.now, img: "http://res.cloudinary.com/ashcon/image/upload/v1472750709/football_ynagjs.jpg", code: "sffootball")

membership1 = Membership.create!(user_id: 1, group_id: 1)
membership2 = Membership.create!(user_id: 2, group_id: 2)
membership3 = Membership.create!(user_id: 3, group_id: 2)
membership4 = Membership.create!(user_id: 4, group_id: 2)
membership5 = Membership.create!(user_id: 5, group_id: 2)
membership6 = Membership.create!(user_id: 6, group_id: 2)
membership7 = Membership.create!(user_id: 7, group_id: 2)
membership8 = Membership.create!(user_id: 8, group_id: 2)
membership9 = Membership.create!(user_id: 9, group_id: 2)
membership9 = Membership.create!(user_id: 10, group_id: 1)




event1 = Event.create!(user_id: 2, title: "Football at Paxon Hollow Playground", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "31/10/2016", duration: 3, group_id: 2, max: 7)
event2 = Event.create!(user_id: 2, title: "Football at Sports Arena", description: "TWO COURTS! (but get there early) Enjoy indoor pick-up football all year long! $12 = 2 hours The location is a short walk from Lansdowne subway station, and has free parking! There are two multi-sport gym courts (like basketball courts). There are washrooms & changing rooms, an area to hangout with places to sit, a big screen TV and music adding to the vibe!", date: "11/10/2016", duration: 2, group_id: 2, max: 14)
event3 = Event.create!(user_id: 2, title: "Two-Hand Touch Pickup", description: "ALL PLAYERS MUST RSVP TO THE EVENT TO PLAY!!!!! If a player reserves and doesn't show, they will have to make a deposit to play in future. If this happens frequently, they will be temporary banned. To remove this ban, the player has to speak to the organizers.", date: "22/11/2016", duration: 2, group_id: 2, max: 12)
event4 = Event.create!(user_id: 2, title: "BMO Football", description: "From gate #5, you can enter into BMO field stadium. Please arrive at field 30 mins early at least to make up the teams, warm up & take photo, etc. Please warm up in order to avoid injure before to play game and bring more water.", date: "12/12/2016", duration: 2, group_id: 2, max: 10)
event5 = Event.create!(user_id: 2, title: "Turf Football", description: "Meet at the turf pitch and we will play 5v5. Teams will be sent via text. This is co-ed and all skill levels are welcome. If you are not on the list, do not come as it's difficult to accommodate extra players. Let's exercise and have fun! ", date: "22/12/2016", duration: 2, group_id: 2, max: 10)
event6 = Event.create!(user_id: 2, title: "Football at Paxon Hollow Playground", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "25/12/2016", duration: 2, group_id: 2, max: 16)


rsvp1 = Rsvp.create!(event_id: 1, user_id: 2, color: "white")
rsvp2 = Rsvp.create!(event_id: 1, user_id: 3, color: "red")
rsvp3 = Rsvp.create!(event_id: 1, user_id: 4, color: "black")
rsvp4 = Rsvp.create!(event_id: 1, user_id: 5, color: "white")
rsvp5 = Rsvp.create!(event_id: 1, user_id: 7, color: "red")
rsvp6 = Rsvp.create!(event_id: 1, user_id: 8, color: "white")
rsvp6 = Rsvp.create!(event_id: 1, user_id: 9, color: "black")
