@events.each do |event|
  datetime = event.date
  date = event.date.strftime("%b %e, %Y")
  time = event.date.strftime("%H:%M %p")
  user_rsvps = []
  rsvps = event.rsvps.to_a.each do |rsvp|
    user_rsvps << rsvp.user_id
  end
  json.dateOrder @date_order
  json.set! event.id do
    json.extract! event, :id, :title, :description, :duration, :group_id, :user_id, :max
    json.datetime datetime
    json.date date
    json.time time
    json.rsvp user_rsvps
  end
end
