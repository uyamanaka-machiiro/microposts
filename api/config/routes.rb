Rails.application.routes.draw do

  namespace :api do
    post :auth, to: 'auth#create'
    delete :auth, to: 'auth#destroy'

    resources :users
    resources :microposts
  end
end
