// 3D hover effect
document.querySelectorAll(".skill-card, .project-card, .certificate-card, .contact-card")
.forEach(card => {

card.addEventListener("mousemove", (e) => {

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width / 2;
const centerY = rect.height / 2;

const rotateX = (y - centerY) / 15;
const rotateY = (centerX - x) / 15;

card.style.transform =
`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

});

card.addEventListener("mouseleave", () => {
card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
});

});


// smooth scroll glow effect
document.addEventListener("mousemove", (e) => {

const glow = document.createElement("div");

glow.style.position = "absolute";
glow.style.width = "12px";
glow.style.height = "12px";
glow.style.borderRadius = "50%";
glow.style.background = "rgba(255,105,180,0.4)";
glow.style.left = e.pageX + "px";
glow.style.top = e.pageY + "px";
glow.style.pointerEvents = "none";
glow.style.zIndex = "9999";

document.body.appendChild(glow);

setTimeout(() => glow.remove(), 400);

});
