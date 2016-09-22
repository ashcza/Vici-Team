class AddTextingtoUsers < ActiveRecord::Migration
  def change
    add_column :users, :texting, :boolean, null: false
  end
end
