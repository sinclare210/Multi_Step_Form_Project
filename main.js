const nextper = document.getElementById("nextper");

const one = document.getElementById("one");

const personalinfo = document.getElementById("personalinfo");

const selectPlanPage = document.getElementById("selectPlanPage");

const goBackSelect = document.getElementById("goBackSelect");

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
