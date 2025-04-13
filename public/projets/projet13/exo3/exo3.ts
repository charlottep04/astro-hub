class Calculator{
    calculateSumAsync(a: number, b: number): Promise<number> {
        return new Promise<number>((resolve) => {
            setTimeout(() => {
                resolve(a + b); 
            }, 3000);
        });
    }

    async printSum(a: number, b: number){
        console.log("Calcul en cours...");
        try{
            const result = await this.calculateSumAsync(a, b);
            console.log("Résultat: ", result);
        } catch(error){
            console.error(error.message);
        }
    }
}

class User{
    verifyUser(username: string, password: string): Promise<string>{
        return new Promise<string>((resolve, reject) => {
            if (username === "admin" && password === "1234"){
                resolve("Username et password corrects");
            } else {
                reject(new Error("Username ou password incorrect"));
            }
        })
    }

    async printUser(username: string, password: string){
        try{
            const message = await this.verifyUser(username, password);
            console.log("User correct : Bienvenue !");
        } catch(error){
            console.error("User incorrect : Erreur")
        }
    }
}

const calculator1 = new Calculator();
calculator1.printSum(5, 3);

const user1 = new User();
user1.printUser("admin", "1234");
const user2 = new User();
user2.printUser("fake", "1234");