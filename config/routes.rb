Rails.application.routes.draw do
  namespace :users do
    get 'feed/index'
  end

  namespace :users do
    get 'feed/new'
  end

  get 'feed/index'

  get 'feed/new'

  root to: 'home#index'

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
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
