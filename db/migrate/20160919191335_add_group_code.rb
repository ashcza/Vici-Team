class AddGroupCode < ActiveRecord::Migration
  def change
    add_column :groups, :code, :string, null: false
  end
end
