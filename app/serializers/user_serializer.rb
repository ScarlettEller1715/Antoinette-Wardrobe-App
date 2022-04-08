class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest, :email

  has_many :pieces
end
