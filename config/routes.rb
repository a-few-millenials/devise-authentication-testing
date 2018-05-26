Rails.application.routes.draw do
  root to: 'home#index'

  namespace :users do
    get 'feed/index'
  end

  namespace :users do
    get 'feed/new'
  end

  scope module: 'users' do
    resources :feed
  end

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
    
  scope module: 'users' do
    resources :profiles
  end
end
