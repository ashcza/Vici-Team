# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique


## groups
column name | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
name         | string    | not null
description  | text      | not null
location_lat | float     | not null
location_lng | float     | not null
organizer_id | integer   | not null, foreign key (references users), indexed
creation_date| date      | not null
img          | string    | not null

## events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
date        | datetime  | not null
duration    | integer   | not null
group_id    | boolean   | not null, foreign key (references groups), indexed


## rsvp
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
attendee_id | integer   | not null, foreign key (references users), indexed
event_id    | integer   | not null, foreign key (references events), indexed
