import React from "react"
import TrainingLayout from "../components/TrainingLayout"

const Teamspeak = () => (
  <TrainingLayout text="Leadership" link="/Leadership" seoName="Teamspeak">
    <h3>Teamspeak</h3>
    <p>
      <b>
        OK, I got the latest Teamspeak 3 from the{" "}
        <a href="http://www.teamspeak.com/downloads">website</a>, and have it
        installed and launched.
      </b>
    </p>
    <p>Go to "connect" and use these details:</p>
    <ul>
      <li>
        Address: server.folkarps.com:9988 (note: the domain and port go
        together)
      </li>
      <li>Password: freedom</li>
    </ul>
    <p>
      <b>I'm connected. Which channel should I go to?</b>
    </p>
    <p>
      For the session, you're going to start with "Limbo (Slotting/Dead)". When
      you've just arrived, hang out there. When the mission starts, everyone
      will move to the appropriate side channel family (BLUFOR/OPFOR/INDFOR).
      Further channel split will be handled by the CO. When the mission ends
      (either for everyone or just for you) return to limbo, and wait for the
      next mission.
    </p>
    <p>
      <b>What about Channel Commander?</b>
    </p>
    <p>
      CC is a TeamSpeak feature that lets you talk to people "over the fence" of
      your channel. The setup we use is pretty straightforward:
    </p>

    <ul>
      <li>In TS3 go to Tools &gt; Whisper Lists (Ctrl+Shift+W)</li>
      <li>Click on New (in the bottom-left of the dialog)</li>
      <li>Set a Hotkey (the suggestion is: H)</li>
      <li>Set Whisper to: to Groups</li>
      <li>Set Group Whisper Type: to Channel Commander</li>
      <li>Set Group Whisper Target: to Complete Channel Family</li>
      <li>Click OK</li>
    </ul>
    <p>
      And you're set. To turn CC on/off, either right-click your name in the
      playerlist and select Channel Commander, or set-up a hotkey (or
      combination, such as Shift+H):
    </p>
    <ul>
      <li>TS3 &gt; Settings &gt; Options (Alt+P) &gt; Hotkeys &gt; Add</li>
      <li>In the dialogue that pops-up click on Show Advanced Options</li>
      <li>
        Under the action Channel Commander select Toggle Channel Commander
      </li>
      <li>Set a hotkey or hotkey combination (the suggestion is Shift+H)</li>
      <li>Click OK, then click OK again to exit the Options dialogue</li>
    </ul>

    <p>
      <b>Sounds technical</b>
    </p>
    <p>
      Sounds, yes. But once you see it in action,it gets intuitive. In general,
      it's highly recommended to have CC if you plan on taking leadership slots.
      Or, when your superior gets shot, and you get assigned leadership.
    </p>
    <p>
      <b>
        That doesn't sound like something that should happen very often, right?
      </b>
    </p>
    <p>
      Er...Well, why don't you follow me to the leadership course, just in case?
    </p>
  </TrainingLayout>
)

export default Teamspeak
