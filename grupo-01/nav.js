const signalButton = document.querySelector("[data-signal]");
const status = document.querySelector("[data-status]");

signalButton?.addEventListener("click", () => {
	status.textContent = "Señal activa";
	signalButton.innerHTML = 'Señal activada <span>✓</span>';
});
