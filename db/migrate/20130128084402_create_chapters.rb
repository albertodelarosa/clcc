class CreateChapters < ActiveRecord::Migration
  def change
    create_table :chapters do |t|
      t.string :name

      t.timestamps
    end

    add_index :chapters, :name,               :unique => true

  end
end
