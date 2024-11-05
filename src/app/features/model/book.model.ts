export interface BookRoot {
    data: Book[]
}
  
export interface Book {
    id: number
    title: string
    type: string
    handle: string
    originallyPublishedIn: string
    collectedIn: string
    notes: string[]
    year: number
    created_at: string
    villains: Villain[]
}
  
export interface Villain {
    name: string
    url: string
}