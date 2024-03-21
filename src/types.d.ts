export type Level = 'Dificil'| 'Intermedio' | 'Fácil'

export interface TaskEntry {
    id: number,
    name: name,
    date: string,
    level: Level,
    description : string
}