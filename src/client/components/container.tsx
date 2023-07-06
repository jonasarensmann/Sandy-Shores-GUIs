import { TweenService } from "@rbxts/services";
import Roact from "@rbxts/roact";
import config from "client/config";
import Shadow from "./Shadow";

interface props extends Roact.PropsWithChildren {
	Size: UDim2;
	Position?: UDim2;
	Title: string;
}

function Container({ Size, Position, Title, [Roact.Children]: children }: props) {
	function closeButtonHover(button: TextButton) {
		TweenService.Create(button, new TweenInfo(0.2), { TextColor3: Color3.fromRGB(255, 0, 0) }).Play();
	}

	function closeButtonUnhover(button: TextButton) {
		TweenService.Create(button, new TweenInfo(0.2), { TextColor3: Color3.fromRGB(255, 255, 255) }).Play();
	}

	return (
		<frame Size={Size} Position={Position}>
			<Shadow Small />
			<uigradient Rotation={-90} Color={config.DefaultColorSequence} />
			<uicorner CornerRadius={new UDim(0.15, 0)} />
			<uistroke
				Color={Color3.fromRGB(255, 255, 255)}
				ApplyStrokeMode={"Contextual"}
				LineJoinMode={"Round"}
				Thickness={1}
			/>

			<textlabel
				Text={Title}
				Size={new UDim2(0.8, 0, 0.1, 0)}
				Position={new UDim2(0.1, 0, 0, 0)}
				Font={Enum.Font.SourceSansBold}
				TextScaled={true}
				TextColor3={Color3.fromRGB(255, 255, 255)}
			/>

			<textbutton
				Text={"X"}
				Size={new UDim2(0.05, 0, 0.05, 0)}
				Position={new UDim2(0.8, 0, 0, 0)}
				TextScaled={true}
				Font={Enum.Font.SourceSansBold}
				Event={{
					MouseEnter: (Element) => closeButtonHover(Element),
					MouseLeave: (Element) => closeButtonUnhover(Element),
				}}
			/>
			{children}
		</frame>
	);
}

export default Container;
