import Roact from "@rbxts/roact";
import { useState, withHooks } from "@rbxts/roact-hooked";
import { TweenService } from "@rbxts/services";

interface Props extends Roact.PropsWithChildren {
	Width: number;
	Height: number;
	Position: UDim2;
	State: boolean;
	ToggleFunc: (State: boolean) => void;
}

function toggle({ State, Height, Position, Width, ToggleFunc }: Props) {
	const [state, setState] = useState(State);

	function toggleState(Element: TextButton) {
		setState(!state);

		const BackgroundFrame = Element.Parent?.Parent?.Parent as Frame;

		if (state) {
			TweenService.Create(Element, new TweenInfo(0.1), {
				Position: new UDim2(0, 0, 0.1, 0),
			}).Play();
			TweenService.Create(BackgroundFrame, new TweenInfo(0.1), {
				BackgroundColor3: Color3.fromRGB(100, 0, 0),
			}).Play();
			return;
		}

		TweenService.Create(Element, new TweenInfo(0.1), {
			Position: new UDim2(0.4, 0, 0.1, 0),
		}).Play();
		TweenService.Create(BackgroundFrame, new TweenInfo(0.1), {
			BackgroundColor3: Color3.fromRGB(0, 200, 0),
		}).Play();
	}

	return (
		<frame
			Size={new UDim2(Width, 0, Height, 0)}
			BackgroundColor3={State ? Color3.fromRGB(0, 200, 0) : Color3.fromRGB(100, 0, 0)}
			BackgroundTransparency={1}
			Position={Position}
		>
			<uicorner CornerRadius={new UDim(1, 0)} />
			{/* Profi */}
			<frame BackgroundTransparency={1} Size={new UDim2(0.8, 0, 1, 0)} Position={new UDim2(0.1, 0, 0, 0)}>
				<uistroke Thickness={-1} />
				<uigridlayout
					HorizontalAlignment={"Center"}
					VerticalAlignment={"Center"}
					CellPadding={new UDim2(0.1, 0, 0.1, 0)}
					CellSize={new UDim2(1, 0, 1, 0)}
				/>
				<frame BackgroundTransparency={1} Size={new UDim2(1, 0, 1, 0)}>
					<uistroke Thickness={-1} />
					<textbutton
						Size={new UDim2(0.6, 0, 1, 0)}
						Text={""}
						Position={State ? new UDim2(0.4, 0, 0.1, 0) : new UDim2(0, 0, 0.1, 0)}
						BackgroundColor3={new Color3(1, 1, 1)}
						Event={{
							MouseButton1Click: (Element) => {
								toggleState(Element);
								ToggleFunc(!state);
							},
						}}
					>
						<uicorner CornerRadius={new UDim(1, 0)} />
						<uiaspectratioconstraint AspectRatio={1} />
					</textbutton>
				</frame>
			</frame>
		</frame>
	);
}

export default withHooks(toggle);
