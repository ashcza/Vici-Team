Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :groups, only: [:index, :show, :create, :update, :destroy]
    resources :events, only: [:show, :create, :destroy, :update]
    resources :rsvps, only: [:show, :create, :destroy]
    resources :memberships, only: [:create, :destroy]
  end

  root "static_pages#root"
end
