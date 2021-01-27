class AddDeletedAtToMicroposts < ActiveRecord::Migration[5.1]
  def change
    add_column :microposts, :deleted_at, :datetime
    add_index :microposts, :deleted_at
  end
end
