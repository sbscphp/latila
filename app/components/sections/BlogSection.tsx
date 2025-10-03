"use client";

import Image from "next/image";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Example product title heading",
      description:
        "Fermentum facilisis sed is nulla amet vulputate. Thskaklseh bxjhjskaksjaseus...",
      tag: "Productivity",
      date: "Aug 10, 2025",
      image: (
        <div className="w-full h-48 rounded-t-xl overflow-hidden">
          <Image
            src="/assets/images/Photos.png"
            alt="Blog post about productivity"
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
    {
      id: 2,
      title: "Example product title heading",
      description:
        "Fermentum facilisis sed is nulla amet vulputate. Thskaklseh bxjhjskaksjaseus...",
      tag: "Productivity",
      date: "Aug 10, 2025",
      image: (
        <div className="w-full h-48 rounded-t-xl overflow-hidden">
          <Image
            src="/assets/images/photos.png"
            alt="Blog post about productivity"
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
    {
      id: 3,
      title: "Example product title heading",
      description:
        "Fermentum facilisis sed is nulla amet vulputate. Thskaklseh bxjhjskaksjaseus...",
      tag: "Productivity",
      date: "Aug 10, 2025",
      image: (
        <div className="w-full h-48 rounded-t-xl overflow-hidden">
          <Image
            src="/assets/images/Photos.png"
            alt="Blog post about productivity"
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex items-center justify-between">
          <h2
            className="text-lg font-bold uppercase tracking-wider"
            style={{ color: "#00447D" }}
          >
            BLOGS & RESOURCES
          </h2>
          <div className="flex space-x-0.5">
            <div
              className="w-6 h-2 rounded-lg"
              style={{ backgroundColor: "#00447D" }}
            ></div>
            <div
              className="w-2 h-2 rounded-lg"
              style={{ backgroundColor: "#4EB2FF" }}
            ></div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              {post.image}

              {/* Content */}
              <div className="p-6">
                {/* Tag and Date */}
                <div className="flex justify-between items-center mb-4">
                  <span
                    className=" px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: "#E7F5F2",
                      color: "#5ACAAD",
                      border: "1px solid #5ACAAD",
                    }}
                  >
                    {post.tag}
                  </span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "#1D2939" }}
                >
                  {post.title}
                </h3>

                {/* Description */}
                <p
                  className=" mb-4 leading-relaxed"
                  style={{ color: "#000000" }}
                >
                  {post.description}
                </p>

                {/* Read More Link */}
                <a
                  href="/blog/example-post"
                  className="inline-flex items-center font-medium"
                  style={{ color: "#00447D" }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#003366")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "#00447D")
                  }
                >
                  <span>Read more</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17l9.2-9.2M17 17V7H7"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
