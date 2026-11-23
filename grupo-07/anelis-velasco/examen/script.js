const motionPreference = window.matchMedia("(prefers-reduced-motion: no-preference)");
const hoverCapability = window.matchMedia("(hover: hover)");

function updateMotionStyles() {
    document.documentElement.classList.toggle("motion-enabled", motionPreference.matches);
    document.documentElement.classList.toggle("hover-motion", motionPreference.matches && hoverCapability.matches);
}

updateMotionStyles();
motionPreference.addEventListener("change", updateMotionStyles);
hoverCapability.addEventListener("change", updateMotionStyles);

const menuBtn = document.querySelector("#menuBtn");
const menuOverlay = document.querySelector("#menuOverlay");
const links = [...menuOverlay.querySelectorAll("a")];

function setMenu(open) {
    menuOverlay.classList.toggle("active", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    document.body.style.overflow = open ? "hidden" : "";
    if (open) links[0].focus();
    else menuBtn.focus({ preventScroll: true });
}

menuBtn.addEventListener("click", () => setMenu(!menuOverlay.classList.contains("active")));
menuOverlay.addEventListener("click", event => {
    if (event.target === menuOverlay || event.target.closest("a")) setMenu(false);
});
document.addEventListener("keydown", event => {
    if (!menuOverlay.classList.contains("active")) return;
    if (event.key === "Escape") setMenu(false);
    if (event.key === "Tab" && !event.shiftKey && document.activeElement === links.at(-1)) {
        event.preventDefault();
        menuBtn.focus();
    } else if (event.key === "Tab" && event.shiftKey && document.activeElement === menuBtn) {
        event.preventDefault();
        links.at(-1).focus();
    }
});

for (const video of document.querySelectorAll(".player video")) {
    const player = video.closest(".player");
    const button = player.querySelector("button");
    const status = player.querySelector(".video-status");
    function showUnavailable() {
        status.textContent = "Video no disponible.";
        status.hidden = false;
        button.hidden = true;
        video.controls = false;
    }
    video.querySelector("source").addEventListener("error", showUnavailable);
    button.addEventListener("click", async () => {
        try {
            await video.play();
            button.hidden = true;
            video.controls = true;
        } catch {
            showUnavailable();
        }
    });
}

const cartas = document.querySelectorAll(".collage .carta");

if (cartas.length) {
    const movimientoReducido = window.matchMedia("(prefers-reduced-motion: reduce)");
    let balanceos = [];

    function actualizarBalanceo() {
        balanceos.forEach(animacion => animacion.cancel());
        balanceos = [];
        if (movimientoReducido.matches) return;

        cartas.forEach((carta, indice) => {
            const angulo = parseFloat(getComputedStyle(carta).getPropertyValue("--angulo"));
            const balanceo = carta.animate([
                { transform: `translateY(0) rotate(${angulo - 3}deg)` },
                { transform: `translateY(-1.4vw) rotate(${angulo + 3}deg)` }
            ], {
                duration: 1700 + indice * 180,
                delay: -indice * 650,
                direction: "alternate",
                easing: "ease-in-out",
                iterations: Infinity
            });
            balanceos.push(balanceo);
        });
    }

    actualizarBalanceo();
    movimientoReducido.addEventListener("change", actualizarBalanceo);
}
