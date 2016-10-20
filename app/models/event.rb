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

  def self.text_event
    newevent = Group.find(2)
    group = Group.find(1)
    @event = group.events.where("date > ?", Date.today).sort_by{|a| a.date}.first
    if ((Time.zone.now - @event.date).to_i / 1.day) == -2
      date = @event.date.strftime("%A, %b %e")
      time = @event.date.strftime("%l:%M %p")

      User.all.each do |user|
        if user.texting
          @text_message = "Reply 'in' if you would like to play on #{date} at #{time}\n\n#{@event.title}\n#{@event.description}"
          phone_number = '+1' + user.phone
          Event.send_message(phone_number, @text_message)
        end
      end
    end
  end

  def self.send_message(phone_number, text_message)

    account_sid = Rails.application.secrets.twilio_sid
    auth_token = Rails.application.secrets.twilio_token

    @twilio_number = '+14842026246'
    @client = Twilio::REST::Client.new account_sid, auth_token
    message = @client.account.messages.create(
      :from => @twilio_number,
      :to => phone_number,
      :body => text_message,
      # US phone numbers can make use of an image as well.
      # :media_url => image_url
    )
    puts message.to
  end

end
