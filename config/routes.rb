Rails.application.routes.draw do
  resources :cards
  resources :lists
  devise_for :users

  root 'lists#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
