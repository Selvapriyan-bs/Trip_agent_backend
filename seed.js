const mongoose = require("mongoose");
require("dotenv").config();
const Package = require("./Models/PackageModel");
const Blog = require("./Models/BlogModel");
const User = require("./Models/UserModel");

const packages = [
  {
    id: 1, id_val: 1,
    title: "Dubai City Tour Package",
    destination: "Dubai, UAE",
    region: "Asia",
    country: "UAE",
    price: 45999,
    days: 4,
    rating: 4.8,
    reviews: "2.3k",
    badge: "Best Seller",
    description: "Experience the glitz and glamour of Dubai with desert safaris, Burj Khalifa views, and luxury shopping.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    itinerary: [
      { day: 1, title: "Arrival & Dhow Cruise", description: "Arrive in Dubai, check into hotel. Evening Dhow cruise dinner on Dubai Creek.", hotel: "JW Marriott Marquis", startPlace: "Dubai International Airport", endPlace: "Dubai Creek", activities: ["Airport transfer", "Hotel check-in", "Dhow cruise dinner"] },
      { day: 2, title: "Dubai City Tour & Burj Khalifa", description: "Visit Miracle Garden, Burj Khalifa observation deck, and Dubai Mall.", hotel: "JW Marriott Marquis", startPlace: "Hotel", endPlace: "Dubai Mall", activities: ["Miracle Garden visit", "Burj Khalifa observation deck", "Dubai Mall shopping", "Fountain show"] },
      { day: 3, title: "Desert Safari", description: "Thrilling desert dune bashing, camel rides, henna painting, and BBQ dinner under the stars.", hotel: "JW Marriott Marquis", startPlace: "Hotel", endPlace: "Desert Camp", activities: ["Dune bashing", "Camel ride", "Henna painting", "BBQ dinner", "Tanoura dance show"] },
      { day: 4, title: "Departure", description: "Morning at leisure, visit Gold Souk, then airport transfer.", hotel: "JW Marriott Marquis", startPlace: "Gold Souk", endPlace: "Dubai International Airport", activities: ["Gold Souk visit", "Last shopping", "Airport transfer"] },
    ]
  },
  {
    id: 2, id_val: 2,
    title: "Best of Switzerland",
    destination: "Zurich, Switzerland",
    region: "Europe",
    country: "Switzerland",
    price: 89999,
    days: 5,
    rating: 4.9,
    reviews: "1.8k",
    badge: "Featured",
    description: "Breathtaking Alpine scenery, chocolate-box villages, and scenic rail journeys through Switzerland.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    itinerary: [
      { day: 1, title: "Arrive Zurich & Transfer to Engelberg", description: "Arrive in Zurich, scenic transfer to Engelberg. Evening explore the charming village.", hotel: "Hotel Engelberg", startPlace: "Zurich Airport", endPlace: "Engelberg", activities: ["Airport pickup", "Scenic transfer", "Engelberg village walk"] },
      { day: 2, title: "Mount Titlis & Lucerne", description: "Cable car to Mount Titlis, visit Lucerne's Chapel Bridge and Old Town.", hotel: "Hotel Engelberg", startPlace: "Engelberg", endPlace: "Lucerne", activities: ["Titlis cable car ride", "Chapel Bridge visit", "Lion Monument", "Old Town walk"] },
      { day: 3, title: "Basel Exploration", description: "Day trip to Basel, visit Basel Minster, museums, and stroll along the Rhine.", hotel: "Hotel Engelberg", startPlace: "Engelberg", endPlace: "Basel", activities: ["Basel Minster", "Rhine river walk", "Art museum visit"] },
      { day: 4, title: "Zurich City & Rhine Falls", description: "Zurich city tour, visit Schaffhausen's Rhine Falls, and Bahnhofstrasse shopping.", hotel: "Hotel Engelberg", startPlace: "Zurich", endPlace: "Schaffhausen", activities: ["Zurich city tour", "Rhine Falls visit", "Bahnhofstrasse shopping", "Lake Zurich cruise"] },
      { day: 5, title: "Departure", description: "Breakfast at hotel, transfer to Zurich Airport for departure.", hotel: "Hotel Engelberg", startPlace: "Hotel", endPlace: "Zurich Airport", activities: ["Breakfast", "Airport transfer", "Farewell"] },
    ]
  },
  {
    id: 3, id_val: 3,
    title: "Amazing Singapore Tour",
    destination: "Singapore",
    region: "Asia",
    country: "Singapore",
    price: 38999,
    days: 4,
    rating: 4.7,
    reviews: "1.5k",
    badge: "Popular",
    description: "Explore futuristic Gardens by the Bay, Sentosa Island, Universal Studios, and vibrant Chinatown.",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    itinerary: [
      { day: 1, title: "Sentosa Island", description: "Visit Sentosa Island, Dolphin Island, Palawan Beach, and Skyline Luge.", hotel: "Marina Bay Sands", startPlace: "Changi Airport", endPlace: "Sentosa Island", activities: ["Airport pickup", "Sentosa Island tour", "Dolphin Island", "Skyline Luge"] },
      { day: 2, title: "Gardens by the Bay & City Tour", description: "Explore Gardens by the Bay, National Gallery, Merlion Park, and Singapore Zoo.", hotel: "Marina Bay Sands", startPlace: "Hotel", endPlace: "Marina Bay", activities: ["Cloud Forest dome", "Merlion Park", "National Gallery", "Singapore Zoo"] },
      { day: 3, title: "Universal Studios", description: "Full day at Universal Studios Singapore with thrilling rides and shows.", hotel: "Marina Bay Sands", startPlace: "Hotel", endPlace: "Universal Studios", activities: ["Universal Studios", "Transformers ride", "WaterWorld show"] },
      { day: 4, title: "Departure", description: "Visit Chinatown, shop at Bugis Street, then airport transfer.", hotel: "Marina Bay Sands", startPlace: "Chinatown", endPlace: "Changi Airport", activities: ["Chinatown visit", "Bugis Street shopping", "Airport transfer"] },
    ]
  },
  {
    id: 4, id_val: 4,
    title: "Magical Mauritius",
    destination: "Mauritius",
    region: "Africa",
    country: "Mauritius",
    price: 69999,
    days: 5,
    rating: 4.8,
    reviews: "980",
    badge: "Featured",
    description: "Turquoise lagoons, white sandy beaches, and lush botanical gardens in paradise island of Mauritius.",
    image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=800&q=80",
    itinerary: [
      { day: 1, title: "Arrival in Mauritius", description: "Arrive at Sir Seewoosagur Ramgoolam Airport, transfer to beach resort.", hotel: "Grand Mauritian Resort", startPlace: "SSR Airport", endPlace: "Grand Baie", activities: ["Airport pickup", "Resort check-in", "Beach relaxation"] },
      { day: 2, title: "Ile Aux Cerfs", description: "Full day at Ile Aux Cerfs island with parasailing, water sports, and beach barbecue.", hotel: "Grand Mauritian Resort", startPlace: "Hotel jetty", endPlace: "Ile Aux Cerfs", activities: ["Speed boat ride", "Parasailing", "Water sports", "Beach BBQ"] },
      { day: 3, title: "Trou Aux Cerfs & Grand Basin", description: "Visit Trou Aux Cerfs volcano crater and Grand Basin sacred lakes.", hotel: "Grand Mauritian Resort", startPlace: "Hotel", endPlace: "Grand Basin", activities: ["Trou Aux Cerfs viewpoint", "Grand Basin temple visit", "Local lunch"] },
      { day: 4, title: "Pamplemousses Gardens", description: "Explore Royal Botanical Gardens and Grand Baie shopping village.", hotel: "Grand Mauritian Resort", startPlace: "Hotel", endPlace: "Grand Baie", activities: ["Botanical gardens tour", "Giant water lilies", "Grand Baie shopping"] },
      { day: 5, title: "Departure", description: "Morning at beach, then airport transfer.", hotel: "Grand Mauritian Resort", startPlace: "Hotel", endPlace: "SSR Airport", activities: ["Beach morning", "Souvenir shopping", "Airport transfer"] },
    ]
  },
  {
    id: 5, id_val: 5,
    title: "Kerala Special Holiday",
    destination: "Kerala, India",
    region: "Asia",
    country: "India",
    price: 19999,
    days: 4,
    rating: 4.6,
    reviews: "3.1k",
    badge: "Best Seller",
    description: "God's Own Country with lush tea gardens, wildlife, houseboat cruises, and pristine beaches.",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    itinerary: [
      { day: 1, title: "Kochi to Munnar", description: "Arrive in Kochi, scenic drive to Munnar via Cheeyappara Waterfalls.", hotel: "Tea County Munnar", startPlace: "Kochi Airport", endPlace: "Munnar", activities: ["Airport pickup", "Cheeyappara waterfalls stop", "Tea plantation view"] },
      { day: 2, title: "Munnar Exploration", description: "Visit Mattupetty Dam, Eravikulam National Park, Kundala Lake, and tea gardens.", hotel: "Tea County Munnar", startPlace: "Hotel", endPlace: "Munnar town", activities: ["Eravikulam National Park", "Mattupetty Dam boating", "Tea museum visit", "Kundala Lake"] },
      { day: 3, title: "Munnar to Thekkady", description: "Drive to Thekkady, Periyar Wildlife Sanctuary boat safari, spice plantation tour.", hotel: "Spice Village Thekkady", startPlace: "Munnar", endPlace: "Thekkady", activities: ["Periyar boat safari", "Spice plantation walk", "Ayurvedic massage"] },
      { day: 4, title: "Departure", description: "Drive back to Kochi for departure.", hotel: "Spice Village Thekkady", startPlace: "Thekkady", endPlace: "Kochi Airport", activities: ["Breakfast", "Scenic drive", "Airport drop"] },
    ]
  },
  {
    id: 6, id_val: 6,
    title: "Paris Romance Package",
    destination: "Paris, France",
    region: "Europe",
    country: "France",
    price: 56299,
    days: 6,
    rating: 4.9,
    reviews: "1.2k",
    badge: "Featured",
    description: "Spend six dreamy days walking down historic avenues, cruising the Seine, and visiting magnificent galleries.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    itinerary: [
      { day: 1, title: "Arrival in Paris", description: "Arrive at Charles de Gaulle Airport, private transfer to hotel. Evening welcome dinner.", hotel: "Hotel du Louvre", startPlace: "CDG Airport", endPlace: "Le Marais", activities: ["Airport pickup", "Hotel check-in", "Welcome dinner at Le Bistro Parisien"] },
      { day: 2, title: "Iconic Landmarks", description: "Guided tour of Eiffel Tower, Louvre Museum, and Seine river cruise.", hotel: "Hotel du Louvre", startPlace: "Hotel du Louvre", endPlace: "Eiffel Tower", activities: ["Eiffel Tower visit", "Louvre guided tour", "Seine river cruise"] },
      { day: 3, title: "Montmartre & Sacré-Cœur", description: "Explore Montmartre, Sacré-Cœur Basilica, and charming cobblestone streets.", hotel: "Hotel du Louvre", startPlace: "Montmartre", endPlace: "Place du Tertre", activities: ["Sacré-Cœur visit", "Artist square walk", "French pastry workshop"] },
      { day: 4, title: "Palace of Versailles", description: "Day trip to the opulent Palace of Versailles, Hall of Mirrors, and gardens.", hotel: "Hotel du Louvre", startPlace: "Gare Montparnasse", endPlace: "Versailles", activities: ["Versailles guided tour", "Gardens stroll", "Lunch at Versailles café"] },
      { day: 5, title: "Shopping & Departure", description: "Morning shopping on Champs-Élysées, afternoon transfer to airport.", hotel: "Hotel du Louvre", startPlace: "Champs-Élysées", endPlace: "CDG Airport", activities: ["Champs-Élysées shopping", "Last French lunch", "Airport transfer"] },
    ]
  },
  {
    id: 7, id_val: 7,
    title: "Bali Tropical Paradise",
    destination: "Bali, Indonesia",
    region: "Asia",
    country: "Indonesia",
    price: 29649,
    days: 7,
    rating: 4.85,
    reviews: "2.1k",
    badge: "Best Seller",
    description: "Explore lush forests, relax at luxurious villas, and enjoy world-class beaches and local cuisine.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    itinerary: [
      { day: 1, title: "Arrival in Bali", description: "Arrive at Ngurah Rai Airport, transfer to resort in Seminyak. Sunset at the beach.", hotel: "The Seminyak Beach Resort", startPlace: "Ngurah Rai Airport", endPlace: "Seminyak", activities: ["Airport pickup", "Resort check-in", "Sunset beach walk"] },
      { day: 2, title: "Ubud Cultural Tour", description: "Visit Sacred Monkey Forest, Tegallalang Rice Terraces, and Tirta Empul Temple.", hotel: "The Seminyak Beach Resort", startPlace: "Hotel", endPlace: "Ubud", activities: ["Monkey Forest visit", "Rice terrace trek", "Temple purification ritual"] },
      { day: 3, title: "Waterfalls & Temples", description: "Explore Tegenungan Waterfall, Tanah Lot Temple, and Balinese cooking class.", hotel: "The Seminyak Beach Resort", startPlace: "Ubud", endPlace: "Tanah Lot", activities: ["Waterfall swim", "Tanah Lot sunset", "Balinese cooking class"] },
      { day: 4, title: "Nusa Penida Island", description: "Day trip to Nusa Penida, visit Kelingking Beach and Angel's Billabong.", hotel: "The Seminyak Beach Resort", startPlace: "Sanur Harbour", endPlace: "Nusa Penida", activities: ["Speed boat transfer", "Kelingking Beach hike", "Snorkeling at Crystal Bay"] },
      { day: 5, title: "Relaxation & Spa", description: "Full day of relaxation with spa treatments and seafood dinner on the beach.", hotel: "The Seminyak Beach Resort", startPlace: "Resort", endPlace: "Jimbaran Bay", activities: ["Balinese massage", "Pool relaxation", "Jimbaran seafood dinner"] },
      { day: 6, title: "Uluwatu & Kecak Dance", description: "Visit Uluwatu Temple and watch traditional Kecak fire dance at sunset.", hotel: "The Seminyak Beach Resort", startPlace: "Hotel", endPlace: "Uluwatu", activities: ["Uluwatu Temple tour", "Kecak dance performance", "Cliffside dinner"] },
      { day: 7, title: "Departure", description: "Morning at leisure, souvenir shopping, airport transfer.", hotel: "The Seminyak Beach Resort", startPlace: "Seminyak Market", endPlace: "Ngurah Rai Airport", activities: ["Souvenir shopping", "Farewell lunch", "Airport transfer"] },
    ]
  },
  {
    id: 8, id_val: 8,
    title: "Kyoto Cultural Heritage",
    destination: "Kyoto, Japan",
    region: "Asia",
    country: "Japan",
    price: 56450,
    days: 6,
    rating: 4.92,
    reviews: "810",
    badge: "Featured",
    description: "Immerse yourself in traditional temples, tea houses, and tranquil bamboo trails in historic Kyoto.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    itinerary: [
      { day: 1, title: "Arrival in Kyoto", description: "Arrive at Kansai Airport, Shinkansen to Kyoto. Check into traditional Ryokan.", hotel: "Ryokan Gion Hatanaka", startPlace: "Kansai Airport", endPlace: "Gion District", activities: ["Shinkansen ride", "Ryokan check-in", "Traditional kaiseki dinner"] },
      { day: 2, title: "Golden Pavilion & Bamboo Grove", description: "Visit Kinkaku-ji, Ryoan-ji Zen garden, and Arashiyama Bamboo Grove.", hotel: "Ryokan Gion Hatanaka", startPlace: "Hotel", endPlace: "Arashiyama", activities: ["Kinkaku-ji visit", "Zen garden meditation", "Bamboo grove walk"] },
      { day: 3, title: "Fushimi Inari & Tea Ceremony", description: "Hike the torii gates at Fushimi Inari, then experience a traditional tea ceremony.", hotel: "Ryokan Gion Hatanaka", startPlace: "Fushimi Inari", endPlace: "Tea house", activities: ["Torii gate hike", "Tea ceremony", "Matcha tasting"] },
      { day: 4, title: "Nara Day Trip", description: "Day trip to Nara, feed deer at Nara Park and visit Todai-ji Temple.", hotel: "Ryokan Gion Hatanaka", startPlace: "Kyoto Station", endPlace: "Nara", activities: ["Deer park visit", "Todai-ji Buddha hall", "Local street food"] },
      { day: 5, title: "Geisha District & Cooking Class", description: "Explore Gion district, sushi-making class, and spot Geiko in the evening.", hotel: "Ryokan Gion Hatanaka", startPlace: "Gion", endPlace: "Pontocho Alley", activities: ["Gion walking tour", "Sushi-making class", "Geiko spotting"] },
      { day: 6, title: "Philosopher's Path & Departure", description: "Morning walk along Philosopher's Path, visit Ginkaku-ji, then depart.", hotel: "Ryokan Gion Hatanaka", startPlace: "Philosopher's Path", endPlace: "Kyoto Station", activities: ["Sakura-lined walk", "Ginkaku-ji visit", "Departure transfer"] },
    ]
  },
  {
    id: 9, id_val: 9,
    title: "New York City Explorer",
    destination: "New York, USA",
    region: "Americas",
    country: "USA",
    price: 60520,
    days: 5,
    rating: 4.76,
    reviews: "1.8k",
    badge: "Popular",
    description: "Broadway shows, Brooklyn Bridge, Fifth Avenue shopping, and panoramic skyline views in the Big Apple.",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80",
    itinerary: [
      { day: 1, title: "Arrival & Times Square", description: "Arrive at JFK, check into Manhattan hotel. Evening Times Square exploration.", hotel: "The Manhattan Club", startPlace: "JFK Airport", endPlace: "Times Square", activities: ["Airport transfer", "Hotel check-in", "Times Square walk"] },
      { day: 2, title: "Statue of Liberty & Wall Street", description: "Ferry to Liberty Island, visit Wall Street, Ground Zero, and Brooklyn Bridge.", hotel: "The Manhattan Club", startPlace: "Battery Park", endPlace: "Brooklyn Bridge", activities: ["Statue of Liberty tour", "Ellis Island visit", "Wall Street tour", "Brooklyn Bridge walk"] },
      { day: 3, title: "Museums & Central Park", description: "Visit Metropolitan Museum of Art, Central Park, and Fifth Avenue shopping.", hotel: "The Manhattan Club", startPlace: "Hotel", endPlace: "Fifth Avenue", activities: ["Met Museum visit", "Central Park stroll", "Fifth Avenue shopping"] },
      { day: 4, title: "Broadway & Rockefeller", description: "Top of the Rock observation deck, Broadway matinee show, and dinner in Theater District.", hotel: "The Manhattan Club", startPlace: "Rockefeller Center", endPlace: "Theater District", activities: ["Top of the Rock", "Broadway show", "Theater District dinner"] },
      { day: 5, title: "Departure", description: "Morning at leisure, last-minute shopping, airport transfer.", hotel: "The Manhattan Club", startPlace: "Hotel", endPlace: "JFK Airport", activities: ["Brunch", "Souvenir shopping", "Airport transfer"] },
    ]
  },
  {
    id: 10, id_val: 10,
    title: "Sydney Harbour Experience",
    destination: "Sydney, Australia",
    region: "Oceania",
    country: "Australia",
    price: 78850,
    days: 9,
    rating: 4.88,
    reviews: "620",
    badge: "Featured",
    description: "Sail past the Opera House, sunbathe on Bondi Beach, and explore the Blue Mountains.",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    itinerary: [
      { day: 1, title: "Arrival in Sydney", description: "Arrive at Kingsford Smith Airport, transfer to Circular Quay hotel.", hotel: "Sydney Harbour Marriott", startPlace: "Sydney Airport", endPlace: "Circular Quay", activities: ["Airport pickup", "Hotel check-in", "Harbour walk"] },
      { day: 2, title: "Opera House & Botanical Gardens", description: "Guided tour of Opera House, Royal Botanic Gardens, and The Rocks.", hotel: "Sydney Harbour Marriott", startPlace: "Hotel", endPlace: "The Rocks", activities: ["Opera House tour", "Botanic Gardens walk", "The Rocks historic tour"] },
      { day: 3, title: "Bondi Beach & Coastal Walk", description: "Bondi Beach, Bondi to Coogee coastal walk, and beachside lunch.", hotel: "Sydney Harbour Marriott", startPlace: "Hotel", endPlace: "Bondi Beach", activities: ["Bondi Beach", "Coastal walk", "Icebergs pool visit"] },
      { day: 4, title: "Blue Mountains", description: "Day trip to Blue Mountains, Three Sisters lookout, and scenic railway.", hotel: "Sydney Harbour Marriott", startPlace: "Central Station", endPlace: "Katoomba", activities: ["Three Sisters lookout", "Scenic railway ride", "Bushwalking"] },
      { day: 5, title: "Darling Harbour & Aquarium", description: "Visit SEA LIFE Aquarium, Wild Life Zoo, and Darling Harbour dining.", hotel: "Sydney Harbour Marriott", startPlace: "Hotel", endPlace: "Darling Harbour", activities: ["SEA LIFE Aquarium", "Wild Life Zoo", "Darling Harbour dinner"] },
      { day: 6, title: "Hunter Valley Wine Tour", description: "Full day wine tasting tour in Hunter Valley with gourmet lunch.", hotel: "Sydney Harbour Marriott", startPlace: "Hotel", endPlace: "Hunter Valley", activities: ["Wine tasting", "Cheese pairing", "Gourmet lunch"] },
      { day: 7, title: "Taronga Zoo & Ferry Ride", description: "Ferry to Taronga Zoo, animal encounters, and harbour views.", hotel: "Sydney Harbour Marriott", startPlace: "Circular Quay", endPlace: "Taronga Zoo", activities: ["Ferry ride", "Taronga Zoo", "Animal shows"] },
      { day: 8, title: "Free Day & Shopping", description: "Free day for shopping at Queen Victoria Building and Pitt Street Mall.", hotel: "Sydney Harbour Marriott", startPlace: "Hotel", endPlace: "QVB", activities: ["QVB shopping", "Pitt Street Mall", "Farewell dinner"] },
      { day: 9, title: "Departure", description: "Morning transfer to Sydney Airport for departure.", hotel: "Sydney Harbour Marriott", startPlace: "Hotel", endPlace: "Sydney Airport", activities: ["Check-out", "Airport transfer", "Farewell"] },
    ]
  },
  {
    id: 11, id_val: 11,
    title: "Swiss Alps Luxury Adventure",
    destination: "Swiss Alps, Switzerland",
    region: "Europe",
    country: "Switzerland",
    price: 69000,
    days: 7,
    rating: 4.95,
    reviews: "510",
    badge: "Luxury",
    description: "Crisp mountain air, world-class ski runs, thermal baths, and scenic cogwheel railway rides.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    itinerary: [
      { day: 1, title: "Arrival in Zurich & Transfer", description: "Arrive in Zurich, private transfer to Interlaken Alpine resort.", hotel: "Victoria Jungfrau", startPlace: "Zurich Airport", endPlace: "Interlaken", activities: ["Private transfer", "Resort check-in", "Alpine welcome dinner"] },
      { day: 2, title: "Jungfraujoch Excursion", description: "Cogwheel train to Jungfraujoch — Top of Europe. Ice Palace and panoramic views.", hotel: "Victoria Jungfrau", startPlace: "Interlaken", endPlace: "Jungfraujoch", activities: ["Cogwheel train ride", "Ice Palace visit", "Sphinx Observatory"] },
      { day: 3, title: "Grindelwald & Skiing", description: "Skiing or snowboarding in Grindelwald. Evening fondue dinner.", hotel: "Victoria Jungfrau", startPlace: "Hotel", endPlace: "Grindelwald", activities: ["Skiing lesson", "Snowboarding", "Fondue dinner"] },
      { day: 4, title: "Thermal Spas & Relaxation", description: "Morning spa, afternoon at leisure in Interlaken with lake cruise.", hotel: "Victoria Jungfrau", startPlace: "Resort", endPlace: "Lake Brienz", activities: ["Thermal bath", "Massage", "Lake Brienz cruise"] },
      { day: 5, title: "Lauterbrunnen Valley", description: "Visit Lauterbrunnen Valley with 72 waterfalls, Trümmelbach Falls, and Mürren village.", hotel: "Victoria Jungfrau", startPlace: "Hotel", endPlace: "Lauterbrunnen", activities: ["Waterfall trail hike", "Trümmelbach Falls", "Mürren cable car"] },
      { day: 6, title: "Paragliding & Adventure", description: "Optional paragliding over Interlaken or adventure park.", hotel: "Victoria Jungfrau", startPlace: "Hotel", endPlace: "Interlaken", activities: ["Paragliding", "Adventure park", "Farewell gala dinner"] },
      { day: 7, title: "Departure", description: "Scenic transfer to Zurich Airport.", hotel: "Victoria Jungfrau", startPlace: "Interlaken", endPlace: "Zurich Airport", activities: ["Breakfast", "Scenic transfer", "Farewell"] },
    ]
  },
  {
    id: 12, id_val: 12,
    title: "Bangkok & Pattaya Getaway",
    destination: "Bangkok, Thailand",
    region: "Asia",
    country: "Thailand",
    price: 22999,
    days: 5,
    rating: 4.5,
    reviews: "2.6k",
    badge: "Budget Friendly",
    description: "Temple tours, floating markets, vibrant street food, and Pattaya beach relaxation.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    itinerary: [
      { day: 1, title: "Arrival in Bangkok", description: "Arrive at Suvarnabhumi Airport, transfer to hotel. Evening Khao San Road exploration.", hotel: "Centara Grand", startPlace: "Suvarnabhumi Airport", endPlace: "Khao San Road", activities: ["Airport pickup", "Hotel check-in", "Khao San Road street food"] },
      { day: 2, title: "Grand Palace & Temples", description: "Visit Grand Palace, Wat Pho, Wat Arun, and take a canal boat ride.", hotel: "Centara Grand", startPlace: "Hotel", endPlace: "Wat Arun", activities: ["Grand Palace tour", "Wat Pho reclining Buddha", "Canal boat ride"] },
      { day: 3, title: "Floating Market & Transfer to Pattaya", description: "Visit Damnoen Saduak floating market, then transfer to Pattaya.", hotel: "Amari Pattaya", startPlace: "Bangkok", endPlace: "Pattaya", activities: ["Floating market tour", "Long-tail boat ride", "Pattaya arrival"] },
      { day: 4, title: "Pattaya Beach & Coral Island", description: "Full day at Coral Island with snorkeling and water sports.", hotel: "Amari Pattaya", startPlace: "Hotel", endPlace: "Coral Island", activities: ["Snorkeling", "Parasailing", "Beach relaxation"] },
      { day: 5, title: "Departure", description: "Morning at beach, transfer back to Bangkok airport.", hotel: "Amari Pattaya", startPlace: "Pattaya", endPlace: "Suvarnabhumi Airport", activities: ["Beach walk", "Shopping", "Airport transfer"] },
    ]
  },
  {
    id: 13, id_val: 13,
    title: "London Classic Tour",
    destination: "London, UK",
    region: "Europe",
    country: "United Kingdom",
    price: 54999,
    days: 6,
    rating: 4.7,
    reviews: "1.4k",
    badge: "Popular",
    description: "Royal palaces, world-class museums, Big Ben, and the charm of historic London.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    itinerary: [
      { day: 1, title: "Arrival in London", description: "Arrive at Heathrow, transfer to central London hotel. Evening walk along South Bank.", hotel: "The Waldorf Hilton", startPlace: "Heathrow Airport", endPlace: "South Bank", activities: ["Airport transfer", "Hotel check-in", "South Bank walk"] },
      { day: 2, title: "Westminster & Royal London", description: "Visit Big Ben, Houses of Parliament, Westminster Abbey, and Buckingham Palace.", hotel: "The Waldorf Hilton", startPlace: "Hotel", endPlace: "Buckingham Palace", activities: ["Big Ben photo stop", "Westminster Abbey tour", "Changing of the Guard"] },
      { day: 3, title: "British Museum & Covent Garden", description: "Explore British Museum, Covent Garden street performers, and West End show.", hotel: "The Waldorf Hilton", startPlace: "Hotel", endPlace: "West End", activities: ["British Museum tour", "Covent Garden", "West End musical"] },
      { day: 4, title: "Tower of London & Tower Bridge", description: "Visit Tower of London, Crown Jewels, Tower Bridge experience.", hotel: "The Waldorf Hilton", startPlace: "Hotel", endPlace: "Tower Bridge", activities: ["Tower of London tour", "Crown Jewels viewing", "Tower Bridge walk"] },
      { day: 5, title: "Camden Market & Oxford Street", description: "Explore Camden Market, shop on Oxford Street, afternoon tea at Harrods.", hotel: "The Waldorf Hilton", startPlace: "Hotel", endPlace: "Harrods", activities: ["Camden Market", "Oxford Street shopping", "Harrods afternoon tea"] },
      { day: 6, title: "Departure", description: "Morning at leisure, transfer to Heathrow for departure.", hotel: "The Waldorf Hilton", startPlace: "Hotel", endPlace: "Heathrow Airport", activities: ["Breakfast", "Last sightseeing", "Airport transfer"] },
    ]
  },
  {
    id: 14, id_val: 14,
    title: "Maldives Honeymoon Escape",
    destination: "Maldives",
    region: "Asia",
    country: "Maldives",
    price: 89999,
    days: 5,
    rating: 4.9,
    reviews: "1.1k",
    badge: "Romance",
    description: "Overwater bungalows, crystal-clear waters, private dining on sandbanks, and underwater adventures.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    itinerary: [
      { day: 1, title: "Arrival in Paradise", description: "Arrive at Velana Airport, speedboat transfer to resort. Welcome cocktail.", hotel: "Conrad Maldives Rangali", startPlace: "Velana Airport", endPlace: "Resort", activities: ["Speedboat transfer", "Overwater villa check-in", "Sunset cocktail"] },
      { day: 2, title: "Snorkeling & Dolphin Cruise", description: "Morning snorkeling at house reef, sunset dolphin cruise.", hotel: "Conrad Maldives Rangali", startPlace: "Resort", endPlace: "Dolphin spot", activities: ["Snorkeling", "Dolphin cruise", "Private beach dinner"] },
      { day: 3, title: "Spa & Underwater Restaurant", description: "Couples spa treatment, lunch at underwater restaurant Ithaa.", hotel: "Conrad Maldives Rangali", startPlace: "Spa", endPlace: "Ithaa Restaurant", activities: ["Couples massage", "Underwater dining", "Sunset fishing"] },
      { day: 4, title: "Sandbank Picnic & Water Sports", description: "Private sandbank picnic, jet skiing, kayaking, and parasailing.", hotel: "Conrad Maldives Rangali", startPlace: "Resort", endPlace: "Sandbank", activities: ["Sandbank picnic", "Jet skiing", "Kayaking", "Parasailing"] },
      { day: 5, title: "Departure", description: "Last swim, check out, speedboat to airport.", hotel: "Conrad Maldives Rangali", startPlace: "Resort", endPlace: "Velana Airport", activities: ["Morning swim", "Check-out", "Speedboat transfer"] },
    ]
  },
  {
    id: 15, id_val: 15,
    title: "Golden Triangle India",
    destination: "Delhi, India",
    region: "Asia",
    country: "India",
    price: 17999,
    days: 6,
    rating: 4.5,
    reviews: "3.4k",
    badge: "Best Seller",
    description: "Explore Delhi, Agra's Taj Mahal, and Jaipur's forts in India's most iconic cultural circuit.",
    image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80",
    itinerary: [
      { day: 1, title: "Arrival in Delhi", description: "Arrive at Delhi Airport, transfer to hotel. Evening welcome dinner.", hotel: "The Imperial", startPlace: "Delhi Airport", endPlace: "Connaught Place", activities: ["Airport pickup", "Hotel check-in", "Welcome dinner"] },
      { day: 2, title: "Delhi Sightseeing", description: "Visit Red Fort, Jama Masjid, India Gate, Qutub Minar, and Lotus Temple.", hotel: "The Imperial", startPlace: "Hotel", endPlace: "Lotus Temple", activities: ["Old Delhi rickshaw ride", "Red Fort visit", "India Gate visit", "Qutub Minar"] },
      { day: 3, title: "Delhi to Agra", description: "Drive to Agra, visit Taj Mahal at sunset, and Agra Fort.", hotel: "Oberoi Amarvilas", startPlace: "Delhi", endPlace: "Agra", activities: ["Taj Mahal sunset view", "Agra Fort tour", "Mughal cuisine dinner"] },
      { day: 4, title: "Agra to Jaipur", description: "Drive to Jaipur via Fatehpur Sikri. Evening visit Hawa Mahal.", hotel: "Rambagh Palace", startPlace: "Agra", endPlace: "Jaipur", activities: ["Fatehpur Sikri stop", "Hawa Mahal photo", "Palace hotel check-in"] },
      { day: 5, title: "Jaipur Exploration", description: "Visit Amber Fort, City Palace, Jantar Mantar, and local bazaars.", hotel: "Rambagh Palace", startPlace: "Hotel", endPlace: "Jaipur bazaars", activities: ["Amber Fort jeep ride", "City Palace tour", "Jantar Mantar", "Bazaar shopping"] },
      { day: 6, title: "Departure from Delhi", description: "Drive back to Delhi for departure.", hotel: "Rambagh Palace", startPlace: "Jaipur", endPlace: "Delhi Airport", activities: ["Scenic drive", "Lunch en route", "Airport drop"] },
    ]
  },
  {
    id: 16, id_val: 16,
    title: "Egyptian Wonders",
    destination: "Cairo, Egypt",
    region: "Africa",
    country: "Egypt",
    price: 45999,
    days: 7,
    rating: 4.6,
    reviews: "890",
    badge: "Adventure",
    description: "Pyramids of Giza, Nile cruise, ancient temples, and the Valley of the Kings.",
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80",
    itinerary: [
      { day: 1, title: "Arrival in Cairo", description: "Arrive at Cairo Airport, transfer to hotel. Evening Nile view dinner.", hotel: "Mena House Hotel", startPlace: "Cairo Airport", endPlace: "Nile River", activities: ["Airport pickup", "Hotel check-in", "Nile dinner cruise"] },
      { day: 2, title: "Pyramids & Sphinx", description: "Visit Pyramids of Giza, Sphinx, and Egyptian Museum.", hotel: "Mena House Hotel", startPlace: "Hotel", endPlace: "Giza Plateau", activities: ["Pyramids tour", "Sphinx photo", "Egyptian Museum", "Papyrus shop"] },
      { day: 3, title: "Flight to Luxor", description: "Fly to Luxor, visit Karnak Temple and Luxor Temple.", hotel: "Steigenberger Nile Palace", startPlace: "Cairo", endPlace: "Luxor", activities: ["Flight to Luxor", "Karnak Temple tour", "Luxor Temple light show"] },
      { day: 4, title: "Valley of the Kings", description: "Visit Valley of the Kings, Hatshepsut Temple, and Colossi of Memnon.", hotel: "Steigenberger Nile Palace", startPlace: "Hotel", endPlace: "West Bank", activities: ["Valley of the Kings", "Hatshepsut Temple", "Colossi of Memnon"] },
      { day: 5, title: "Nile Cruise", description: "Board Nile cruise, sail towards Edfu, visit Temple of Horus.", hotel: "Nile Cruise Ship", startPlace: "Luxor", endPlace: "Edfu", activities: ["Temple of Horus", "Nile sailing", "On-board entertainment"] },
      { day: 6, title: "Kom Ombo & Aswan", description: "Visit Kom Ombo Temple, arrive in Aswan, visit Philae Temple.", hotel: "Nile Cruise Ship", startPlace: "Edfu", endPlace: "Aswan", activities: ["Kom Ombo Temple", "Philae Temple", "Aswan market"] },
      { day: 7, title: "Departure", description: "Visit High Dam, then fly from Aswan to Cairo for departure.", hotel: "Nile Cruise Ship", startPlace: "Aswan", endPlace: "Cairo Airport", activities: ["High Dam visit", "Flight to Cairo", "Departure"] },
    ]
  },
  {
    id: 17, id_val: 17,
    title: "Tokyo Pop Culture Tour",
    destination: "Tokyo, Japan",
    region: "Asia",
    country: "Japan",
    price: 62999,
    days: 7,
    rating: 4.8,
    reviews: "720",
    badge: "Trending",
    description: "Neon-lit streets, anime districts, ancient temples, and world-class cuisine in Tokyo.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
    itinerary: [
      { day: 1, title: "Arrival in Tokyo", description: "Arrive at Narita Airport, transfer to Shinjuku hotel. Evening explore Shibuya crossing.", hotel: "Keio Plaza Hotel", startPlace: "Narita Airport", endPlace: "Shibuya", activities: ["Airport transfer", "Hotel check-in", "Shibuya crossing", "Dinner in Shinjuku"] },
      { day: 2, title: "Asakusa & Akihabara", description: "Visit Senso-ji Temple, Nakamise Street, and Akihabara Electric Town.", hotel: "Keio Plaza Hotel", startPlace: "Asakusa", endPlace: "Akihabara", activities: ["Senso-ji Temple", "Nakamise shopping", "Akihabara anime hunt"] },
      { day: 3, title: "Tsukiji Market & TeamLab", description: "Morning at Tsukiji Outer Market, afternoon at TeamLab Borderless digital art museum.", hotel: "Keio Plaza Hotel", startPlace: "Tsukiji", endPlace: "TeamLab", activities: ["Tsukiji sushi breakfast", "TeamLab Borderless", "Odaiba seaside walk"] },
      { day: 4, title: "Harajuku & Shibuya", description: "Harajuku's Takeshita Street, Meiji Shrine, and Shibuya's shopping and nightlife.", hotel: "Keio Plaza Hotel", startPlace: "Harajuku", endPlace: "Shibuya", activities: ["Takeshita Street", "Meiji Shrine", "Shibuya Sky observation"] },
      { day: 5, title: "Day Trip to Hakone", description: "Mt. Fuji viewing, Hakone ropeway, pirate ship cruise on Lake Ashi.", hotel: "Keio Plaza Hotel", startPlace: "Tokyo", endPlace: "Hakone", activities: ["Mt. Fuji view", "Hakone ropeway", "Lake Ashi cruise", "Onsen experience"] },
      { day: 6, title: "Studio Ghibli & Rooftops", description: "Visit Ghibli Museum, Tokyo Metropolitan Government Building for free views.", hotel: "Keio Plaza Hotel", startPlace: "Hotel", endPlace: "Shinjuku", activities: ["Ghibli Museum", "Government Building observatory", "Farewell ramen dinner"] },
      { day: 7, title: "Departure", description: "Last-minute shopping at Narita Airport or in Ueno, then departure.", hotel: "Keio Plaza Hotel", startPlace: "Hotel", endPlace: "Narita Airport", activities: ["Souvenir shopping", "Airport transfer", "Departure"] },
    ]
  },
  {
    id: 18, id_val: 18,
    title: "Greek Island Hopping",
    destination: "Athens, Greece",
    region: "Europe",
    country: "Greece",
    price: 71999,
    days: 8,
    rating: 4.7,
    reviews: "650",
    badge: "Adventure",
    description: "Ancient ruins, white-washed villages, crystal blue waters across Santorini and Mykonos.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
    itinerary: [
      { day: 1, title: "Arrival in Athens", description: "Arrive at Athens Airport, transfer to hotel. Evening Plaka district walk.", hotel: "Grande Bretagne", startPlace: "Athens Airport", endPlace: "Plaka", activities: ["Airport transfer", "Hotel check-in", "Plaka stroll", "Greek dinner"] },
      { day: 2, title: "Acropolis & Museum", description: "Visit Acropolis, Parthenon, and Acropolis Museum.", hotel: "Grande Bretagne", startPlace: "Hotel", endPlace: "Acropolis", activities: ["Acropolis tour", "Parthenon visit", "Acropolis Museum", "Syntagma Square"] },
      { day: 3, title: "Ferry to Santorini", description: "High-speed ferry to Santorini, check into cliffside hotel. Oia sunset.", hotel: "Canaves Oia Suites", startPlace: "Athens Port", endPlace: "Oia", activities: ["Ferry ride", "Hotel check-in", "Oia sunset viewing"] },
      { day: 4, title: "Santorini Exploration", description: "Visit Fira, Red Beach, wine tasting at local vineyards.", hotel: "Canaves Oia Suites", startPlace: "Hotel", endPlace: "Fira", activities: ["Fira town walk", "Red Beach", "Wine tasting", "Cable car ride"] },
      { day: 5, title: "Ferry to Mykonos", description: "Ferry to Mykonos, explore Little Venice and windmills.", hotel: "Myconian Collection", startPlace: "Santorini", endPlace: "Mykonos", activities: ["Ferry transfer", "Little Venice", "Windmills photoshoot"] },
      { day: 6, title: "Mykonos Beaches", description: "Beach day at Paradise Beach or Super Paradise Beach.", hotel: "Myconian Collection", startPlace: "Hotel", endPlace: "Paradise Beach", activities: ["Beach relaxation", "Water sports", "Mykonos nightlife"] },
      { day: 7, title: "Delos Island Excursion", description: "Day trip to archaeological site of Delos Island.", hotel: "Myconian Collection", startPlace: "Mykonos Port", endPlace: "Delos", activities: ["Delos ruins tour", "Terrace of Lions", "Ancient theatre"] },
      { day: 8, title: "Departure", description: "Fly from Mykonos to Athens for connecting flight.", hotel: "Myconian Collection", startPlace: "Mykonos", endPlace: "Athens Airport", activities: ["Check-out", "Flight to Athens", "Departure"] },
    ]
  },
  {
    id: 19, id_val: 19,
    title: "Vietnam Discovery",
    destination: "Hanoi, Vietnam",
    region: "Asia",
    country: "Vietnam",
    price: 27999,
    days: 7,
    rating: 4.6,
    reviews: "1.3k",
    badge: "Budget Friendly",
    description: "Ha Long Bay cruise, Hanoi's old quarter, Hoi An lanterns, and Ho Chi Minh City exploration.",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    itinerary: [
      { day: 1, title: "Arrival in Hanoi", description: "Arrive at Noi Bai Airport, transfer to Old Quarter hotel. Water puppet show.", hotel: "Hanoi Elegance Hotel", startPlace: "Noi Bai Airport", endPlace: "Old Quarter", activities: ["Airport pickup", "Hotel check-in", "Water puppet show"] },
      { day: 2, title: "Hanoi City Tour", description: "Visit Ho Chi Minh Mausoleum, Temple of Literature, and Hoan Kiem Lake.", hotel: "Hanoi Elegance Hotel", startPlace: "Hotel", endPlace: "Hoan Kiem Lake", activities: ["Ho Chi Minh complex", "Temple of Literature", "Old Quarter walking tour", "Egg coffee tasting"] },
      { day: 3, title: "Ha Long Bay Cruise", description: "Day cruise in Ha Long Bay with limestone karsts, kayaking, and cave exploration.", hotel: "Hanoi Elegance Hotel", startPlace: "Hanoi", endPlace: "Ha Long Bay", activities: ["Bay cruise", "Kayaking", "Sung Sot Cave", "Seafood lunch"] },
      { day: 4, title: "Flight to Da Nang & Hoi An", description: "Fly to Da Nang, transfer to Hoi An. Evening lantern-lit Old Town walk.", hotel: "Hoi An Ancient House", startPlace: "Hanoi", endPlace: "Hoi An", activities: ["Flight to Da Nang", "Hoi An check-in", "Lantern festival walk"] },
      { day: 5, title: "Hoi An & Cooking Class", description: "Morning at Hoi An market, afternoon Vietnamese cooking class.", hotel: "Hoi An Ancient House", startPlace: "Hotel", endPlace: "Tra Que Village", activities: ["Market tour", "Cooking class", "Bicycle ride through rice paddies"] },
      { day: 6, title: "Flight to Ho Chi Minh City", description: "Fly to HCMC, visit Cu Chi Tunnels, Ben Thanh Market.", hotel: "Rex Hotel", startPlace: "Da Nang", endPlace: "Ho Chi Minh City", activities: ["Cu Chi tunnel tour", "Ben Thanh Market", "Saigon nightlife"] },
      { day: 7, title: "Departure", description: "Visit Notre-Dame Cathedral and Central Post Office, then depart.", hotel: "Rex Hotel", startPlace: "Hotel", endPlace: "Tan Son Nhat Airport", activities: ["Cathedral visit", "Post Office", "Airport departure"] },
    ]
  },
  {
    id: 20, id_val: 20,
    title: "Rome & Amalfi Coast",
    destination: "Rome, Italy",
    region: "Europe",
    country: "Italy",
    price: 58999,
    days: 7,
    rating: 4.8,
    reviews: "1.6k",
    badge: "Featured",
    description: "Colosseum, Vatican City, pasta-making classes, and the stunning Amalfi coastline.",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
    itinerary: [
      { day: 1, title: "Arrival in Rome", description: "Arrive at Fiumicino Airport, transfer to city center hotel. Evening Trastevere dinner.", hotel: "Hotel Hassler Roma", startPlace: "Fiumicino Airport", endPlace: "Trastevere", activities: ["Airport transfer", "Hotel check-in", "Trastevere authentic dinner"] },
      { day: 2, title: "Colosseum & Roman Forum", description: "Skip-the-line Colosseum tour, Roman Forum, and Palatine Hill.", hotel: "Hotel Hassler Roma", startPlace: "Hotel", endPlace: "Colosseum", activities: ["Colosseum tour", "Roman Forum walk", "Palatine Hill views"] },
      { day: 3, title: "Vatican City", description: "Vatican Museums, Sistine Chapel, and St. Peter's Basilica.", hotel: "Hotel Hassler Roma", startPlace: "Hotel", endPlace: "St. Peter's Square", activities: ["Vatican Museums", "Sistine Chapel", "St. Peter's dome climb"] },
      { day: 4, title: "Pasta Making Class", description: "Morning pasta and tiramisu cooking class. Afternoon at Trevi Fountain and Spanish Steps.", hotel: "Hotel Hassler Roma", startPlace: "Cooking school", endPlace: "Trevi Fountain", activities: ["Pasta making class", "Trevi Fountain coin toss", "Spanish Steps", "Piazza Navona"] },
      { day: 5, title: "Transfer to Amalfi Coast", description: "Scenic drive to Positano. Afternoon at Amalfi and Ravello.", hotel: "Le Sirenuse", startPlace: "Rome", endPlace: "Positano", activities: ["Scenic coastal drive", "Positano check-in", "Amalfi Cathedral visit"] },
      { day: 6, title: "Capri Island Excursion", description: "Ferry to Capri, Blue Grotto visit, Anacapri chairlift, and Limoncello tasting.", hotel: "Le Sirenuse", startPlace: "Positano", endPlace: "Capri", activities: ["Blue Grotto tour", "Chairlift to Mt. Solaro", "Limoncello tasting", "Capri shopping"] },
      { day: 7, title: "Departure", description: "Transfer to Naples Airport for departure.", hotel: "Le Sirenuse", startPlace: "Positano", endPlace: "Naples Airport", activities: ["Farewell breakfast", "Coastal transfer", "Departure"] },
    ]
  },
];

