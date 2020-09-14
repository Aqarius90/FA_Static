import React from "react"
import TTIPLayout from "../../components/TTIPLayout"

const CommsProtocol = () => (
  <TTIPLayout
    text={<React.Fragment>Closing Notes</React.Fragment>}
    link="/TTIP/ClosingNotes"
    seoName="Comms"
  >
    <h3>Communications Fundamentals</h3>
    <p>
      <em>
        Fear the man with a radio and friends.
        <br />
      </em>
    </p>
    <h4>Voice Channels</h4>
    <p>
      Folk ARPS uses no mods, and have worked out the following system between
      built-in Arma 3 VOIP channels and Teamspeak 3 features to best separate
      voice communications to distribute information most effectively.
      <br />
      Yes, we have heard of ACRE and TFAR. No, we will not be adopting them.
      Please skip ahead to the section titled The Immortal Science of Modless
      Leninism with Folkish Characteristics if you need any more information on
      that.{" "}
    </p>

    <p>Our three primary channels are:</p>
    <ul>
      <li>
        Group Chat (In-game VON)
        <br />
        FTLs will direct their subordinates on this channel. Unless you are an
        FTL, SL, or CO, there is a high probability whatever you want to say
        should be said on this channel. This is our primary substitute for good
        direct chat.
      </li>
      <li>
        Teamspeak (TS3) <br />
        Your channel will contain the other members of your squad, allowing FTLs
        to speak to their SL and each other, and for the whole squad to maintain
        awareness of these communications. In some cases, attachments that are
        working closely with a squad will join the squad’s channel. This is our
        equivalent of a squad net from a radio mod.{" "}
      </li>
      <li>
        Channel Commander (CC on TS3)
        <br />
        Squad leaders will talk to other squads, other attached assets, and the
        CO across this channel. It is an extra step to set up, but once you feel
        comfortable taking any leadership slot it is strongly recommend you do.
        A host can walk you through it, or you can read the guide from our
        website's introduction pages. This is our equivalent of a long range
        radio.{" "}
      </li>
    </ul>
    <p>In addition, there is an optional use for:</p>
    <ul>
      <li>
        Direct Chat <br />
        Vanilla Arma 3 doesn't make this consistent enough (separate volume
        slider when BI?) to use regularly, but can be effective to guide others
        to you in the 3D space like medics or for immersive and non-disruptive
        “OH SHIT, OH GOD, FUCK ME, SHIT SHIT SHIT” shouting.{" "}
      </li>
      <li>
        Vehicle Chat
        <br />
        This allows you to speak directly anybody in the same vehicle cargo as
        you, regardless of group or Teamspeak channel. The best use case for
        this is as a vehicle commander to be able to tell the cargo to unload
        without having to say it over Teamspeak.
      </li>
    </ul>
    <h4>Hailing Others</h4>
    <p>
      When there is more than one fireteam present, some radio discipline is
      desirablewill be needed.
      <br />
      Our radio communications follow convention and try to resemble a call
      between two people, with no talking over another (a half-duplex
      communication channel, in comms lingo).
    </p>
    <p>All messages have a sender and a receiver.</p>
    <p>
      When addressing others, the universal standard is for one to call the name
      of the receiver first, then declare who is sending it. By this standard,
      the receiver will know there is a message waiting for them from the
      sender.
    </p>

    <div class="card">
      <div class="card-body">
        <em>“ASL, A1.”</em> (Hearing this, Alpha SL now knows the FTL of Alpha 1
        is calling them.)
      </div>
    </div>

    <h4>
      <br />
      Acknowledgement
    </h4>
    <p>
      The number one task of anybody sending a message is making sure they have
      the target’s attention. Do not expect a message to be received just
      because you said their callsign and then spewed your desires out.
    </p>

    <div class="card">
      <div class="card-body">
        <em>“ASL, A1.”</em>
        <br />
        [no response] (Is ASL dead? Busy? Unable to communicate for some
        reason?)
      </div>
    </div>

    <p>
      A quick acknowledgement of all but the most redundant messages removes any
      ambiguity.
      <br />
      The recipient should indicate they are listening (or can’t), so that the
      sender is informed.
    </p>

    <div class="card">
      <div class="card-body">
        <em>“ASL, A1.”</em>
        <br />
        <em>“A1, ASL, wait one.”hold a sec.”</em> (ASL is busy. While I wait, is
        my team covering their sectors?)
      </div>
    </div>

    <p>
      From the perspective of leadership, lack of acknowledgement becomes a
      compounding operational issue.
    </p>

    <div class="card">
      <div class="card-body">
        <em>
          “Bravo, CO.” “CO, this is Bravo.”
          <br />
          “Go down your hill and attack Checkpoint ‘Circuit’ directly.”
        </em>
        <br />
        [no response] versus “Copy.” versus “Hold, Bravo is taking close fire.”
      </div>
    </div>

    <p>
      When not giving a response, Bravo SL may well have proceeded with the
      command given by CO, however, this introduces ambiguity again. For SLs and
      FTLs, simply doing is not all of it.
      <br />
      Did BSL hear the message properly or at all? Take a bullet to the head
      just now? Is there an issue they are immediately dealing with? Even a
      simple “Copy” communicates receipt (and alive-ness) and allows the sender
      of the message to go on with their lives.
      <br />
      In any case, lack of acknowledgement will force someone to repeat their
      message or make an assumption about the state of the intended recipient.
    </p>

    <h4>Brevity and Plain Speech</h4>
    <p>
      Keeping things short and factual is a necessity when there are more than a
      handful of people needing to communicate over a limited number of
      channels.
      <br />
      This does not necessitate the usage of codewords, we have no need to hide
      meaning from anyone. Common abbreviations and nomenclature work just fine
      though (e.g. klicks, AAA, MANPAD, lase, etc.)
      <br />
      When transmitting a message, “Keep It Simple, Stupid”. Using plain
      language is proven and effective. Do we need to mention the issue of
      ambiguity again?
    </p>

    <div class="card">
      <div class="card-body">
        <em>
          “Alpha lead, BSL.”
          <br />
          “Go ahead Bravo.”
          <br />
          “My team has spotted enemy triple-A on the hill to your north-west. Do
          you see it?”
          <br />
          “Bravo. Yeah, we see it.”
          <br />
          “CO, this is Alpha….”
          <br />
        </em>
        Etc. etc.
      </div>
    </div>

    <p>versus</p>

    <div class="card">
      <div class="card-body">
        <em>
          “Alpha lead, BSL.” <br />
          “Go ahead.”
          <br />
          “Someone in Bravo 2, I think, has located what appears to be a
          potential enemy anti-aircraft gun not too far from you, somewhere
          around the north-west, about bearing 300 from you. Uh, do you also see
          it?”
          <br />
          “Bravo. Yeah, we see it.”
          <br />
          “CO, this is Alpha….”
          <br />
        </em>
        Etc. etc.
      </div>
    </div>

    <h4>What is of Interest</h4>

    <p>
      If you hear the keyword "BREAK", shut up and listen - the following
      message is important.
      <br />
      Banter is great in group comms, but keep it off Teamspeak and consider
      slowing it down in a firefight. Your jokes just fine, but I wanna hear the
      SL screaming "TANKTANKTANKTANK" more.
      <br />
      Communication is a two-way street. If you see something, please say
      something.
    </p>
    <p>Here are ideas of essential things to call out over the radio:</p>
    <ul>
      <li>An enemy’s general direction and distance relative to yours.</li>
      <li>Fortifications. Machine-gun and anti-tank emplacements.</li>
      <li>Moving vehicles. Engine noises. Rotors.</li>
      <li>Current dead/wounded in your fireteam/squad.</li>
      <li>Death of your team leader.</li>
    </ul>

    <p>
      If you or your team is in immediate danger, a quick, rough idea of things
      is sufficient:
    </p>
    <ul>
      <li>
        A simple cardinal direction (“north-west” instead of “bearing 40”).
      </li>
      <li>
        A rough estimate of manpower (“about a squad” instead of “10
        infantrymen”).
      </li>
      <li>
        A ballpark distance estimation (“500m” or “far” instead of “637
        meters”).
      </li>
    </ul>
    <p>
      At the same time, follow common sense rules and be more specific when
      needed.
      <br />
      For example, if in a town or city, don’t just call out an enemy on “the
      balcony”.
    </p>

    <div class="card">
      <div class="card-body">
        <em>“Enemy squad, east, 200 meters!”</em>
      </div>
    </div>
    <p>versus</p>
    <div class="card">
      <div class="card-body">
        <em>“Enemy, over there at the rock!” </em>
      </div>
    </div>
  </TTIPLayout>
)

export default CommsProtocol
