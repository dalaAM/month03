
window.onload = function ()
{
    var text = document.getElementById('text');
    var btn = document.getElementById('btn');
    var show = document.getElementById('show');

    btn.onclick = function fun ()
    {
        show.innerText = text.value
    }


}


