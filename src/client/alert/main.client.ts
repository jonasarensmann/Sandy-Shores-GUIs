import Roact from "@rbxts/roact";
import { Players, ReplicatedStorage } from "@rbxts/services";
import app from "./app";
import { Alert } from "client/types";

const Alerts: Alert[] = [];

function mount() {
	const mounted = Roact.mount(
		Roact.createElement(app, { Alerts }),
		Players.LocalPlayer!.FindFirstChildOfClass("PlayerGui"),
		"Alerts",
	);

	return () => Roact.unmount(mounted);
}

mount();
