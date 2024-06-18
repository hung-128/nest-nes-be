export class BaseTodoDto {
    title: string
    description?: string
    information: {
        detail: string,
        createdAt: Date
    }
 }