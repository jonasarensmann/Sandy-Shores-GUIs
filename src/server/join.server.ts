import Make from "@rbxts/make";
import { Players } from "@rbxts/services";

Players.PlayerAdded.Connect((player) => {
	Make("BoolValue", {
		Name: "JoinedValue",
		Parent: player,
	});

	const screenGui = Make("ScreenGui", {
		Name: "JoinScreen",
		Parent: player.WaitForChild("PlayerGui"),
		IgnoreGuiInset: true,
	});

	const frame = Make("Frame", {
		Name: "Frame",
		Parent: screenGui,
		BackgroundColor3: Color3.fromRGB(30, 30, 30),
		BorderSizePixel: 0,
		Position: new UDim2(0, 0, 0, 0),
		Size: new UDim2(1, 0, 1, 0),
	});
});
