import Roact from "@rbxts/roact";
import App from "./app";
import { Players } from "@rbxts/services";

let RoactTree: Roact.Tree | undefined;

export function mount() {
	const app = Roact.createElement(App);
	RoactTree = Roact.mount(app, Players.LocalPlayer!.FindFirstChildOfClass("PlayerGui")!, "Menu");
}

export function unmount() {
	if (RoactTree !== undefined) {
		Roact.unmount(RoactTree);
		RoactTree = undefined;
	}
}

export default {
	mount,
	unmount,
};
