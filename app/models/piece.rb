class Piece < ApplicationRecord
    belongs_to :user

    has_one_attached :clothing_image, dependent: :destroy

    validates :name, presence: true
    validates :piece_type, presence: true
    validates :weather, presence: true
    validates :formality, presence: true
end
