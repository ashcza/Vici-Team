@members.each do |member|
  json.set! member.id do
    json.extract! member, :id, :name, :email, :phone
  end
end
