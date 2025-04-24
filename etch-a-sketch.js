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
    });
})();