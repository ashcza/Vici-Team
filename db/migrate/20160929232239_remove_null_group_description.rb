class RemoveNullGroupDescription < ActiveRecord::Migration
  def change
    change_column :groups, :description, :string, :null => true

  end
end
