class PiecesController < ApplicationController

    def show
        piece = Piece.find(params[:id])
        render json: piece
    end

    def create
        piece = Piece.create!(user_id: session[:user_id], name: params[:name], image_filename: params[:image_filename], piece_type: params[:piece_type], weather: params[:weather], formality: params[:formality], color: params[:color], clean: params[:clean])
        render json: piece, status: :created
    end

    def destroy
        piece = Piece.find(params[:id])
        piece.destroy
        head :no_content
    end

    private
    def pieces_params
        params.permit(:name, :image_filename, :piece_type, :weather, :formality, :color, :clean)
    end
end
