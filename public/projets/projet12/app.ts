class Calculatrice {
  diviser(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division par zéro n'est pas autorisée");
    }
    return a / b;
  }

  essayerDivision(a: number, b: number) {
    try {
      console.log(this.diviser(a, b));
    } catch (e) {
      console.error(e.message);
    } finally {
      console.log("Fin de la tentative de division.");
    }
  }
}

const calc = new Calculatrice();
calc.essayerDivision(10, 0);

//deuxième exemple

class Convertisseur {
  convertirEnNombre(input: string): number {
    const resultat = Number(input);
    if (isNaN(resultat)) {
      throw new Error(`'${input}' ne peut pas être converti en nombre`);
    }
    return resultat;
  }

  essayerConversion() {
    try {
      console.log(this.convertirEnNombre("123"));
      console.log(this.convertirEnNombre("abc"));
    } catch (e) {
      console.error(e.message);
    } finally {
      console.log("Fin de la tentative de conversion.");
    }
  }
}

const convertisseur = new Convertisseur();
convertisseur.essayerConversion();
