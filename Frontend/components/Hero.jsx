"use client"

import { AnimatedList, AnimatedListItem } from "@/components/ui/AnimatedList"
import WordFadeIn from "@/components/ui/WordFadeIn"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { cn } from "@/lib/utils";

const Hero = () => {
    const [advertisements, setAdvertisements] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5251/api/Advertisement/all') // URL backendowego API
            .then(response => {
                setAdvertisements(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the advertisements!', error);
            });
    }, []);

    const AdvertisementItem = ({ title, description }) => {
        return (
            <figure
                className={cn(
                    "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
                    "transition-all duration-200 ease-in-out hover:scale-[103%]",
                    "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                    "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
                )}
            >
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
                        <span className="text-sm sm:text-lg">{title}</span>
                    </figcaption>
                    <p className="text-sm font-normal dark:text-white/60">
                        {description}
                    </p>
                </div>
            </figure>
        );
    };

    return (
        <div
            className={cn(
                "relative flex h-[800px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl"
            )}
        >
            <AnimatedList className="w-full py-10" delay={1000}>
                {advertisements.map(ad => (
                    <AdvertisementItem key={ad.id} title={ad.title} description={ad.description} />
                ))}
            </AnimatedList>
        </div>
    );
}

export default Hero;