class RemoveLatLong < ActiveRecord::Migration
  def change
    remove_column :groups, :location_lat
    remove_column :groups, :location_lng
  end
end
