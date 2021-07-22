class AddProduceTypeToProduces < ActiveRecord::Migration[6.1]
  def change
    add_column :produces, :produce_type, :string
  end
end
