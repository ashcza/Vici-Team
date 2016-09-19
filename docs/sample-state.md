```json
{
  currentUser: {
    id: 1,
    name: "Ashcon Zand"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createEvent: {errors: ["name can't be blank"]},
    createGroup: {errors: ["description can't be blank"]}

  },
  group: {
    1: {
      name: "Pickup Soccer",
      description: "We play every wednesday at the park",
      oranizer_id: 5,
      location_lat: 123.5124,
      location_lng: 119.2342,
      creation_date: 9/14/2015
    }
  },
  memberGroups: {
    5: {
      name: "Pickup Soccer"
    }
  },
  events: {
    1: {
      title: "Saturday game",
      description: 1,
      date: 9/22/2016,
      time: "5:30pm",
      duration: 2.5,
      attendees: [2, 5, 8, 25] // id's of users attending
      }
  }
  members: {
    1: {
      name: "Bijan Barikbin"
    }
  }
}
```
