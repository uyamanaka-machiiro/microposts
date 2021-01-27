class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods

  before_action :set_session
  before_action :require_login

  @session = {}

  def require_login
    render json: { status: :unauthorized }, status: :unauthorized if @session.empty?
  end

  def current_user
    User.find(@session['user_id'])
  end

  private

  def set_session
    authenticate_with_http_token do |token, _options|
      @session = Session.get(token)
    end
  end
end
