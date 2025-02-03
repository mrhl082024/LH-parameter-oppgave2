

/* Funksjon for å generere et array av pr */
const randomProducts = () =>
{
    const productArr = [];
    const randomNum = Math.ceil(Math.random() * 100);
    for (let i = 0; i < randomNum; i++)
    {
        productArr.push(
            {
                cost: Math.ceil(Math.random()*100),
                ammount: Math.ceil(Math.random()*10)
            }
        )
    }
    return productArr;
}

const products = randomProducts();
console.log(products);

/* Her mangler vi en funksjon som kan ta inn produktene, og et potensielt avslag, og så returnere totalsummen av alle produktene (cost * ammount). */

/* Som sist har du kun lov å legge til din egen funksjon, den skal ikke lese av noen globale verdier, den skal kun ta i mot products som parameter, og ta inn en potensiel discount verdi. 
    Her må du også skjekke at discount ikke er mindre enn 0, og ikke større enn 100. 
*/

/* Her er et pseudokode hint:
    funksjon totalsum skal ta inn products og et avslag med defaultverdi 0
    for hver produkt i products, legg til resultatet av cost * ammount * (100 - avslag)/100 
    returner totalsum
*/

//!!Skriv inn funksjonen din totalSum her:


/* Her ser du at vi forventer en funksjon som tar inn produktet, og et potensielt avlag, or returnerer totalkostnadden av alle produktene.  */
console.log(totalSum(products));
console.log(totalSum(products, 15))