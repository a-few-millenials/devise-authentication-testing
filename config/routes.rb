Rails.application.routes.draw do
  get 'wall/index'

  devise_for :users, controllers: {
    sessions: 'users/sessions'
  } do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
  resources :home
  
  root to: "home#index"
end
