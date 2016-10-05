json.extract! user, :id, :username, :name, :texting
json.group user.groups.first.id
