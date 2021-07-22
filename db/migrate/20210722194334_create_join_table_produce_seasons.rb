class CreateJoinTableProduceSeasons < ActiveRecord::Migration[6.1]
  def change
    create_join_table :produces, :seasons do |t|
      # t.index [:produce_id, :season_id]
      # t.index [:season_id, :produce_id]
    end
  end
end
