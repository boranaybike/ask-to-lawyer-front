import { Offer } from "../offer";
import { Comment } from "../comment";

export interface ILawyerModel {
    id: string;
    FirstName: string | null;
    LastName: string | null;
    Email: string | null;
    Phone: string | null;
    Password: string | null;
    BarNo: number | null;
    Bar: string | null;
    Bio: string | null;
    Education: string | null;
    ExperienceDate: Date | null;
    Category: string | null;
    AverageResponseTime: number | null;
    AverageRate: number | null;
    Comments: Comment[] | null;
    Offers: Offer[] | null;
}
