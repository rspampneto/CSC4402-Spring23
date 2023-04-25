import { Section } from "./section";
export interface Course {
    id: number;
    con_id: number;
    title: string;
    credit: number;
    sections: Array<Section>;
}