class AddNameToProduces < ActiveRecord::Migration[6.1]
  def change
    add_column :produces, :name, :string
  end
end
