var vadaPavPrice = 10;
var maggiPrice = 15;
var pastaPrice = 25;
var gulabJamunPrice = 15;
var samosaPrice = 15;
var vegFriedRicePrice = 40;
var chickenFriedRicePrice = 50;
var rasgullaPrice = 20;
var chickenBiryaniPrice = 60;
var pulavPrice = 30;
var hakkaNoodlesPrice = 35;
var jalebiPrice = 25;
var vegSandwichPrice = 20;
var chickenSandwichPrice = 30;
var dabeliPrice = 20;
var dahiVadaPrice = 25;
var machurianPrice = 15;
var chickenFrankiePrice = 40;
var vegFrankiePrice = 30;

function Increment(num,priceId)
{
    function incrementNum()
    {
        if(document.getElementById(num).innerText.valueOf() >= 0 && document.getElementById(num).innerText.valueOf() < 5)
        {
            let a = document.getElementById(num);
            a.innerHTML++;
            if(a.id === '1')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice += vadaPavPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '2')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice += maggiPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '3')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice += pastaPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '4')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice += gulabJamunPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '11')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice += samosaPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '12')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice += vegFriedRicePrice;
                price.innerText = newPrice;
            }
            else if(a.id === '13')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice += chickenFriedRicePrice;
                price.innerText = newPrice;
            }
            else if(a.id === '14')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice += rasgullaPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '21')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice += chickenBiryaniPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '22')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice += pulavPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '23')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice += hakkaNoodlesPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '24')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice += jalebiPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '31')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice += vegSandwichPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '32')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice += chickenSandwichPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '33')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice += dabeliPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '34')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice += dahiVadaPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '41')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice += machurianPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '42')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice += chickenSandwichPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '43')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice += dabeliPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '44')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice += gulabJamunPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '51')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice += pastaPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '52')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice += chickenFrankiePrice;
                price.innerText = newPrice;
            }
            else if(a.id === '53')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice += vegFrankiePrice;
                price.innerText = newPrice;
            }
            else if(a.id === '54')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice += rasgullaPrice;
                price.innerText = newPrice;
            }
        }
    }
    incrementNum();
}


function Decrement(num,priceId)
{
    function decrementNum()
    {
        if(document.getElementById(num).innerText.valueOf() > 0)
        {
            let a = document.getElementById(num);
            a.innerHTML--;
            if(a.id === '1')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice -= vadaPavPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '2')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice -= maggiPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '3')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice -= pastaPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '4')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice -= gulabJamunPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '11')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice -= samosaPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '12')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice -= vegFriedRicePrice;
                price.innerText = newPrice;
            }
            else if(a.id === '13')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice -= chickenFriedRicePrice;
                price.innerText = newPrice;
            }
            else if(a.id === '14')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice -= rasgullaPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '21')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice -= chickenBiryaniPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '22')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice -= pulavPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '23')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice -= hakkaNoodlesPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '24')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice -= jalebiPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '31')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice -= vegSandwichPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '32')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice -= chickenSandwichPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '33')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice -= dabeliPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '34')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice -= dahiVadaPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '41')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice -= machurianPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '42')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice -= chickenSandwichPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '43')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice -= dabeliPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '44')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice -= gulabJamunPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '51')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice -= pastaPrice;
                price.innerText = newPrice;
            }
            else if(a.id === '52')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice -= chickenFrankiePrice;
                price.innerText = newPrice;
            }
            else if(a.id === '53')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice -= vegFrankiePrice;
                price.innerText = newPrice;
            }
            else if(a.id === '54')
            {
                let price = document.getElementById(priceId);
                let newPrice = parseInt(price.innerText);
                newPrice -= rasgullaPrice;
                price.innerText = newPrice;
            }
        }
    }
    decrementNum();
}
