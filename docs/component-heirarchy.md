## Component Heirarchy

**HeaderContainer**
 - Link to create group
 - Link to home page (logo)
 - Link to Log In/Sign Up (if not logged in) OR Link to UserMenuContainer (if logged in)

**Search**

**UserMenu**
 - Link to Log Out
 - Links to groups user participates in

**GroupIndex**
 - GroupIndex
 - GroupIndexItem

**GroupHeader**
 - Link to Group Home
 - Link to New Event
 - Link to Members
 - Link to Calendar
 - Link to Add/Join group (if participant) OR Link to Edit/Delete group (if organizer)

**GroupDescription**
 - GroupDescription

**Events**
 - EventsIndex
 - EventsIndexItem

**GroupSidebar**
 - GroupImg
 - GroupInfo
 - GroupOrganizer

**NewGroupForm**
 - NewGroupForm

**NewEventForm**
 - NewEventForm

**GroupCalendar**
 - GroupCalendar

**GroupMembers**
 - GroupMembers


##Organization by Route

**App**
- HeaderContainer


**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - UserMenu
 - GroupIndex
 - GroupIndexItem
 - Search

**GroupHomeContainer**
 - GroupHeader
 - GroupSidebar
 - GroupDescription
 - EventsIndex

**GroupEventContainer**
 - GroupHeader
 - GroupSidebar
 - NewEventForm

**GroupMemberContainer**
 - GroupHeader
 - GroupSidebar
 - GroupMemberIndex

**GroupCalendarContainer**
 - GroupHeader
 - GroupSidebar
 - GroupCalendar

**New Group**
 - New group



## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "HomeContainer" |
| "/group/:groupId" | "GroupHomeContainer" |
| "/group/:groupId/new-event" | "GroupEventContainer" |
| "/group/:groupId/members" | "GroupMemberContainer" |
| "/group/:groupId/calendar" | "GroupCalendar" |
| "/new-group" | "CreateGroupContainer" |
