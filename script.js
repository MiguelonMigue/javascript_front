window.onload = ("load", ()=>{
    const titulo_principal = document.querySelector(".titulo_principal")
     titulo_principal.addEventListener("click", (e)=>{
    alert("Hiciste click en el título")
    console.log("Hiciste click");
    
    e.preventDefault();
})
})



