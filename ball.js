

let intervalId=null;
let dir=1;

function start()
{
    if(intervalId) return;
    intervalId= setInterval(move,5);
}

function stop()
{
    clearInterval(intervalId);
    intervalId=null;
}

function move()
{
    const ball= document.getElementById('ball');
    let left= parseInt(ball.style.left)||0;
    let newLeft= left+(5*dir);

    if(newLeft>700)
    {
        dir=-1;
    }
    else if(newLeft<0)
    {
        dir=1;
    }

    ball.style.left= newLeft+'px';
}
