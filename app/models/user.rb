class User < ApplicationRecord
    has_secure_password

    has_many :pieces, dependent: :destroy

    validates :name, presence: true
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true

end
