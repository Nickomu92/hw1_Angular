// Класс с конструктором ToDoItem
export class ToDoItem {
    name: string;
    description: string;
    done: boolean;
    
    // Конструктор
    constructor(name: string, description: string) {
  
        this.name = name;
        this.description = description;
        this.done = false;
    }
}