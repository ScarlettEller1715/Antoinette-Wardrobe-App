class PiecesController < ApplicationController

    def show
        piece = Piece.find(params[:id])
        render json: piece
    end

    def create
        piece = @current_user.pieces.create!(pieces_params)
        render json: piece, status: :created
    end

    def destroy
        piece = Piece.find(params[:id])
        piece.destroy
        head :no_content
    end

    def laundry
        piece = piece_find
        piece.update!(:clean => params[:clean])
        render json: piece
    end

    private
    def pieces_params
        params.permit(:name, :clothing_image, :piece_type, :weather, :formality, :color, :clean)
    end

    def piece_find
        Piece.find(params[:id])
    end
end
