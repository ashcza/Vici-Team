class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.float :location_lat, null: false
      t.float :location_lng, null: false
      t.integer :organizer_id, null: false
      t.date :creation_date, null: false
      t.string :img, null: false
      t.timestamps null: false
    end
    add_index :groups, :organizer_id
  end
end
