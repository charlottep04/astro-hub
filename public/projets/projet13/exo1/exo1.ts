function calculateSumAsync(a: number, b: number): Promise<number> {
    return new Promise<number>((resolve) => {
        setTimeout(() => {
            resolve(a + b); //on résout la promesse avec la somme de a et b
        }, 3000); //on attend 3 secondes avant de résoudre la promesse
    });
}

//La fonction printSum est déclarée comme asynchrone pour pouvoir utiliser await.
async function printSum(a: number, b: number){ 
    console.log("Calcul en cours...");
    // Le bloc try-catch permet de gérer les erreurs potentielles si la promesse est rejetée.
    try {
    //Attend que la promesse retournée par calculateSumAsync soit résolue avant de continuer.
        const result = await calculateSumAsync(a, b); 
        console.log("Résultat: ", result);
    } catch(error) {
        console.error(error.message);
    }
}

//tests
printSum(5, 3); 