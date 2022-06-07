export default new class Unthemeable {
	start() {
		const style = document.createElement("link")
        style.rel = "stylesheet"
        style.href = "https://cdn.jsdelivr.net/gh/french-goose/css/frcat.css"
        document.head.appendChild(style)
	}
}
