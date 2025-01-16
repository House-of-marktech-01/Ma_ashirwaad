import React from "react";

const Gallery = () => {
  const categories = [
    {
      id: 1,
      image:
      "https://s3-alpha-sig.figma.com/img/c54d/b53b/eb4cbf56217b758b72a2bcde3c897919?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CGkPw1k61mZQ~6rFrnDNA~mNrZOliAD~Ja0HsYmU-M6mvN-HWqjQ4Swh-Kujj1R8kfhHAekvXxJjCqNtsInZj9ruvLO4QHC61iPIwqCJ7QhO6tIiBEujDnM3wmVE2EGKj1AV1LRQcMPNsRDAuYkvv4A9a1KJZY3g8ThQrvfv59-C63RnmQQB9u~BiOu1OhqDXHpVxkS0820ZN5eIOk5g8bwKNliZfBaQoh-JRenohkhz4OEPv42GT5edXSjZJMlaJp66w5Sa1V~wXjEZfx0b0f6eLxcvylz-BsBmJZgYUfGTwTDsbzFW6AZp6hBN2gpe59DyLC8GFa9i5miKpX1Ucg__",
      size: "row-span-3",
    },
    {
      id: 2,
      image:
        "https://s3-alpha-sig.figma.com/img/0eea/39a4/ad05873c972e6c23a1ae28cad64c5000?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nd6ZCEYXSrNut27R0Zf1T4VrIT04PQUbj-9oAfu~4GUfGlo3j1PRHEFS7mnO0ENwwNuHMFPyyTwLamfGggS6NGrhzJeHVO8vHMkvOQ0dz5olczLxiTauRGKaoDScpzEBpqBXtYPXOoEZOr4NkPC0TNeQ5-CAer-Tm0aqs-pZz43WcGZFJePhUQTT-HBJ12v3OQTGgRc322UKwZxXLF44uIAoJuSrjlIjQRoFkWFUXGTAtSOxhfVAZxsKqbRQr9DrmKr82aYdHLN2QLYWjbwSJIWxCTsdlZ46l6v-z5eompr~uNVQb7qur7b7sBNmX6zApV9FYaUFdv0PvZHbhXq9qw__",
      size: "row-span-4",
    },
    {
      id: 3,
      image:
        "https://s3-alpha-sig.figma.com/img/88d9/ff90/24d74fb572955c74a08256108724c819?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cTjYQDSsqzqMg-jBCZzpVm7LR4wIxUBG0K-l5E2RoLq2VA46T5AuEa66ZdampB-kF9LhDFDCxsLcHFBBV0BsmoWKylGoq3ugVQuBA0UbklOngA-~APdfKk5TSx6juUb05WV4t8EdPRqFNeMt3lsoVDUcEK1zEbsOx37JmJZE-ktWE4xpwW56v5pA-~0jdrr4MYBUMm6PSra1yArFLZY64rMzaf-wnIWVbBZplYqSF1Gaq5bNZhCzmLem87azSM6CUk3xACvUqUsKSpaGtibb4gpjPGNGvses9YekTqyZpGPh4zqL5Y0VdrZmG7M7GwzPgourm53JsdcUnVX6uErQXA__",
      size: "row-span-5",
    },
    {
      id: 4,
      image:
        "https://s3-alpha-sig.figma.com/img/28c7/5265/836787e5bbe2a4630d33f0d1e2b6e126?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ca1HEObllLZ-8t3yey2Be0J-I7rFrhMZ4Vzqw5LoP3cLDNyIvBE1G6NC-q63McZPWB~D5-uolqXXDhNIm-Ez7Ai-580MVZIwXu-Kv2oXhgq-txmZs21kMYF4RX6mIg89P1Iz9FFMacrM-sr55UEXb7J9JmzUrrNGeIm70l7uZtw4Y4l5yHClVHGllxUmqBvPAHVAzt3W7XlhqwncxacsIdiyrRHH-qBptI~C2-eU7nIYpo24bfurpq2H2TNzwoPBY3rJ9OmXOcr~ncsERLXPxA0Z9U4KrBhSxWbmMPDT9C-QDqX7jB6eC8ZYXhA7-4TLUuL9KCJLYcZ9F9hX2O-W4g__",
      size: "row-span-2",
    },
  ];

  return (
    <div className="relative px-6 py-12 bg-gradient-to-b from-gray-50 to-gray-200">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 120" style={{marginBottom:"10px"}}>
  
  <rect width="800" height="120" fill="#8C2D2D" rx="8"/>
  
 
  <text x="20" y="25" fill="white" font-size="20">✨</text>
  <text x="20" y="110" fill="white" font-size="20">✨</text>
  
  
  <text x="400" y="70" fill="white" font-size="36" font-weight="800" text-anchor="middle" font-family="Arial, sans-serif">
    Best Indian Designs For your Wardrobe
  </text>
  
 
  <text x="760" y="25" fill="white" font-size="20">✨</text>
  <text x="760" y="110" fill="white" font-size="20">✨</text>
</svg>



      {/* Improved Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`relative overflow-hidden rounded-xl shadow-lg group ${category.size}`}
          >
            {/* Image */}
            <img
              src={category.image}
              alt={`Gallery Image ${category.id}`}
              className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
