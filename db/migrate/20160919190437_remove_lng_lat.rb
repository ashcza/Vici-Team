class RemoveLngLat < ActiveRecord::Migration
  def change
    remove_column :groups, :lat
    remove_column :groups, :lng
    remove_column :groups, :location
  end
end
