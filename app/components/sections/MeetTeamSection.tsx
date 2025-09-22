"use client";

const MeetTeamSection = () => {
  const teamMembers = [
    {
      name: "Sandra Yu",
      title: "Senior Cloud Engineer",
      image: "/assets/images/Frame 7 (5).png",
    },
    {
      name: "Kingsley Freshman",
      title: "Dev Ops Engineer",
      image: "/assets/images/Frame 7 (6).png",
    },
    {
      name: "Tunde Ednut",
      title: "Senior Java Developer",
      image: "/assets/images/Frame 7 (7).png",
    },
    {
      name: "Oladimeji Alao",
      title: "CEO, Latila Consulting",
      image: "/assets/images/Frame 7 (8).png",
    },
    {
      name: "Oladimeji Alao",
      title: "CEO, Latila Consulting",
      image: "/assets/images/Frame 7 (9).png",
    },
  ];

  const skillTags = [
    { name: "Project Managers", color: "#10B981" },
    { name: "Dev Ops", color: "#8B5CF6" },
    { name: "Front-End Developers", color: "#3B82F6" },
    { name: "Back-End Developers", color: "#7C3AED" },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2
            className="text-sm font-semibold uppercase tracking-wider mb-4"
            style={{ color: "#00447D" }}
          >
            MEET THE TEAM
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                What we offer
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                Latila Consulting excels in delivering top-notch IT solutions,
                leveraging deep expertise to drive innovation and efficiency for
                businesses.
              </p>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-4">
                {skillTags.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-lg text-white text-sm font-medium"
                    style={{ backgroundColor: skill.color }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Team Grid */}
          <div className="grid grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Member Image */}
                <div className="aspect-square">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Member Info */}
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-600">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTeamSection;
