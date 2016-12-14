class User < ActiveRecord::Base
  has_many :skills
  validates_presence_of :email, :fullname
  accepts_nested_attributes_for :skills

  validate :must_have_at_least_one_skill

  def must_have_at_least_one_skill
    errors.add :skills, 'You add at least one skill' if skills.empty?
  end
end
