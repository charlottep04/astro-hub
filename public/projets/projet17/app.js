//attendre que le DOM soit chargé
window.onload = function () {
    new MyFormManager();
};
var MyFormManager = /** @class */ (function () {
    function MyFormManager() {
        this.myForm = document.getElementById("myForm");
        this.nameInput = document.getElementById("name");
        this.result = document.getElementById("result");
        this.isStudent = document.getElementById("isStudent");
        //ici le bind est nécessaire pour que la méthode handleSubmit
        //ait accès à l'objet courant, sinon this vaudrait l'élément
        //qui a déclenché l'événement (ici le formulaire et non l'objet MyFormManager)
        this.myForm.addEventListener("submit", this.handleSubmit.bind(this));
    }
    MyFormManager.prototype.handleSubmit = function (event) {
        // empêcher le navigateur de soumettre le formulaire
        // ceci empêche le rechargement de la page
        event.preventDefault();
        var name = this.nameInput.value;
        if (name.length < 4) {
            this.result.style.color = "red";
            this.result.textContent = "Name must be at least 4 characters long.";
        }
        else {
            this.result.style.color = "green";
            if (this.isStudent.checked) {
                this.result.textContent = "Name Ok: ".concat(name, ", you are a student");
            }
            else {
                this.result.textContent = "Name Ok: ".concat(name, ", you are not a student");
            }
        }
    };
    return MyFormManager;
}());
