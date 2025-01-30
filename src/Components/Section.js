import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Section.css';


import shoe1 from '../assets/Image/1.PNG';
import shoe2 from '../assets/Image/W7.PNG';
import shoe3 from '../assets/Image/W5.PNG';
import shoe4 from '../assets/Image/W4.PNG';
import shoe5 from '../assets/Image/k8.PNG';
import shoe6 from '../assets/Image/W2.PNG';



import logo1 from '../assets/Image/B1.png';
import logo2 from '../assets/Image/B2.PNG';
import logo3 from '../assets/Image/B3.png';
import logo4 from '../assets/Image/B4.png'; 
import logo5 from '../assets/Image/B5.png'; 


import C1 from '../assets/Image/C1.jpeg';
import C2 from '../assets/Image/C2.jpg';
import C3 from '../assets/Image/C3.jpg';





const Section = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Directly define shoe categories with images
    const menShoes = [
        { id: 1, src: shoe1, alt: 'Men Shoe 1' }
    ];

    const womenShoes = [
        { id: 1, src: shoe2, alt: 'Women Shoe 1' }
    ];

    const kidsShoes = [
        { id: 1, src: shoe3, alt: 'Kids Shoe 1' }
    ];

    const sliderImages = [
        { id: 1, src: shoe1, alt: 'Slider Image 1' },
        { id: 2, src: shoe2, alt: 'Slider Image 2' },
        { id: 1, src: shoe3, alt: 'Slider Image 1' },
        { id: 2, src: shoe4, alt: 'Slider Image 2' },
        { id: 2, src: shoe5, alt: 'Slider Image 2' },
        { id: 2, src: shoe6, alt: 'Slider Image 2' }
    ];



const prevSlide = () => {
    setCurrentSlide((prev) =>
        prev === 0 ? sliderImages.length - 1 : prev - 1
    );
};

const nextSlide = () => {
    setCurrentSlide((prev) =>
        prev === sliderImages.length - 1 ? 0 : prev + 1
    );
};


    // Customer review data
    const reviewsData = [
        { id: 1, name: 'John Doe', review: 'Amazing shoes!', rating: 5, image: C1 },
        { id: 2, name: 'Jane Smith', review: 'Great quality!', rating: 4, image: C2 },
        { id: 3, name: 'Emily Johnson', review: 'Love these shoes!', rating: 5, image: C3 }
    ];

    return (
        <div>
            <div className='abc'>
            <section className="men-shoes-section">
                <h2>Men's Shoes</h2>
                <div className="shoe-list">
                    {(menShoes || []).map(shoe => (
                        <Link to="/Men" key={shoe.id} className="shoe-item">
                        <img src={shoe.src} alt={shoe.alt} />
                    </Link>
                    ))}
                </div>
            </section>

            <section className="women-shoes-section">
                <h2>Women's Shoes</h2>
                <div className="shoe-list">
                    {(womenShoes || []).map(shoe => (
                        <Link to="/Women" key={shoe.id} className="shoe-item">
                        <img src={shoe.src} alt={shoe.alt} />
                    </Link>
                    ))}
                </div>
            </section>

            <section className="kids-shoes-section">
                <h2>Kids' Shoes</h2>
                <div className="shoe-list">
                    {(kidsShoes || []).map(shoe => (
                        <Link to="/Kids" key={shoe.id} className="shoe-item">
                        <img src={shoe.src} alt={shoe.alt} />
                    </Link>
                    ))}
                </div>
            </section>
            </div>

            <section className="slider-section">
    <h2>Featured Shoes</h2>
    <div className="slider">
        <div
            className="slides"
            style={{
                transform: `translateX(-${currentSlide * 100}%)`,
            }}
        >
            {sliderImages.map((image, index) => (
                <div className="slide" key={index}>
                    <img src={image.src} alt={image.alt} />
                </div>
            ))}
        </div>
    </div>
    <button className="prev" onClick={prevSlide} aria-label="Previous Slide">
        &#10094;
    </button>
    <button className="next" onClick={nextSlide} aria-label="Next Slide" >
        &#10095;
    </button>
    <div className="slider-dots">
        {sliderImages.map((_, index) => (
            <span
                key={index}
                className={`slider-dot ${
                    currentSlide === index ? "active" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
            ></span>
        ))}
    </div>
</section>

            <section className="image-gallery-section">
                <div className="image-gallery">
                    <div className="gallery-item"><img src={logo1} alt="Brand 1" className="gallery-image" /></div>
                    <div className="gallery-item"><img src={logo2} alt="Brand 2" className="gallery-image" /></div>
                    <div className="gallery-item"><img src={logo3} alt="Brand 3" className="gallery-image" /></div>
                    <div className="gallery-item"><img src={logo4} alt="Brand 2" className="gallery-image" /></div>
                    <div className="gallery-item"><img src={logo5} alt="Brand 3" className="gallery-image" /></div>
                </div>
            </section>

            <section className="reviews-section">
                <h2>Customer Reviews</h2>
                <div className="reviews-list">
                    {(reviewsData || []).map(({ id, name, review, rating, image }) => (
                        <div key={id} className="review-item">
                            <img src={image} alt={name} className="customer-image" />
                            <h3>{name}</h3>
                            <p>{review}</p>
                            <div className="rating">
                                {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Section;
