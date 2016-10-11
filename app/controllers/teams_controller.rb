class TeamsController < ApplicationController
  before_action :find_division

  def index
    @teams = Team.all
    render json: @teams
  end

  def create
    @team = @division.teams.create(team_params)
    if @team.save
      render json: @team 
    else
      errors = @team.errors.full_messages
      render json: {errors: errors}, status: 400
    end
  end

  def show
    @team = Team.find(params[:id])  
    @team.players
    render json: @team
  end

  def update
    @team = Team.find(params[:id])   
    if @team.update(team_params)
      render json: @team 
    end
  end

  def destroy
    @team = Team.find(params[:id])   
    @team.destroy
    render json: @team
  end

  private

    def team_params
      params.require(:team).permit(:division_id, :name)
    end

    def find_division
      @division = Division.find_by(params[:division_id])
    end

end