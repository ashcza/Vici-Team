class AddPhoneToUser < ActiveRecord::Migration
  def change
    add_column :users, :phone, :string, null: false
  end
end
