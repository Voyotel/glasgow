Rails.application.routes.draw do
  get 'dashboard/index'
  get 'dashboard/restaurants'
  get 'dashboard/reports'
  resources :restaurants
  devise_for :accounts
  root to: 'public#main'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
end
