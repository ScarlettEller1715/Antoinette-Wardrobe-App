class PieceSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :user_id, :name, :clothing_image, :piece_type, :weather, :formality, :color, :clean

  def clothing_image
    if object.clothing_image.attached?
      {
        url: rails_blob_url(object.clothing_image)
      }
    end
  end
end
