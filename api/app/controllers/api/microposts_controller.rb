module Api
  class MicropostsController < ApplicationController
    include Pagination
    before_action :set_micropost, only: %i[show update destroy]

    private

    def set_micropost
      @micropost = Micropost.find(params[:id])
    end

    def micropost_params
      params.permit(:content)
    end

    public

    def index
      microposts = current_user.microposts.page(params[:page]).per(10)

      render json: { status: :ok, data: microposts }.merge(resources_with_pagination(microposts)),
             status: :ok
    end

    def show
      render json: { status: :ok, data: @micropost }, status: :ok
    end

    def create
      micropost = current_user.microposts.build(micropost_params)
      if micropost.save
        render json: { status: :ok, data: micropost }, status: :ok
      else
        render json: { status: :bad_request, errors: micropost.errors, data: micropost }, status: :bad_request
      end
    end

    def destroy
      @micropost.destroy
      render json: { status: :no_content, data: @micropost }, status: :no_content
    end

    def update
      if @micropost.update(micropost_params)
        render json: { status: :ok, data: @micropost }, status: :ok
      else
        render json: { status: :bad_request, errors: @micropost.errors, data: @micropost }, status: :bad_request
      end
    end
  end
end
