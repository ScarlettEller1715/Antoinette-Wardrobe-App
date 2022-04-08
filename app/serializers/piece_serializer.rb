class PieceSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :image_filename, :type, :weather, :formality, :color, :clean
end
