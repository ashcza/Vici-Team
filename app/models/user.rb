class User < ActiveRecord::Base
	attr_reader :password

	validates :username, :password_digest, :session_token, :name, presence: true
	validates :username, uniqueness: true
	validates :password, length: {minimum: 6, allow_nil: true}
  validates :email,  presence: true, uniqueness: true

	after_initialize :ensure_session_token
	before_validation :ensure_session_token_uniqueness

	has_many :memberships,
		primary_key: :id,
		foreign_key: :user_id,
		class_name: :Membership

	has_many :groups,
		through: :memberships,
		source: :group

	has_many :rsvps,
		primary_key: :id,
		foreign_key: :user_id,
		class_name: :Rsvp

	has_many :events,
		through: :rsvps,
		source: :event


	def password=(password)
    @password = password
		self.password_digest = BCrypt::Password.create(password)
	end

	def self.find_by_credentials(username, password)
		user = User.find_by(username: username)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

	def password_is?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.base64
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = new_session_token
		end
	end

end
