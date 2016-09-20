## Vici Team

### Background

My pickup soccer group tediously organizes their biweekly games via email. The organizer often goes through the following steps just for one game.

- Email out a request for RSVPs for upcoming game
- Email out a second request for RSVPs, including the names of the people who have signed up so far
- Email out a final list of people who have made the cut of 16
- Email out a list of two teams selected from the 16

This is a lot of effort for two games a week. On top of this, some people even reply all.  (-____-)

I plan to make an app that solves the back and forth by automating a portion of the emails and providing a texting option for players to RSVP.

### Functionality & MVP

With this extension, users will be able to:

- [ ] RSVP to games via text
- [ ] Edit/update their contact information easily
- [ ] Organizer can create event
- [ ] View people who have RSVP'd to event


### Wireframes

![wireframes](http://res.cloudinary.com/ashcon/image/upload/v1474277212/Github/Group_Page_Home.png)

### Technologies & Technical Challenges

This app will use React Redux and Ruby on Rails along with Twilio API for texting.

The primary technical challenges will be:

- Using the Twilio API
- Making the interface super intuitive

### Implementation Timeline

**Day 1**: Iron out the details of which redux cycles I will borrow from my full stack app.

- A cleaned up version of full stack
- Database is set up properly

**Day 2**: Research twilio API

- Get text messages sent to mobile device

**Day 3**: Create new pages for admin view and user view

- Make interface intuitive for both sides

**Day 4**:

- Polish app, work out bugs
