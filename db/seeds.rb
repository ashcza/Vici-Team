
user1 = User.create!(username: 'mmir', name: "Mike Mir", password: "sunday", email: "mmir@audiojamonline.com", phone: "4086757591", texting: true)
user2 = User.create!(username: 'ForrestGump', name: "Forrest Gump", password: "password", email: "forrestgump@bubbashrimp.com", phone: "4086757591", texting: true)
user3 = User.create!(username: 'ashcza1', name: "Ashcon Zand", password: "password", email: "ashcza1@gmail.com", phone: "4843542873", texting: true)
user4 = User.create!(username: 'parisa', name: "Parisa Salavitabar", password: "password", email: "parisa@gmail.com", phone: "4086757591", texting: true)
user5 = User.create!(username: 'kevin', name: "Kevin Sadeghipour", password: "password", email: "kevin@gmail.com", phone: "4086757591", texting: true)
user6 = User.create!(username: 'emily', name: "Emily Khalid", password: "password", email: "emily@gmail.com", phone: "4086757591", texting: true)
user7 = User.create!(username: 'pegah', name: "Pegah Safabakhsh", password: "password", email: "pegah@gmail.com", phone: "4086757591", texting: true)
user8 = User.create!(username: 'yaw', name: "Yaw Aasabere", password: "password", email: "yaw@gmail.com", phone: "4086757591", texting: true)
user9 = User.create!(username: 'bijan', name: "Bijan Barikbin", password: "password", email: "bijan@gmail.com", phone: "4086757591", texting: true)
user10 = User.create!(username: 'ashcza', name: "Ashcon Zand", password: "password", email: "ashcza@gmail.com", phone: "4843542873", texting: true)

group1 = Group.create!(name: "Pickup Soccer", description: "We play pickup soccer on Wednesday nights and Sunday mornings.", organizer_id: 1, organizer_name: "Mike Mir", creation_date: Time.now, img:"http://res.cloudinary.com/ashcon/image/upload/v1475638277/vici/DSC_6713.jpg", code: "mir"  )
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




event1 = Event.create!(user_id: 2, title: "Football at Paxon Hollow Playground", description: "We are setting up some weekday games at Jackson Playground while Franklin is getting renovated. Hope to see you out there! The game is open to players of all skill levels, beginners are definitely welcome!", date: "2/12/2016", duration: 3, group_id: 2, max: 7)
event2=  Event.create!(user_id: 2, title: "Two-Hand Touch Pickup", description: "Why not be more than a spectator and play for yourself in our flag football game.", date: "10/12/2016", duration: 2, group_id: 2, max: 6)


rsvp1 = Rsvp.create!(event_id: 1, user_id: 2, color: "white")
rsvp2 = Rsvp.create!(event_id: 1, user_id: 3, color: "black")
rsvp3 = Rsvp.create!(event_id: 1, user_id: 4, color: "black")
rsvp4 = Rsvp.create!(event_id: 1, user_id: 5, color: "white")
rsvp5 = Rsvp.create!(event_id: 1, user_id: 7, color: "black")
rsvp6 = Rsvp.create!(event_id: 1, user_id: 8, color: "white")
rsvp6 = Rsvp.create!(event_id: 1, user_id: 9, color: "black")
