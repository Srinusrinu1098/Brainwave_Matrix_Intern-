import { AnimatedTestimonials } from "@/components/animated-testimonials";
import Headers from "../Headers/Headers";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "As a team lead, I guide and mentor my team, ensuring seamless collaboration and project execution. I prioritize task delegation, problem-solving, and maintaining high-quality standards to achieve project goals efficiently.",
      name: "Pankaja ❤️",
      designation: "Team lead",
      src: "https://i.ibb.co/tw26whdb/Screenshot-2025-03-19-224715.png",
    },
    {
      quote:
        "As a front-end developer, I craft intuitive and visually engaging user interfaces using modern frameworks like React. I focus on creating seamless, responsive, and high-performance web experiences, ensuring accessibility and user-centric design.",
      name: "Srinu 🖤",
      designation: "Frontend Developer ⭐",
      src: "https://i.ibb.co/ynVL60CK/Screenshot-2025-03-19-221523.png",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. I have integrated Razorpay for seamless payment processing, ensuring secure and efficient transactions.",
      name: "Pavan 🤎",
      designation: "Backend Developer ⭐",
      src: "https://i.ibb.co/4gn6N9QP/Screenshot-2025-03-19-221400.png",
    },
    {
      quote:
        "As a web designer, I create visually appealing and user-friendly designs that enhance the digital experience. I focus on aesthetics, responsiveness, and intuitive layouts to ensure seamless navigation and engagement.",
      name: "Venky 🩵",
      designation: "Website Designer",
      src: "https://i.ibb.co/PvCJjqbd/Screenshot-2025-03-19-224913.png",
    },
    {
      quote:
        "As an error finder, I meticulously analyze code to identify and resolve bugs, ensuring a seamless and efficient user experience. I focus on optimizing performance, debugging issues, and maintaining code quality for a flawless website.",
      name: "Nithesh 💛",
      designation: "Errors Resolver",
      src: "https://i.ibb.co/N2zN3F01/Screenshot-2025-03-19-221209.png",
    },
  ];
  return (
    <div className="bg-black h-full md:h-screen">
      <Headers />
      <h1 className="text-center py-3 font-bold text-3xl font-mono text-blue-500 ">
        Crew Mates and Roles
      </h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
