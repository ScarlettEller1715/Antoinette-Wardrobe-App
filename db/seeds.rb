puts "seeding database"

puts "destroying former seeds"
User.destroy_all
Piece.destroy_all

puts "seeding users"
u1 = User.create(name: "Scarlett Eller", username: "ScarlettEller1715", password: "12345", email: "scarlettellerny@gmail.com")

puts "seeding clothing"

puts "Seeding complete!"