import { Component, OnInit } from '@angular/core';
// Импортируем класс ToDoItem
import { ToDoItem } from '../to-do-item';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})

export class ToDoItemsComponent implements OnInit {
    name: string = "";
    description: string = "";
    
    // Начальный список заданий, который будет выводиться на страницу
    items: ToDoItem[] = [
        { name: "Выполнить ДЗ №1 с дисциплины 'Создание веб-приложений с использованием Angular и React'", description:"Тема 'Angular: основы', создать новый компонент", done: true },
        { name: "Спать", description:"Нужно отдохнуть, после выполненного ДЗ", done: true },
        { name: "Кушать", description:"Завтрак, нужно подкрепиться перед выполнением ДЗ", done: false },
        { name: "Выполнить ДЗ №1 с дисциплины 'Создание web–приложений, исполняемых на стороне сервера при помощи языка программирования PHP и технологии AJAX'", description:"Тема 'Базы данных  и работа с MySQL', создать тренировочный сайт турфирмы", done: false },
    ];

  // Метод добавления в список items
  addItem(name: string, description: string): void {
    // Если поля пустые, то выходим
    if(name == null || name.trim() == "" || description == null|| description.trim() == "")
        return;
    // Иначе - добавляем в список
    this.items.push(new ToDoItem(this.name, this.description));
  }

  title = "Таблица заданий (дочерний компонент)";
  ngOnInit() {
  }
}
