interface UpdateLog {
	version: string;
	date: string;
	changes: string;
}

const updateLogs: UpdateLog[] = [
	{
		version: "1.0.0",
		date: "01-02-2024",
		changes: `Test Update Log
- Test
- Test
- Test

        `,
	},
	{
		version: "1.0.0",
		date: "01-02-2024",
		changes: `Test Update Log
- Test
- Test
- Test

        `,
	},
];

const gamepasses: number[] = [
	18278551, 18283398, 18283421, 18306546, 18342315, 18342394, 18503103, 18802466, 19734286, 19734364, 19734367,
	19734376, 19734382, 19734391, 19795713, 50202573, 106905099,
];

const rules = `
<font weight="900" size="40">Game Rules</font>

1.) <font weight="600" size="24">No Fail Roleplay</font>
		This means don't do things abnormal that you wouldn't see in real life.	

1a.) <font weight="600" size="24">Roleplay heavy weapons.</font>
		Say "*slings*" and "*unslings*" when you are equipping or unequipping a large weapon such as a shotgun or rifle.

2.) <font weight="600" size="24">No Cop Baiting</font>
		This means do not trigger police officers on purpose to ensue a chase.

3.) <font weight="600" size="24">Follow New Life Rule(NLR)</font>
		means that you cant return to the place you died at and continue the scene. Wait some time!

4.) <font weight="600" size="24">No Unrealistic Driving</font>
		Self explanatory. Do not offroad in a car uncapable of doing such, or drive up mountains.

5.) <font weight="600" size="24">No Abuse of Tools(AOT)</font>
		Abusing tools that are given to you on a team, such as pepper spray.

6.) <font weight="600" size="24">No Random Killing(RMD/ Random Deathmatch) </font>
		Don't kill people without a roleplay reason.

7.) <font weight="600" size="24">Do not break Peacetime.</font>
		You will be notified of when this is happening. Killing during peacetime is kick on sight!

8.) <font weight="600" size="24">Follow ROBLOX ToS</font>
		Self Explanatory.

9.) <font weight="600" size="24">No Bypasses</font>
		Do not bypass chat, or play bypassed/loud music.

10.) <font weight="600" size="24">Roleplay</font>
		Do not join to just troll and not RP. (NITRP)

11.) <font weight="600" size="24">Proper Callsign</font>
		Make sure your Callsign follows the list correctly.

12.) <font weight="600" size="24">No abusing glitches.</font>
		Instant ban.

13.) <font weight="700" size="30">Do Not LTAP</font>
		Do not Leave To Avoid Staff or Punishment.
 
 
<font weight="900" size="40">Useful Information</font>
<font weight="700" size="30">How To Get Money</font>
	You can get money multiple ways. The easiest would be by doing quick robberies.
	A few locations are the 24/7, the Safes dotted all around the map and Bank.
	You can rob the bank if you have a drill. You can siphon money from ATM's with an RFID.

<font weight="700" size="30">How To Join A Whitelist Team</font>
	You can join a Whitelist only team by joining the main communication server and respective group,
	then attending their training or a tryout.

<font weight="700" size="30">How To Join A Free Team</font>
	You can join a free team by simply joining the DOJ-RP | Sandy Shores! group, 
	which is linked to our game!

<font weight="700" size="30">Sandy Shores Spawn/Gun Store</font>
	X: 697, Z: 1124
	24/7
	X: 326, Z: 1729
	Black Market
	X: 818, Z: -21
	BCSO
	X: 423, Z: -4414
	Factory/DOT/HVPD
	X: -758, Z: -3843
	Bank/Food Shop
	X: -1620, Z: -1750
	Prison
	X: -2461, Z: 608

<font weight="900" size="30">Phone Calling</font>
	To call, you go to the "Call" application and then select Contacts on the bottom right corner of the app.
	You can select someone to call from the Contacts page and it will enter their number onto the keypad.
	To send the call, you must click on the rectanglular button that has their phone number in it,
	then their phone should ring.If the call fails, you probably entered the wrong number,
	the caller is already in a call, the number doesn't exist, the player is already being called,
	or the player does not have a phone.To talk on the phone, if you're in a call, 
	you just chat in-game like you would normally. The other caller will see what you're saying, 
	and you can see what they're saying. (You cannot see what you're saying on the phone so don't be alarmed!)
`;

const data = {
	updateLogs,
	gamepasses,
	rules,
};

export default data;
