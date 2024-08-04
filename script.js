const Demo=()=>{
    let data=document.getElementById("firstinput").value
    let data1=document.getElementById("selection").value
    let show=document.getElementById("headingone")
    show.innerText="Happy Friendship Day"+data1+" "+data
    if(data=" "){
        alert("please enter ")
    }
}