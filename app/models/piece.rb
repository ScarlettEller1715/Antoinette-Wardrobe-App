class Piece < ApplicationRecord
    belongs_to :user

    has_one_attached :clothing_image
end
