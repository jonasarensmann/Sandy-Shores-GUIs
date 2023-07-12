import Roact from "@rbxts/roact";
import { useState, withHooks } from "@rbxts/roact-hooked";
import { Players, Workspace } from "@rbxts/services";

function location() {
	const [location, setLocation] = useState("Unknown Location");

	task.spawn(() => {
		const streetNames = Workspace.WaitForChild("StreetNames") as Folder;

		while (task.wait(0.5)) {
			const HumanoidRootPart = Players.LocalPlayer.Character?.WaitForChild("HumanoidRootPart") as Part;
			const ray = new Ray(HumanoidRootPart.Position, new Vector3(0, -10, 0));
			const RayPart = Workspace.FindPartOnRayWithWhitelist(ray, streetNames.GetChildren());
			if (RayPart[0]) setLocation(RayPart[0].Name);
			else setLocation("Unknown Location");
		}
	});

	return (
		<textlabel
			Text={location}
			TextScaled
			TextColor3={Color3.fromRGB(255, 255, 255)}
			Font={Enum.Font.GothamBold}
			TextXAlignment={Enum.TextXAlignment.Left}
			Size={new UDim2(0.7, 0, 0.4, 0)}
			Position={new UDim2(0.3, 0, 0.15, 0)}
			TextTransparency={1}
			BackgroundTransparency={1}
		/>
	);
}

export default withHooks(location);