const blogs = [
  { title: "10 Hidden Gems in Paris Only Locals Know About", category: "Guides", readTime: "5 min read", date: "June 2, 2026", summary: "Skip the long lines at the Eiffel Tower and explore these quiet secret courtyards, underground canals, and rooftop view bistros.", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80", featured: true, content: "Paris is full of hidden gems that most tourists never see. From the secret vineyard in Montmartre to the underground canals beneath the city, here are 10 hidden gems you must explore on your next visit." },
  { title: "Bali Foodie Guide: Where to Find the Best Local Eats", category: "Dining", readTime: "4 min read", date: "May 28, 2026", summary: "From beachside seafood grills in Jimbaran to organic vegan cafés in Ubud, discover the essential culinary spots of Bali.", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80", featured: false, content: "Bali is a paradise for food lovers. Whether you're craving authentic Babi Guling in Ubud or fresh seafood on Jimbaran Beach, this guide covers the best local eats across the island." },
  { title: "Kyoto Etiquette: Cultural Mistakes to Avoid as a First-Timer", category: "Culture", readTime: "6 min read", date: "May 15, 2026", summary: "Understand bowing customs, temple photography rules, and Ryokan dining manners to ensure a respectful and rewarding trip to Japan.", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80", featured: false, content: "Japan has a rich cultural heritage with specific customs. From proper onsen etiquette to the art of bowing, here's everything you need to know before visiting Kyoto." },
  { title: "A Walking Guide Across the Historic Brooklyn Bridge", category: "Guides", readTime: "3 min read", date: "April 30, 2026", summary: "Plan the perfect sunset walk across New York's iconic bridge, including historical checkpoints and the best photo locations in DUMBO.", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=400&q=80", featured: false, content: "The Brooklyn Bridge is one of NYC's most iconic landmarks. This walking guide takes you from Brooklyn to Manhattan with the best photo stops along the way." },
  { title: "Summer in the Swiss Alps: Top Scenic Hiking Trails", category: "Guides", readTime: "7 min read", date: "April 12, 2026", summary: "Discover Alpine wildflower valleys, crystal-clear glacial lakes, and panoramic viewpoints accessible via cogwheel trains.", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", featured: false, content: "The Swiss Alps offer some of the most breathtaking hiking trails in the world. From the Eiger Trail to the Five Lakes Walk, here are our top picks for summer hiking." },
  { title: "London on a Budget: Free Attractions & Cheap Eats", category: "Guides", readTime: "6 min read", date: "March 28, 2026", summary: "Explore world-class museums, royal parks, and bustling markets across London without breaking the bank.", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80", featured: false, content: "London doesn't have to be expensive. From free museums to affordable street food markets, here's how to experience the best of London on a budget." },
  { title: "Tokyo Transport 101: Mastering Trains, Buses & IC Cards", category: "Guides", readTime: "8 min read", date: "March 15, 2026", summary: "Navigate Tokyo's sprawling rail network like a local. From Suica cards to the JR Pass.", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80", featured: false, content: "Tokyo's public transport system is efficient but can be overwhelming for first-timers. This comprehensive guide covers everything from Suica cards to the Japan Rail Pass." },
  { title: "Rome Travel Guide: Colosseum, Vatican & Trastevere Walks", category: "Guides", readTime: "5 min read", date: "February 20, 2026", summary: "Plan the perfect Roman holiday with skip-the-line tickets and authentic trattoria recommendations.", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=400&q=80", featured: false, content: "Rome is a city of layers, where ancient history meets modern life. This guide helps you navigate the Eternal City like a seasoned traveler." },
  { title: "Street Food Tour of Bangkok: What to Eat & Where", category: "Dining", readTime: "5 min read", date: "May 10, 2026", summary: "From pad thai carts on Khao San Road to hidden sois serving tom yum, discover Bangkok's street food scene.", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80", featured: false, content: "Bangkok is the street food capital of the world. This guide takes you through the best street food spots across the city." },
  { title: "Italy's Best Regional Dishes: A Culinary Road Trip", category: "Dining", readTime: "7 min read", date: "April 5, 2026", summary: "Taste your way from Neapolitan pizza to Sicilian cannoli across every Italian region.", image: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?auto=format&fit=crop&w=400&q=80", featured: false, content: "Italian cuisine varies dramatically by region. From the truffles of Piedmont to the seafood of Sicily, embark on a culinary journey through Italy." },
  { title: "Japanese Tea Ceremony: History, Ritual & Where to Experience It", category: "Culture", readTime: "6 min read", date: "June 1, 2026", summary: "Dive into the serene world of chanoyu and the best tea houses in Kyoto and Tokyo.", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80", featured: false, content: "The Japanese tea ceremony is a meditative experience that embodies harmony, respect, purity, and tranquillity. Here's where to experience it." },
  { title: "Diwali in India: The Best Cities to Experience the Festival of Lights", category: "Culture", readTime: "5 min read", date: "May 5, 2026", summary: "Experience India's most dazzling festival from Jaipur to Varanasi.", image: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&w=400&q=80", featured: false, content: "Diwali is India's most spectacular festival. From the illuminated streets of Jaipur to the ghats of Varanasi, experience the Festival of Lights at its best." },
  { title: "Mexican Day of the Dead: Traditions, Altars & Best Destinations", category: "Culture", readTime: "6 min read", date: "March 10, 2026", summary: "Understand the beautiful traditions of Día de Muertos in Oaxaca and Mexico City.", image: "https://images.unsplash.com/photo-1505884065216-0661d68e5c47?auto=format&fit=crop&w=400&q=80", featured: false, content: "Día de Muertos is a vibrant celebration of life and memory. Discover the traditions, altars, and best places to experience this unique Mexican holiday." },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");

    await Package.deleteMany({});
    await Package.insertMany(packages);
    console.log(`Seeded ${packages.length} packages from GT Holidays`);

    await Blog.deleteMany({});
    await Blog.insertMany(blogs);
    console.log(`Seeded ${blogs.length} blogs`);

    const existingAdmin = await User.findOne({ email: "admin@tripagent.com" });
    if (!existingAdmin) {
      await User.create({
        fullName: "Admin User",
        email: "admin@tripagent.com",
        password: "admin123",
        role: "admin"
      });
      console.log("Created default admin: admin@tripagent.com / admin123");
    }

    console.log("Seeding complete!");
    process.exit(0);
  } catch (err) {
    console.error("Seed error:", err);
    process.exit(1);
  }
}

seed();
