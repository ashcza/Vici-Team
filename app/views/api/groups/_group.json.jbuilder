json.extract! group, :id, :name, :description, :organizer_id, :organizer_name, :creation_date, :img
json.organizer_phone User.where(id: group.organizer_id)[0].phone
json.organizer_email User.where(id: group.organizer_id)[0].email
