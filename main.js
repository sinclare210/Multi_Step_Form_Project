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

const onlineprice = document.getElementById("onlineprice");

const largeprice = document.getElementById("largeprice");

const themeprice = document.getElementById("themeprice");

const clickdivs = document.querySelectorAll(".clickdiv");

const finh1 = document.getElementById("finh1");

const finh1price = document.getElementById("finh1price");

const firstaddonh1 = document.getElementById("firstaddonh1");

const p1 = document.getElementById("p1");

const p2 = document.getElementById("p2");

const p3 = document.getElementById("p3");

const secondaddonh1 = document.getElementById("secondaddonh1");

const thirdaddonh1 = document.getElementById("thirdaddonh1");

const change = document.getElementById("change");

const total = document.getElementById("total");

change.addEventListener("click", () => {
    finishingup.classList.add("hidden");
    selectPlanPage.classList.remove("hidden");
})

let previousDiv = null;

clickdivs.forEach((clickdiv) => {
    clickdiv.addEventListener("click", () => {
        if(previousDiv){
              previousDiv.classList.remove('bg-Pastelblue');
            previousDiv.classList.add('hover:ring-Pastelblue', 'hover:border-0', 'hover:bg-Alabaster');
        }
         clickdiv.classList.remove('hover:ring-Pastelblue', 'hover:border-0', 'hover:bg-Alabaster');
          clickdiv.classList.add('bg-Pastelblue');


          previousDiv = clickdiv;
          finh1.textContent = clickdiv.querySelector("h3").textContent+"(monthly)"; 
           finh1price.textContent = clickdiv.querySelector("p").textContent; 

          togglecheckbox.addEventListener("change", (event) => {
    if (event.target.checked) {
         finh1.textContent = clickdiv.querySelector("h3").textContent+"(yearly)";
          finh1price.textContent = clickdiv.querySelector("p").textContent;
          total.textContent = "Total(per year)"

    }else{
            finh1.textContent = clickdiv.querySelector("h3").textContent+"(monthly)";  
             finh1price.textContent = clickdiv.querySelector("p").textContent;
              total.textContent = "Total(per month)"
    }
})


        
         
         
    })
})



       



 togglecheckbox.addEventListener("change", (event) => {
    if (event.target.checked) {
        arcadeprice.textContent = "$90/yr";
        advanceprice.textContent = "$120/yr";
        proprice.textContent = "$150/yr";
        onlineprice.textContent = "$10/yr";
        largeprice.textContent = "$20/yr";
        themeprice.textContent = "$20/yr";


    }else{
                arcadeprice.textContent = "$9/mo";
        advanceprice.textContent = "$12/mo";
        proprice.textContent = "$15/mo";
        onlineprice.textContent = "$1/mo";
        largeprice.textContent = "$2/mo";
        themeprice.textContent = "$2/mo";
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

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const clickrs = document.querySelectorAll(".clickr");

// checkboxes.forEach(checkbox => {
//     checkbox.addEventListener("change", (event) =>{
//        if(event.target.checked == true){
//         console.log(event)
//         clickrs.forEach((clickr) => {

//         })
//        }else{
//         console.log("ok")
//        }
       
        
        
//     })
// })
// Select all checkboxes


// Iterate over each checkbox
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", (event) => {
        const checkbox = event.target;
        const parentDiv = checkbox.closest('.clickr'); // Find the closest parent div with class 'clickr'

        if (checkbox.checked) {
            console.log('Checkbox checked:', event);
            if (parentDiv) {
                parentDiv.style.backgroundColor = ' hsl(231, 100%, 99%)'; 
                parentDiv.style.borderColor = "hsl(228, 100%, 84%)";
                firstaddonh1.textContent = parentDiv.querySelector('#onl h1').textContent.trim();
                p1.textContent = parentDiv.querySelector("#onl #onlineprice").textContent.trim();
                p2.textContent = parentDiv.querySelector("#lar #largeprice").textContent.trim();
                secondaddonh1.textContent = parentDiv.querySelector('#lar h1').textContent.trim();
                thirdaddonh1.textContent = parentDiv.querySelector('#cus h1').textContent.trim();

            }
        } else {
            console.log('Checkbox unchecked');
            if (parentDiv) {
                parentDiv.style.backgroundColor = ''; 
                parentDiv.style.borderColor = "";
            }


        }

    });
});


