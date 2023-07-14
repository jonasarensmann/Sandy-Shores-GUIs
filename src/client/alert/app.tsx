import Make from "@rbxts/make";
import Roact from "@rbxts/roact";
import { useState, withHooks } from "@rbxts/roact-hooked";
import { ReplicatedStorage } from "@rbxts/services";
import commonModule from "client/common";
import Container from "client/components/container";

import { Alert } from "client/types";

function app() {
	const [alerts, setAlerts] = useState<Array<Alert>>([]);

	const RemoteEvent = ReplicatedStorage.FindFirstChild("GuiEvents")!.FindFirstChild("createAlert") as RemoteEvent;

	RemoteEvent.OnClientEvent.Connect((alertType: string, title: string, location: string) => {
		setAlerts((prev) => {
			if (prev.size() >= 5) {
				prev.shift();
			}
			return prev;
		});
		setAlerts((prev) => {
			return [...prev, { alertType, title, location }];
		});
		const Sound = Make("Sound", {
			SoundId: "rbxassetid://4590656842",
			Volume: 0.5,
			Parent: game.GetService("SoundService"),
		});
		Sound.Play();
		Sound.Ended.Connect(() => {
			Sound.Destroy();
		});
	});
	return (
		<screengui IgnoreGuiInset ResetOnSpawn={false}>
			<frame Size={new UDim2(0.2, 0, 1, 0)} Position={new UDim2(0.01, 0, -0.01, 0)} BackgroundTransparency={1}>
				<uilistlayout
					FillDirection={Enum.FillDirection.Vertical}
					SortOrder={Enum.SortOrder.LayoutOrder}
					VerticalAlignment={Enum.VerticalAlignment.Bottom}
				/>
				{alerts.map((Alert, index) => {
					return (
						<Container
							Size={new UDim2(1, 0, 0.15, 0)}
							Title={Alert.title}
							Key={index}
							CloseCallback={(Element) => {
								commonModule.fadeOut(Element!);
								task.wait(0.5);
								setAlerts((prev) => {
									return prev.filter((_, i) => {
										return i !== index;
									});
								});
							}}
						>
							<textlabel
								BackgroundTransparency={1}
								Text={`Type: <font color="rgb(108, 155, 255)">${Alert.alertType}</font>`}
								RichText
								TextSize={20}
								TextXAlignment={Enum.TextXAlignment.Left}
								TextColor3={Color3.fromRGB(255, 255, 255)}
								Size={new UDim2(0.95, 0, 0.4, 0)}
								Position={new UDim2(0.05, 0, 0.25, 0)}
							/>
							<textlabel
								BackgroundTransparency={1}
								Text={`Location: <font color="rgb(66, 199, 43)">${Alert.location}</font>`}
								RichText
								TextSize={20}
								TextXAlignment={Enum.TextXAlignment.Left}
								TextColor3={Color3.fromRGB(255, 255, 255)}
								Size={new UDim2(0.95, 0, 0.4, 0)}
								Position={new UDim2(0.05, 0, 0.55, 0)}
							/>
						</Container>
					);
				})}
			</frame>
		</screengui>
	);
}

export default withHooks(app);
