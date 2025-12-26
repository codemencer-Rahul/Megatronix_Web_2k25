import React from "react";
import LetterGlitch from "./LetterGlitch";
import ProfileCard from "./ProfileCard";
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
        <div className="max-w-7xl mx-auto px-4 py-12">
          {membersByYear.map((group) => (
            <div key={group.year} className="mb-30">
              <h2 className="text-3xl font-bold text-indigo-200 text-center mb-12">
                {group.year}
              </h2>
              <div className="flex flex-wrap justify-center gap-8">
                {group.members.map((member, index) => (
                  <ProfileCard
                    key={index}
                    name={member.name}
                    year={member.year}
                    imageUrl={member.profilePicture}
                    email={member.email}
                    linkedin={member.linkedin}
                    github={member.github}
                  />
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
