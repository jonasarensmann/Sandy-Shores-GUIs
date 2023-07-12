import Roact from "@rbxts/roact";
import Container from "../components/container";
import commonModule from "../common";
import { Lighting, Players } from "@rbxts/services";
import Toggle from "client/components/toggle";

function app() {
	commonModule.open();

	return (
		<screengui IgnoreGuiInset={true} ResetOnSpawn={false}>
			<Container
				Size={new UDim2(0.5, 0, 0.5, 0)}
				Position={new UDim2(0.25, 0, 0.25, 0)}
				Title="Settings"
				HeaderHeight={0.1}
				CornerRadius={new UDim(0.05, 0)}
				CloseCallback={(Element) => {
					commonModule.close();
					commonModule.fadeOut(Element!);
					task.wait(0.5);
					const Event = Players.LocalPlayer.WaitForChild("UIEvents")?.WaitForChild(
						"CloseSettingsEvent",
					) as BindableEvent;
					Event.Fire();
				}}
			>
				<frame
					BackgroundTransparency={1}
					Size={new UDim2(0.95, 0, 0.9, 0)}
					Position={new UDim2(0.025, 0, 0.1, 0)}
				>
					<uistroke Thickness={-1} />
					<uilistlayout SortOrder={Enum.SortOrder.LayoutOrder} />
					<frame BackgroundTransparency={1} Size={new UDim2(1, 0, 0.1, 0)}>
						<uistroke Thickness={-1} />
						<textlabel
							Text="Global Shadows"
							TextScaled
							TextColor3={Color3.fromRGB(255, 255, 255)}
							Font={Enum.Font.GothamBold}
							TextXAlignment={Enum.TextXAlignment.Left}
							TextTransparency={1}
							Size={new UDim2(0.6, 0, 1, 0)}
							BackgroundTransparency={1}
						/>
						<Toggle
							Height={0.8}
							Position={new UDim2(0.7, 0, 0.1, 0)}
							State={Lighting.GlobalShadows}
							Width={0.07}
							ToggleFunc={(State) => (Lighting.GlobalShadows = !Lighting.GlobalShadows)}
						/>
					</frame>
				</frame>
			</Container>
		</screengui>
	);
}

export default app;
