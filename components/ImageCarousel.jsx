import { Carousel } from 'flowbite-react';

function ImageCarousel() {
  return (
    <div className="mx-auto max-w-4xl">
      <Carousel
        config={{
          slides: 1,
          swipe_distance: 50,
          drag_distance: 50,
          drag_easing: 0.1,
        }}
        className="h-80 sm:h-80 md:h-96 lg:h-112 xl:h-128 2xl:h-144"
      >
        <img
          src="/minar-e-pak.jpg"
          alt="Minar-e-Pakistan"
          className="object-cover w-full h-full"
        />
        <img
          src="/badshahi mosque.jpg"
          alt="Badshahi Mosque"
          className="object-cover w-full h-full"
        />
        
        <img
          src="/shahi-qila.jpg"
          alt="Lahore Fort"
          className="object-cover w-full h-full"
        />
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
