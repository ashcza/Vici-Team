
json.set! @event.id do
  json.id @event.id
  json.title @event.title
  json.description @event.description
  json.duration @event.duration
  json.groupId @event.groupId
  json.userId @event.userId
end
