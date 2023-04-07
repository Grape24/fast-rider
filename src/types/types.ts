export interface IRide {
    id: number;
    name: string;
    remaining_tickets: number;
    return_time: string;
    zone: { color: string, id: number, name: string }
}
