import Image from "next/image";
import blogImage1 from "@/app/assets/explain.jpg"; 
import blogImage2 from "@/app/assets/class.jpg"; 

const blogs = [
  {
    id: 1,
    category: "Robotics",
    title: "The Future of Robotics in STEM Education",
    description:
      "Discover how hands-on robotics programs are shaping the engineers of tomorrow.",
    image: blogImage1,
    link: "#",
  },
  {
    id: 2,
    category: "AI",
    title: "Artificial Intelligence in Classrooms",
    description:
      "How AI tools are enabling personalized learning experiences in schools.",
    image: blogImage2,
    link: "#",
  },
];

export default function Blogs() {
  return (
    <section className="py-20 border-b">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-[550px] mb-12">
          <h2 className="text-2xl font-semibold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mb-3">
            Explore Our Blogs
          </h2>
          <p>
            Explore innovative STEM insights and trends with Nodetronics blogs, inspiring the next generation of tech leaders.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className={`relative md:p-8 p-3 bg-white shadow-lg rounded-xl ${
                index === 0 ? "lg:mt-20" : ""
              }`}
            >
              <div className="h-96">
              <Image
                src={blog.image}
                alt={blog.title}
                className="rounded-xl w-full h-full"
              />
              </div>
              <div className="relative z-10 pt-10">
                <span className="text-xs font-medium text-gray-600 uppercase bg-gray-200 px-2 py-1 rounded-full">
                  {blog.category}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {blog.title}
                </h3>
                <p className="mt-3 text-gray-600">{blog.description}</p>
                <a
                  href={blog.link}
                  className="mt-4 inline-block text-blue-600 hover:underline font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
