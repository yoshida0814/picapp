Rails.application.routes.draw do
  root 'mains#index'
  resources :horse,   only: [:index]  
  resources :casinos, only: [:index]  
  resources :boats,   only: [:index]  
end
