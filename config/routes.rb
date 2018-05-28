Rails.application.routes.draw do
  root to: 'home#index'

  scope module: 'users' do
    resources :feed, :profiles
  end

  resources :friendship

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
