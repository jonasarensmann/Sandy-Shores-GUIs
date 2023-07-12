import Roact from "@rbxts/roact";
import Container from "../components/container";
import commonModule from "../common";
import { Players } from "@rbxts/services";
import Location from "./location";
import Compass from "./compass";

function app() {
	return (
		<screengui IgnoreGuiInset ResetOnSpawn={false}>
			<Container
				Size={new UDim2(0.2, 0, 0.15, 0)}
				Position={new UDim2(0.78, 0, 0.83, 0)}
				Title="Location"
				HeaderHeight={0.2}
				CornerRadius={new UDim(0.05, 0)}
				CloseCallback={(Element) => {
					commonModule.fadeOut(Element!);
					task.wait(0.5);
					const Event = Players.LocalPlayer.WaitForChild("UIEvents")?.WaitForChild(
						"CloseLocatorEvent",
					) as BindableEvent;
					Event.Fire();
				}}
			>
				<frame BackgroundTransparency={1} Size={new UDim2(1, 0, 0.8, 0)} Position={new UDim2(0, 0, 0.2, 0)}>
					<uistroke Thickness={-1} />
					<imagelabel
						Image="rbxassetid://4562931890"
						BackgroundTransparency={1}
						Size={new UDim2(0.4, 0, 0.6, 0)}
						Position={new UDim2(0.05, 0, 0.1, 0)}
						ImageTransparency={1}
						ScaleType={Enum.ScaleType.Fit}
					>
						<uiaspectratioconstraint AspectRatio={1} />
						<uistroke
							Color={Color3.fromRGB(255, 255, 255)}
							ApplyStrokeMode={"Contextual"}
							LineJoinMode={"Round"}
							Thickness={1}
						/>
						<uicorner CornerRadius={new UDim(0.15, 0)} />
					</imagelabel>
					<Location />
					<Compass />
				</frame>
			</Container>
		</screengui>
	);
}

export default app;
