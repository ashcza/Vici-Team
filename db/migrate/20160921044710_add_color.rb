class AddColor < ActiveRecord::Migration
  def change
    add_column :rsvps, :color, :string, null: false
  end
end
