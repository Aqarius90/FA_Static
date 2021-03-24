import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Classified = () => (
  <Layout>
    <SEO title="Classified" />

    <h2 className="c">Need to know</h2>
    <div className="row">
      <div className="col">
        <p>
          <b>Time:</b> Sunday, 1920 UK time.
        </p>
        <p>
          <b>Teamspeak:</b> server.folkarps.com:9988.
        </p>
        <p>
          <b>Server:</b> Folk ARPS, server.folkarps.com:2702
        </p>
        <p>
          <b>Password:</b> freedom
        </p>
      </div>
      <div className="col">
        <p>
          <b>Discord:</b>{" "}
          <a href="http://www.discord.gg/0Z8wIyiaekveqtZ4">
            http://www.Discord.gg/0Z8wIyiaekveqtZ4
          </a>
        </p>
        <p>
          <b>Forum:</b>{" "}
          <a href="http://www.folkarps.com/forum/">FolkARPS.com/forum/</a>
        </p>
        <p>
          <b>Steam group:</b>{" "}
          <a href="http://steamcommunity.com/groups/folkarps">
            SteamCommunity.com/groups/folkarps
          </a>
        </p>

        <p>
          <b>TTIP:</b>{" "}
          <Link to="/TTIP/TTIP">https://folkarps.com/TTIP/TTIP</Link>
        </p>
      </div>
    </div>
    <p></p>
    <p></p>
    <h2 className="c">Optional mods and addons</h2>
    <p>
      Mods listed below are <b>not required</b>, but can be used. You can choose
      to use all, some, or none of them. Mods not listed below cannot be used,
      as the server runs a whitelist, and will not let you connect.
    </p>
    <p>
      <b>Available through Steam Workshop</b>
    </p>
    <ul>
      <p>
        <em>Highly Recommended Mods</em>
      </p>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://steamcommunity.com/sharedfiles/filedetails/?id=450814997"
        >
          Community Base Addons
        </a>{" "}
        - required for STUI and some others.
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://steamcommunity.com/sharedfiles/filedetails/?id=498740884"
        >
          ShackTac User Interface
        </a>{" "}
        - Highly recommended for situational awareness. (Discontinued but may still be used)
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://steamcommunity.com/sharedfiles/filedetails/?id=1638341685"
        >
          DUI
        </a>{" "}
        - Modern successor to STUI. Use <i>in place</i> of STUI, not alongside.
      </li>

      <p>
        <em>
          <br />
          Niche Utility Mods
        </em>
      </p>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://steamcommunity.com/sharedfiles/filedetails/?id=876991445"
        >
          MRB Voice Stop
        </a>{" "}
        - Makes AI less chatty.
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://steamcommunity.com/sharedfiles/filedetails/?id=683611755"
        >
          Outlawled Mag repack
        </a>{" "}
        - Allows you to repack magazines.
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://steamcommunity.com/sharedfiles/filedetails/?id=825181638"
        >
          Dynasound 2
        </a>{" "}
        - BOOOM, WHOOOOOSH, RATATATATATATA!!
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://steamcommunity.com/sharedfiles/filedetails/?id=825172265"
        >
          Immerse
        </a>{" "}
        - Boom shake shake rattle and roll (your view).
      </li>
    </ul>
    <p>
      <b>
        <br />
        Zeus Related Mods
      </b>
    </p>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://steamcommunity.com/sharedfiles/filedetails/?id=1858075458"
        >
          LAMBS Danger
        </a>{" "}
        - Required if you want to be Zeus for one of our Zeus missions.
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://steamcommunity.com/sharedfiles/filedetails/?id=1862208264"
        >
          LAMBS Turrets
        </a>{" "}
        - Also required for any Zeus activities.
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://steamcommunity.com/sharedfiles/filedetails/?id=1808238502"
        >
          LAMBS Suppression
        </a>{" "}
        - Required for Zeus.
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://steamcommunity.com/sharedfiles/filedetails/?id=723217262"
        >
          Achilles
        </a>{" "}
        - Required for Zeus.
      </li>
    </ul>

    <p>
      <b>
        <br />
        Not on Steam Workshop
      </b>
    </p>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.armaholic.com/page.php?id=18963"
        >
          TAO Fold Map
        </a>{" "}
        - Allows you to view a quarter-size map on the move.
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/0B1kTIqHeIfLHclFxYWRQcm5EVFE/view"
        >
          Ciaran's Apex LMG mag fix
        </a>{" "}
        - Allows you to load 30rnd mags into the Apex LMGs
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://forums.bistudio.com/showthread.php?183780-Cyprus-Push-toHear"
        >
          Push-to-hear
        </a>{" "}
        - Allows you to temporarily lower game sounds on key press
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.mediafire.com/download/2p4kctz63vht3pg/%40FA_gps%2B.zip"
        >
          FA_gps+(by Head)
        </a>{" "}
        - Returns the gps to the{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://i.imgur.com/oLPKQnV.jpg"
        >
          old ways of a2
        </a>. DO NOT USE THE STEAM WORKSHOP VERSION.
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.mediafire.com/download/10369605ehriupe/@FA_map.zip"
        >
          FA_map
        </a>{" "}
        - Defaults to white contour map instead of terrain map
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://bit.ly/1eGUPuL"
        >
          FA_warname(by Head)
        </a>{" "}
        - changes the names of the in-game weapons to their real life
        counterparts
      </li>
    </ul>
    <p>For both FA_gps+ and FA_map, the Arma 3 launcher will attempt to unload them when connecting to the server. The mods can in fact be used - just override the launcher by selecting "keep loaded" for each mod.</p>
    <p>
      <b>
        <br />
        Optional TeamSpeak 3 Addons
      </b>
    </p>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://addons.teamspeak.com/directory/addon/miscellaneous-plugins/CrossTalk.html"
        >
          Cross Talk
        </a>{" "}
        - allows you to add distortion and duck channels on TS3.
      </li>
    </ul>
  </Layout>
)

export default Classified
