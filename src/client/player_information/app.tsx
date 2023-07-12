import Roact from "@rbxts/roact";
import Money from "./money";
import Team from "./team";

function app() {
	return (
		<screengui IgnoreGuiInset ResetOnSpawn={false}>
			<frame BackgroundTransparency={1} Size={new UDim2(0.3, 0, 0.2, 0)} Position={new UDim2(0.73, 0, 0.05, 0)}>
				<uilistlayout
					FillDirection={Enum.FillDirection.Vertical}
					SortOrder={Enum.SortOrder.LayoutOrder}
					Padding={new UDim(0.05, 0)}
				/>
				<Money />
				<Team />
			</frame>
		</screengui>
	);
}

export default app;
