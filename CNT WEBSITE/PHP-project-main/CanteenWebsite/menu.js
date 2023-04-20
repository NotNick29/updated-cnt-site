function Increment(num)
{
    function incrementNum()
    {
        if(document.getElementById(num).innerText.valueOf() >= 0 && document.getElementById(num).innerText.valueOf() < 5)
        {
            let a = document.getElementById(num);
            a.innerHTML++;
        }
    }
    incrementNum();
}

function Decrement(num)
{
    function incrementNum()
    {
        if(document.getElementById(num).innerText.valueOf() > 0)
        {
            let a = document.getElementById(num);
            a.innerHTML--;
        }
    }
    incrementNum();
}