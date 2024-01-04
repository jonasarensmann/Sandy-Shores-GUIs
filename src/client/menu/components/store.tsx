import Roact from "@rbxts/roact";
import { useEffect, useState, withHooks } from "@rbxts/roact-hooked";
import { MarketplaceService, Players, ReplicatedStorage } from "@rbxts/services";

interface props {
	gamepasses: GamePassProductInfo[];
}

function store({ gamepasses }: props) {
	return (
		<frame Size={new UDim2(1, 0, 1, 0)} BackgroundTransparency={1}>
			{gamepasses.size() === 0 ? (
				<textlabel
					Text={"Fetching gamepasses"}
					BackgroundTransparency={1}
					TextScaled
					TextColor3={Color3.fromRGB(200, 200, 200)}
					Font={Enum.Font.GothamBold}
					Size={new UDim2(1, 0, 0.1, 0)}
					Position={new UDim2(0, 0, 0.05, 0)}
				/>
			) : (
				<scrollingframe
					Size={new UDim2(1, 0, 1, 0)}
					Position={new UDim2(0, 0, 0, 0)}
					BackgroundTransparency={1}
					BorderSizePixel={0}
					ScrollBarThickness={5}
					AutomaticCanvasSize={Enum.AutomaticSize.Y}
				>
					<uigridlayout CellSize={new UDim2(0.23, 0, 0.6, 0)} CellPadding={new UDim2(0.02, 0, 0.02, 0)} />

					{gamepasses.map((gamepass) => {
						return (
							<frame BackgroundColor3={Color3.fromRGB(50, 50, 50)} Key={gamepass.ProductId}>
								<uicorner CornerRadius={new UDim(0, 5)} />
								<uistroke Color={Color3.fromRGB(100, 100, 100)} Thickness={0.5} />

								<imagelabel
									BackgroundTransparency={1}
									Size={new UDim2(0.5, 0, 0.2, 0)}
									Position={new UDim2(0.25, 0, 0.05, 0)}
									Image={`http://www.roblox.com/asset/?id=${gamepass.IconImageAssetId}`}
								>
									<uiaspectratioconstraint
										AspectRatio={1}
										AspectType={Enum.AspectType.ScaleWithParentSize}
									/>
									<uicorner CornerRadius={new UDim(1, 0)} />
								</imagelabel>
								<textlabel
									Text={gamepass.Name}
									BackgroundTransparency={1}
									TextColor3={Color3.fromRGB(255, 255, 255)}
									TextScaled
									Font={Enum.Font.GothamBold}
									TextXAlignment={"Left"}
									Size={new UDim2(0.9, 0, 0.15, 0)}
									Position={new UDim2(0.05, 0, 0.31, 0)}
								/>

								<textlabel
									Text={gamepass.Description}
									BackgroundTransparency={1}
									TextColor3={Color3.fromRGB(200, 200, 200)}
									TextSize={20}
									TextWrapped
									Font={Enum.Font.GothamBold}
									TextXAlignment={"Left"}
									TextYAlignment={"Top"}
									Size={new UDim2(0.85, 0, 0.38, 0)}
									Position={new UDim2(0.075, 0, 0.45, 0)}
								/>

								<textbutton
									Text={"Buy - R$" + gamepass.PriceInRobux}
									TextColor3={Color3.fromRGB(255, 255, 255)}
									BackgroundColor3={Color3.fromRGB(2, 171, 106)}
									TextSize={18}
									Font={Enum.Font.GothamBold}
									Size={new UDim2(0.5, 0, 0.1, 0)}
									Position={new UDim2(0.25, 0, 0.85, 0)}
									Event={{
										MouseButton1Click: () => {
											(
												ReplicatedStorage.FindFirstChild("GuiEvents")?.FindFirstChild(
													"purchaseGamepass",
												) as RemoteEvent
											).FireServer(gamepass.TargetId);
										},
									}}
								>
									<uicorner CornerRadius={new UDim(0, 5)} />
								</textbutton>
							</frame>
						);
					})}
				</scrollingframe>
			)}
		</frame>
	);
}

export default withHooks(store);
