puts "seeding database"

puts "destroying former seeds"
User.destroy_all
Piece.destroy_all

puts "seeding users"
u1 = User.create(name: "Scarlett Eller", username: "ScarlettEller1715", password: "12345", email: "scarlettellerny@gmail.com")

puts "seeding clothing"
c1 = Piece.create(user_id: u1.id, name: "80's Cigarette Pants", image_filename: "80s_Black_Cigarette_Pants.jpg", piece_type: "Bottom", weather: "Cool", formality: "Business", color: "Black", clean: true)
c2 = Piece.create(user_id: u1.id, name: "Black and Red Blouse", image_filename: "Black_and_Red_Blouse.jpg", piece_type: "Top", weather: "Cool", formality: "Business", color: "Black", clean: true)
c3 = Piece.create(user_id: u1.id, name: "Black Uniqlo Skirt", image_filename: "Black_Uniqlo_Skirt.jpg", piece_type: "Bottom", weather: "Warm", formality: "Business", color: "Black", clean: true)
c4 = Piece.create(user_id: u1.id, name: "Faux Fur Coat", image_filename: "Faux_Fur_Coat.jpg", piece_type: "Outerwear", weather: "Cold", formality: "Formal", color: "Grey", clean: true)
c5 = Piece.create(user_id: u1.id, name: "SJ Open Front Blouse", image_filename: "Open_front_pirate_blouse.jpg", piece_type: "Top", weather: "Hot", formality: "Casual", color: "White", clean: true)
c6 = Piece.create(user_id: u1.id, name: "Stripped Blue Pants", image_filename: "Stripped_Blue_Business_Pants.jpg", piece_type: "Bottom", weather: "Cool", formality: "Business", color: "Blue", clean: true)
c7 = Piece.create(user_id: u1.id, name: "Uniqlo Basic White Shirt", image_filename: "Uniqlo_Shirt.jpg", piece_type: "Top", weather: "Warm", formality: "Business", color: "White", clean: true)
c8 = Piece.create(user_id: u1.id, name: "Checkered Pants", image_filename: "Uniqlo-Checkered-Pants.jpg", piece_type: "Bottom", weather: "Warm", formality: "Business", color: "Grey", clean: true)
c9 = Piece.create(user_id: u1.id, name: "Green 40's-style Overalls", image_filename: "UV_Green_40s-Overalls.jpg", piece_type: "Bottom", weather: "Warm", formality: "Casual", color: "Green", clean: false)
c10 = Piece.create(user_id: u1.id, name: "Vintage 50's Blouse", image_filename: "Vintage_50s_blouse.jpg", piece_type: "Top", weather: "Hot", formality: "Casual", color: "Blue", clean: false)


puts "Seeding complete!"