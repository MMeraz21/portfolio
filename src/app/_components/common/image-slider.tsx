"use client"

import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"

export function ImageSlider({ images }: { images: string[] }) {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Carousel>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="flex aspect-video items-center justify-center p-2">
                <Image 
                  src={image} 
                  alt={`Image ${index + 1}`} 
                  width={1000} 
                  height={1000}
                  className="object-contain"
                  priority
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  )
}