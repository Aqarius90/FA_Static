import React from "react"
import TrainingLayout from "../components/TrainingLayout"

const Basics = () => (
  <TrainingLayout
    text={
      <React.Fragment>
        <s>Joining</s> Showing up
      </React.Fragment>
    }
    link="/ShowingUp"
    seoName="Basics"
  >
    <h3>The Basics</h3>
    <p>
      <b>Uh, hello?</b>
    </p>
    <p>
      Welcome, comrade!{" "}
      <em>
        The Third International Fighting Brigade of Takistan in the name of Che
        Guevara
      </em>{" "}
      is overjoyed to have you with us. I can see that you are ready to charge
      off into action. Unfortunately, you will have to curb your enthusiasm for
      a bit, as our scheduled operations do not begin before{" "}
      <em>1920 UK time, every Sunday and Thursday.</em>
    </p>
    <p>
      <b>The what now?</b>
    </p>
    <p>
      The sessions, of course! Twice a week, we will embark on a mix of Coop and
      PvP missions. Generally, they are affairs of 10-20 organized, focused
      individuals, who can be relied on to bring them to a close within 40 min,
      without resorting to revive or third person.
    </p>
    <p>
      <b>
        Oh, yeah, the sessions. That's what i came here for. What are the
        requirements for joining up?
      </b>
    </p>
    <p>
      {" "}
      To attend, you will need the latest (official, stable, non beta version
      of) Arma 3, and (the latest stable, non beta version of) TeamSpeak 3. The
      Arma 3 DLC is not strictly required, but players who don't have the APEX
      expansion will not be able to participate in missions set on Tanoa. There
      are also no required addons. There is a small list of optional addons, but
      they are, as the name says, optional.
    </p>
    <p>
      <b>
        {" "}
        So that's for "attending". What if I want to <em>join</em>?
      </b>
    </p>
    <p>
      There is no "joining" process in FA. Everyone is welcome to hop on and
      play. There is also no saluting, no ranks, and the slots are handed out on
      a 'first come-first served' basis, and you can take any slot the host
      calls out, be it commander, tanker, pilot, or the common grunt.
    </p>
    <p>
      <b>That's cool!</b>
    </p>
    <p>Yes it is.</p>
    <p>
      <b>Wait, there are no ranks, but there's a commander?</b>
    </p>
    <p>
      Exactly. Anyone can step up to command, anyone can step up to be a grunt.
      But whatever slot you pick for the mission, <em>stick to it</em>. If
      you're a rifleman, do what your unit lead tells you. If you're a unit
      lead, do what your commander tells you. If you're a commander, devote your
      time to actually commanding. ArmA works best as a team sport. Folk ARPS
      believes you don't need ranks to be a team.
    </p>
    <p>
      <b>But what if I screw up?</b>
    </p>
    <p>
      Then you screw up, you laugh it off, and you do better next time. Like
      most other things in FA, competence is entirely optional. Your comrades
      will not feel less of you for trying.{" "}
      <a href="https://en.wikipedia.org/wiki/Purge">
        <em>Or else.</em>
      </a>
    </p>
    <p>
      <b>Uh...</b>
    </p>
    <p>
      {" "}
      But enough about un-pleasantries. Step right on to the next room, while we
      walk you through the standard setup:
    </p>
  </TrainingLayout>
)

export default Basics
