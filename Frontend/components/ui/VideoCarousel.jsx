import React from "react";
import { motion } from "framer-motion";

const properties = [
  {
    id: 1,
    title: "Roselands House",
    price: "$35,000,000",
    image: "https://source.unsplash.com/random/800x600?house",
    location: "Manchester, Kentucky",
    owner: "Dianne Russell",
  },
  {
    id: 2,
    title: "Woodlandside",
    price: "$20,000,000",
    image: "https://source.unsplash.com/random/800x600?home",
    location: "Dr. San Jose, South Dakota",
    owner: "Robert Fox",
  },
  {
    id: 3,
    title: "The Old Lighthouse",
    price: "$44,000,000",
    image: "https://source.unsplash.com/random/800x600?building",
    location: "Santa Ana, Illinois",
    owner: "Ronald Richards",
  },
  {
    id: 4,
    title: "The Old Lighthouse",
    price: "$44,000,000",
    image: "https://source.unsplash.com/random/800x600?building",
    location: "Santa Ana, Illinois",
    owner: "Ronald Richards",
  },
  {
    id: 3,
    title: "The Old Lighthouse",
    price: "$44,000,000",
    image: "https://source.unsplash.com/random/800x600?building",
    location: "Santa Ana, Illinois",
    owner: "Ronald Richards",
  },
  {
    id: 5,
    title: "The Old Lighthouse",
    price: "$44,000,000",
    image: "https://source.unsplash.com/random/800x600?building",
    location: "Santa Ana, Illinois",
    owner: "Ronald Richards",
  },
  // Dodaj więcej nieruchomości tutaj...
];

const PropertyCarousel = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="property-carousel flex gap-4"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {properties.map((property) => (
          <div key={property.id} className="property-item">
            <img
              src={property.image}
              alt={property.title}
              className="property-image"
            />
            <div className="property-info">
              <h3 className="text-xl font-bold">{property.title}</h3>
              <p className="text-gray-600">{property.price}</p>
              <p className="text-sm text-gray-500">{property.owner}</p>
              <p className="text-sm text-gray-400">{property.location}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PropertyCarousel;
