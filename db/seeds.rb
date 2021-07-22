# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Season.destroy_all
Produce.destroy_all
User.destroy_all

@user1 = User.create!(username: 'Dan', email: 'dan@email.com', password: 'danIsC00l')
@user2 = User.create!(username: 'David', email: 'david@email.com', password: 'davidIsC00l')

puts "Created #{User.count} users in User table"


@produce1 = Produce.create!(produce_type: 'Vegetable', name: 'Brocolli', variety: 'Big Green', img_url: '', quantity: 5, price: 2.22, user: @user1)
@produce2 = Produce.create!(produce_type: 'Vegetable', name: 'Carrot', variety: 'Big Orange', img_url: '', quantity: 5, price: 3.22, user: @user1)
@produce3 = Produce.create!(produce_type: 'Vegetable', name: 'Cauliflower', variety: 'Big White', img_url: '', quantity: 2, price: 2.20, user: @user2)

puts "Created #{Produce.count} produces in Produce table"

@seasonWinter = Season.create!(name: 'Winter')
@seasonSpring = Season.create!(name: 'Spring')
@seasonSummer = Season.create!(name: 'Summer')
@seasonFall = Season.create!(name: 'Fall')

puts "Created #{Season.count} seasons in Season table"

@produce1.seasons << @seasonSpring
@produce2.seasons << @seasonSummer
@produce3.seasons << @seasonFall