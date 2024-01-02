import Make from "@rbxts/make";
import { Players } from "@rbxts/services";
import main from "./mountModule";

const OpenTabsEvent = Make("BindableEvent", {
	Name: "OpenTabsEvent",
	Parent: Players.LocalPlayer.WaitForChild("UIEvents"),
});

const CloseTabsEvent = Make("BindableEvent", {
	Name: "CloseTabsEvent",
	Parent: Players.LocalPlayer.WaitForChild("UIEvents"),
});

OpenTabsEvent.Event.Connect(() => {
	main.mount();
});

CloseTabsEvent.Event.Connect(() => {
	main.unmount();
});
