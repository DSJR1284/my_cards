class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :image
      t.string :team
      t.integer :category_id

      t.timestamps
    end
  end
end
