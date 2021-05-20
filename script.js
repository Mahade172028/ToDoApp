function additem(e){
            var node=document.createElement("div");
            node.setAttribute('class','additem');
            var h=document.createElement("h1");
            h.setAttribute('class','hclass');
            h.innerHTML=prompt("Assign your work");
            if(h.innerHTML)
            {
            h.style.color=randomColor();
            node.appendChild(h);
            var btn=document.createElement("button");
            btn.innerHTML="remove";
            btn.style.color="white";
            btn.style.borderRadius="5px";
            btn.style.backgroundColor="red";
            btn.addEventListener('click',function(e){deleteitem(e);});
            node.appendChild(btn);

            var btn2=document.createElement("button");
            btn2.innerHTML="edit";
            btn2.style.margin="2px";
            btn2.style.color="white";
            btn2.style.borderRadius="5px";
            btn2.style.backgroundColor="green";
            btn2.addEventListener('click',function(e){edititem(e);});
            node.appendChild(btn2);

            e.parentNode.appendChild(node);
            }

        }
        function randomColor(){
            var random='#'+Math.floor(Math.random()*16777215).toString(16);
            return random;
        }

        function deleteitem(e){
            e=e.target;
            var temp=e.parentNode;
            e.parentNode.parentNode.removeChild(temp);
        }


        
        function edititem(e){
            e=e.target;
            e=e.previousElementSibling.previousElementSibling;
            var newtxt=prompt("Edit text",e.innerHTML);
            if(newtxt){
            e.innerHTML=newtxt;
            }
        }

    