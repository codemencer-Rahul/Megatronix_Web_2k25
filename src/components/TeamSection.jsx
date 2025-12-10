import React from "react";
import { Mail, Linkedin, Github, User } from "lucide-react";
import LetterGlitch from "./LetterGlitch";
import contactInfo from "../data/ContactInfo.json";

// const getProfilePictureUrl = (url) => {
//   if (!url) return null;
//   // Check if it's a Google Drive link with an id param
//   const match = url.match(/[?&]id=([^&]+)/);
//   if (url.includes("drive.google.com") && match) {
//     return `https://drive.google.com/file/d/${match[1]}`;
//   }
//   return url;
// };

const getProfilePictureUrl = (url) => {
  if (!url) return null;

  // Case 1: handle ?id= links
  const idParam = url.match(/[?&]id=([^&]+)/);
  if (idParam) {
    return `https://drive.google.com/uc?export=view&id=${idParam[1]}`;
  }

  // Case 2: handle /file/d/.../view links
  const fileIdMatch = url.match(/\/d\/([^/]+)/);
  if (fileIdMatch) {
    return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`;
  }

  // Otherwise, return as-is
  return url;
};

const TeamSection = () => {
  // Map the JSON data to the expected format for rendering
  const teamMembers = contactInfo.map((member) => ({
    name: member["Name"],
    email: member["Email"],
    linkedin: member["LinkedIn Profile Link"],
    github: member["GitHub Account Link"],
    year: member["Year"],
    profilePicture: getProfilePictureUrl(member["Profile Picture"]),
    facebook: member["Facebook Profile Link"],
    instagram: member["Instagram Profile Link"],
  }));

  console.log(teamMembers[0].profilePicture);
  // Segregate by year
  const years = ["4th Year", "3rd Year"];
  const membersByYear = years.map((year) => ({
    year,
    members: teamMembers.filter((m) => m.year === year),
  }));

  return (
    <LetterGlitch>
      <div className="min-h-screen pt-10">
        <style>
          {`
          @keyframes rotateBgImg {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
        </style>
        <div className="max-w-7xl mx-auto px-4 py-12">
          {membersByYear.map((group) => (
            <div key={group.year} className="mb-12">
              <h2 className="text-3xl font-bold text-blue-200 text-center mb-12">
                {group.year}
              </h2>
              <div className="flex flex-wrap justify-center gap-8">
                {group.members.map((member, index) => (
                  <div
                    key={index}
                    className="w-[280px] h-[300px] bg-[#07182e] relative flex justify-center items-center overflow-hidden rounded-[15px] group"
                  >
                    <div
                      className="absolute w-[150px] h-[140%] bg-linear-to-b from-emerald-400 to-teal-800"
                      style={{ animation: "rotateBgImg 5s linear infinite" }}
                    ></div>
                    <div className="absolute bg-neutral-900 backdrop-blur-sm inset-0.5 rounded-[15px] p-8 text-center flex flex-col items-center z-10">
                      <div className="relative mb-4">
                        <div className="w-24 h-24 mx-auto rounded-full bg-linear-to-br from-blue-400/50 flex items-center justify-center overflow-hidden">
                          {member.profilePicture ? (
                            <img
                              src={member.profilePicture}
                              alt={member.name}
                              className="w-24 h-24 object-cover rounded-full"
                            />
                          ) : (
                            <User className="h-12 w-12 text-white" />
                          )}
                        </div>
                      </div>
                      <h3 className="font-semibold text-lg text-green-400">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-400">{member.year}</p>
                      <div className="flex justify-center gap-4 text-gray-400 mt-6">
                        <a
                          href={`mailto:${member.email}`}
                          className="hover:text-blue-400"
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                        <a
                          href={member.linkedin}
                          className="hover:text-blue-400"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                          href={member.github}
                          className="hover:text-blue-400"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </LetterGlitch>
  );
};

export default TeamSection;
