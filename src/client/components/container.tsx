import { TweenService } from "@rbxts/services";
import Roact from "@rbxts/roact";
import config from "client/config";

interface props extends Roact.PropsWithChildren {
	Size: UDim2;
	Position: UDim2;
}

function Container({ Size, Position, [Roact.Children]: children }: props) {
	function closeButtonHover(button: TextButton) {
		TweenService.Create(button, new TweenInfo(0.2), { TextColor3: Color3.fromRGB(255, 0, 0) }).Play();
	}

	function closeButtonUnhover(button: TextButton) {
		TweenService.Create(button, new TweenInfo(0.2), { TextColor3: Color3.fromRGB(255, 255, 255) }).Play();
	}

	return (
		<frame Size={Size} Position={Position}>
			<uigradient Rotation={-90} Color={config.DefaultColorSequence} />
			<uicorner CornerRadius={new UDim(0.15, 0)} />
			<uistroke
				Color={Color3.fromRGB(255, 255, 255)}
				ApplyStrokeMode={"Contextual"}
				LineJoinMode={"Round"}
				Thickness={1}
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
