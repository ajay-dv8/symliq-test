
interface ContentItem {
  title: string;
  description: string;
  content?: React.ReactNode;
  image?: string;
  number: string  
}

export const content: ContentItem[] = [
  {
    number: "1",
    title: "Assess and Strategize",
    description: "Begin by identifying each client's unique needs and objectives to craft digital solutions that align seamlessly with their business and lifestyle goals. Through in-depth consultations, surveys, and process evaluations, we conduct a thorough needs analysis. Together, we define clear, measurable goals and success metrics to ensure each digital transformation aligns with the client’s vision and growth potential. Finally, we develop a strategic roadmap that highlights key milestones and the tailored digital solutions required at each stage of their journey.",
    image: "/images/com.jpg", 
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    number: "2", 
    title: "Develop and Integrate",
    description: "Our mission is to deliver high-quality, user-friendly software solutions that are tailored to your unique needs, helping to streamline operations and enhance business efficiency. We follow agile development practices, ensuring that each phase of the project includes your feedback, so the final product aligns perfectly with your vision. To make the transition smooth and seamless, we integrate our solutions with your existing platforms, minimizing disruptions to your workflow. By leveraging cutting-edge technologies—such as AI, automation, and data analytics—we drive innovation, boost engagement, and equip your business to stay ahead in a rapidly evolving digital landscape.",
    image: "/images/ent.jpg", // Specify the image path here
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        {/* <Image src="/linear.webp" width={300} height={300} alt="linear board demo" /> */}
        {/* image tag */}
      </div>
    ),
  }, 
  {
    number: "3",
    title: " Educate and Empower",
    description: "Our goal is to empower you with the skills and knowledge to make the most of your new digital solutions. We provide personalized training sessions and create easy-to-follow documentation suited for users of all experience levels. To ensure continued success, we offer ongoing support and conduct workshops, keeping you up-to-date on new features and advancements. Through a collaborative feedback loop, we capture your insights and continuously refine our solutions to meet your evolving needs, making sure that your digital tools always deliver maximum value.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    number: "4", 
    title: "Optimize and Scale",
    description: "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
