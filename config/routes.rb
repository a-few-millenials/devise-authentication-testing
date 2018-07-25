Rails.application.routes.draw do
  get 'friendship/send_request'
  get 'friendship/get_friend_requests'
  post 'friendship/accept_request'

  devise_for :users, controllers: {
    sessions: 'users/sessions'
  } do
    get '/users/sign_out' => 'devise/sessions#destroy'
    
  end
  
  resources :home
  resources :wall
  resources :friendship

  root to: "home#index"
end
