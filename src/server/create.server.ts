import { ReplicatedStorage } from "@rbxts/services";

const Folder = ReplicatedStorage.WaitForChild("GuiEvents") as Folder;

const createAlert = Folder.WaitForChild("createAlertBinding") as BindableEvent;

wait(5);

createAlert.Fire("all", "Lorem ipsum", "Emergency Alert", "Lorem ipsum");
