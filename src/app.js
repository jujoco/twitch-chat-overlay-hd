/**
 * @class App
 * @method render - Render the task list to the DOM
 */
export default class App {
	constructor() {}

	/**
	 * Initial render the components to the DOM. Should only be called once.
	 * @returns {void}
	 */
	render() {
		const appEl = document.getElementById("app");
		appEl.innerHTML = `<h1>Hello World</h1>`;
	}
}
