class AddGroupUserName < ActiveRecord::Migration
  def change
    add_column :groups, :organizer_name, :string, null: false
  end
end
