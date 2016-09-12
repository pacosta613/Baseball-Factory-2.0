class DivisionsController < ApplicationController
  
  def index
    respond_with(Division.all)
  end

end
