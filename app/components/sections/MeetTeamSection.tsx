"use client";

const MeetTheTeamSection = () => {
  const teamMembers = [
    {
      name: "Sandra Yu",
      role: "Senior Cloud Engineer",
      image: "/assets/images/team2.png",
    },
    {
      name: "Kingsley Alao",
      role: "Dev Ops Engineer",
      image: "/assets/images/team1.png",
    },
    {
      name: "Tunde Ednut",
      role: "Senior Java Developer",
      image: "/assets/images/services3.png",
    },
    {
      name: "Oladimeji Alao",
      role: "CEO, Latila Consulting",
      image: "/assets/images/services4.png",
    },
    {
      name: "Oladimeji Alao",
      role: "CEO, Latila Consulting",
      image: "/assets/images/services5.png",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <h2
            className="text-lg font-bold uppercase tracking-wider"
            style={{ color: "#00447D" }}
          >
            MEET THE TEAM
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Content */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              What we offer
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Latila Consulting excels in delivering top-notch IT solutions,
              leveraging deep expertise to drive innovation and efficiency for
              businesses.
            </p>

            {/* Role Tags */}
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                  Project Managers
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-pink-100 text-pink-800">
                  Dev Ops
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-100 text-cyan-800">
                  Front-End Developers
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                  Back-End Developers
                </span>
              </div>
            </div>

            {/* Third Team Member Card - Under Content */}
            <div className="mt-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40">
                  <img
                    src={teamMembers[2].image}
                    alt={teamMembers[2].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-bold text-gray-900 mb-1">
                    {teamMembers[2].name}
                  </h4>
                  <p className="text-xs text-gray-600">{teamMembers[2].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Team Grid */}
          <div className="lg:col-span-8">
            {/* First Row - 2 team member cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {teamMembers.slice(0, 2).map((member, index) => (
                <div
                  key={member.name + index}
                  className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative 
                  
                  `}
                >
                  {member && (
                    <div className="absolute top-2 right-2 text-white text-xs px-2 py-1 rounded"></div>
                  )}
                  <div className="h-48">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {member.name}
                    </h4>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - 2 team member cards (4th and 5th members) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {teamMembers.slice(3, 5).map((member, index) => (
                <div
                  key={member.name + index}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-40">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-bold text-gray-900 mb-1">
                      {member.name}
                    </h4>
                    <p className="text-xs text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeamSection;
