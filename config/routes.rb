Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :seasons, only: :index
  resources :produces
  # , except: :create
  resources :users, only: :create
  # put '/seasons/:season_id/produces/:id', to: 'produces#add_season'
  post '/seasons/:season_id/produces/:id', to: 'produces#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
