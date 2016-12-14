class Skill < ActiveRecord::Base
  TYPES = %w(BACKEND FRONTEND DEVOPS).freeze
  belongs_to :user

  validates_presence_of :name
  validates_presence_of :points
  validates_inclusion_of :type, in: TYPES
end
