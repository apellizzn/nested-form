class User < ActiveRecord::Base
  has_many :skills
  validates_presence_of :email, :fullname
end
