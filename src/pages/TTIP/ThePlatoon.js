import React from "react"
import TTIPLayout from "../../components/TTIPLayout"

const ThePlatoon = () => (
  <TTIPLayout
    text={<React.Fragment>Fireteam Members</React.Fragment>}
    link="/TTIP/FTMembers"
    seoName="Platoon"
  >
    <h3>The FA Platoon</h3>
    <ul>
      <li>
        The <em>FA platoon</em> is made up of the command element, (up to) three
        squads, and assorted weapons teams.
      </li>
      <li>
        The <em>FA squad</em> is made up of the command element, and either two
        fireteams, or a fireteam and their dedicated mechanized transport.
      </li>
      <li>
        The <em>FA fireteam</em> is made up of two elements (color-coded for
        your convenience):
        <ul>
          <li>
            The <font color="blue">fire</font> element, consisting of:
            <ul>
              <li>A Fireteam Leader (FTL)</li>
              <li>2x Automatic Riflemen (AR)</li>
            </ul>
          </li>
          <li>
            The <font color="red">maneuver</font> element, consisting of:
            <ul>
              <li>An Anti-Tank Rifleman (RAT)</li>
              <li>2x Riflemen (R)</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>

    <p>
      As we can see, the fireteam is made up of two asymmetric parts, intended
      to facilitate supportive fire and movement.
    </p>

    <p>
      The <font color="blue">fire</font> element is usually equipped with light
      machine guns or squad automatic weapons to lay down high volumes of fire.
      The FTL, also in the blue team, is equipped with a rangefinder, for
      spotting and fire guidance, and a grenade launcher, for indirect fire and
      laying of smoke cover. The job of the FTL is to enable the movement of the
      maneuver element via the aforementioned principle of suppression: make it
      hard for the enemy to do things by applying accurate AR firepower, choice
      use of explosives, and obscuring their vision with smoke.
    </p>

    <p>
      The <font color="red">maneuver</font> element is made up of three
      general-purpose Riflemen, whose job is to advance under cover from the
      blue team and either suppress or destroy the enemy. One of the Riflemen is
      carrying an AT launcher of some sort. The launcher is deployed by the red
      team, since they are generally more flexible and mobile for getting into
      position to engage enemy armor.
    </p>

    <p>
      The elements of the fireteam are thus set up to follow the basic
      principles of Fire and Maneuver: Fire enables Maneuver, which enables
      Fire, which then enables Maneuver... also known as{" "}
      <b>Bounding Overwatch</b>.
    </p>

    <p>
      <b>Bounding Overwatch</b> is the most often used method of movement
      through contested territory: One team stands still and provides cover
      (whether by shooting, or just by being ready to shoot), while the other
      moves forward.
    </p>

    <p>
      <b>Successive Bounding Overwatch</b> is achieved when the cover element
      halts, the move element advances, and then halts, and the cover element
      moves up to join them, before repeating the drill. This type of movement
      is slower, but is relatively safe, and can be performed by almost any two
      elements. This is the type of movement the FTL should use to move their
      team around.
    </p>

    <p>
      <b>Alternating Bounding Overwatch</b> is achieved when instead of joining
      the move element, the fire element continues moving past them, in essence
      trading roles. This type of movement is faster, but somewhat more
      dangerous. This is the type of movement the Squad Leader (SL) should use
      with each of their fireteams, as they both have the firepower needed to
      provide cover for the other element.
    </p>
  </TTIPLayout>
)

export default ThePlatoon
