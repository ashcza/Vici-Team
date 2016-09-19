# Sportee

Link to Sportee app: [Sportee][heroku]
[heroku]: https://sporteeapp.herokuapp.com/

## Minimum Viable Product

Sportee is a web application inspired by Meetup built using Ruby on Rails and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:


- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Groups + joining groups
- [ ] Events + RSVPs
- [ ] Calendar
- [ ] Search
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-heirarchy.md
[redux-structure]: redux-structure.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Group Model, API, and components (2 days)

**Objective:** Groups can be created, read, edited and destroyed through
the API.

- [ ] `Group` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for groups (`GroupsController`)
- [ ] JBuilder views for groups
- Group components and respective Redux loops
  - [ ] `GroupsIndex`
  - [ ] `GroupIndexItem`
  - [ ] `GroupForm`
- [ ] Style groups components
- [ ] Seed groups

### Phase 3: Events (2 day)

**Objective:** Events belong to groups that can be created, read, edited and destroyed through the API.

- [ ] `Event` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for notes (`EventsController`)
- [ ] JBuilder views for events
- [ ] Viewing events by group
- [ ] Style event components
- [ ] Seed events

### Phase 4: RSVP (1 days)

**Objective:** RSVPs belong to events that can be created and destroyed through the API.

- [ ] `RSVP` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for RSVPs (`RSVPController`)
- [ ] JBuilder views for RSVPs
- [ ] Add RSVP to event component
- [ ] Seed RSVPs

### Phase 5: Calendar (1 day)

**objective:** Calendar populates with events.

- [ ] Research how to do calendar
- [ ] Fill calendar with events
- [ ] Style calendar.

### Phase 6: Search (1 day)

**objective:** Search by location and group info.

- [ ] Use google geocoding to convert search addresses to coordinates
- [ ] Ability to search groups by description
- [ ] Style search.

### Bonus Features (TBD)
- [ ] Add text alerts (Twilio?)
- [ ] Add event categories
