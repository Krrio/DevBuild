"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { FaFire, FaTag, FaStar } from 'react-icons/fa'; 


export function AppleCardsCarouselDemo() {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5251/api/Advertisement/all");
        setData(response.data);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  const cards = data.map((card, index) => (
    <Card
    key={card.id}
    card={{
      title: card.title,
      content: (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          {card.photo && (
            <Image
              src={card.photo}
              alt={card.title}
              height={500}
              width={500}
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain cursor-default"
            />
          )}
        </div>
      ),
      src: card.photo || "https://via.placeholder.com/500", 
      price: card.price || 0, 
      buildingType: card.buildingType || "buildType",
    }}
    index={index}
  />
  ));

  return (
    <div className="w-full h-full">
      <Carousel items={cards} />
    </div>
  );
}
