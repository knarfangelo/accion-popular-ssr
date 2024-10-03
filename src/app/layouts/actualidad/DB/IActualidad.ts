import { SafeHtml } from "@angular/platform-browser";

export interface IActualidad {
    id: string,
    imageUrl: string,
    date: string,
    title: string,
    description: string,
    content?: string
}