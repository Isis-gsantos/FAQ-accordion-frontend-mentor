const questAndAnswers = document.querySelectorAll(".item");

questAndAnswers.forEach(function(item){
    item.addEventListener("click", function(){
        const activeItem = document.querySelector(".active");

        if(activeItem) {
            activeItem.classList.remove("active");
        };

        this.classList.add("active");
    });
});