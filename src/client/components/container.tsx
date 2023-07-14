import { TweenService, UserInputService } from "@rbxts/services";
import Roact from "@rbxts/roact";
import config from "client/config";
import Shadow from "./Shadow";
import commonModule from "client/common";

interface props extends Roact.PropsWithChildren {
	Size: UDim2;
	Position?: UDim2;
	Title: string;
	CloseCallback: (Element?: Frame) => void;
	CornerRadius?: UDim;
	HeaderHeight?: number;
	ZIndex?: number;
	draggable?: boolean;
}

function Container({
	Size,
	Position,
	Title,
	CornerRadius,
	HeaderHeight,
	CloseCallback,
	ZIndex,
	draggable = false,
	[Roact.Children]: children,
}: props) {
	function closeButtonHover(button: TextButton) {
		TweenService.Create(button, new TweenInfo(0.2), { TextColor3: Color3.fromRGB(255, 0, 0) }).Play();
	}

	function closeButtonUnhover(button: TextButton) {
		TweenService.Create(button, new TweenInfo(0.2), { TextColor3: Color3.fromRGB(255, 255, 255) }).Play();
	}

	const FrameRef = Roact.createRef<Frame>();

	task.spawn(() => {
		while (task.wait(0.01)) {
			if (FrameRef.getValue() !== undefined) {
				const Frame = FrameRef.getValue()!;
				commonModule.invisibleChildren(Frame);
				commonModule.fadeIn(Frame);
				break;
			}
		}
	});

	let dragging = false;
	let dragInput: InputObject;
	let dragStart: Vector3;
	let startPos: UDim2;

	const update = (input: InputObject) => {
		const delta = input.Position.sub(dragStart);
		const Frame = FrameRef.getValue() as Frame;
		Frame.TweenPosition(
			new UDim2(startPos.X.Scale, startPos.X.Offset + delta.X, startPos.Y.Scale, startPos.Y.Offset + delta.Y),
			"Out",
			"Linear",
			0.1,
			true,
		);
	};

	task.spawn(() => {
		while (task.wait()) {
			if (!draggable) {
				break;
			}
			if (FrameRef.getValue() !== undefined) {
				const Frame = FrameRef.getValue()!;
				Frame.InputBegan.Connect((input: InputObject) => {
					if (
						input.UserInputType === Enum.UserInputType.MouseButton1 ||
						input.UserInputType === Enum.UserInputType.Touch
					) {
						dragging = true;
						dragStart = input.Position;
						startPos = Frame.Position;

						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						(input.Changed as RBXScriptSignal).Connect(() => {
							if (input.UserInputState === Enum.UserInputState.End) {
								dragging = false;
							}
						});
					}
				});

				Frame.InputChanged.Connect((input: InputObject) => {
					if (
						input.UserInputType === Enum.UserInputType.MouseMovement ||
						input.UserInputType === Enum.UserInputType.Touch
					) {
						dragInput = input;
					}
				});
				break;
			}
		}
	});

	UserInputService.InputChanged.Connect((input: InputObject) => {
		if (input === dragInput && dragging) {
			update(input);
		}
	});

	return (
		<frame
			Size={Size}
			Position={Position}
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BackgroundTransparency={1}
			Ref={FrameRef}
			ZIndex={ZIndex ?? 1}
		>
			<Shadow Small />
			<uigradient Rotation={-90} Color={config.DefaultColorSequence} />
			<uicorner CornerRadius={CornerRadius ?? new UDim(0.15, 0)} />
			<uistroke
				Color={Color3.fromRGB(255, 255, 255)}
				ApplyStrokeMode={"Contextual"}
				LineJoinMode={"Round"}
				Transparency={1}
				Thickness={1}
			/>

			<textlabel
				BackgroundTransparency={1}
				Text={Title}
				Size={new UDim2(0.8, 0, HeaderHeight ?? 0.2, 0)}
				Position={new UDim2(0.1, 0, 0, 0)}
				Font={Enum.Font.SourceSansBold}
				TextTransparency={1}
				TextScaled={true}
				TextColor3={Color3.fromRGB(255, 255, 255)}
			/>

			<textbutton
				Text={"X"}
				BackgroundTransparency={1}
				Size={new UDim2(0.2, 0, HeaderHeight ?? 0.2, 0)}
				Position={new UDim2(0.82, 0, 0, 0)}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextScaled={true}
				TextTransparency={1}
				Font={Enum.Font.SourceSansBold}
				Event={{
					MouseEnter: (Element) => closeButtonHover(Element),
					MouseLeave: (Element) => closeButtonUnhover(Element),
					MouseButton1Click: () => CloseCallback(FrameRef.getValue()),
				}}
			/>
			{children}
		</frame>
	);
}

export default Container;
