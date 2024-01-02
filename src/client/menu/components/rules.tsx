import Roact from "@rbxts/roact";
import { withHooks } from "@rbxts/roact-hooked";
import data from "../data";

function rules() {
	return (
		<scrollingframe
			AutomaticCanvasSize={"Y"}
			Size={new UDim2(1, 0, 1, 0)}
			Position={new UDim2(0, 0, 0, 0)}
			BackgroundTransparency={1}
			BorderSizePixel={0}
			ScrollBarThickness={5}
		>
			<textlabel
				Text={data.rules}
				Size={new UDim2(1, 0, 2.1, 0)}
				Position={new UDim2(0, 0, 0, 0)}
				BackgroundTransparency={1}
				TextSize={20}
				RichText
				TextColor3={Color3.fromRGB(225, 225, 225)}
				TextWrapped
				Font={Enum.Font.Gotham}
				TextXAlignment={Enum.TextXAlignment.Left}
				TextYAlignment={Enum.TextYAlignment.Top}
			/>
		</scrollingframe>
	);
}

export default withHooks(rules);
