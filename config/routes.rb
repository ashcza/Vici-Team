Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :groups, only: [:index, :show, :create, :update, :destroy]
    resources :events, only: [:index, :show, :create, :destroy, :update]
    resources :rsvps, only: [:index, :show, :create, :update, :destroy]
    resources :memberships, only: [:create, :destroy]
    resources :notifications, only: [:create]
    resources :responses, only: [:create]
  end

  root "static_pages#root"
end
