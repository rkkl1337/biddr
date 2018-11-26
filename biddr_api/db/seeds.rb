# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bid.delete_all
Auction.delete_all
User.delete_all

PASSWORD = "supersecret"
NUM_OF_AUCTIONS = 50

super_user = User.create(
    username: "Lebron_James",
    email: "lbj@user.com",
    password: PASSWORD
)

10.times do 
    username = Faker::LordOfTheRings.unique.character

    u = User.create(
        username: username,
        email: "#{username.downcase}@user.com",
        password: PASSWORD
    )
end

users = User.all

puts "Generated #{users.count} users!"

NUM_OF_AUCTIONS.times do
    date = "#{rand(1..12)}/#{rand(1..28)}/2019"
    a = Auction.create(
        title: "#{Faker::Color.color_name} #{Faker::Pokemon.name}",
        details: Faker::Lorem.paragraph_by_chars(256, false),
        end_date: date,
        price: rand(1..99),
        user: users.sample
        )
    
    if a.valid?
        rand(1..10).times do
            a.bids << Bid.new(
                bid_price: rand(100..500),
                user: users.sample
            )
        end
    end
end
auctions = Auction.all
bids = Bid.all

puts "Generated #{auctions.count} auctions!"
puts "Generated #{bids.count} bids!"
puts "Login with #{super_user.email} and password of '#{PASSWORD}'"