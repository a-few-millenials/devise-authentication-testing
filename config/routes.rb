Rails.application.routes.draw do
  root :to => 'home#index'

  devise_for :admins, path: 'admins', controllers: {
    sessions: "admins/sessions"
  }
  devise_for :users, path: 'users', controllers: {
    sessions: "users/sessions",
  } do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

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
