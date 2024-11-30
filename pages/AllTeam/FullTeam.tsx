import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const teamData = [
  {
    desk: "CEO Desk",
    members: [
      {
        name: "MR. KAVIN BUPAALAN",
        position: "CEO & FOUNDER",
        company: "BUPAALAN GROUP OF COMPANIES",
        image: "/profile.png", 
        email: true,
        linkedin: "https://https://www.linkedin.com/in/kavin-r-51b657246",
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
  {
    desk: "MOC Desk",
    members: [
      {
        name: "MR. ARATHAVAN",
        position: "MOC Ambassador",
        image: "/profile.png",
        email: true,
        linkedin: "https://www.linkedin.com/in/aathavan-ganesan-761a36291",
      },
      {
        name: "MS. JAYANTHI",
        position: "MOC Speaker",
        image: "/profile.png",
        email: true,
        linkedin: "https://www.linkedin.com/in/jayanthi-t-5b2a38291",
      },
      {
        name: "MS. SUBALAKSHMI",
        position: "MOC Content Manager",
        image: "/profile.png",
        email: true,
        linkedin: "https://www.linkedin.com/in/subalakshmi-m-083827262",
      },
    ],
  },
];

const FullTeam: React.FC = () => {
  return (
    <section className="px-8 py-16 text-center bg-purple-500" id="fullteam">
      <h2 className="text-3xl font-bold text-white">Meet the team</h2>
      <p className="text-white">Meet our fantastic team who brings amazing solutions to real life.</p>

      {teamData.map((desk, index) => (
        <div key={index} className="my-12">
          <h3 className="text-xl font-semibold border-purple-500 pl-3 mb-6 text-white">{desk.desk}</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {desk.members.map((member, idx) => (
              <div
                key={idx}
                className="w-64 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-36 h-36 rounded-full mb-4"
                />
                <h4 className="font-bold text-black">{member.name}</h4>
                <p className="text-sm text-purple-600">{member.position}</p>
                <div className="flex mt-4 space-x-3">
                  {member.email && (
                    <a href={`mailto:${member.name.replace(" ", ".").toLowerCase()}@example.com`} className="text-blue-500">
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

      <button className="mt-8 px-8 py-2 bg-white font-bold text-purple-500 rounded hover:bg-purple-300 transition-colors">
        View Less 
      </button>
    </section>
  );
};

export default FullTeam;
