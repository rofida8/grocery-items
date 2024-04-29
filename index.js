const submit=document.getElementById("submit")
const textItem=document.getElementById("items")
const gridText=document.querySelector("#box")


submit.addEventListener("click", pass)

function pass(){
 let text= document.createElement("p")
 text.classList.add("added_items")
 text.textContent=textItem.value
 gridText.appendChild(text)
 textItem.value=""
 text.addEventListener("mousemove",options)
 

 alert("item is added")

 function options(){    
    let images=document.createElement("img")
    images.src ="delete.png"
    images.classList.add("delet")
    text.appendChild(images)

    let image=document.createElement("img")
    image.src ="edit.png"
    image.classList.add("edit")
    text.appendChild(image)
    text.removeEventListener("mousemove",options)

    images.addEventListener("click",function remove(){ text.textContent="";
      text.classList.remove("added_items");
      textItem.value=""
    })
    image.addEventListener("click",function edit(){ textItem.value=text.textContent;
    })

  }
  
 /*
  let clear= document.createElement("p")
  clear.classList.add("clear")
  clear.textContent="clear list !"
  text.append(clear)
 */
}



