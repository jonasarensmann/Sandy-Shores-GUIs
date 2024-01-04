import Make from "@rbxts/make";
import { MarketplaceService, ReplicatedStorage, Teams } from "@rbxts/services";

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

const purchaseGamepass = Make("RemoteEvent", {
	Name: "purchaseGamepass",
	Parent: Folder,
});

const deploy = Make("RemoteEvent", {
	Name: "deploy",
	Parent: Folder,
});

purchaseGamepass.OnServerEvent.Connect((player: Player, ...args: unknown[]) => {
	const gamepassId = args[0] as number;
	print(gamepassId);
	MarketplaceService.PromptGamePassPurchase(player, gamepassId);
});

deploy.OnServerEvent.Connect((player: Player) => {
	player.Team = Teams.FindFirstChild("CIVILIAN") as Team;

	player.WaitForChild("JoinedValue").Destroy();

	if (player.FindFirstChild("ArrestSystem")?.FindFirstChild("Prison Time")) {
		const PrisonTime = player.FindFirstChild("ArrestSystem")?.FindFirstChild("Prison Time") as NumberValue;
		if (PrisonTime.Value > 0) {
			player.Team = Teams.FindFirstChild("Arrested") as Team;
		}
	}

	player.LoadCharacter();
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
