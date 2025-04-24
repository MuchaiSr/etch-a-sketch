(() => {
    const section = document.querySelector("section");
    const divList = [];

    const sectionWidth = section.offsetWidth;
    const sectionHeight = section.offsetHeight; 
    
    // offsetWidth and offsetHeight: 
    // These properties give you the actual width and height of a container.

    const divChildWidth = 16;
    const divChildHeight = 16;

    const divsAcross = Math.floor(sectionWidth / divChildWidth);
    const divsDown = Math.floor(sectionHeight / divChildHeight); 

    const totalDivs = divsAcross * divsDown

    
    for (let i = 0; i < totalDivs; i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "child");

        divList.push(div);
    }

    divList.forEach((div) => {
        section.appendChild(div);
        div.style.border = "solid 1px black";
        div.addEventListener("mouseover", () => {
            div.classList.add("hovered");
          });
    });

    const promptButton = document.createElement("button");
    promptButton.textContent = "Press me!";
    document.body.appendChild(promptButton);
    document.body.appendChild(section);

    promptButton.addEventListener("click", () => {
        const promptAnswer = prompt("What number of squares per side would you like for a new grid?", 0);
        const numValue = Number(promptAnswer);
        const divList = [];


        if (isNaN(numValue) & promptAnswer !== null){
            alert ("Invalid! Please enter a number.");
            prompt ("What number of squares per side would you like for a new grid?", 0);
        } else if (numValue < 100) {
            function removeDivs() {
                divList.forEach((div) => {
                    section.removeChild(div); // Notice the way the child nodes are removed. 
                    // parent.remove(child) does not exist, but parent.removeChild(child) does.
                });
                divList.length = 0; // Notice how the array is cleared
            }

            removeDivs();

            const divsAcross = numValue;
            const divsDown = numValue;

            const totalDivs = divsAcross * divsDown;

            for (let i = 0; i < totalDivs; i++) {
                const div = document.createElement("div");
                div.setAttribute("class", "child");

                divList.push(div);  
            }

            divList.forEach((div) => {
                section.appendChild(div);
                div.style.border = "solid 1px black";
                div.addEventListener("mouseover", () => {
                    div.classList.add("hovered");
                  });
            });

            localStorage.setItem("gridSettings", numValue);

        } else if (numValue > 100) {
            alert ("ERROR!");
        }
    });

    const savedValue = localStorage.getItem("gridSettings");

    if (savedValue !== null) {
        const divsAcross = savedValue;
        const divsDown = savedValue;

        const totalDivs = divsAcross * divsDown;

        for (let i = 0; i < totalDivs; i++) {
            const div = document.createElement("div");
            div.setAttribute("class", "child");

            divList.push(div);  
        }

        divList.forEach((div) => {
            section.appendChild(div);
            div.style.border = "solid 1px black";
            div.addEventListener("mouseover", () => {
                div.classList.add("hovered");
              });
        });
    }
})();