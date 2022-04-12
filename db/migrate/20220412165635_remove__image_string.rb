class RemoveImageString < ActiveRecord::Migration[6.1]
  def change
    remove_column :pieces, :image_filename, :string
  end
end
