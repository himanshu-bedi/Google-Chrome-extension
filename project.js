let inputbtn=document.getElementById("input-btn");
let mylead=[];
let input=document.getElementById("input-txt");
let ulEl=document.getElementById("ulEl");

let para=document.getElementById("para");


// for(let i=0;i<mylead.length;i++)
// {
//     ulEl.innerHTML+="<li>"+ mylead[i] + "</li>";
// }


let fromlocalstorage=JSON.parse(localStorage.getItem("mylead"));
console.log(fromlocalstorage,"this one");

if(fromlocalstorage)
{
    mylead=fromlocalstorage;
    show();
}

let delete_btn=document.getElementById("delete-btn");
delete_btn.addEventListener("click",function clearall()
{
    console.log("cleared");
    localStorage.clear();
    mylead=[];
    show();
}
)


inputbtn.addEventListener("click",()=>{
    // console.log("Button clicked");
    const val=input.value;
    mylead.push(val);
   
    show();
    input.value='';

    localStorage.setItem("mylead",JSON.stringify(mylead));
    console.log(mylead);    

})

function show()
{
    let str="";
    for(let i=0;i<mylead.length;i++)
    {
        str+=`<li>
        <a href="${mylead[i]}" target='_blank'>${mylead[i]} 
        
        </a> 
        </li>`
    }
    ulEl.innerHTML=str;
    
 

}















