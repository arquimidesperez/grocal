class SeasonsController < ApplicationController
  # before_action :set_season, only: [:show, :update, :destroy]

  # GET /seasons
  def index
    @seasons = Season.all

    render json: @seasons.to_json(:include => :produces)

  end
end
