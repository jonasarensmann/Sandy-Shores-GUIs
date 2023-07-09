import Make from "@rbxts/make";
import { ReplicatedStorage } from "@rbxts/services";

const Folder = Make("Folder", {
	Name: "GuiEvents",
	Parent: ReplicatedStorage,
});

const createAlert = Make("RemoteEvent", {
	Name: "createAlert",
	Parent: Folder,
});

const createAlertBinding = Make("BindableEvent", {
	Name: "createAlertBinding",
	Parent: Folder,
});

createAlertBinding.Event.Connect((player: Player | "all", alertType: string, title: string, message: string) => {
	if (player !== "all") createAlert.FireClient(player, alertType, title, message);
	else createAlert.FireAllClients(alertType, title, message);
});
