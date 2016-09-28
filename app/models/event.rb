class Event < ActiveRecord::Base
  validates :title, :description, :date, :duration, :group_id, :user_id, :max, presence: true

  belongs_to :group,
    primary_key: :id,
    foreign_key: :group_id,
    class_name: :Group

  has_many :rsvps,
    primary_key: :id,
    foreign_key: :event_id,
    class_name: :Rsvp

  has_many :attendees,
    through: :rsvps,
    source: :user

  def password=(password)
    @password = password
		self.password_digest = BCrypt::Password.create(password)
	end
  
  def print_stuff
    puts "The cron is working"
  end

end
