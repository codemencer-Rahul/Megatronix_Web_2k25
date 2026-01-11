import React, { useMemo } from "react";
import { ProfileCard } from "../ui";
import contactInfo from "../../lib/data/ContactInfo.json";

const TeamSection = () => {
  // Memoize the data transformations to avoid recalculating on every render
  const membersByYear = useMemo(() => {
    const teamMembers = contactInfo.map((member) => ({
      name: member["Name"].toLocaleLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      email: member["Email"],
      linkedin: member["LinkedIn Profile Link"],
      github: member["GitHub Account Link"],
      year: member["Year"],
      profilePicture: member["Profile Picture"],
      facebook: member["Facebook Profile Link"],
      instagram: member["Instagram Profile Link"],
    }));

    const years = ["4th Year", "3rd Year"];
    return years.map((year) => ({
      year,
      members: teamMembers.filter((m) => m.year === year).sort((a, b) => a.name.localeCompare(b.name)),
    }));
  }, []);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {membersByYear.map((group) => (
          <div key={group.year} className="mb-30 mt-10">
            <div className="flex flex-wrap justify-center gap-8">
              {group.members.map((member) => (
                <ProfileCard
                  key={member.email}
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
  );
};

export default TeamSection;
