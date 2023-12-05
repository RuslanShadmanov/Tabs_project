const tabs = document.querySelectorAll(".tab");

const articles = document.querySelectorAll("article");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    currentTab = event.target;
    currentTab.classList.add("active");

    for(let j =0 ; j<tabs.length; j++){
      if(tabs[j]!==currentTab){
        tabs[j].classList.remove("active")
      }

    }

    for (let k = 0; k<articles.length; k++){
      if (articles[k].id === currentTab.innerText.toLowerCase()){
        articles[k].style.display="block"
        
      }
      else {
        articles[k].style.display="none"
      }
    }


  });


}