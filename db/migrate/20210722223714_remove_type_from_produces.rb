class RemoveTypeFromProduces < ActiveRecord::Migration[6.1]
  def change
    remove_column :produces, :type, :string
  end
end
