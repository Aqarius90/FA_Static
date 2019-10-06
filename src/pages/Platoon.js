import React from "react"
import TrainingLayout from "../components/TrainingLayout"

import fa15_ft from "../images/fa15_ft.png"
import fa15_sqd_inf from "../images/fa15_sqd_inf.png"
import fa15_plt_inf from "../images/fa15_plt_inf.png"
import fa15_plt_mech from "../images/fa15_plt_mech.png"

const Platoon = () => (
  <TrainingLayout text="Teamspeak" link="/Teamspeak" seoName="Platoon">
    <h3>FA Platoon</h3>
    <p>
      <b>
        So, what exactly are all these CO, SL, FTL things I keep hearing about?
      </b>
    </p>
    <p>
      The missions (mostly) incorporate the FA2015 Platoon structure. The
      Platoon, led by a CO, consists of three Squads, led by SLs, each made up
      of two Fireteams, led by FTLs.
    </p>
    <p>
      <b>
        Oh, well, obviously. But let's pretend for a moment that I didn't
        understand a word of that...
      </b>
    </p>
    <p>
      You'll figure it out the minute you see it in action. If you're 100% new
      to this, my advice would be to grab one of the 'riflemen' slots. You can
      even ask the host to save you one. It's a perfect position to see how the
      system works, and it takes no prior knowledge past "listen to your leader"
      and "point and shoot".
    </p>
    <p>
      <b>Right. But suppose I still wanna hear the details?</b>
    </p>
    <p>Allrighty then:</p>
    <div className="card w-75 mx-auto">
      <img
        src={fa15_ft}
        style={{
          width: 522,
          height: 270,
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className="img-fluid"
        alt="Folk ARPS 2015 ORBAT"
      />
      <div className="card-body">
        <p className="card-text small">
          <u>The fireteam element</u> consists of the{" "}
          <font color="blue">Fire Team</font> and{" "}
          <font color="red">Manoeuvre Team</font>. They all talk to each other
          over <font color="green">Group VON</font> (AKA the in-game channel).
          It's advised to have a dedicated push-to-talk key set up for group VON
          exclusively.
        </p>
      </div>
    </div>
    <p>
      <b>Fire and Maneuver?</b>
    </p>
    <p>
      Exactly. One team <font color="blue">suppresses the enemy</font> (so they
      can't shoot back), and then the other team{" "}
      <font color="red">moves in</font> for the kill.
    </p>
    <div className="card w-75 mx-auto">
      <img
        src={fa15_sqd_inf}
        style={{
          width: 187,
          height: 203,
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className="img-fluid"
        alt="Folk ARPS 2015 ORBAT"
      />
      <div className="card-body">
        <p className="card-text small">
          <u>An infantry squad</u> consists of two fireteams and the Squad
          Leader element (basically, SL and Medic). SL and FTLs talk to each
          other over TeamSpeak.
        </p>
      </div>
    </div>
    <p>
      <b>So, if I'm not an SL or FTL...</b>
    </p>
    <p>
      You generally don't talk on TS. Unless there's something really, really
      urgent.
    </p>
    <div className="card w-75 mx-auto">
      <img
        src={fa15_plt_inf}
        style={{
          width: 452,
          height: 288,
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className="img-fluid"
        alt="Folk ARPS 2015 ORBAT"
      />
      <div className="card-body">
        <p className="card-text small">
          <u>An infantry platoon</u> consists of (up to) three squads,
          attachments, and the CO element (basically CO, Medic, and UAV
          operator). The CO and SLs speak to each other over Channel Commander.
        </p>
      </div>
    </div>
    <p>
      <b>
        <u>Infantry</u> squad. There are other kinds?
      </b>
    </p>
    <p>
      Very observant! There is, indeed, a mechanized squad. Basically, the mech.
      squad trades one fireteam for an armored transport/fire support vehicle.
    </p>
    <div className="card w-75 mx-auto">
      <img
        src={fa15_plt_mech}
        style={{
          width: 563,
          height: 288,
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className="img-fluid"
        alt="Folk ARPS 2015 ORBAT"
      />
      <div className="card-body">
        <p className="card-text small">
          And as you can imagine, three <u>mech. squads</u> and attachments make
          up a <u>mech. platoon.</u>
        </p>
      </div>
    </div>
    <p>
      <b>Wait, what are 'attachments'?</b>
    </p>
    <p>
      Attachments are typically 2-man elements (spotter and gunner) that can be
      used to add a specific type of special weapon to the platoon. For example,
      the Heavy AntiTank (HAT) team adds, as the name suggests, a heavy AT
      weapon. An MMG team adds a medium machinegun, which is bigger than what
      the automatic riflemen have. A mortar team, well, you get the picture.
    </p>
    <p>
      <b>So, where do they fit on the diagram?</b>
    </p>
    <p>
      Wherever the CO wants them. When attached to a squad, the Attachment lead
      (the 'spotter') talks on TS. When attached directly to CO, they speak on
      Channel commander.
    </p>
    <p>
      <b>Wait, wait, back up: what's "Channel Commander"?</b>
    </p>
    <p>
      Oh, right, that thing. Well, CC is a TeamSpeak feature that lets you talk
      to people outside of your channel. We use it for comms 'one level up' from
      TS. You can more or less ignore it unless you slot as an element lead. or
      your lead gets shot and you have to take over.
    </p>
    <p>
      <b>And if that happens?</b>
    </p>
    <p>
      I am glad you asked! Proceed right down this hatch for your comms
      training:
    </p>
  </TrainingLayout>
)

export default Platoon
