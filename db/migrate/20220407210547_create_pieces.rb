class CreatePieces < ActiveRecord::Migration[6.1]
  def change
    create_table :pieces do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name
      t.string :image_filename
      t.string :type
      t.string :weather
      t.string :formality
      t.string :color
      t.boolean :clean

      t.timestamps
    end
  end
end
