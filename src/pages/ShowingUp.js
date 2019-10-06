import React from "react"
import TrainingLayout from "../components/TrainingLayout"

const ShowingUp = () => (
  <TrainingLayout text="Etiquette" link="/Etiquette" seoName="Showing up">
    <h3>Showing up</h3>
    <p>
      So, first of all, before you join, you should probably set up your
      Teamspeak client
    </p>
    <p>
      <b>How do I set up Teamspeak?</b>
    </p>
    <p>
      For starters, if you don't already have it, download{" "}
      <a href="http://www.teamspeak.com/downloads">
        the latest version of TS3 from their website
      </a>{" "}
      and install it. Once it's installed, launch it and connect to{" "}
      <em>server.folkarps.com:9988</em>. The password is <em>freedom</em>. You
      will be connected to "General Chat", at the very bottom of the list. For
      the session, move to "Limbo", at the very top of the list. Next, you
      should probably join the game server.
    </p>
    <p>
      <b>How do I join the ArmA 3 server?</b>
    </p>
    <p>
      In the ArmA 3 Launcher that starts when you launch the game from Steam, go
      to SERVERS, then INTERNET, then search for 'folk' (it may take couple of
      minutes). Of the two servers found, select the "Folk ARPS" server and
      click "join". The password is "freedom".
    </p>
    <p>
      <b>The server just kicked me.</b>
    </p>
    <p>
      {" "}
      Yeah, that tends to happen if you have non-authorized mods. Close the
      game, disable any non-authorized mods (or, as a last resort,{" "}
      <em>all mods</em>) and try again.
    </p>
    <p>
      <b>Ok, I'm in. What now?</b>
    </p>
    <p>
      Now we wait for the host to pick a mission. Once everyone is in the Limbo
      channel and on the game server, the Host load up a mission and begin
      calling slots. For example, the Host will call for a Commander, and open
      the CO slot. Whoever takes the slot is the commander for the duration of
      the mission. Next he will call the SL, then FTL etc. Once everyone is
      slotted, the session Host will launch the mission, ask you to move to a
      different Teamspeak channel, which will be used for the duration of the
      mission.
    </p>
    <p>
      <b>So how do the actual missions work?</b>
    </p>
    <p>
      Once the mission is launched, you will see the briefing screen, and should
      move any banter to the sidechat (press '/' to type, press 'enter' to
      send). This gives the CO time to read the briefing and think of a plan in
      peace. It's a good idea to read the briefing yourself. When the CO is done
      planning, he will then share his plan with the rest of the platoon, and
      the mission will start. <s>When</s> If you get killed, return to Limbo,
      and once the mission ends, the Host loads the next mission, and the
      slotting starts again.
    </p>
    <p>
      <b>
        Hold on. If just anyone can join, then how do you keep out the... how to
        put this... more disruptive people from ruining the sessions?
      </b>
    </p>
    <p>
      <a href="https://en.wikipedia.org/wiki/Purge">
        <em>The Host team has methods of enforcing etiquette</em>
      </a>
    </p>
    <p>
      <b>The, uh, the etiquette?</b>
    </p>
    <p>
      Oh, that's right, how (ironically) rude of me! Step right into the next
      room:
    </p>
  </TrainingLayout>
)

export default ShowingUp
