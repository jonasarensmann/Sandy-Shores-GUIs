import Make from "@rbxts/make";
import { Players } from "@rbxts/services";

Players.PlayerAdded.Connect((player) => {
	Make("BoolValue", {
		Name: "JoinedValue",
		Parent: player,
	});
});
