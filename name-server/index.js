

async function saveName()
{
    let name= document.getElementById('nameInput').value;
    await fetch('http://localhost:3000/save, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name})
      });
      loadNames();
}

async function loadNames()
{
    let res= await fetch('http://localhost:3000/names');
    let names= await res.json();
    let display= document.getElementById('display');
    display.innerHTML= names.map(n=> n.name + '<br>').join('');
}

loadNames();

