import Roact from "@rbxts/roact";
import { useState, withHooks } from "@rbxts/roact-hooked";
import { Players, TweenService } from "@rbxts/services";
import commonModule from "client/common";
import config from "client/config";

function app() {
	const FrameRef = Roact.createRef<Frame>();

	const [open, setOpen] = useState(false);

	const [TeamChangeUIEnabled, setTeamChangeUIEnabled] = useState(false);

	return (
		<screengui IgnoreGuiInset={true} ResetOnSpawn={false}>
			<frame
				Size={new UDim2(0.17, 0, 0.05, 0)}
				Position={new UDim2(0.957, 0, 0.475, 0)}
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				Ref={FrameRef}
			>
				<uigradient Rotation={-90} Color={config.DefaultColorSequence} />
				<uicorner CornerRadius={new UDim(0.15, 0)} />
				<uistroke
					Color={Color3.fromRGB(255, 255, 255)}
					ApplyStrokeMode={"Contextual"}
					LineJoinMode={"Round"}
					Thickness={1}
				/>
				<frame
					BackgroundTransparency={1}
					Size={new UDim2(0.9, 0, 0.9, 0)}
					Position={new UDim2(0.05, 0, 0.05, 0)}
				>
					<uistroke Thickness={-1} />
					<uilistlayout
						FillDirection={Enum.FillDirection.Horizontal}
						SortOrder={Enum.SortOrder.LayoutOrder}
						VerticalAlignment={Enum.VerticalAlignment.Center}
						Padding={new UDim(0.05, 0)}
					/>
					<imagebutton
						Size={new UDim2(0.2, 0, 1, 0)}
						BackgroundTransparency={1}
						Image={"rbxassetid://8960947384"}
						ScaleType={Enum.ScaleType.Fit}
						Event={{
							MouseButton1Click: (Element) => {
								if (!open) {
									TweenService.Create(FrameRef.getValue()!, new TweenInfo(0.5), {
										Position: new UDim2(0.835, 0, 0.475, 0),
									}).Play();
									setOpen(true);
								} else {
									TweenService.Create(FrameRef.getValue()!, new TweenInfo(0.5), {
										Position: new UDim2(0.957, 0, 0.475, 0),
									}).Play();
									setOpen(false);
								}
							},
							MouseEnter: (Element) => {
								TweenService.Create(Element!, new TweenInfo(0.1), {
									ImageColor3: Color3.fromRGB(150, 150, 150),
								}).Play();
							},
							MouseLeave: (Element) => {
								TweenService.Create(Element!, new TweenInfo(0.1), {
									ImageColor3: Color3.fromRGB(255, 255, 255),
								}).Play();
							},
						}}
					/>
					<imagebutton
						Size={new UDim2(0.2, 0, 1, 0)}
						BackgroundTransparency={1}
						Image={"rbxassetid://12644903835"}
						ScaleType={Enum.ScaleType.Fit}
						Event={{
							MouseButton1Click: () => {
								const CloseEvent = Players.LocalPlayer.WaitForChild("UIEvents")?.FindFirstChild(
									"CloseSettingsEvent",
								) as BindableEvent;
								CloseEvent.Fire();
								const Event = Players.LocalPlayer.WaitForChild("UIEvents")?.FindFirstChild(
									"OpenSettingsEvent",
								) as BindableEvent;
								Event.Fire();
								commonModule.invisibleChildren(FrameRef.getValue()!);
								const SettingsGui = Players.LocalPlayer.FindFirstChild("PlayerGui")?.WaitForChild(
									"Settings",
									0.5,
								) as ScreenGui;
								SettingsGui.Destroying.Connect(() => {
									commonModule.visibleChildren(FrameRef.getValue()!);
								});
							},
							MouseEnter: (Element) => {
								TweenService.Create(Element!, new TweenInfo(0.1), {
									ImageColor3: Color3.fromRGB(150, 150, 150),
								}).Play();
							},
							MouseLeave: (Element) => {
								TweenService.Create(Element!, new TweenInfo(0.1), {
									ImageColor3: Color3.fromRGB(255, 255, 255),
								}).Play();
							},
						}}
					/>
					<imagebutton
						Size={new UDim2(0.2, 0, 1, 0)}
						BackgroundTransparency={1}
						Image={"rbxassetid://12644876918"}
						ScaleType={Enum.ScaleType.Fit}
						Event={{
							MouseButton1Click: () => {
								setTeamChangeUIEnabled(!TeamChangeUIEnabled);
								if (!TeamChangeUIEnabled) {
									const TeamChangeUI = Players.LocalPlayer.FindFirstChild("PlayerGui")?.WaitForChild(
										"TeamChangeUI",
										0.5,
									) as ScreenGui;
									const MainFrame = TeamChangeUI.WaitForChild("mainFrame") as Frame;
									TweenService.Create(MainFrame, new TweenInfo(1), {
										Position: new UDim2(0.5, 0, 0.5, 0),
									}).Play();
								} else {
									const TeamChangeUI = Players.LocalPlayer.FindFirstChild("PlayerGui")?.WaitForChild(
										"TeamChangeUI",
										0.5,
									) as ScreenGui;
									const MainFrame = TeamChangeUI.WaitForChild("mainFrame") as Frame;
									TweenService.Create(MainFrame, new TweenInfo(1), {
										Position: new UDim2(0.5, 0, -0.5, 0),
									}).Play();
								}
							},
							MouseEnter: (Element) => {
								TweenService.Create(Element!, new TweenInfo(0.1), {
									ImageColor3: Color3.fromRGB(150, 150, 150),
								}).Play();
							},
							MouseLeave: (Element) => {
								TweenService.Create(Element!, new TweenInfo(0.1), {
									ImageColor3: Color3.fromRGB(255, 255, 255),
								}).Play();
							},
						}}
					/>
					<imagebutton
						Size={new UDim2(0.2, 0, 1, 0)}
						BackgroundTransparency={1}
						Image={"rbxassetid://12644840819"}
						ScaleType={Enum.ScaleType.Fit}
						Event={{
							MouseButton1Click: () => {
								const CloseEvent = Players.LocalPlayer.WaitForChild("UIEvents")?.FindFirstChild(
									"CloseLocatorEvent",
								) as BindableEvent;
								CloseEvent.Fire();
								const Event = Players.LocalPlayer.WaitForChild("UIEvents")?.FindFirstChild(
									"OpenLocatorEvent",
								) as BindableEvent;
								Event.Fire();
							},
							MouseEnter: (Element) => {
								TweenService.Create(Element!, new TweenInfo(0.1), {
									ImageColor3: Color3.fromRGB(150, 150, 150),
								}).Play();
							},
							MouseLeave: (Element) => {
								TweenService.Create(Element!, new TweenInfo(0.1), {
									ImageColor3: Color3.fromRGB(255, 255, 255),
								}).Play();
							},
						}}
					/>
				</frame>
			</frame>
		</screengui>
	);
}

export default withHooks(app);
