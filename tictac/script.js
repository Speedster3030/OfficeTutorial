

let turn=0;
let move="X";

    document.querySelectorAll('.box').forEach(button =>{
      button.addEventListener('click', function() {
        if(this.textContent=="-")
        {
          if(turn%2==0)
          {
            move="O";
          }
          else
          {
            move="X";
          }
          this.textContent = move; turn++;
        }
      });
    });
