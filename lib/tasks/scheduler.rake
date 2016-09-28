desc "This task is called by the Heroku scheduler add-on"
task :text_event => :environment do
  puts "Updating feed..."
  Event.text_event

end
