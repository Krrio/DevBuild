"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { AnimatedList, AnimatedListItem } from "@/components/ui/AnimatedList";

const HouseList = () => {
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5251/api/Advertisement/all")
      .then((response) => {
        console.log(response.data);
        setAdvertisements(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the advertisements!",
          error
        );
      });
  }, []);

  // Function to format price
  const formatPrice = (price) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`; // Format to millions (e.g., $1.5M)
    } else if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}k`; // Format to thousands (e.g., $750k)
    } else {
      return `$${price}`; // For smaller values, show the full number
    }
  };

  // Function to generate random minutes between 0 and 20
  const getRandomMinutesText = () => {
    const minutes = Math.floor(Math.random() * 59); // Generates a random number between 0 and 20
    return minutes === 0 ? "Just now" : `${minutes} min ago`;
  };

  return (
    <div>
      <AnimatedList delay={2000}>
        {advertisements.map((ad) => (
          <AnimatedListItem key={ad.id}>
            <div className="relative advertisement-item flex items-center p-4 border border-gray-300 rounded-md shadow-sm mb-4 cursor-pointer">
              <div className="absolute -top-3 -right-3 bg-red-300 w-14 h-6 rounded-md">
                <span className="flex items-center justify-center text-white text-[13px] font-bold mt-[2px]">
                  New
                  <img src="icons/fire.png" className="ml-1" />
                </span>
              </div>

              {/* Update here to use ad.photo instead of ad.imageUrl */}
              {ad.photo ? (
                <img
                  src={ad.photo}
                  alt={ad.title}
                  className="w-24 h-24 object-cover rounded-md mr-4"
                />
              ) : (
                <div className="w-24 h-24 bg-gray-200 rounded-md mr-4 flex items-center justify-center">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-lg text-blue-200 font-bold">{ad.title}</h3>
                <p className="text-blue-200">{ad.description}</p>
                <p className="text-[#10B981] font-semibold mt-2">
                  <span className="text-blue-200">Price:</span>{" "}
                  {formatPrice(ad.price)}
                </p>
              </div>
              {/* Adding the random minutes or "Just now" in the bottom right corner */}
              <div className="absolute bottom-2 right-2 text-gray-500 text-sm">
                {getRandomMinutesText()}
              </div>
            </div>
          </AnimatedListItem>
        ))}
      </AnimatedList>
    </div>
  );
};

export default HouseList;
