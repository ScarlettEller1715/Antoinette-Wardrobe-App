Rails.application.routes.draw do
  resources :users

post '/login', to: 'sessions#create'
delete '/logout', to: 'sessions#destroy'

get '/hello', to: 'application#hello_world'

get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
