export interface CompanyModel {
    _id: string;
    name: string;
    address: string;
    teams: Team[];
}

export interface Team {
    _id: string;
    name: string;
    location: string;
    teamMembers: TeamMember[];
}

export interface TeamMember {
    _id: string;
    name: string;
    function: string;
    quote: string;
}
