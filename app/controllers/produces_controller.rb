class ProducesController < ApplicationController
  before_action :set_produce, only: [:show, :update, :destroy, :add_season]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /produces
  def index
    @produces = Produce.all

    render json: @produces
  end

  # GET /produces/1
  def show
    render json: @produce, include: :seasons
  end

  # POST /produces
  def create
    @produce = Produce.new(produce_params.except(:season_id))
    @season = Season.find(produce_params[:season_id])
    @produce.seasons.push(@season)
    @produce.user = @current_user

    if @produce.save
      render json: @produce, status: :created
    else
      render json: @produce.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /produces/1
  def update
    if @produce.update(produce_params.except(:season_id))
      @season=Season.find(produce_params[:season_id])
      @produce.seasons << @season
      render json: @produce, include: :seasons
    else
      render json: @produce.errors, status: :unprocessable_entity
    end
  end

  # DELETE /produces/1
  def destroy
    @produce.destroy
  end

  def add_season
    @season = Season.find(params[:season_id])
    @produce.seasons.push(@season)

    render json: @food, include: :seasons

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_produce
      @produce = Produce.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def produce_params
      params.require(:produce).permit(:produce_type, :name, :variety, :img_url, :quantity, :price, :season_id)
    end
end
