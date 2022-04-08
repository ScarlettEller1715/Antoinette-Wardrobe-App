class PiecesController < ApplicationController

    def show
        piece = Piece.find(params[:id])
        render json: piece
    end

end
