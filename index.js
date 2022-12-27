function add(){
    document.getElementById('error').innerHTML="";

    let text=document.getElementById('text').value;
    if(text==""){
        document.getElementById('error').innerHTML="Please enter value";
    }
    else{
        let play=document.getElementById('play');

        let li=document.createElement('li');
        li.textContent=text;
        li.style.marginTop = '22px';

        let a = document.createElement('a');
        a.textContent="Delete";
        a.href="javascript:void(0)";
        a.className="remove";
        li.appendChild(a);

            play.appendChild(li);
    }
    document.getElementById('text').value="";
}

function Clear(){
    document.getElementById('play').remove();
}

let btn=document.querySelector('ol');
btn.addEventListener('click',function(e){
   let play=document.getElementById('play');
   let li=e.target.parentNode;
   play.removeChild(li);
})