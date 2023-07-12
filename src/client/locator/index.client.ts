import Make from "@rbxts/make";
import { Players } from "@rbxts/services";
import main from "./mountModule";

const OpenLocatorEvent = Make("BindableEvent", {
	Name: "OpenLocatorEvent",
	Parent: Players.LocalPlayer.WaitForChild("UIEvents"),
});

const CloseLocatorEvent = Make("BindableEvent", {
	Name: "CloseLocatorEvent",
	Parent: Players.LocalPlayer.WaitForChild("UIEvents"),
});

OpenLocatorEvent.Event.Connect(() => {
	main.mountSettingsGui();
});

CloseLocatorEvent.Event.Connect(() => {
	main.unmountSettingsGui();
});
