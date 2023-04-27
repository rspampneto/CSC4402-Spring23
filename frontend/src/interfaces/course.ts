import { Section } from "./section";
export interface CourseDB {
    id: number;
    con_id: number;
    title: string;
    credit: number;
}

export type Course = {
    id: number;
    con_id: number;
    title: string;
    credit: number;
    sections: Section[]
}