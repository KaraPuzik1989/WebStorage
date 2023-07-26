/*Задание 1
1)
Задать объект с полем name.
Задать переменную, которая будет хранить JSON упомянутого объекта.
Задать переменную, которая будет хранить результат парсинга предыдущей переменной.
2)
Создать переменную user, в которой хранится объект.
Записать переменную в localStorage.
Создать переменную newUser, в которой будет храниться JS объект из localStorage.*/

/*const qwerty = {
    name: "Hulio"
  };
 const json = JSON.stringify(qwerty);
 const parsed = JSON.parse(json);

 const user = {
    name: "Pedro",
    age: 30,
    email: "pedro12345@gmail.com"
  };
  localStorage.setItem("user", JSON.stringify(user));
  const newUser = JSON.parse(localStorage.getItem("user"));
  console.log(newUser);



  /*Задание 2
Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).*/

/*const input = document.getElementById("textInput");
 
document.querySelector(".form").addEventListener("submit", function(event) {
    event.preventDefault();
    const value = input.value;
    if (value !== "") {
      const ul = document.getElementById("myList");
      const li = document.createElement("li");
      li.textContent = value;
      ul.appendChild(li);
      input.value = "";
    }
  })
  

  
/*  Задание 3
Добавить в таск-менеджер сохранение задач между перезагрузками страницы.*/
