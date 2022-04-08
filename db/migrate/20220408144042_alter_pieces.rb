class AlterPieces < ActiveRecord::Migration[6.1]
  def change
    change_table :pieces do |t|
      t.rename :type, :piece_type
    end
  end
end
