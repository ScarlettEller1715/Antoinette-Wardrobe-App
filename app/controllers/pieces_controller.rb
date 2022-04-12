class PiecesController < ApplicationController

    def show
        piece = Piece.find(params[:id])
        render json: piece
    end

    def create
        byebug
        piece = @current_user.pieces.create!(pieces_params)
        render json: piece, status: :created
    end

    def destroy
        piece = Piece.find(params[:id])
        piece.destroy
        head :no_content
    end

    private
    def pieces_params
        params.permit(:name, :clothing_image, :piece_type, :weather, :formality, :color, :clean)
    end
end
