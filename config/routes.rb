Rails.application.routes.draw do
  root to: 'home#index'

  scope module: 'users' do
    resources :feed, :profiles
  end

  get 'friendship/send_request' => 'friendship#send_request', :as => :send_request
  get 'friendship/accept_request' => 'friendship#accept_request', :as => :accept_request
  get 'feed/friend_requests' => 'feed#friend_request', :as => :friend_request

  devise_for :admins, path: 'admins', controllers: {
    sessions: "admins/sessions"
  }
  devise_for :users, path: 'users', controllers: {
    sessions: "users/sessions",
  }

  namespace :users do
    resources :posts
  end
  namespace :admins do
    resources :users
  end
end
