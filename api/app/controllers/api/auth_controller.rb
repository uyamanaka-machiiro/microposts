module Api
  class AuthController < ApplicationController
    skip_before_action :require_login, only: [:create]

    private

    def login_params
      params.permit(:email, :password, :rememberable)
    end

    TOKEN_PATTERN = /^Bearer /.freeze
    def bearer_token
      header = request.headers['Authorization']
      header.gsub(TOKEN_PATTERN, '') if header&.match(TOKEN_PATTERN)
    end

    def create_by_login(email, password)
      user = User.find_by(email: email)
      user&.authenticate(password) && Session.login(user)
    end

    public

    def create
      token = create_by_login(login_params[:email], login_params[:password])
      status = token.empty? ? :unauthorized : :created
      render json: { status: status, data: { token: token } }, status: status
    end

    def destroy
      Session.logout(bearer_token)
      render json: { status: :no_content }, status: :no_content
    end
  end
end
