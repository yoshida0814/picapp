Rails.application.routes.draw do
  root 'mains#index'
  resources :horse,   only: [:index]  do
    collection do
      get :steph
    end
  end
  resources :casinos, only: [:index]  do
    collection do
      get :stepc
    end
  end
  resources :boats,   only: [:index]  
end
