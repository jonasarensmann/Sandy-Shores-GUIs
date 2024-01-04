import Make from "@rbxts/make";
import { Players, ReplicatedStorage, Workspace } from "@rbxts/services";
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
do {
	task.wait(2);
} while (!game.IsLoaded());

if (Players.LocalPlayer.FindFirstChild("JoinedValue") !== undefined) {
	while (task.wait(0.5)) {
		if (Players.LocalPlayer.Character === undefined) continue;
		if (Workspace.CurrentCamera === undefined) continue;
		if (Workspace.CurrentCamera.CFrame === undefined) continue;

		const Humanoid = Players.LocalPlayer!.Character!.FindFirstChildOfClass("Humanoid");

		if (Humanoid === undefined) continue;

		Workspace.CurrentCamera!.CameraType = Enum.CameraType.Scriptable;
		try {
			Workspace.CurrentCamera!.CFrame = (Workspace.FindFirstChild("camera part") as Part).CFrame;
		} catch (e) {
			continue;
		}

		Humanoid.WalkSpeed = 0;

		main.mount();

		break;
	}
}
