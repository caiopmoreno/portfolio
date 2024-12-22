const seeMore = document.getElementById("see-more")
const description = document.getElementById("description")

seeMore.addEventListener('click', function(){

  switch (seeMore.innerHTML){
    case "Ver mais":
      seeMore.innerHTML = "Ver menos"
      description.classList.remove("firstLine")
      break
    case "Ver menos":
      description.classList.add("firstLine")
      seeMore.innerHTML = "Ver mais"
      break
  }
})