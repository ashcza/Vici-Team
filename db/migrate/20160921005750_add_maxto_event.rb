class AddMaxtoEvent < ActiveRecord::Migration
  def change
    add_column :events, :max, :integer, null: false
  end
end
