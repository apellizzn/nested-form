class UsersController < ApplicationController
  def new
    @props = { types: Skill::TYPES }
  end

  def create
    user = User.new user_params
  end

  private

  def user_params
    params.require(:user).permit(:fullname, :email, :skills_atrributes)
  end
end
