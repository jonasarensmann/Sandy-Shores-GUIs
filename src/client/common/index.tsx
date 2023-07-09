import Make from "@rbxts/make";
import Roact from "@rbxts/roact";
import { TweenService, Workspace } from "@rbxts/services";

function open() {
	const Blur = Make("BlurEffect", {
		Name: "UIBlur",
		Parent: game.GetService("Lighting"),
		Size: 0,
	});

	TweenService.Create(Blur, new TweenInfo(0.5), { Size: 20 }).Play();

	TweenService.Create(Workspace.CurrentCamera!, new TweenInfo(0.5), { FieldOfView: 55 }).Play();
}

function close() {
	const Blur = game.GetService("Lighting").FindFirstChild("UIBlur") as BlurEffect;

	TweenService.Create(Blur, new TweenInfo(0.5), { Size: 0 }).Play();

	TweenService.Create(Workspace.CurrentCamera!, new TweenInfo(0.5), { FieldOfView: 70 }).Play();

	Blur.Destroy();
}

function fadeIn(UIElement: Frame | TextButton | TextLabel | ImageLabel | ImageButton | UIStroke) {
	if (!typeIs(UIElement, "Instance")) return;
	if (UIElement.IsA("TextLabel") || UIElement.IsA("TextButton")) {
		TweenService.Create(UIElement, new TweenInfo(0.5), { TextTransparency: 0 }).Play();
	}
	if (UIElement.IsA("ImageLabel") || UIElement.IsA("ImageButton")) {
		TweenService.Create(UIElement, new TweenInfo(0.5), { ImageTransparency: 0 }).Play();
	}
	if (UIElement.IsA("Frame")) {
		TweenService.Create(UIElement, new TweenInfo(0.5), { BackgroundTransparency: 0 }).Play();
	}
	if (UIElement.IsA("UIStroke")) {
		TweenService.Create(UIElement, new TweenInfo(0.5), { Transparency: 0 }).Play();
	}

	for (const child of UIElement.GetChildren()) {
		if (
			child.IsA("Frame") ||
			child.IsA("TextButton") ||
			child.IsA("TextLabel") ||
			child.IsA("ImageLabel") ||
			child.IsA("ImageButton") ||
			child.IsA("UIStroke")
		) {
			fadeIn(child);
		}
	}
}

function fadeOut(UIElement: Frame | TextButton | TextLabel | ImageLabel | ImageButton | UIStroke) {
	if (!typeIs(UIElement, "Instance")) return;
	if (UIElement.IsA("TextLabel") || UIElement.IsA("TextButton")) {
		TweenService.Create(UIElement, new TweenInfo(0.5), { TextTransparency: 1 }).Play();
	}
	if (UIElement.IsA("ImageLabel") || UIElement.IsA("ImageButton")) {
		TweenService.Create(UIElement, new TweenInfo(0.5), { ImageTransparency: 1 }).Play();
	}
	if (UIElement.IsA("Frame")) {
		TweenService.Create(UIElement, new TweenInfo(0.5), { BackgroundTransparency: 1 }).Play();
	}
	if (UIElement.IsA("UIStroke")) {
		TweenService.Create(UIElement, new TweenInfo(0.5), { Transparency: 1 }).Play();
	}

	for (const child of UIElement.GetChildren()) {
		if (
			child.IsA("Frame") ||
			child.IsA("TextButton") ||
			child.IsA("TextLabel") ||
			child.IsA("ImageLabel") ||
			child.IsA("ImageButton") ||
			child.IsA("UIStroke")
		) {
			fadeOut(child);
		}
	}
}

function invisibleChildren(UIElement: Frame | TextButton | TextLabel | ImageLabel | ImageButton | UIStroke) {
	if (!typeIs(UIElement, "Instance")) return;
	if (UIElement.IsA("TextLabel") || UIElement.IsA("TextButton")) {
		UIElement.TextTransparency = 1;
	}
	if (UIElement.IsA("ImageLabel") || UIElement.IsA("ImageButton")) {
		UIElement.ImageTransparency = 1;
	}
	if (UIElement.IsA("Frame")) {
		UIElement.BackgroundTransparency = 1;
	}
	if (UIElement.IsA("UIStroke")) {
		UIElement.Transparency = 1;
	}

	for (const child of UIElement.GetChildren()) {
		if (
			child.IsA("Frame") ||
			child.IsA("TextButton") ||
			child.IsA("TextLabel") ||
			child.IsA("ImageLabel") ||
			child.IsA("ImageButton") ||
			child.IsA("UIStroke")
		) {
			invisibleChildren(child);
		}
	}
}

function visibleChildren(UIElement: Frame | TextButton | TextLabel | ImageLabel | ImageButton | UIStroke) {
	if (!typeIs(UIElement, "Instance")) return;
	if (UIElement.IsA("TextLabel") || UIElement.IsA("TextButton")) {
		UIElement.TextTransparency = 0;
	}
	if (UIElement.IsA("ImageLabel") || UIElement.IsA("ImageButton")) {
		UIElement.ImageTransparency = 0;
	}
	if (UIElement.IsA("Frame")) {
		const UIStroke = UIElement.FindFirstChildWhichIsA("UIStroke");

		UIElement.BackgroundTransparency = 0;

		if (UIStroke && UIStroke.Thickness === -1) {
			UIElement.BackgroundTransparency = 1;
		}
	}
	if (UIElement.IsA("UIStroke")) {
		UIElement.Transparency = 0;
	}

	for (const child of UIElement.GetChildren()) {
		if (
			child.IsA("Frame") ||
			child.IsA("TextButton") ||
			child.IsA("TextLabel") ||
			child.IsA("ImageLabel") ||
			child.IsA("ImageButton") ||
			child.IsA("UIStroke")
		) {
			visibleChildren(child);
		}
	}
}

const commonModule = {
	open,
	close,
	fadeIn,
	fadeOut,
	invisibleChildren,
	visibleChildren,
};

export default commonModule;
