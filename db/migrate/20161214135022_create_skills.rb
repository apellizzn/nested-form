class CreateSkills < ActiveRecord::Migration
  def change
    create_table :skills do |t|
      t.string :name
      t.integer :points
      t.string :type
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
