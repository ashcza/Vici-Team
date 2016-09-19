class Group < ActiveRecord::Base
  acts_as_mappable :distance_field_name => :distance,
                   :lat_column_name => :lat,
                   :lng_column_name => :lng

  validates :name, :description, :organizer_id, :organizer_name, :location, :creation_date, :img, :lat, :lng, presence: true

  has_many :memberships,
    primary_key: :id,
    foreign_key: :group_id,
    class_name: :Membership

  has_many :events,
    primary_key: :id,
    foreign_key: :group_id,
    class_name: :Event

  has_many :members,
    through: :memberships,
    source: :user


end
