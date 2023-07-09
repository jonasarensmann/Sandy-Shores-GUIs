import Roact from "@rbxts/roact";
import app from "./app";
import { Players } from "@rbxts/services";

Roact.mount(Roact.createElement(app), Players.LocalPlayer!.FindFirstChildOfClass("PlayerGui")!, "Tabs");
