Rails.application.routes.draw do
  resources :cards, only: [:create, :update, :destroy] do 
    member do
      put :move # /cards/2/move
    end
  end
  resources :lists, only: [:index, :create, :update, :destroy] do
    member do 
      put :move # /lists/2/move
    end
  end
    
  devise_for :users

  root 'lists#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
