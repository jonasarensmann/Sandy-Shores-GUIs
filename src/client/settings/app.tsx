import Roact from "@rbxts/roact";
import Container from "../components/container";
import commonModule from "../common";
import { Players } from "@rbxts/services";

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
			></Container>
		</screengui>
	);
}

export default app;
