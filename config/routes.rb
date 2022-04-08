Rails.application.routes.draw do
  resources :pieces
  resources :users

#Users
get '/me', to: 'users#show'
post '/signup', to: 'users#create'

#Sessions
post '/login', to: 'sessions#create'
delete '/logout', to: 'sessions#destroy'

#Pieces
get '/piecedetails/:id', to: 'pieces#show'


get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
