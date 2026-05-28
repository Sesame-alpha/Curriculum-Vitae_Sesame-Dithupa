

```javascript id="sjd82h"
// 3D CARD EFFECT

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .certificate-card, .contact-card"
);

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 18);
        const rotateY = ((centerX - x) / 18);

        card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.04)
        `;
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
        `;
    });

});

// TYPING EFFECT

const titles = document.querySelectorAll(".page-title");

titles.forEach(title => {

    const text = title.innerText;

    title.innerText = "";

    let i = 0;

    function type(){

        if(i < text.length){

            title.innerHTML += text.charAt(i);

            i++;

            setTimeout(type, 60);
        }
    }

    type();
});

// PARALLAX EFFECT

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    document.body.style.backgroundPositionY =
    `${scroll * 0.5}px`;

});

// FLOATING GLOW EFFECT

document.addEventListener("mousemove", (e) => {

    const glow = document.createElement("div");

    glow.style.position = "absolute";
    glow.style.width = "15px";
    glow.style.height = "15px";

    glow.style.borderRadius = "50%";

    glow.style.background =
    "rgba(0,170,255,0.3)";

    glow.style.pointerEvents = "none";

    glow.style.left = e.pageX + "px";
    glow.style.top = e.pageY + "px";

    glow.style.zIndex = "9999";

    document.body.appendChild(glow);

    setTimeout(() => {

        glow.remove();

    }, 400);

});
```
