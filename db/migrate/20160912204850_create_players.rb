class CreatePlayers < ActiveRecord::Migration[5.0]
  def change
    create_table :players do |t|
      t.string :first_name
      t.string :last_name
      t.string :position
      t.integer :jersey_number
      t.integer :team_id

      t.timestamps
    end
  end
end
