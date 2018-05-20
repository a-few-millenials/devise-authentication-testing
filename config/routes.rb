Rails.application.routes.draw do
  devise_for :admins, path: 'admins', controllers: {
    sessions: "admins/sessions"
  }
  devise_for :users, path: 'users', controllers: {
    sessions: "users/sessions"
  }

  scope module: 'users' do
    resources :profiles
  end
  namespace :users do
    resources :posts
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
