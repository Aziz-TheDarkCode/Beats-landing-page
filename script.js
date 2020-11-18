      
const herosection=document.querySelector("section")
const blueBeatsimg=document.querySelector("#blue");
const blackBeatsimg=document.querySelector("#black");
const redBeatsimg=document.querySelector("#red")
const currentproduct=document.querySelector(".hero-section-image")
const section=document.querySelector("section")
const btn=document.querySelector(".hero-section-btn")

const blueBeats=
{
    img : blueBeatsimg.src,
    bgcolor : "#2a2e5f",
    color :"white"
}
const blackBeats=
{
    img : blackBeatsimg.src,
    bgcolor : "#0c0c0c",
    color :"white"
}
const redBeats=
{
      img : redBeatsimg.src,
      bgcolor :  " #de3f2d",
      color : "white"
}
blueBeatsimg.addEventListener("click", function()
{
      herosection.style.backgroundColor=blueBeats.bgcolor
      currentproduct.src=blueBeats.img
      section.style.color=blueBeats.color
      btn.classList.add("hero-section-btn-newBg")
})

blackBeatsimg.addEventListener("click", function()
{
      herosection.style.backgroundColor=blackBeats.bgcolor
      currentproduct.src=blackBeats.img
      section.style.color=blueBeats.color
      btn.classList.add("hero-section-btn-newBg")
})
redBeatsimg.addEventListener("click", function()
{
      herosection.style.backgroundColor=redBeats.bgcolor
      currentproduct.src=redBeats.img
      section.style.color=redBeats.color
      btn.classList.add("hero-section-btn-newBg")
})