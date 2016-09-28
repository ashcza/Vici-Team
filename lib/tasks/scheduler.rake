desc "This task is called by the Heroku scheduler add-on"
task :update_feed => :environment do
  Event.print_stuff
end
