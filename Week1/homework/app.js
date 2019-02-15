'use strict';

{
  const bookTitles = [
    // Replace with your own book titles
    'physics',
    'chemistry',
    'computer_science',
    'OOP',
    'math',
    'java',
    'visual_programming',
    'computer_graphics',
    'C language',
    'compiler_construction'
  ];

  const rootDiv = document.getElementById('root');

  function generateList(arr) {
    const list = document.createElement('ul');
    rootDiv.appendChild(list);

    for (let i = 0; i < arr.length; i++) {
      const listItems = document.createElement('li');
      listItems.setAttribute('id', arr[i]);
      listItems.innerText = arr[i];
      list.appendChild(listItems);
    }
  }

  const booksData = {
    physics: {
      title: 'physics',
      language: 'english'
    },
    chemistry: {
      title: 'chemistry',
      language: 'english'
    },
    computer_science: {
      title: 'computer science'
    },
    java: {
      title: 'java',
      language: 'english'
    },
    OOP: {
      title: 'Object Oriented programming',
      language: 'english'
    },

    visual_programming: {
      title: 'visual programming',
      language: 'english'
    },

    compiler_construction: {
      title: 'compiler-construction',
      language: 'english'
    },

    c_language: {
      title: 'c_language',
      language: 'english'
    },

    computer_graphics: {
      title: 'computer graphics',
      language: 'english'
    },

    math: {
      title: 'Mathematics',
      language: 'english'
    }
  };

  function generateListModification(obj) {
    const list = document.createElement('ul');
    rootDiv.appendChild(list);

    for (let i = 0; i < Object.keys(obj).length; i++) {
      const listItem = document.createElement('li');

      listItem.setAttribute('id', Object.keys(obj)[i]);
      list.appendChild(listItem);

      const listTitle = document.createElement('h2');
      listTitle.innerText = 'Title: ' + obj[Object.keys(obj)[i]].title;
      list.appendChild(listTitle);

      const listLanguage = document.createElement('h3');
      listLanguage.innerText = 'Language: ' + obj[Object.keys(obj)[i]].language;
      list.appendChild(listLanguage);
    }
  }
  generateListModification(booksData);

  const bookCovers = {
    physics: './img/physics.jpg',
    chemistry: './img/chemistry.jpg',
    math: './img/math.jpg',
    compiler_construction: './img/compiler construction.jpg',
    computer_graphics: './img/computer_graphics.jpg',
    computer_science: './img/computer_science.jpg',
    c_language: './img/c_language.jpg',
    visual_programming: './img/visual programming.jpg',
    OOP: './img/oop.jpg',
    java: './img/java.jpg'
  };

  function viewImages(obj) {
    for (let i = 0; i < Object.keys(obj).length; i++) {
      const test = document.getElementById(Object.keys(obj)[i]);
      const picture = document.createElement('img');
      picture.setAttribute('src', obj[Object.keys(obj)[i]]);
      picture.setAttribute('alt', 'books cover');
      picture.setAttribute('class', 'bookCovers');

      test.appendChild(picture);
    }
  }
  viewImages(bookCovers);
  // eslint-disable-next-line prettier/prettier
}