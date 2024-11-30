import { useRouter } from 'next/router';
import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const teamData = [
  {
    desk: "CEO Desk",
    members: [
      {
        name: "MR. KAVIN BUPAALAN",
        position: "CEO & FOUNDER",
        company: "FINIRA GROUP OF COMPANIES",
        image: "/profile.png",
        email: true,
        linkedin: "https://www.linkedin.com/in/kavin-r-51b657246",
      },
      {
        name: "MS. JAYANTHI",
        position: "Executive Assistant",
        image: "/profile.png",
        email: true,
        linkedin: "https://www.linkedin.com/in/jayanthi-t-5b2a38291",
      },
      {
        name: "MS. PARVATHY",
        position: "Professional Assistant",
        image: "/profile.png",
        email: "gparvathy45@gmail.com",
        linkedin: "https://www.linkedin.com/in/parvathyg62",
      },
    ],
  },
];

const TeamSection = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/AllTeam/FullTeam'); // Correct navigation path
  };

  return (
    <section className="px-4 py-10 bg-purple-500 text-center" id="our-team">
      <h2 className="text-3xl font-bold text-white mb-4">Meet the Team</h2>
      <p className="text-white mb-8">
        Meet our fantastic team who brings amazing solutions to real life.
      </p>

      {teamData.map((desk, index) => (
        <div key={index} className="my-6">
          <h3 className="text-2xl font-semibold text-white mb-6">{desk.desk}</h3>
          {/* Responsive grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {desk.members.map((member, idx) => (
              <div
                key={idx}
                className="w-full max-w-xs bg-white shadow-lg rounded-lg p-4 sm:p-6 flex flex-col items-center text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mb-4 object-cover"
                />
                <h4 className="font-bold text-black text-lg truncate">{member.name}</h4>
                <p className="text-sm text-purple-600 truncate">{member.position}</p>
                {member.company && (
                  <p className="text-sm text-purple-500 truncate">{member.company}</p>
                )}
                <div className="flex mt-4 space-x-3">
                  {member.email && (
                    <a
                      href={`mailto:${member.name
                        .replace(/\s+/g, ".")
                        .toLowerCase()}@example.com`}
                      className="text-blue-500"
                    >
                      <FaEnvelope size={20} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={typeof member.linkedin === 'string' && member.linkedin.startsWith('http') 
                      ? member.linkedin 
                      : `https://www.linkedin.com/in/${member.linkedin}`} className="text-blue-500">
                      <FaLinkedin size={20} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <button
        className="mt-8 px-8 py-2 bg-white font-bold text-purple-500 rounded hover:bg-purple-300 transition-colors"
        onClick={handleClick}
      >
        View Full Team
      </button>
    </section>
  );
};

export default TeamSection;
