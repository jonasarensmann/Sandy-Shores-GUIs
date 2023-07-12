import Roact from "@rbxts/roact";
import { useState, withHooks } from "@rbxts/roact-hooked";
import { Players } from "@rbxts/services";

function money() {
	const [team, setTeam] = useState("Unknown Team");

	task.spawn(() => {
		while (task.wait(0.1)) {
			setTeam(Players.LocalPlayer.Team?.Name || "Unknown Team");
		}
	});

	return (
		<frame BackgroundTransparency={1} Size={new UDim2(1, 0, 0.15, 0)}>
			<uilistlayout FillDirection={Enum.FillDirection.Horizontal} SortOrder={Enum.SortOrder.LayoutOrder} />
			<frame BackgroundTransparency={1} Size={new UDim2(0.8, 0, 1, 0)}>
				<textlabel
					Text={team}
					TextScaled
					TextColor3={Color3.fromRGB(255, 255, 255)}
					BackgroundTransparency={1}
					Font={Enum.Font.GothamBold}
					TextXAlignment={Enum.TextXAlignment.Right}
					Size={new UDim2(1, 0, 1, 0)}
				/>
				<uipadding PaddingRight={new UDim(0.015, 0)} />
			</frame>
			<frame
				BackgroundTransparency={0.5}
				Size={new UDim2(0.04, 0, 1, 0)}
				BackgroundColor3={Color3.fromRGB(153, 0, 204)}
			>
				<uicorner CornerRadius={new UDim(0.1, 0)} />
				<imagelabel
					Image={"rbxassetid://3926305904"}
					ImageRectOffset={new Vector2(4, 844)}
					ImageRectSize={new Vector2(36, 36)}
					ScaleType={Enum.ScaleType.Fit}
					BackgroundTransparency={1}
					Size={new UDim2(1, 0, 1, 0)}
				/>
			</frame>
		</frame>
	);
}

export default withHooks(money);
