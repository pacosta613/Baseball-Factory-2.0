class PlayersController < ApplicationController
  before_action :find_team, only: [:create]
  before_action :find_player, only: [ :destroy, :update]

  def index
    @players = Player.all 
    render json: @players
  end

  def create
    @player = @team.players.create(player_params)
    if @player.save

      render json: @player
    else
      errors = @player.errors.full_messages
      render json: {errors: errors}, status: 400
    end
  end

  def show
    @player = Player.find(params[:id])
    render json: @player
  end

  def update
    if @player.update(player_params)
      render json: @player
    end
  end

  def destroy
    @player.destroy
    render json: @player
  end


  private

  def player_params
    params.require(:player).permit(:first_name, :last_name, :position, :team_id, :division_id, :jersey_number)
  end

  def find_team
    @team = Team.find(params[:team_id])
  end

  def find_player
    @player = Player.find(params[:id])   
  end
end