class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.string :status, default: "pending"

      t.timestamps
    end
  end
end
