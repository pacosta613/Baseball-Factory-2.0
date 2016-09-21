Rails.application.routes.draw do
  root "application#index" 
  resources :divisions do 
    resources :teams
  end

  resources :teams do 
    resources :players
  end

end
