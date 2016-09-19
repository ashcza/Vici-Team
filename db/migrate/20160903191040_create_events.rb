class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.datetime :date, null: false
      t.integer :duration, null: false
      t.integer :group_id, null: false
      t.timestamps null: false
    end
  end
end
