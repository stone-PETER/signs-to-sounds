import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./PostersSection.css";

// Import all posters from the posters directory
// Add more poster paths as you add new files to public/posters/
const posters = [
  "/posters/INTER.png",
  // Add more poster paths here as you add new posters
  // Example: "/posters/poster2.jpg",
];

const PostersSection = () => {
  const [selectedPoster, setSelectedPoster] = useState(null);

  const openModal = (posterUrl) => {
    setSelectedPoster(posterUrl);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedPoster(null);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  return (
    <>
      <section id="posters" className="posters">
        <div className="section-inner">
          <h2>Posters</h2>
          <div className="posters-carousel-container">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="posters-swiper"
            >
              {posters.map((poster, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="poster-card"
                    onClick={() => openModal(poster)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        openModal(poster);
                      }
                    }}
                  >
                    <img
                      src={poster}
                      alt={`Event Poster ${index + 1}`}
                      className="poster-image"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPoster && (
        <div className="poster-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ×
            </button>
            <img
              src={selectedPoster}
              alt="Event Poster"
              className="modal-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PostersSection;
