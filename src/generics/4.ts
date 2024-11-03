//Використання Partial<User>: Цей тип позначає, що всі поля об’єкта User необов’язкові, 
//тому ми можемо передати лише деякі з них(наприклад, лише email і password).

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
// Деякі (або всі) значення за замовчуванням:
    const defaultUser: User = {
        name: '',
        surname: '',
        email: '',
        password: '',
    };
    return { ...defaultUser, ...initialValues };
}

const newUser = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

console.log(newUser);
