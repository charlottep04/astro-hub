function verifyUser(username, password) {
    return new Promise(function (resolve, reject) {
        if (username === "admin" && password === "1234") {
            resolve("Username et password corrects");
        }
        else {
            reject(new Error("Username ou password incorrect"));
        }
    });
}
verifyUser("admin", "1234")
    .then(function (message) {
    console.log("Pour username = admin : Bienvenue !");
})
    .catch(function (error) {
    console.error("Erreur");
});
verifyUser("fake", "1234")
    .then(function (message) {
    console.log("Bienvenue !");
})
    .catch(function (error) {
    console.error("Pour username = fake : Erreur");
});
