import React, { useState } from "react";
import "../styles/TestimonialsSlider.css";

export default function TestimonialsSlider() {
  const testimonials = [
    { text: "ProjectDuniya delivered exactly what we envisioned. Their team understood our requirements thoroughly and executed the project flawlessly. Communication was smooth, and they met all deadlines without compromising on quality.", client: "Rajesh Kumar" },
    { text: "Working with ProjectDuniya was an absolute pleasure. From the initial consultation to the final delivery, every step was handled professionally. They paid attention to the smallest details and truly cared about the outcome.", client: "Anjali Mehta" },
    { text: "ProjectDuniya exceeded all our expectations. The team was proactive, creative, and always available to answer questions. They transformed our ideas into something beyond what we imagined.", client: "Vikram Singh" },
    { text: "A fantastic experience! ProjectDuniya’s professionalism and expertise made the project seamless. Their team is highly skilled, responsive, and always ready to provide guidance whenever needed.", client: "Priya Sharma" },
    { text: "We have worked with many teams, but ProjectDuniya stands out. They were reliable, innovative, and delivered exceptional results. I would recommend them without hesitation for any project.", client: "Amit Patel" },
    { text: "ProjectDuniya took our project to the next level with their attention to detail and creative solutions. They were extremely responsive, collaborative, and committed to delivering excellence.", client: "Neha Verma" },
    { text: "Communication with ProjectDuniya was excellent throughout the project. Their work is top-notch, and they demonstrated great professionalism, meeting all our requirements precisely.", client: "Siddharth Joshi" },
    { text: "ProjectDuniya is a team of creative, diligent, and highly skilled professionals. They brought clarity to our vision and executed it with perfection, making the process smooth and enjoyable.", client: "Riya Kapoor" },
    { text: "From start to finish, working with ProjectDuniya was seamless. They made complex tasks seem easy and were always attentive to our needs. The results were beyond our expectations.", client: "Arjun Desai" },
    { text: "ProjectDuniya delivered an outstanding result. Their team is efficient, professional, and committed to client satisfaction. They truly understood our goals and executed them perfectly.", client: "Ishita Rao" },
    { text: "It was a pleasure working with ProjectDuniya. They are reliable, talented, and approachable. The project was completed on time and exceeded all expectations in quality and creativity.", client: "Manoj Nair" },
    { text: "The team at ProjectDuniya went above and beyond. They were proactive in suggesting improvements, attentive to our feedback, and executed the project flawlessly. Highly recommended.", client: "Sneha Iyer" },
    { text: "ProjectDuniya demonstrated amazing attention to detail. Every part of the project was carefully considered and executed with precision. They delivered more than we hoped for.", client: "Rakesh Choudhary" },
    { text: "Outstanding service from start to finish. ProjectDuniya made us feel valued and listened to. Their professionalism and expertise are unmatched, and the results speak for themselves.", client: "Divya Bhatt" },
    { text: "ProjectDuniya exceeded our expectations in every way. They were communicative, creative, and consistently delivered high-quality work. I would happily work with them again on future projects.", client: "Nikhil Sinha" },
    { text: "They brought our vision to life exactly as we imagined. ProjectDuniya is reliable, innovative, and highly professional. The final result was polished, detailed, and visually impressive.", client: "Pooja Malhotra" },
    { text: "ProjectDuniya impressed us with their excellent communication and project management. Every step was transparent, and they ensured we were informed and satisfied throughout the process.", client: "Karan Bhatia" },
    { text: "They understood our goals perfectly and executed every requirement with precision. ProjectDuniya’s team is skilled, professional, and committed to delivering high-quality outcomes.", client: "Meera Pillai" },
    { text: "Working with ProjectDuniya was a great experience. They are highly skilled, approachable, and deliver exceptional results. I can’t recommend them enough for anyone seeking reliable expertise.", client: "Rahul Das" },
    { text: "ProjectDuniya is a true game-changer. Their creativity, expertise, and professionalism resulted in a final product that far exceeded our expectations. The results speak volumes about their talent.", client: "Tanvi Reddy" },
    { text: "ProjectDuniya handled our project with incredible care and professionalism. They were proactive, solved problems quickly, and delivered results that truly impressed us.", client: "Sonia Kapoor" },
    { text: "We appreciated ProjectDuniya’s transparency and dedication. Every milestone was communicated clearly, and they consistently exceeded our expectations in quality and timeliness.", client: "Arnav Mehra" },
    { text: "ProjectDuniya’s expertise is unmatched. They provided creative solutions to challenges and ensured the project was delivered on schedule with outstanding quality.", client: "Tanisha Sharma" },
    { text: "From ideation to execution, ProjectDuniya demonstrated exceptional professionalism. Their team is knowledgeable, responsive, and committed to achieving the best outcome.", client: "Raghav Verma" },
    { text: "Working with ProjectDuniya was a seamless experience. They were detail-oriented, attentive to our needs, and delivered a final product that exceeded our expectations.", client: "Simran Joshi" },
    { text: "ProjectDuniya is highly skilled and dependable. They communicated clearly, handled every challenge efficiently, and ensured the project was perfect in every aspect.", client: "Aayush Khanna" },
    { text: "The team at ProjectDuniya is innovative and reliable. They worked closely with us to understand our goals and executed the project with precision and creativity.", client: "Naina Desai" },
    { text: "ProjectDuniya made a complex project simple and enjoyable. Their expertise, patience, and attention to detail ensured an outcome we are extremely proud of.", client: "Kabir Reddy" },
    { text: "Every interaction with ProjectDuniya was professional and helpful. They delivered a high-quality project, met deadlines, and went above and beyond in every aspect.", client: "Megha Pillai" },
    { text: "We are extremely satisfied with ProjectDuniya’s work. Their creativity, dedication, and professionalism resulted in a product that perfectly matched our vision.", client: "Devansh Choudhary" }
  ];

  const VISIBLE = 4;
  const totalPages = Math.ceil(testimonials.length / VISIBLE);
  const [currentPage, setCurrentPage] = useState(0);

  // Function to generate random star rating (4 or 5)
  const getRandomStars = () => {
    const stars = Math.floor(Math.random() * 2) + 4; // 4 or 5
    const filledStars = "★".repeat(stars);
    const emptyStars = "☆".repeat(5 - stars);
    return (
      <>
        {filledStars}
        <span className="empty">{emptyStars}</span>
      </>
    );
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <div className="testimonials-slider">
      <div className="slider-header">
        <button className="slider-btn" onClick={prevSlide}>←</button>
        <h2>What Our Clients Say</h2>
        <button className="slider-btn" onClick={nextSlide}>→</button>
      </div>

      <div className="slider-window">
        <div
          className="testimonials-list"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div className="testimonial" key={i} style={{ flex: `0 0 calc(100% / ${VISIBLE})` }}>
              <p>{t.text}</p>
              <div className="stars">{getRandomStars()}</div>
              <strong>{t.client}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
