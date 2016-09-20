class DivisionsController < ApplicationController
  
  def index
    respond_with(Division.all)
  end

  def create
    @division = Division.new(division_params)
    if @division.save
      render json: { division: @division }
    end
  end

  def update
    
    @division = Division.find(params[:id])
    if @division.update(division_params)
      render json: @division
    end
  end

  def show
    division = Division.find(params[:id])
    render json: division
  end

  def destroy
   Division.destroy(params[:id])
  end

  private

  def division_params
    params.require(:division).permit(:name)
  end

end
