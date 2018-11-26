Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :auctions, only: [:create, :show, :index, :destroy] do
        resources :bids, only: [:create]
      end
      resource :sessions, only: [:create, :destroy]
      resources :users, only: [] do
        get :current, on: :collection
      end
    end
    match "*not_found", via: :all, to: "application#not_found"
  end
end
