puts "seeding database"

puts "destroying former seeds"
User.destroy_all

puts "seeding users"
User.create(name: "Scarlett Eller", username: "ScarlettEller1715", password: "12345", email: "scarlettellerny@gmail.com")

puts "Seeding complete!"