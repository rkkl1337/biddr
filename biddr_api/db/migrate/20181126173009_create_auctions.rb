class CreateAuctions < ActiveRecord::Migration[5.2]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :details
      t.date :end_date
      t.integer :price
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
