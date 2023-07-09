import Make from "@rbxts/make";
import { Players } from "@rbxts/services";
import main from "./mountModule";

const OpenSettingsEvent = Make("BindableEvent", {
	Name: "OpenSettingsEvent",
	Parent: Players.LocalPlayer.WaitForChild("UIEvents"),
});

const CloseSettingsEvent = Make("BindableEvent", {
	Name: "CloseSettingsEvent",
	Parent: Players.LocalPlayer.WaitForChild("UIEvents"),
});

OpenSettingsEvent.Event.Connect(() => {
	main.mountSettingsGui();
});

CloseSettingsEvent.Event.Connect(() => {
	main.unmountSettingsGui();
});
