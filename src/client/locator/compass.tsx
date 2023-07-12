import Roact from "@rbxts/roact";
import { useState, withHooks } from "@rbxts/roact-hooked";
import { Players, Workspace } from "@rbxts/services";

const Directions = {
	South: {
		X: 0,
		Z: 0.955,
	},
	East: {
		X: 0.955,
		Z: 0,
	},
	North: {
		X: 0,
		Z: -0.955,
	},
	West: {
		X: -0.955,
		Z: 0,
	},
};

const About = (p1: number, p2: number) => p1 <= p2 + 0.5 && p2 - 0.5 <= p1;

function Compass() {
	const [direction, setDirection] = useState("W");

	task.spawn(() => {
		while (task.wait(0.1)) {
			const CurrentCamera = Workspace.CurrentCamera as Camera;
			if (
				About(CurrentCamera.CFrame.LookVector.X, Directions.North.X) &&
				About(CurrentCamera.CFrame.LookVector.Z, Directions.North.Z)
			)
				setDirection("N");
			if (
				About(CurrentCamera.CFrame.LookVector.X, Directions.East.X) &&
				About(CurrentCamera.CFrame.LookVector.Z, Directions.East.Z)
			)
				setDirection("E");
			if (
				About(CurrentCamera.CFrame.LookVector.X, Directions.South.X) &&
				About(CurrentCamera.CFrame.LookVector.Z, Directions.South.Z)
			)
				setDirection("S");
			if (
				About(CurrentCamera.CFrame.LookVector.X, Directions.West.X) &&
				About(CurrentCamera.CFrame.LookVector.Z, Directions.West.Z)
			)
				setDirection("W");
		}
	});

	return (
		<textlabel
			Text={direction}
			TextScaled
			TextColor3={Color3.fromRGB(200, 200, 200)}
			Font={Enum.Font.GothamBold}
			Size={new UDim2(0.3, 0, 0.3, 0)}
			Position={new UDim2(0.8, 0, 0.7, 0)}
			TextTransparency={1}
			BackgroundTransparency={1}
		/>
	);
}

export default withHooks(Compass);
