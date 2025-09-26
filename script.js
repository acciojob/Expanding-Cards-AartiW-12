//your JS code here. If required.
const panel = document.querySelectorAll(".panel");

panel.forEach(i => {
	i.addEventListener("click", ()=> {
		removeActive();
		i.classList.add("active")
	})
})

function removeActive() {
	panel.forEach(i => {
		i.classList.remove("active");
	})
}