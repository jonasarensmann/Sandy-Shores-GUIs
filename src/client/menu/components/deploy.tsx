import Roact from "@rbxts/roact";
import { withHooks } from "@rbxts/roact-hooked";
import { Players, ReplicatedStorage, Workspace } from "@rbxts/services";
import Fade from "client/common/FadeModule";
import data from "../data";

function deploy() {
	return (
		<frame Size={new UDim2(1, 0, 1, 0)} BackgroundTransparency={1}>
			<uilistlayout FillDirection={Enum.FillDirection.Horizontal} />
			<frame Size={new UDim2(0.5, 0, 1, 0)} BackgroundTransparency={1}>
				<textlabel
					Size={new UDim2(0.7, 0, 0.05, 0)}
					Position={new UDim2(0, 0, 0, 0)}
					BackgroundTransparency={1}
					TextScaled
					TextXAlignment={Enum.TextXAlignment.Left}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					Font={Enum.Font.GothamBold}
					Text={"DOJ:RP | Sandy Shores"}
				/>
				<textlabel
					Size={new UDim2(1, 0, 0.02, 0)}
					Position={new UDim2(0, 0, 0.06, 0)}
					BackgroundTransparency={1}
					TextScaled
					TextXAlignment={Enum.TextXAlignment.Left}
					TextColor3={Color3.fromRGB(200, 200, 200)}
					Font={Enum.Font.GothamMedium}
					Text={"A true DOJ:RP experience"}
				/>
				<textbutton
					Size={new UDim2(0.7, 0, 0.08, 0)}
					Position={new UDim2(0, 0, 0.15, 0)}
					BackgroundColor3={Color3.fromRGB(2, 171, 106)}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					Font={Enum.Font.GothamBold}
					TextSize={30}
					Text={"SPAWN"}
					Event={{
						MouseButton1Click: () => {
							Fade(1);
							task.wait(0.3);
							(
								Players.LocalPlayer.FindFirstChild("UIEvents")?.FindFirstChild(
									"CloseMenuEvent",
								) as BindableEvent
							)?.Fire();
							task.wait(0.5);
							(
								Players.LocalPlayer.FindFirstChild("UIEvents")?.FindFirstChild(
									"OpenTabsEvent",
								) as BindableEvent
							)?.Fire();
							(
								ReplicatedStorage.WaitForChild("GuiEvents").FindFirstChild("deploy") as RemoteEvent
							).FireServer();
						},
					}}
				>
					<uicorner CornerRadius={new UDim(0, 5)} />
					<imagelabel
						Size={new UDim2(0.15, 0, 0.6, 0)}
						Position={new UDim2(0.1, 0, 0.2, 0)}
						BackgroundTransparency={1}
						Image={"http://www.roblox.com/asset/?id=12099513379"}
						ScaleType={Enum.ScaleType.Fit}
					/>
				</textbutton>

				<frame
					Size={new UDim2(0.7, 0, 0.64, 0)}
					Position={new UDim2(0, 0, 0.28, 0)}
					BackgroundColor3={Color3.fromRGB(30, 30, 30)}
				>
					<uicorner CornerRadius={new UDim(0, 5)} />
					<textlabel
						Text={"Update Log"}
						BackgroundTransparency={1}
						TextColor3={Color3.fromRGB(240, 240, 240)}
						TextScaled
						Font={Enum.Font.GothamBold}
						Size={new UDim2(1, 0, 0.08, 0)}
					/>

					<frame
						Size={new UDim2(0.8, 0, 0.006, 0)}
						Position={new UDim2(0.1, 0, 0.09, 0)}
						BackgroundColor3={Color3.fromRGB(200, 200, 200)}
						BorderSizePixel={0}
					/>

					<scrollingframe
						Size={new UDim2(0.8, 0, 0.8, 0)}
						Position={new UDim2(0.1, 0, 0.105, 0)}
						BackgroundTransparency={1}
						ScrollBarThickness={5}
						BorderSizePixel={0}
					>
						<uicorner CornerRadius={new UDim(0, 5)} />
						<uilistlayout
							FillDirection={"Vertical"}
							HorizontalAlignment={"Center"}
							Padding={new UDim(0.01, 0)}
						/>

						{data.updateLogs.map((log) => {
							return (
								<>
									<frame
										Size={new UDim2(0.9, 0, 0.15, 0)}
										BackgroundColor3={Color3.fromRGB(50, 50, 50)}
									>
										<uicorner CornerRadius={new UDim(0, 5)} />
										<uistroke Color={Color3.fromRGB(100, 100, 100)} Thickness={0.5} />

										<textlabel
											Text={`Update ${log.version} - ${log.date}`}
											BackgroundTransparency={1}
											TextColor3={Color3.fromRGB(240, 240, 240)}
											TextScaled
											Font={Enum.Font.GothamBold}
											TextXAlignment={"Left"}
											Size={new UDim2(0.9, 0, 0.2, 0)}
											Position={new UDim2(0.05, 0, 0, 0)}
										/>

										<textlabel
											Text={log.changes}
											BackgroundTransparency={1}
											TextColor3={Color3.fromRGB(220, 220, 220)}
											TextSize={20}
											Font={Enum.Font.GothamBold}
											TextXAlignment={"Left"}
											TextYAlignment={"Top"}
											Size={new UDim2(0.85, 0, 0.8, 0)}
											Position={new UDim2(0.075, 0, 0.2, 0)}
										/>
									</frame>
								</>
							);
						})}
					</scrollingframe>
				</frame>
			</frame>
		</frame>
	);
}

export default withHooks(deploy);
