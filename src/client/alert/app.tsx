import Roact from "@rbxts/roact";
import Container from "client/components/container";

import { Alert } from "client/types";
interface props {
	Alerts: Array<Alert>;
}

export default function app({ Alerts }: props) {
	return (
		<screengui IgnoreGuiInset ResetOnSpawn={false}>
			<frame Size={new UDim2(0.2, 0, 1, 0)}>
				<uilistlayout FillDirection={Enum.FillDirection.Vertical} SortOrder={Enum.SortOrder.LayoutOrder} />
				{Alerts.map((Alert) => {
					return (
						<Container Size={new UDim2(1, 0, 1, 0)} Title={Alert.title}>
							<textlabel
								Text={`Type: <font color="rgb(20,255,20)">${Alert.type}</font>`}
								RichText
								TextSize={20}
								Size={new UDim2(1, 0, 0.8, 0)}
							/>
							<textlabel
								Text={`Location: <font color="rgb(20,255,20)">${Alert.location}</font>`}
								RichText
								TextSize={20}
								Size={new UDim2(1, 0, 0.8, 0)}
							/>
						</Container>
					);
				})}
			</frame>
		</screengui>
	);
}
