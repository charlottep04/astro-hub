function verifyUser(username: string, password: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        if (username === "admin" && password === "1234"){
            resolve("Username et password corrects");
        } else {
            reject(new Error("Username ou password incorrect"));
        }
    })

}

verifyUser("admin", "1234")
    .then((message) => {
        console.log("Pour username = admin : Bienvenue !");
    })
    .catch((error) => {
        console.error("Erreur")
    })

verifyUser("fake", "1234")
.then((message) => {
    console.log("Bienvenue !");
})
.catch((error) => {
    console.error("Pour username = fake : Erreur")
})