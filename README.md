## Vici Team

### Background

My pickup soccer group tediously organizes their biweekly games via email. The organizer often goes through the following steps just for one game.

- Email out a request for RSVPs for upcoming game
- Email out a second request for RSVPs, including the names of the people who have signed up so far
- Email out a final list of people who have made the cut of 16
- Email out a list of two teams selected from the 16

This is a lot of effort for two games a week. On top of this, some people even reply all.  (-____-)

I plan to make an app that solves the back and forth by automating a portion of the emails and providing a texting option for players to RSVP.



<a href='www.viciteam.com'>
	<img src="http://res.cloudinary.com/ashcon/image/upload/v1475003658/vici/vici_team_final_2.png" height="150">
</a>

# Sportee


[Production link (TBD)][production]

[Heroku link][heroku]

[production]: http://sporteeapp.herokuapp.com
[heroku]: http://sporteeapp.herokuapp.com

## Description

Sportee makes it incredibly simple to play sports with people nearby. Inspired by MeetUp, this site allows users to create groups and events for specific sports. The goal is to create an easy to use interface for connecting people who share similar athletic interests.

This project has been implemented using the Ruby on Rails web framework, a PostgreSQL database, and a frontend created with React.js following the Redux architecture. The app delivers content as needed on a single static page.

## Technology Stack

This project has been implemented using the Ruby on Rails web framework, a PostgreSQL database, and a frontend created with React.js following the Redux architecture.  

## Features

### Home / Dashboard

![frontpage.gif](http://res.cloudinary.com/ashcon/image/upload/v1474260923/Github/FrontPageGif.gif)

#### Search Bar

The search bar allows for search by group name, distance (miles) from a city, or a combination of both. The ruby gem `geokit-rails` was used to provide functionality for location-oriented searches. The gem leverages the Google maps Geocoding API to convert an address (like "New York, NY") into geographic coordinates (like latitude 40.7128°, and longitude 74.0059° W). The gem also allows for ActiveRecord distance-based finders, identifying any points in the database within a specified distance.

#### Group Events

Pulls all groups into the homepage, filtered by the search query.  Group title and location details are displayed for each group.
__________

### Group Events Tab
![GroupPage.png](http://res.cloudinary.com/ashcon/image/upload/v1474262858/Github/Screen_Shot_2016-09-18_at_10.27.25_PM.png)

#### RSVPs

![GroupPage.png](http://res.cloudinary.com/ashcon/image/upload/v1474263319/Github/RSVP.gif)

Users are able to RSVP to events and see a live update to the number of people attending the event. Users are also able to remove RSVPs via the same button.

#### Group Details

The group event tab is the landing page for each group. This page displays: 
- Location - The location of the group
- Members - Total number of members
- Organizer - The person who created the group
- Group Description - User written description of group

#### Event Details

The group's events are listed with the following details:
- Date - Date of event
- Time - Time of event
- Duration - Length of event
- RSVP Count - Total number of users who have RSVP'd

__________

### Group New Event Tab

![GroupPage.png](http://res.cloudinary.com/ashcon/image/upload/v1474265861/Github/NewEventGif.gif)


#### Edit/Delete Privileges

The privilege to edit/delete an event is only displayed on an event if the current user signed in is the creator of the event. In the example above, the current user has created the first event (note the edit and delete icons at top right). Likewise, only users who have created the group (organizer) have the ability delete the group (Delete group button on left sidebar).
__________

### Group Members Tab

![GroupPage.png](http://res.cloudinary.com/ashcon/image/upload/v1474266072/Github/Members.gif)

#### Adding/Removing Membership

Users are able to add and remove membership to groups via the button on the group header. Clicking on the button updates the list of people see in the `Members` tab, as well as the total count of members seen on the left sidebar.
__________

### Calendar Tab

![GroupPage.png](http://res.cloudinary.com/ashcon/image/upload/v1474266459/Github/calendar.gif)

#### Calendar View

Calendar displays all of the groups events by month. 

__________

## Future Direction

I plan to continue the project with the following features:

### Text Updates

Users who are member of groups will receive text updates when new events are created. Users will be able to text back "In" if they want to RSVP to the event.

### Google Maps View

Allow user to browse groups via a Google Maps.
