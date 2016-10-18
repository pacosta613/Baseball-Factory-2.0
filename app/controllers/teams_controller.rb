class TeamsController < ApplicationController
  before_action :find_division, except: [:index, :destroy, :show, :update]
  before_action :find_team, only: [:show, :update, :destroy]

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
    @team.players
    render json: @team
  end

  def update  
    if @team.update(team_params)
      render json: @team 
    end
  end

  def destroy  
    @team.destroy
    render json: @team
  end

  private

    def team_params
      params.require(:team).permit(:division_id, :name)
    end

    def find_division
      @division = Division.find(params[:division_id])
    end

    def find_team
      @team = Team.find(params[:id])   
    end

end