import { Players, TweenService } from "@rbxts/services";

const Fade = async (time: number) => {
	const ScreenGui = new Instance("ScreenGui", Players.LocalPlayer.WaitForChild("PlayerGui"));
	ScreenGui.Name = "Fade";
	ScreenGui.ResetOnSpawn = false;
	ScreenGui.IgnoreGuiInset = true;

	const Frame = new Instance("Frame", ScreenGui);
	Frame.Name = "Frame";
	Frame.BackgroundColor3 = Color3.fromRGB(30, 30, 30);
	Frame.BorderSizePixel = 0;
	Frame.ZIndex = 10000000000;
	Frame.Position = new UDim2(0, 0, 0, 0);
	Frame.Size = new UDim2(1, 0, 0, 0);

	TweenService.Create(Frame, new TweenInfo(0.3), {
		Size: new UDim2(1, 0, 1, 0),
	}).Play();

	task.wait(time);

	TweenService.Create(Frame, new TweenInfo(0.3), {
		Size: new UDim2(1, 0, 0, 0),
		Position: new UDim2(0, 0, 1, 0),
	}).Play();

	task.wait(0.3);

	ScreenGui.Destroy();
};

export default Fade;
