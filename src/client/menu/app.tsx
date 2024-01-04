import Roact from "@rbxts/roact";
import { useEffect, useState, withHooks } from "@rbxts/roact-hooked";
import Deploy from "./components/deploy";
import Store from "./components/store";
import Rules from "./components/rules";
import { Lighting, MarketplaceService, Players, StarterGui, Workspace } from "@rbxts/services";
import data from "./data";

function fetchGamepasses() {
	const gamepasses: GamePassProductInfo[] = [];

	data.gamepasses.forEach((gamepassid) => {
		const gamepass = MarketplaceService.GetProductInfo(gamepassid, Enum.InfoType.GamePass);
		gamepasses.push(gamepass);
	});

	return gamepasses;
}

function getRandomSoundId() {
	const soundIds = [1841674849, 1841652056, 9042007403, 1836681667];

	return `rbxassetid://${soundIds[math.floor(math.random(0, soundIds.size()))]}`;
}

function app() {
	const [currentTab, setCurrentTab] = useState<"DEPLOY" | "STORE" | "RULES">("DEPLOY");

	const TabMarkerRef = Roact.createRef<Frame>();

	let TabMarker: Frame;

	task.spawn(() => {
		while (task.wait(0.01)) {
			if (TabMarkerRef.getValue() !== undefined) {
				TabMarker = TabMarkerRef.getValue()!;
				break;
			}
		}
	});

	task.spawn(() => {
		while (task.wait(0.01)) {
			if (!Players.LocalPlayer.Neutral) {
				if (Workspace.CurrentCamera?.CameraType === Enum.CameraType.Scriptable) {
					Workspace.CurrentCamera!.CameraType = Enum.CameraType.Custom;
				}
				break;
			}
			if (Workspace.CurrentCamera !== undefined) {
				Workspace.CurrentCamera!.CameraType = Enum.CameraType.Scriptable;
			}
		}
	});

	task.spawn(() => {
		const Frame = Players.LocalPlayer.WaitForChild("PlayerGui")
			.WaitForChild("JoinScreen")
			.WaitForChild("Frame") as Frame;
		Frame.TweenSize(new UDim2(1, 0, 0, 0), "Out", "Linear", 0.5);

		task.wait(2);

		Frame.Parent!.Destroy();
	});

	const [gamepasses, setGamepasses] = useState<GamePassProductInfo[]>([]);

	useEffect(() => {
		const sound = new Instance("Sound", game.GetService("SoundService"));
		sound.SoundId = getRandomSoundId();
		sound.Volume = 0.2;
		sound.Looped = true;

		const ReverbSoundEffect = new Instance("ReverbSoundEffect", sound);
		ReverbSoundEffect.DecayTime = 0.1;
		ReverbSoundEffect.Density = 1;
		ReverbSoundEffect.Diffusion = 1;
		ReverbSoundEffect.DryLevel = 5;
		ReverbSoundEffect.WetLevel = 0;

		sound.Play();

		const effect = new Instance("DepthOfFieldEffect", Lighting);
		effect.FarIntensity = 0.5;
		effect.FocusDistance = 24.1;
		effect.InFocusRadius = 30;
		effect.NearIntensity = 0;

		const atmosphere = new Instance("Atmosphere", Lighting);
		atmosphere.Color = Color3.fromRGB(100, 100, 100);
		atmosphere.Decay = Color3.fromRGB(0, 0, 0);
		atmosphere.Glare = 0;
		atmosphere.Haze = 4;

		StarterGui.SetCoreGuiEnabled(Enum.CoreGuiType.All, false);

		new Promise((resolve) => {
			resolve(fetchGamepasses());
		}).then((gamepasses: unknown) => {
			const _gamepasses = gamepasses as GamePassProductInfo[];
			setGamepasses(_gamepasses);
		});

		return () => {
			sound.Destroy();

			effect.Destroy();

			atmosphere.Destroy();

			StarterGui.SetCoreGuiEnabled(Enum.CoreGuiType.All, true);

			Workspace.CurrentCamera!.CameraType = Enum.CameraType.Custom;

			Players.LocalPlayer!.Character!.FindFirstChildOfClass("Humanoid")!.WalkSpeed = 16;
		};
	}, []);

	function switchTab(tab: "DEPLOY" | "STORE" | "RULES") {
		setCurrentTab(tab);

		TabMarker.TweenPosition(
			new UDim2(0.2 * (tab === "DEPLOY" ? 0 : tab === "STORE" ? 1 : 2), 0, 0, 0),
			"Out",
			"Linear",
			0.2,
			true,
		);
	}

	return (
		<screengui IgnoreGuiInset={true} ResetOnSpawn={false}>
			<frame Size={new UDim2(0.6, 0, 1, 0)} Position={new UDim2(0.05, 0, 0.03, 0)} BackgroundTransparency={1}>
				<frame Size={new UDim2(1, 0, 0.1, 0)} Position={new UDim2(0, 0, 0.05, 0)} BackgroundTransparency={1}>
					<frame Size={new UDim2(1, 0, 0.9, 0)} Position={new UDim2(0, 0, 0, 0)} BackgroundTransparency={1}>
						<uilistlayout FillDirection={Enum.FillDirection.Horizontal} />
						<textbutton
							Text="DEPLOY"
							Size={new UDim2(0.2, 0, 1, 0)}
							TextColor3={Color3.fromRGB(220, 220, 220)}
							BackgroundTransparency={1}
							Font={Enum.Font.SourceSansBold}
							TextSize={32}
							Event={{
								MouseButton1Click: () => {
									switchTab("DEPLOY");
								},
							}}
						/>
						<textbutton
							Text="STORE"
							Size={new UDim2(0.2, 0, 1, 0)}
							TextColor3={Color3.fromRGB(220, 220, 220)}
							BackgroundTransparency={1}
							Font={Enum.Font.SourceSansBold}
							TextSize={32}
							Event={{
								MouseButton1Click: () => {
									switchTab("STORE");
								},
							}}
						/>
						<textbutton
							Text="RULES/HELP"
							Size={new UDim2(0.2, 0, 1, 0)}
							TextColor3={Color3.fromRGB(220, 220, 220)}
							BackgroundTransparency={1}
							Font={Enum.Font.SourceSansBold}
							TextSize={32}
							Event={{
								MouseButton1Click: () => {
									switchTab("RULES");
								},
							}}
						/>
					</frame>
					<frame
						Size={new UDim2(1, 0, 0.03, 0)}
						Position={new UDim2(0, 0, 0.9, 0)}
						BorderSizePixel={0}
						BackgroundColor3={Color3.fromRGB(200, 200, 200)}
					>
						<frame
							Ref={TabMarkerRef}
							Size={new UDim2(0.2, 0, 1, 0)}
							Position={new UDim2(0, 0, 0, 0)}
							BorderSizePixel={0}
							BackgroundColor3={Color3.fromRGB(255, 255, 255)}
						/>
					</frame>
				</frame>
				<frame Size={new UDim2(1, 0, 0.8, 0)} Position={new UDim2(0, 0, 0.17, 0)} BackgroundTransparency={1}>
					{currentTab === "DEPLOY" ? (
						<Deploy />
					) : currentTab === "STORE" ? (
						<Store gamepasses={gamepasses} />
					) : (
						<Rules />
					)}
				</frame>
			</frame>
		</screengui>
	);
}

export default withHooks(app);
