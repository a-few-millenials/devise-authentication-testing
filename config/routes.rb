Rails.application.routes.draw do
  devise_for :admins, path: 'admins', controllers: {
    sessions: "admins/sessions"
  }
  devise_for :users, path: 'users', controllers: {
    sessions: "users/sessions"
  }

  get 'profile', action: :index, controller: 'users'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
