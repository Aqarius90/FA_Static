import React from "react"
import TrainingLayout from "../components/TrainingLayout"

const IndexPage = () => (
  <TrainingLayout text="Deployment" link="/Deployment" seoName="Leadership">
    <h3>Leadership</h3>
    <p>
      <b>
        So, suppose I get 'promoted' to a leadership position. How do I exactly
        run my unit(s)?
      </b>
    </p>
    <p>That's a difficult one, but there are a few best practices:</p>
    <ul>
      <li>
        <b>Within a fireteam, be ready to step up if your FTL dies!</b>{" "}
        Seniority within the fireteam follows the order of slotting: automatic
        rifleman #1 is 2IC, then automatic rifleman #2, then the assaultman (AT)
        ... and then your fireteam pretty much ceases to exist.
      </li>
      <li>
        <b>
          As an FTL, be sure to re-consolidate and reassess your fireteam after
          each engagement!
        </b>{" "}
        Remember that your riflemen in the{" "}
        <font color="red">manoeuvre sub-element</font> are carrying spare ammo
        for your automatic riflemen in the{" "}
        <font color="blue">base-of-fire sub-element</font>.
      </li>
      <li>
        <b>
          At the fireteam level, make good use of{" "}
          <u>successive bounding overwatch</u>,
        </b>{" "}
        as helpfully outlined in{" "}
        <a href="http://ttp3.dslyecxi.com/8_tactics.php">TTP3</a>. Within each
        fireteam, the two colour teams are split very purposefully into distinct{" "}
        <font color="blue">
          base-of-fire sub-elements to fix the enemy with fire
        </font>{" "}
        and{" "}
        <font color="red">
          manoeuvre elements to flank or assault the enemy
        </font>
        . Be sure to re-consolidate your fireteam after the engagement has
        concluded.
      </li>
      <li>
        <b>
          At the squad level, make good use of{" "}
          <u>alternating bounding overwatch</u>.
        </b>{" "}
        Within each squad, both fireteams are very robust and powerful
        sub-units, capable of acting as either a base-of-fire or manoeuvre
        element, trading off roles as the squad advances using
        fire-and-manoeuvre to leapfrog fireteams past one another in quick
        succession.
      </li>
      <li>
        <b>As CO, assign objectives to your SLs,</b> then allow your SLs to use
        their two fireteams as they see fit in order to accomplish those
        objectives.
      </li>
    </ul>
    <p>
      <b>Got it. I think. Wait, is there anything I shouldn't do?</b>
    </p>
    <p>Lots. Here are some to things to watch out for:</p>
    <ul>
      <li>
        <b>
          As an FTL, don't treat your colour teams as independent units with
          sub-leaders.
        </b>{" "}
        Your fireteam operates as a whole in support of the other fireteam (or
        vehicle) in your squad, and you are the brains telling the other five
        what to do. Think of your colour teams as polygamous-battle buddies, not
        independent units!
      </li>
      <li>
        <b>
          As an SL, don't split your fireteams beyond the range of mutual
          support.
        </b>{" "}
        Your squad is the smallest unit with which to accomplish an independent
        objective such as "Seize the outpost on Hill 138." Use your fireteams to
        support one another in order to accomplish your squad's objectives!
      </li>
      <li>
        <b>
          As CO, do not give assignments to individual fireteams within a squad.
        </b>{" "}
        Your SLs will manage their own fireteams; your job is to control the
        flow of the platoon as a whole and not get bogged down in the specifics
        of any one engagement.
      </li>
    </ul>
    <p>
      <b>Well, thanks. That was a fairly comprehensive infodump.</b>
    </p>
    <p>
      The pleasure is all mine, comrade. The Party is always happy to help. if
      you have any other questions, feel free to ask in our{" "}
      <a href="http://www.discord.gg/0Z8wIyiaekveqtZ4">Discord channel</a>. Now
      please, after me:
    </p>
  </TrainingLayout>
)

export default IndexPage
