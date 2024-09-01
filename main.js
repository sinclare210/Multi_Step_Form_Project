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

const namee = document.getElementById("name");

const email = document.getElementById("email");

const number = document.getElementById("number");

const feina = document.getElementById("feina");

const feiema = document.getElementById("feiema");

const feinom = document.getElementById("feinom");

const togglecheckbox = document.getElementById("togglecheckbox");

const arcadeprice = document.getElementById("arcadeprice");

const advanceprice = document.getElementById("advanceprice");

const proprice = document.getElementById("proprice");




 togglecheckbox.addEventListener("change", (event) => {
    if (event.target.checked) {
        arcadeprice.textContent = "$90/yr";
        advanceprice.textContent = "$120/yr";
        proprice.textContent = "$150/yr";

    }else{
                arcadeprice.textContent = "$9/mo";
        advanceprice.textContent = "$12/mo";
        proprice.textContent = "$15/mo";
    }
})



const validateInputs = () => {
    return namee.value.trim() !== "" && email.value.trim() !== "" && number.value.trim() !== "";
};


nextper.addEventListener("click", () => {
    if (validateInputs()) {
        // Only go to the next page if all inputs are filled
        one.classList.remove("bg-Lightblue");
        two.classList.add("bg-Lightblue");
        personalinfo.classList.add("hidden");
        selectPlanPage.classList.remove("hidden");
        feina.classList.add("hidden");
        feiema.classList.add("hidden");
        feinom.classList.add("hidden");
    } else {
        if(namee.value.trim() == ""){
            feina.classList.remove("hidden")
        }
        if(email.value.trim() == ""){
            feiema.classList.remove("hidden");
        }
        if(number.value.trim() == ""){
            feinom.classList.remove("hidden");
        }
    }
});

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