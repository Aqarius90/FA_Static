import React, { Component } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Insignia extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabIndex: this.props.location.state
        ? this.props.location.state.redirect
        : 4,
    } //latest
  }
  render() {
    let thisIndex = this.state.tabIndex
    thisIndex =
      typeof thisIndex === "number" //if tab, tab
        ? thisIndex //if not, parse
        : thisIndex === "2014"
        ? 0
        : thisIndex === "2015"
        ? 1
        : thisIndex === "2016"
        ? 2
        : thisIndex === "2017"
        ? 3
        : thisIndex === "2018"
        ? 4
        : 4 //when in doubt, latest
    return (
      <Layout>
        <SEO title="Insignia" />{" "}
        <div className="c">
          <h4 class="classified  classified--title">[DECLASSIFIED]</h4>
          <p class="russian">Cleared by the procurement buro</p>
        </div>
        <div>
          <Tabs
            selectedIndex={thisIndex}
            onSelect={tabIndex => this.setState({ tabIndex })}
          >
            <TabList>
              <Tab>2014</Tab>
              <Tab>2015</Tab>
              <Tab>2016</Tab>
              <Tab>2017</Tab>
              <Tab>2018</Tab>
            </TabList>
            <TabPanel>
              <div className="formatted">
                <p>
                  <b>
                    Comrades of the Politburo, what's this rumour I hear about a
                    secret Party project to create patches?
                  </b>
                </p>
                <p>
                  Trading in rumours, comrade? A dangerous business that can get
                  you arrested! However, in this case the rumour is true.
                  Behold, prototypes from the secret facility created by comrade
                  Tigershark{" "}
                  <em style={{ fontSize: "70%" }}>
                    (no, not that facility, a new one)
                  </em>
                  :
                </p>
                <img
                  src="https://www.folkarps.com/PNG/patches/2014.jpg"
                  width="500"
                  height="351"
                  alt="2014 patch"
                />
                <p>
                  <b>How do I get hold of one?</b>
                </p>
                <p>
                  Once we've ironed-out (hurr) some issues with the first batch{" "}
                  <em style={{ fontSize: "70%" }}>
                    (radiation, unacceptable worker mortality rates ... nothing
                    too serious)
                  </em>
                  , we shall initiate a programme of distributing patches to
                  comrade-supporters of our server, K19-III. More details will
                  follow at a later date, but you'll have to excuse me{" "}
                  <em style={{ fontSize: "85%" }}>for now </em>
                  <em style={{ fontSize: "70%" }}>because I have</em>
                  <em style={{ fontSize: "55%" }}> a headache </em>
                  <em style={{ fontSize: "40%" }}>and nausea</em>...
                </p>
                <p>
                  <b>Comrade? Comrade, are you there?</b>
                </p>
                <p className="actual-info">
                  Unfortunately, 2014 edition patches are now out of stock.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="formatted">
                <p>
                  <b>
                    Comrade Commissar, what are those strange crates that have
                    been showing up all over the base?
                  </b>
                </p>
                <p>
                  The leaky ones, the glowing ones, or the ones with the
                  biohazard stickers?
                </p>
                <p>
                  <b>Uh...well, let's start with those last ones.</b>
                </p>
                <p>
                  Ah, you mean the ones for the patches? Well, we were going to
                  make an official announcement a bit later, but since you're
                  asking: The Party R&D committee is preparing for the launch of
                  the all new and improved Folk ARPS Morale Patch! The
                  production is going great,{" "}
                  <em style={{ fontSize: "30%" }}>
                    with like 20% less heavy metal poisoning,
                  </em>{" "}
                  and we expect the full roll out to begin shortly. The science
                  bureau has been hard at work to outdo it's last year's
                  patch-related achievements, and I dare say they did a hell of
                  a job at it
                  <em style={{ fontSize: "30%" }}>, may they rest in peace</em>!
                </p>
                <img
                  src="https://www.folkarps.com/PNG/patches/testimonials-suntze.jpg"
                  width="480"
                  height="640"
                  alt="2015 patch"
                />
                <p>
                  <b>Improved morale patch? Does it really improve morale?</b>
                </p>
                <p>
                  I assure you, comrade, morale improvement is definitely one of
                  the <em style={{ fontSize: "30%" }}>possible side</em>effects!
                  Not only that, but the size has been practically doubled, but
                  the head of the science department assures me that the new
                  shield shape will significantly boost the provided protection.
                </p>
                <p>
                  <b>Protection? Are the patches bulletproof?</b>
                </p>
                <p>
                  Uh...sure, why not. Anyway, they also added velcro backing, to
                  make it even easier to attach to your jacket and/or backpack!
                </p>
                <p>
                  <b>That's fantastic! How do I get one?</b>
                </p>
                <p>
                  You will be fully informed of the distribution process as soon
                  as the engineering department irons out a few kinks. They
                  assure me they can get them to below 300 rads by Wednesday, so
                  keep your ears peeled! You might just want to sign up for one
                  in advance!
                </p>
                <p>
                  <b>
                    I definitely will! I've seen some comrades wearing the last
                    year's patch, and they were all glowing with pride! I will
                    be sure to get one of my own this time!
                  </b>
                </p>
                <p>Uh, yes, absolutely, pride. Glowing with pride.Right.</p>
                <p className="actual-info">
                  OK, jokes aside, just like last year, we are ordering a batch
                  of custom made patches, made after a design lovingly crafted
                  by comrade Tigershark. Unlike the old design, the patches are
                  larger, at 8cm width and 9.5cm height. The patches will be
                  available to anyone interested, at 7GBP/10USD/10EUR,
                  international postage included. All money earned (if, by some
                  freak accident, there is any) will go towards next year's
                  upkeep of our K19-III Widowmaker game server. So you get to
                  have a patch, and contribute to paying{" "}
                  <s>Tiger's lawyer fees</s> for FA's continuing existence.Do
                  your share, and look cool doing it!
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="formatted">
                <p>
                  <b>
                    Hey, comrade Commissar, I've been meaning to talk to you!
                    I've noticed a batch of those "biohazard" crates came in
                    yesterday. I don't suppose the Party preparing a
                    morale-patch related surprise for the winter holidays?
                  </b>
                </p>
                <p>
                  Of course not, comrade. "The winter holidays" are nothing but
                  a consumerist ploy to drag people's attention away from the
                  glory that is our Agrarian Utopia. Suggesting anything else
                  would be counterrevolutionary talk!
                </p>
                <p>
                  <b>
                    Uh... of course, comrade Commissar. That's what I meant to
                    say.
                  </b>
                </p>
                <p>
                  Exactly. On an entirely unrelated note: The Party has been
                  hard at work preparing a special, end-of-the-calendar-year
                  surprise! As you have so cleverly guessed, we are rolling out
                  the new and improved version of the last year's new and
                  improved morale patch.
                </p>
                <img
                  alt="2016 patch"
                  src="https://www.folkarps.com/PNG/patches/2016-patch.png"
                />
                <p>
                  <b>An improved improved morale patch?</b>
                </p>
                <p>
                  Exactly! The old velcro backing has been retained, but the
                  shield shape has been streamlined for better aerodynamics.
                </p>
                <p>
                  <b>
                    That sounds excellent! But wait, I've noticed the crates
                    were noticeably heavier than last year's. how are the
                    patches streamlined if they're also heavier?
                  </b>
                </p>
                <p>
                  No, that's just the lead lining. The patches retain roughly
                  the same size. The behind-the-scenes workings, however, have
                  been significantly upgraded. I hear the production process
                  uses only a quarter of agar base it used earlier.
                </p>
                <p>
                  <b>What's agar?</b>
                </p>
                <p>
                  It's a gelatinous...the point is, we've made the whole process
                  much more efficient. It uses less man-hours, less resources,
                  and the patch itself has a much, much longer expected{" "}
                  <em style={{ fontSize: "30%" }}>half-</em>life.
                </p>
                <p>
                  <b>
                    That's excellent news, comrade Commissar! I'll be sure to
                    grab one as soon as they're available! ...Uh, how do I grab
                    one? Is the procedure the same as last year?
                  </b>
                </p>
                <p>
                  Sadly, budgetary constraints have forced us to extend our
                  self-equipment program into the next year. I am, however,
                  proud to say that <em style={{ fontSize: "30%" }}>some of</em>{" "}
                  the savings achieved through greater efficiency will be passed
                  on to all comrades. You will soon be able to don your brand
                  new morale patch, for a fraction of the cost of the last one.
                  Not to mention the new emblem pattern will help comrades blend
                  in during ops on Tanoa.
                </p>
                <p>
                  <b>
                    I wouldn't be so sure about that. Since we got the last
                    batch of patches, one guy in my unit turned green.
                  </b>
                </p>
                <p>
                  Hahaha, comrade, I'm sure you are referring to "going green".
                  It means someone-
                </p>
                <p>
                  <b>
                    No, I mean, since August, he's been steadily turning ever so
                    slightly green. Literally.
                  </b>
                </p>
                <p>
                  ...Comrade, would you be so kind as to notify your unit that
                  first thing tomorrow morning they are to attend a mandatory
                  lecture on proper uniform maintenance and personal hygiene.
                </p>
                <p className="actual-info">
                  Actual info: We've ordered a new batch of morale patches, with
                  a brand new Tanoa theme! We expect them to be arriving
                  sometime around 2016-01-15. The size is 10x7,5, and they come
                  with a velcro back. Each patch can be had in exchange for 5
                  units of whatever your preferred currency is (as long as it's
                  USD, EUR or GBP), shipping included, and, as usual, all
                  profits (if somehow there is any) go towards the{" "}
                  <s>Dacha whiskey budget</s> maintennance of the K-IV
                  Widowmaker.All funds can be sent to the standard,
                  server-fund@folkarps.com paypal account, along with a message
                  to Prime Minister Netkev, who, as always, has our full
                  support.
                </p>
                <img
                  src="https://www.folkarps.com/PNG/patches/2016sample.jpg"
                  width="907"
                  height="907"
                  alt="2016 patch sample"
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="formatted">
                <p>
                  <b>Good evening, Comrade! Why the long face?</b>
                </p>
                <p>
                  Good evening, Comrade Commissar. I don't know, I guess I just
                  have a long-
                </p>
                <p>
                  <b>
                    No, I mean, why are you all moping around the base lately?
                    Even Burkhanov stopped whistling while fixing the AKs.
                    What's gotten into you?
                  </b>
                </p>
                <p>
                  Well... It's just, the boys were kinda hoping there was gonna
                  be a new patch for the holidays, and-
                </p>
                <p>
                  <b>
                    Comrade! Again with the whole "winter holidays" nonsense!
                    Have you been listening to the propaganda the Americans are
                    blasting again? All these "holidays" are just a consumerist
                    ploy, and our Glorious Agrarian utopia needs exactly none of
                    that!
                  </b>
                </p>
                <p>I understand comrade.</p>
                <p>
                  <b>
                    ...but if it'll stop you from moping, the Party officials{" "}
                    <em>have</em> been working on a little something. And i just
                    so happen to have on me a design preview.
                  </b>
                </p>
                <img
                  alt="2017 patch"
                  src="https://www.folkarps.com/PNG/patches/2017-patch.png"
                />
                <p>
                  I knew it! I knew that's what you were doing on all those late
                  nights there was music coming from the Dacha!
                </p>
                <p>
                  <b>
                    Uh... yes, exactly, that's... that's exactly what we were
                    doing! Either way, this year, we were in close communication
                    with several human rights organizations{" "}
                    <em style={{ fontSize: "30%" }}>
                      as mandated by the last ceasefire
                    </em>
                    , and as such, we decided, this year, to think of those not
                    lucky enough to live under the benevolence of the Party.
                    Having this in view, we have decided to divert some of our
                    equipment budget to those less fortunate.
                  </b>
                </p>
                <p>Equipment budget? We have an equipment budget?</p>
                <p>
                  <b>
                    Well, not as such. Sadly, the embargo by the imperialist
                    pig-dogs continues, and forces us to extend our
                    self-equipment program. On the bright side, our tight
                    <em style={{ fontSize: "30%" }}>
                      ly monitored adherence to the
                    </em>{" "}
                    cooperation agreement with the humanitarians has borne fruit
                    in a brand new mine detecting technology, which he have
                    managed to seamlessly incorporate into the patch design.
                  </b>
                </p>
                <p>A mine detecting patch? That's amazing!</p>
                <p>
                  <b>
                    Indeed it is, comrade. While wearing this patch, any comrade
                    will be instantly notified the minute he steps on a mine.
                    And not only that, but the notice will be relayed onto his
                    entire platoon, or even wider, depending on the acoustics!
                  </b>
                </p>
                <p>
                  The Party never stops to amaze me. Happy New Year, comrade
                  Commissar.
                </p>
                <p>
                  <b>
                    Happy New Year, comrade.
                    <br />
                    <br />
                    <br />
                    ...Say, what's that noise?
                  </b>
                </p>
                <p>
                  ...Aw, comrade Commissar, you even arranged for fireworks for
                  the New Year's Eve!
                </p>
                <p>
                  <b>
                    We most certainly did not. And, as you are sure to recall,
                    fireworks generally explode in the sky, not on our bunkers.
                  </b>
                </p>
                <p>
                  <b>...</b>
                </p>
                <p>
                  <b>Sound the alarm. And get me my AK.</b>
                </p>

                <p className="actual-info">
                  {" "}
                  Actual info: A new year, and a new batch of patches. A Patch
                  Batch, if you will, themed after the new LoW DLC. The patches
                  have a diameter of roughly 6cm, and in many ways{" "}
                  <s>rip off</s> pay homage to the original batch. Each patch
                  can be had in exchange for 10 units of whatever your preferred
                  currency is (as long as it's USD, EUR or GBP), shipping
                  included. In a change to the usual formula,{" "}
                  <em>
                    <b>
                      50% of the proceeds go towards the{" "}
                      <s>Dacha whiskey budget</s> maintenance of the K-IV
                      Widowmaker, with the other 50% being donated to UNHCR.
                    </b>
                  </em>
                  <br />
                  <br />
                  All funds can be sent to the standard,
                  server-fund@folkarps.com paypal account, along with a message
                  to Prime Minister Netkev, who, as always, has our full
                  support.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="formatted">
                <p>
                  <b>
                    Hey there, comrade! Good that I found you - I'm supposed to
                    announce the end-of-2018 equipment guidelines changes.
                  </b>
                </p>
                <p>
                  Hey, comrade Commissar. But wait, didn't the year end, like,
                  over a week ago?
                </p>
                <p>
                  <b>What can i say, we've had shipping problems.</b>
                </p>
                <p>Haha, like in that one afterpar-</p>
                <p>
                  <b>
                    Anyway! Ever since the ceasefire, and the subsequent
                    <em style={{ fontSize: "30%" }}>ly UN-mandated</em>{" "}
                    cooperation with IDAP, we've been{" "}
                    <em style={{ fontSize: "30%" }}>forced to keep</em> working
                    with them in order to bring us up to code on the laws of
                    war.
                  </b>
                </p>
                <p>Are we gonna have to attend another sensitivity workshop?</p>
                <p>
                  <b>
                    <em>ЧЕРТ ВОЗМИ, NO</em>. No more workshops. No, what the
                    IDAP have actually pointed out{" "}
                    <em style={{ fontSize: "30%" }}>over and over again</em> is
                    another thing we should take care of: our uniforms.
                  </b>
                </p>
                <p>What uniforms?</p>
                <p>
                  <b>
                    Exactly. They say we need to have some form of identifying
                    emblem on us, or we don't have a "fixed distinctive sign
                    recognizable at a distance" and are "unlawful combatants"
                    and will be "shot like the dogs we are" or something.
                  </b>
                </p>
                <p>Killjoys.</p>
                <p>
                  <b>Tell me about it.</b>
                </p>
                <p>
                  But wait, what about the patches we got last, I mean, the year
                  before? Don't they count?
                </p>
                <p>
                  <b>
                    Well, they do, technically, but what happened was, ever
                    since we switched to the velcro, the comrades have been
                    losing them all over the place. Apparently, some of the
                    local kids thought they were cool (which they are), and
                    started collecting them. Then, some one phoned in a bomb
                    threat to a local school, they called in a SWAT team, and,
                    well, let's just say Joseph Kony is now following me on
                    Twitter.
                  </b>
                </p>
                <p>
                  Who? Following you? What's a twitter? Should I alert the
                  guards?
                </p>
                <p>
                  <b>
                    No, I meant-Look, the point is, they're making us get
                    uniforms, and we've managed to haggle them down to T-shirts.
                  </b>
                </p>
                <p>T-shirts? Like, with an emblem?</p>
                <p>
                  <b>
                    Exactly. We've managed to arrange a shipment of all-black
                    T-shirts with an identifying marking, that will hopefully
                    keep the IDAP off of our backs for now. Look, I even brought
                    a design preview:
                  </b>
                </p>
                <a href="https://teespring.com/folk-arps">
                  <img
                    src="https://www.folkarps.com/PNG/patches/2018-tshirt.png"
                    width="300"
                    height="300"
                    alt="2018 tshirt"
                  />
                </a>
                <p>Huh. That looks cool!</p>
                <p>
                  <b>
                    Yes it does, comrade. Yes it does. Now if you'll excuse me,
                    I need to go rat out someone to the ICC...
                  </b>
                </p>
                <p className="actual-info">
                  Actual info: in lieu of the usual morale patches, the Party
                  has opted for something a litte bit different - A T-Shirt.{" "}
                  <a href="https://teespring.com/folk-arps">
                    They're available right now, with convenient international
                    shipping
                  </a>
                  , and as usual, all proceeds go towards the{" "}
                  <s>Dacha whiskey budget</s> maintennance of the K-IV
                  Widowmaker. Prime Minister Netkev, still, has our full
                  support.
                </p>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </Layout>
    )
  }
}

export default Insignia
