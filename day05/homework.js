window.onload = function ()
{
    var btn = document.getElementById('btn');
    var tt = document.getElementById('tt');
    var clear = document.getElementById('clear');
    btn.onclick = function ()
    {
        tt.setAttribute('class', 'red');
    }
    clear.onclick = function ()
    {
        tt.removeAttribute('class');
    }
}

