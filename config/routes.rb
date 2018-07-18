Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  } do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
  
  resources :home
  resources :wall

  root to: "home#index"
end
