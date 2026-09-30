import React from 'react';
import { UserCheck } from 'lucide-react';

/**
 * Reusable TeamCard Component
 * Displays leadership profiles, civil engineering qualifications, and roles.
 */
export default function TeamCard({ member }) {
  return (
    <div className="team-card">
      <div className="team-avatar-box">
        <UserCheck size={38} strokeWidth={1.8} />
      </div>

      <h3 className="team-member-name">{member.name}</h3>
      <div className="team-member-role">{member.role}</div>

      <div className="team-member-qual">
        {member.qualification}
      </div>

      <p className="team-member-bio">
        {member.bio}
      </p>
    </div>
  );
}
