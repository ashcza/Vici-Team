class AddLatLngtoGroup < ActiveRecord::Migration
  def change
    add_column :groups, :lat, :float, null: false
    add_column :groups, :lng, :float, null: false
  end
end
