"use strict";
let myLi = document.querySelectorAll(".header-list-item");
myLi.forEach((el) => {
  el.addEventListener("mouseover", (e) => {
    e.target.style.color = "#fff";
  });
});
myLi.forEach((el) => {
  el.addEventListener("mouseout", (e) => {
    e.target.style.color = "#001a7c";
  });
});

let task_1 = document.querySelector(".but-task-1");
let task_2 = document.querySelector(".but-task-2");
let task_3 = document.querySelector(".but-task-3");
let task_4 = document.querySelector(".but-task-4");
let task_5 = document.querySelector(".but-task-5");
let task_6 = document.querySelector(".but-task-6");
let blockTaskOne = document.querySelector(".main-task-one");
let blockTaskTwo = document.querySelector(".main-task-two");
let blockTaskThree = document.querySelector(".main-task-three");
let blockTaskFour = document.querySelector(".main-task-four");
let blockTaskFive = document.querySelector(".main-task-five");
let blockTaskSix = document.querySelector(".main-task-six");

task_1.addEventListener("click", () => {
  blockTaskOne.style.display = "block";
  blockTaskTwo.style.display = "none";
  blockTaskThree.style.display = "none";
  blockTaskFour.style.display = "none";
  blockTaskFive.style.display = "none";
  blockTaskSix.style.display = "none";
});
task_2.addEventListener("click", () => {
  blockTaskOne.style.display = "none";
  blockTaskTwo.style.display = "block";
  blockTaskThree.style.display = "none";
  blockTaskFour.style.display = "none";
  blockTaskFive.style.display = "none";
  blockTaskSix.style.display = "none";
});
task_3.addEventListener("click", () => {
  blockTaskOne.style.display = "none";
  blockTaskTwo.style.display = "none";
  blockTaskThree.style.display = "block";
  blockTaskFour.style.display = "none";
  blockTaskFive.style.display = "none";
  blockTaskSix.style.display = "none";
});
task_4.addEventListener("click", () => {
  blockTaskOne.style.display = "none";
  blockTaskTwo.style.display = "none";
  blockTaskThree.style.display = "none";
  blockTaskFour.style.display = "block";
  blockTaskFive.style.display = "none";
  blockTaskSix.style.display = "none";
});
task_5.addEventListener("click", () => {
  blockTaskOne.style.display = "none";
  blockTaskTwo.style.display = "none";
  blockTaskThree.style.display = "none";
  blockTaskFour.style.display = "none";
  blockTaskFive.style.display = "block";
  blockTaskSix.style.display = "none";
});
task_6.addEventListener("click", () => {
  blockTaskOne.style.display = "none";
  blockTaskTwo.style.display = "none";
  blockTaskThree.style.display = "none";
  blockTaskFour.style.display = "none";
  blockTaskFive.style.display = "none";
  blockTaskSix.style.display = "block";
});

// ?????????????? 1
/**
 * ?????????????? ?? ???????????????????? (????????, ???????????? ?? ????????????????) ?????????? ???? 0 ???? 10 ????????????????????????.
 */
const taskOne = () => {
  for (let i = 0; i <= 10; i++) {
    if (i == 0) {
      console.log(`${i} - ?????? ????????`);
    } else if (i % 2 == 0) {
      console.log(`${i} - ???????????? ??????????`);
    } else {
      console.log(`${i} - ???????????????? ??????????`);
    }
  }
};

//?????????????? 2

/**
 * ?????????????? ???????????? ???? ?????????????? ???????????????? ??????????????
 */
const taskTwo = () => {
  const post = {
    author: "John", //?????????????? ???????? ??????????
    postId: 23,
    comments: [
      {
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
          likes: 10,
          dislikes: 2, //?????????????? ?????? ??????????
        },
      },
      {
        userId: 5, //?????????????? ?????? ??????????
        userName: "Jane",
        text: "lorem ipsum 2", //?????????????? ???????? ??????????
        rating: {
          likes: 3,
          dislikes: 1,
        },
      },
    ],
  };
  console.log(post.author);
  console.log(post.comments[0].rating.dislikes);
  console.log(post.comments[1].userId);
  console.log(post.comments[1].text);
};

//?????????????? 3
/**
 * ???????? ?????????????? ???? ???????????? 15% (???????????????? ???????????????? ?? ???????????????? price)
 */
const taskThree = () => {
  const products = [
    {
      id: 3,
      price: 200,
    },
    {
      id: 4,
      price: 900,
    },
    {
      id: 1,
      price: 1000,
    },
  ];
  products.forEach((el) => {
    el.price -= (el.price / 100) * 15;
    console.log(el.price);
  });
};

//?????????????? 4
/**
 * ???????????????? ?? ?????????? ???????????? "arrPhotos" ?????? ???????????? ?? ???????????????????????? (photo)
 * ?????????????????? ???????????? ?? ?????????????? ???? ?????????????????????? ???????? (price)
 */
const taskFour = () => {
  const products = [
    {
      id: 3,
      price: 127,
      photos: ["1.jpg", "2.jpg"],
    },
    {
      id: 5,
      price: 499,
      photos: [],
    },
    {
      id: 10,
      price: 26,
      photos: ["3.jpg"],
    },
    {
      id: 8,
      price: 78,
    },
  ];
  const arrPhotos = products.filter((el) => {
    if (el.photos) {
      return el.photos.length > 0;
    }
  });

  products.sort((a, b) => a.price - b.price);

  console.log(arrPhotos);
  console.log(products);
};

//?????????????? 5
/**
 * ?????????????? ?????????? ???? 0 ???? 9 ???? ?????????????????? ???????? ?????????? for
 */
const taskFive = () => {
  for (let i = 0; i < 10; console.log(i++)) {}
};

//?????????????? 6
/**
 * ?????????????? ?????????????? ???? 20 ?????????? "x" c ?????????????? ?????????? for
 */
const taskSix = () => {
  for (let i = 0, x = ""; i < 20; i++) {
    x += "x";
    console.log(x);
  }
};
