import Make from "@rbxts/make";
import { Players } from "@rbxts/services";
import main from "./mountModule";

const OpenMenuEvent = Make("BindableEvent", {
	Name: "OpenMenuEvent",
	Parent: Players.LocalPlayer.WaitForChild("UIEvents"),
});

const CloseMenuEvent = Make("BindableEvent", {
	Name: "CloseMenuEvent",
	Parent: Players.LocalPlayer.WaitForChild("UIEvents"),
});

OpenMenuEvent.Event.Connect(() => {
	main.mount();
});

CloseMenuEvent.Event.Connect(() => {
	main.unmount();
});

// Only mount the menu if the player has joined the game not if they are respawning
if (Players.LocalPlayer.FindFirstChild("JoinedValue") !== undefined) {
	main.mount();

	Players.LocalPlayer.WaitForChild("JoinedValue").Destroy();
}
