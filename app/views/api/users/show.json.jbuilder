json.partial! "api/users/user", user: @user
json.group @user.groups.first.id
