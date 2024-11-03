//Різниця в type і interface полягає тільки в написанню. Для type потрібно =, а interface одразу записується без цього.
//Вказали просто Date, оскільки це вбудований тип для дати в TypeScript.


//---------------------- Через type------------------//
type IPage = {
    title: string;
    likes: number;
    accounts: string[]; //Array<string> також підходить
    status: string;
    details?: {
        createAt: Date;
        updateAt: Date;
    }
}

//---------------------- Або через interface------------------//

interface IPage {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: {
    createAt: Date;
    updateAt: Date;
  };
}


const page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
