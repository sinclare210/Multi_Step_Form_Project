const nextper = document.getElementById("nextper");

const one = document.getElementById("one");

const personalinfo = document.getElementById("personalinfo");

const selectPlanPage = document.getElementById("selectPlanPage");

const goBackSelect = document.getElementById("goBackSelect");

const nextselect = document.getElementById("nextselect");

const pickaddon = document.getElementById("pickaddon");

const three = document.getElementById("three");

const four = document.getElementById("four");

const nextpick = document.getElementById("nextpick");

const gopick = document.getElementById("gopick");

const finishingup = document.getElementById("finishingup");

const gofin = document.getElementById("gofin");

const two = document.getElementById("two")

const confirm = document.getElementById("confirm");

const lastpage = document.getElementById("lastpage");


nextper.addEventListener("click", () => {
    one.classList.remove("bg-Lightblue");
    two.classList.add("bg-Lightblue");
    personalinfo.classList.add("hidden");
    selectPlanPage.classList.remove("hidden");
})

goBackSelect.addEventListener("click", () => {
    one.classList.add("bg-Lightblue");
    two.classList.remove("bg-Lightblue");
    personalinfo.classList.remove("hidden");
    selectPlanPage.classList.add("hidden");

})

nextselect.addEventListener("click", () => {
      selectPlanPage.classList.add("hidden");
      pickaddon.classList.remove("hidden");
       two.classList.remove("bg-Lightblue");
       three.classList.add("bg-Lightblue");
})

gopick.addEventListener("click", () => {
        pickaddon.classList.add("hidden");
        selectPlanPage.classList.remove("hidden");
        two.classList.add("bg-Lightblue");
       three.classList.remove("bg-Lightblue");
})

nextpick.addEventListener("click", () => {
      pickaddon.classList.add("hidden");
    finishingup.classList.remove("hidden");
    three.classList.remove("bg-Lightblue");
    four.classList.add("bg-Lightblue");
    


})

gofin.addEventListener("click", () =>{
    finishingup.classList.add("hidden");
     pickaddon.classList.remove("hidden");
     three.classList.add("bg-Lightblue");
    four.classList.remove("bg-Lightblue");

})

confirm.addEventListener("click", () => {
      finishingup.classList.add("hidden");
        lastpage.classList.remove("hidden");

})




