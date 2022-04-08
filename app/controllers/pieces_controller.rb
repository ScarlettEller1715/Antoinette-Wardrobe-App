class PiecesController < ApplicationController

    def index 
        wardrobe = Piece.all
        render json: wardrobe
    end

    def show_clean
        clean_clothes = Piece.where(clean: true)
        render json: clean_clothes
    end

    def show_dirty
        dirty_clothes = Piece.where(clean: false)
        render json: dirty_clothes
    end
end
