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

createAlertBinding.Event.Connect((player: Player | Team | "all", title: string, alertType: string, message: string) => {
	if (player === "all") {
		createAlert.FireAllClients(alertType, title, message);
	} else if (player.IsA("Team")) {
		player.GetPlayers().forEach((plr) => {
			createAlert.FireClient(plr, alertType, title, message);
		});
	} else {
		createAlert.FireClient(player, alertType, title, message);
	}
});
