class CreateRestaurants < ActiveRecord::Migration[6.0]
  def change
    create_table :restaurants do |t|
      t.references :account
      t.string :name
      t.string :address
      t.string :description
      t.string :cuisine
      t.string :photo

      t.timestamps
    end
  end
end
