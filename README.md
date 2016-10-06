<a href='www.viciteam.com'>
	<img src="http://res.cloudinary.com/ashcon/image/upload/v1475003658/vici/vici_team_final_2.png" width="300">
</a>

# Vici Team

www.ViciTeam.com

## Description

Vici Team simplifies the process of coordinating sports games or general events between large groups of people. This app specifically improves communication between the group organizer and participants by automating notification of events and substituting mass emails with text alerts.

Some features have been leveraged from my previous Sportee app.

## Technology Stack

This project has been implemented using the Ruby on Rails web framework, a PostgreSQL database, and a frontend created with React.js following the Redux architecture. Sending and receiving texts are accomplished through the Twilio API. The app delivers content as needed on a single static page and via text.

## Background

My pickup soccer group tediously organized their biweekly games via email. The organizer often went through the following emails **just for one game.**

![emails.png](http://res.cloudinary.com/ashcon/image/upload/v1475724667/vici/Emails.png)


This is a lot of effort for two games a week. On top of this, some people even replied all! Vici Team transformed this process:

<p align="center">
<img src="http://res.cloudinary.com/ashcon/image/upload/v1475728282/vici/eventconfirmationvici.gif">
</p>


## Features

### Home / Group Events Tab
![GroupPage.png](http://res.cloudinary.com/ashcon/image/upload/v1475734082/vici/Front_Page.png)

#### Group Code
Upon sign up users are required to supply a group code which links their account to a single group. After logging in, users are automatically navigated to their respective group. The user's phone number is also tied to that group, allowing the user to interact with Vici Team via text messages.

#### RSVPs

| Web App        | Mobile           |
| ------------- |:-------------:|
| ![Rsvps.png](http://res.cloudinary.com/ashcon/image/upload/v1475734088/vici/rsvp.gif)      | ![Rsvps2.png](http://res.cloudinary.com/ashcon/image/upload/v1475687748/vici/giphy.gif) |

Users are able to RSVP to events and see a live update to the number of people attending the event. Users are also able to remove RSVPs via the same button. Users also have the option to simply text "In" to the Vici Team number.

#### RSVP Limit

| Web App        | Mobile           |
| ------------- |:-------------:|
| ![Rsvps3.png](http://res.cloudinary.com/ashcon/image/upload/v1475773605/vici/maxrsvp2.gif)      | ![Rsvps4.png](http://res.cloudinary.com/ashcon/image/upload/c_scale,w_480/v1475734193/vici/IMG_2639.jpg) |


The group organizer sets a limit on the number of users that can attend the event. Users are not able to RSVP via the online site or via texting if the event has reached maximum capacity.


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

<p align="center">
<img src="http://res.cloudinary.com/ashcon/image/upload/v1475730308/vici/giphy_2.gif">
</p>
