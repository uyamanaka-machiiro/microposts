module Api
  class UsersController < ApplicationController
    include Pagination
    before_action :set_user, only: %i[show update destroy]
    skip_before_action :require_login, only: [:create]

    private

    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.permit(:name, :email, :password, :password_confirmation)
    end

    public

    def index
      users = User.order(created_at: :desc).page(params[:page]).per(10)
      render json: { status: :ok, data: users }.merge(resources_with_pagination(users)),
             status: :ok
    end

    def show
      render json: { status: :ok, data: @user }, status: :ok
    end

    def create
      user = User.new(user_params)
      if user.save
        render json: { status: :ok, data: user }, status: :ok, location: user
      else
        render json: { status: :unprocessable_entity, errors: user.errors }, status: :unprocessable_entity
      end
    end

    def destroy
      @user.destroy
      render json: { status: :no_content, data: @user }, status: :no_content
    end

    def update
      if @user.update(user_params)
        render json: { status: :ok, data: @user }, status: :ok
      else
        render json: { status: :unprocessable_entity, errors: @user.errors, data: @user }, status: :unprocessable_entity
      end
    end
  end
end
