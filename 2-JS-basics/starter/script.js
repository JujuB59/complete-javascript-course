/*var firstName = "Julien";
var lastName = "BECUE";
var age = 21;
console.log(firstName);

var metier = prompt("Quel est ton métier ? ")

alert("Tu es un " + metier);

var isMaried = false ;*/


/*var PoidsJohn, TailleJohn, PoidsMark, TailleMark, ImcJohn, ImcMark;

PoidsJohn = 80;
TailleJohn = 1.78;
ImcJohn = PoidsJohn / (TailleJohn * TailleJohn);

PoidsMark = 135;
TailleMark = 1.98;
ImcMark = PoidsMark / (TailleMark * TailleMark);

console.log("L'IMC de John est de : " + ImcJohn + " tandis que celle de Mark est de " + ImcMark);

var isMarkIMCisMoreThanJohn = ImcMark > ImcJohn ;

console.log("Es ce que l'IMC de Mark est plus grande que celle de John ? " + isMarkIMCisMoreThanJohn);*/
/*
var JohnScore1, JohnScore2, JohnScore3, MikeScore1, MikeScore2, MikeScore3, JohnAverage, MarkAverage;

JohnScore1 = 89;
JohnScore2 = 120;
JohnScore3 = 103;

JohnAverage = (JohnScore1 + JohnScore2 + JohnScore3) / 3;

MikeScore1 = 116;
MikeScore2 = 94;
MikeScore3 = 123;

MarkAverage = (MikeScore1 + MikeScore2 + MikeScore3) / 3;

MaryScore1 = 97;
MaryScore2 = 134;
MaryScore3 = 105;

MaryAverage = (MaryScore1 + MaryScore2 + MaryScore3) / 3;

console.log(JohnAverage, MarkAverage, MaryAverage);

if (JohnAverage > MarkAverage && JohnAverage > MaryAverage) { //Si John a une moyenne de Score plus grande
    console.log("John a en moyenne un meilleur score que Mark & Mary");
} else if (MarkAverage > JohnAverage && MarkAverage > MaryAverage) { //Si Mark a une moyenne de Score plus grande
    console.log("Mark a en moyenne un meilleur score que John & Mary");
} else if (MaryAverage > JohnAverage && MaryAverage > MarkAverage) {
    console.log("Mary a en moyenne un meilleur score que John & Mark");
} else {
    console.log("John, Mary et Mark sont en moyenne a égalité !");
}*/

/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

/*var facture = [124, 48, 268] ;

function calculerPourboire(montantFacture){
    var pourboire = montantFacture * 0.2 ;
    if(montantFacture >= 50 && montantFacture < 200){
        pourboire = montantFacture * 0.15 ;
    } else if (montantFacture >= 200) {
        pourboire = montantFacture * 0.10 ;
    }
    return pourboire;
}

var montantPouboire = new Array();
montantPouboire.push(calculerPourboire(facture[0]));
montantPouboire.push(calculerPourboire(facture[1]));
montantPouboire.push(calculerPourboire(facture[2]));

console.log(montantPouboire);

var factureAvecPourboire = new Array();

factureAvecPourboire.push(facture[0] + montantPouboire[0]);
factureAvecPourboire.push(facture[1] + montantPouboire[1]);
factureAvecPourboire.push(facture[2] + montantPouboire[2]);

console.log(factureAvecPourboire);*/

/*****************************
 * CODING CHALLENGE 4
 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/


/*var John = {
    nom: "Smith",
    prenom: "John",
    taille: 1.78,
    poids: 83,
    calcImc: function () {
        this.IMC = this.poids / (this.taille * this.taille);
    }
}

var Mark = {
    nom: "Smith",
    prenom: "Mark",
    taille: 1.78,
    poids: 83,
    calcImc: function () {
        this.IMC = this.poids / (this.taille * this.taille);
    }
}
John.calcImc();
Mark.calcImc();
console.log(John.IMC, Mark.IMC)
if (John.IMC > Mark.IMC) {
    console.log(John.prenom + " a l'IMC la plus grande");
} else if (John.IMC < Mark.IMC) {
    console.log(Mark.prenom + " a l'IMC la plus grande");
} else {
    console.log(John.prenom + " et " + Mark.prenom + " on la même ICM");
}*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var John = {
    nomComplet : "John Smith",
    commande : [124,48,268,180,42],
    calculerPourboire : function(){
        this.pourboire = [];
        this.prixFinal = [];
        for(var i = 0; i < this.commande.length ; i++){
            var pourboire = this.commande[i] * 0.2 ;
            if(this.commande[i] >= 50 && this.commande[i] < 200){
                pourboire = this.commande[i] * 0.15 ;
            } else if (this.commande[i] >= 200) {
                pourboire = this.commande[i] * 0.10 ;
            }
            this.pourboire[i] = pourboire;
            this.prixFinal[i] = pourboire + this.commande[i] ;
        }
    }
}

var Mark = {
    nomComplet : "Mark Miller",
    commande : [77,375,110,45],
    calculerPourboire : function(){
        this.pourboire = [];
        this.prixFinal = [];
        for(var i = 0; i < this.commande.length ; i++){
            var pourboire = this.commande[i] * 0.2 ;
            if(this.commande[i] >= 100 && this.commande[i] < 300){
                pourboire = this.commande[i] * 0.10 ;
            } else if (this.commande[i] >= 300) {
                pourboire = this.commande[i] * 0.25 ;
            }
            this.pourboire[i] = pourboire;
            this.prixFinal[i] = pourboire + this.commande[i] ;
        }
    }
}

var calculerMoyenne = function (tableau){
    var moyenne = 0 ;
    for(var i = 0 ; i < tableau.length; i++){
        moyenne += tableau[i];
    }
    return moyenne / tableau.length ;
}

John.calculerPourboire();
Mark.calculerPourboire();

var markAverageTip, johnAverageTip ;

markAverageTip = calculerMoyenne(Mark.pourboire);
johnAverageTip = calculerMoyenne(John.pourboire);

console.log(Mark.pourboire, markAverageTip, John.pourboire ,johnAverageTip);

if(markAverageTip > johnAverageTip){
    console.log("Mark a en moyenne donné de plus gros tips !");
} else if(johnAverageTip > markAverageTip){
    console.log("John a en moyenne donné de plus gros tips !");
} else {
    console.log("John et Mark donne en moyenne la même somme en tip")
}





