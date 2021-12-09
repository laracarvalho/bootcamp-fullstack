import axios from "axios";

// Typescript
// 1. Dado as variáveis abaixo, informe a tipagem de cada um para que o código fique correto.
const sequence: number[] = Array.from(Array(10).keys());
const animals: string[] = ['passaro', 'gato', 'cachorro', 'coelho'];
const stringsAndNumbers: (string | number)[] = [1, 'one', 2, 'two', 3, 'three'];

// 2. Crie uma Interface Book para que a função abaixo funcione corretamente. Adicione o parâmetro opcional "author".
interface Book {
    title: string,
    author?: string,
}
function addToLibrary(item: Book) {
    const response = `Adicionado o livro ${item.title} à sua biblioteca.`;
    console.log(response);
}
const book: Book = {
    title: "Harry Potter"
} 
addToLibrary(book);

// 3. Crie uma Função que adicione dinheiro a uma conta de banco. A função deverá receber dois argumentos: o argumento obrigatório money e o argumento opcional message. Caso message esteja presente, mostre uma mensagem avisando que o dinheiro foi adicionado à conta.
class BankAccount {
    private _money: number = 0;

    public addMoney(money: number, message?: string) {
        this._money += money;
        if(!message) {
            console.log("Dinheiro adicionado à conta com sucesso!");
        } else {
            console.log(message);
        }
    }

    get money(){
        return this._money;
    }
}
const user1 = new BankAccount();
user1.addMoney(100);
console.log(user1.money);

// 4. Modifique a função baixo para que ela possa receber vários tipos de dados utilizando seu conhecimento de Generics.
function passValue<T>(value: T): T {
    return value;
}
console.log(passValue("Hello"));
console.log("\n=================================\n");

// Assincronia
// 1. Utilizando fetch(), faça uma requisição a URL abaixo usando async/await para buscar o valor que quiser.
type FoodResponse = { image: string };
async function getPizzaPic() {
    try{
        const url = 'https://foodish-api.herokuapp.com/api/images/pizza';
        const response = await axios.get<FoodResponse>(url);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}
getPizzaPic();

// 2. Crie uma promise que deverá _falhar_, mostrando uma mensagem de erro do reject() a partir do código base abaixo:
function getUser(param: any) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (param) {
                resolve("Promise funcionou");
            } else {
                reject("Promise recusada");
            }
        }, 2000);
    });
}
async function testGetUser() {
    try {
        const user = await getUser(undefined);
        console.log(user);
    } catch (error) {
        console.log("Error:", error);
    }
}
testGetUser();
