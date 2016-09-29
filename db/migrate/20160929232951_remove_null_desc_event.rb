class RemoveNullDescEvent < ActiveRecord::Migration
  def change
    change_column :events, :description, :string, :null => true
  end
end
