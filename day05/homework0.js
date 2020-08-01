window.onload = function ()
{
    var items = document.getElementsByClassName('items')
    for (let i = 0; i < items.length; i++) {
        items[ i ].onclick = function ()
        {

           
                items[ i ].setAttribute('class', '')
                console.log(i)
            }

        }

    }
}