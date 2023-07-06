import Roact from "@rbxts/roact";
import Container from "./components/container";

function app() {
	return (
		<screengui IgnoreGuiInset={true} ResetOnSpawn={false}>
			<Container Size={new UDim2(0.5, 0, 0.5, 0)} Position={new UDim2(0.25, 0, 0.25, 0)} Title="test"></Container>
		</screengui>
	);
}
