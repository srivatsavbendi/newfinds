import React, { useState } from 'react';

const MainComponent = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleTopic = (topic) => {
    if (selectedCategories.includes(topic)) {
      setSelectedCategories([]);

      artb = "black"; 
      artc = "white";
    } else {
      setSelectedCategories([topic]);
    }
  };

  const recommended = [
    {
      name: "Morning Brew",
      logo: "https://avatars.githubusercontent.com/u/50154055?s=280&v=4",
      description: "Stay updated with an entertaining and efficient daily news experience. Morning Brew offers a fresh perspective on business news from Wall St. to Silicon Valley.",
      topic: ["Business", "Technology"],
      frequency: ["Daily"],
      content: "5 Min.",
      url: "https://links.swapstack.co/y9jm"
    },
    {
      name: "The Goodnewsletter",
      logo: "https://global-uploads.webflow.com/5f60fb7c410ff4ad7027e270/618631ccf9e6f5f73e7715bf_Good-Good-Good-Logo.jpg",
      description: "Explore stories of progress, inspirational helpers, and reasons to be hopeful. The Goodnewsletter brings you good news from around the world.",
      topic: ["Positivity", "Culture"],
      frequency: ["Weekly"],
      content: "3-5 Min.",
      url: "https://www.goodgoodgood.co/goodnewsletter?rh_partner=aa180c3f79"
    },
    {
      name: "1440",
      logo: "https://media.licdn.com/dms/image/D560BAQEr7RZ-vN28ng/company-logo_200_200/0/1667387961192?e=2147483647&v=beta&t=V5nKsuhryRb1hkVQ6nbnMOgyMW5dlsJXqx_e_W9uYE0",
      description: "The daily newsletter helping 2.6M+ Americans stay informed—it’s news without motives, edited to be unbiased as humanly possible. The team at 1440 scours over 100+ sources so you don't have to.",
      topic: ["News", "Culture", "Science", "Sports", "Politics", "Business"],
      frequency: ["Daily"],
      content: "5 Min.",
      url: "https://links.swapstack.co/bghk"
    },
    {
      name: "The Marginalian",
      logo: "https://i0.wp.com/www.themarginalian.org/wp-content/uploads/2021/10/cropped-tm_site_icon-1.png?fit=240%2C240&ssl=1",
      description: "Experience a free Sunday digest featuring mind-broadening and heart-lifting reflections spanning art, science, poetry, philosophy, and more in the search for truth, beauty, meaning, and creative vitality.",
      topic: ["Poetry", "Art", "Culture"],
      frequency: ["Weekly"],
      content: "5+ Min.",
      url: "https://www.themarginalian.org/?utm_source=snacknation&utm_medium=blog&utm_campaign=best-email-newsletters"
    }, 
    {
      name: "Acclimate",
      logo: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fb043ddffa250a402811d5cd649256fa6.cdn.bubble.io%2Ff1686932436250x123384692431772300%2F1.png?w=&h=&auto=compress&dpr=1&fit=max",
      description: "Get smarter about climate. Sign up for the daily 5-minute email on climate business, tech, and policy you’ll actually want to read.",
      topic: ["Climate", "Business", "Technology", "Politics"],
      frequency: ["Daily"],
      content: "3-5 Min.", 
      url: "https://climatebriefnewsletter.com/"
    },
    {
      name: "Racing Recap",
      logo: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fb043ddffa250a402811d5cd649256fa6.cdn.bubble.io%2Ff1678990186762x440204114043102800%2FLogo%2520w%253Ao%2520background.png?w=192&h=192&auto=compress&dpr=2&fit=max",
      description: "5-min weekly email covering the top news. Makes following Formula 1 so much easier.",
      topic: ["F1", "Culture", "Sports"],
      frequency: ["Weekly"],
      content: "5 Min.",
      url: "https://links.swapstack.co/kyev"
    },
    {
      name: "Stat Significant",
      logo: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fb043ddffa250a402811d5cd649256fa6.cdn.bubble.io%2Ff1669663540876x803206673729728300%2FDALL%25C2%25B7E%25202022-11-22%252014.38.06.png?w=192&h=192&auto=compress&dpr=2&fit=max",
      description: "Weekly newsletter featuring data-centric essays about culture, economics, sports, statistics, and more. Subscribe for free to find out!",
      topic: ["Data", "Culture", "Technology", "Sports"],
      frequency: ["Weekly"],
      content: "1-2 Min.",
      url: "https://links.swapstack.co/erim"
    },
    {
      name: "AI Tool Report",
      logo: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fb043ddffa250a402811d5cd649256fa6.cdn.bubble.io%2Ff1684793077290x835178776721236200%2FAi-Tool-Reportwhite%2520logo.jpg?w=192&h=192&auto=compress&dpr=2&fit=max",
      description: "Learn AI in 5 Minutes a Day. Join 70,000+ free daily readers for trending tools, productivity-boosting prompts, the latest news, and more.",
      topic: ["AI", "Technology", "Business", "Productivity"],
      frequency: ["Daily"],
      content: "1-2 Min.", 
      url: "https://links.swapstack.co/ef0t?email={$email}"
    },
    {
      name: "Smartr Daily",
      logo: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fb043ddffa250a402811d5cd649256fa6.cdn.bubble.io%2Ff1665829487058x334489657424204000%2Fistockphoto-1321128822-612x612.jpg?w=192&h=192&auto=compress&dpr=2&fit=max",
      description: "Sourcing the smartest articles on the Web. Thought-provoking ideas and insights delivered straight to your inbox daily!",
      topic: ["Productivity", "Culture"],
      frequency: ["Daily"],
      content: "3-5 Min.", 
      url: "https://links.swapstack.co/3j5b?email={$email}"
    },
    {
      name: "The GIST",
      logo: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fb043ddffa250a402811d5cd649256fa6.cdn.bubble.io%2Ff1683259705858x365170812241628600%2FGIST%2520LOGO%25203.png?w=192&h=192&auto=compress&dpr=2&fit=max",
      description: "All the important headlines from every sport sent to your email every morning, with equal importance put on both male and female sports.",
      topic: ["Sports"],
      frequency: ["Daily"],
      content: "3-5 Min.", 
      url: "https://links.swapstack.co/jsm8?email={$email}"
    },
    {
      name: "Collectors: Free DIY Tutorials",
      logo: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fb043ddffa250a402811d5cd649256fa6.cdn.bubble.io%2Ff1689102472906x239242695677037060%2F63f692a99fada_a53dcda511d0237fb1d77a1bd0c11ca0%2520%25281%2529.jpeg?w=192&h=192&auto=compress&dpr=2&fit=max",
      description: "Take your skills to the next level with access to a huge DIY woodworking plans collection. Subscribe for step-by-step instructions, blueprints, and expert resources.",
      topic: ["Art"],
      frequency: ["Weekly"],
      content: "5+ Min.", 
      url: "https://links.swapstack.co/u2zi?email={$email}"
    },
    {
      name: "Bull Street Talk",
      logo: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fb043ddffa250a402811d5cd649256fa6.cdn.bubble.io%2Ff1692718702243x157469138532545280%2F%255Bremoval.ai%255D_062d9c24-b9e7-4229-96d9-1132143f8479-jaysontechnologytrading2_cute_mascot_logo_design_for_a_bull_inv_37b83337-98e0-4a2e-956a-e061a6c0fbb3.png?w=192&h=192&auto=compress&dpr=2&fit=max",
      description: "Gain valuable insights on the latest news, opportunities, and strategies from our team. Get The FREE Newsletter.",
      topic: ["Investing", "Business"],
      frequency: ["Weekly"],
      content: "3-5 Min.", 
      url: "https://links.swapstack.co/ov8z?email={$email}"
    },
    {
      name: "The GIST College",
      logo: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fb043ddffa250a402811d5cd649256fa6.cdn.bubble.io%2Ff1683260272636x766228530012996700%2FGIST%2520LOGO%25205.png?w=192&h=192&auto=compress&dpr=2&fit=max",
      description: "Subscribe to The GIST's college sports newsletter to get 'the gist' of what's up in the NCAA and your favorite conference in less than 5 minutes.",
      topic: ["Sports"],
      frequency: ["Weekly"],
      content: "3-5 Min.", 
      url: "https://links.swapstack.co/iv3c?email={$email}"
    },
    {
      name: "The 1 Min Daily Question",
      logo: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fswapstack.cdn.bubble.io%2Ff1682010600120x830179826928990600%2Fnoun-potion-2551490-4C25E1.png?w=192&h=192&auto=compress&dpr=2&fit=max",
      description: "Get free access to a simple yet powerful 1-minute brain hack designed to eliminate overwhelm and skyrocket your productivity. Based on proven neuroscience and repetitive exposure techniques.",
      topic: ["Productivity"],
      frequency: ["Daily"],
      content: "1-2 Min.", 
      url: "https://links.swapstack.co/5ddu"
    },
    {
      name: "The Average Joe",
      logo: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fb043ddffa250a402811d5cd649256fa6.cdn.bubble.io%2Ff1682724891618x606348543043106800%2FTAJ%2520Vertical%2520Logo.png?w=192&h=192&auto=compress&dpr=2&fit=max",
      description: "The 'IKEA instructions for investing' to help you become a better investor. Market trends & insights that are simple, concise, and impactful.",
      topic: ["Investing", "Business"],
      frequency: ["Daily"],
      content: "3-5 Min.",
      url: "https://links.swapstack.co/q2bj?email={$email}"
    },
    {
      name: "The Offer Sheet",
      logo: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fb043ddffa250a402811d5cd649256fa6.cdn.bubble.io%2Ff1671999309653x574505029641047230%2FThe%2520Offer%2520Sheet%2520logo%2520white.png?w=192&h=192&auto=compress&dpr=2&fit=max",
      description: "The most unique and lucrative short term rental investment opportunities hitting the market the previous day. Readers save countless hours every day scouting the best STR properties nation wide.",
      topic: ["Rentals", "Business"],
      frequency: ["Daily"],
      content: "5+ Min.",
      url: "https://links.swapstack.co/cpl1?email={$email}"
    },
    {
      name: "International Intrigue",
      logo: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fb043ddffa250a402811d5cd649256fa6.cdn.bubble.io%2Ff1633287725564x579646940646354700%2FIntrigue%2520Art%2520Files_ii%2520INTERNAL%2520LOGO.png?w=192&h=192&auto=compress&dpr=2&fit=max",
      description: "The most important geopolitical news and analysis written in a daily briefing by former international diplomats.",
      topic: ["Geopolitics", "Business", "Technology"],
      frequency: ["Daily"],
      content: "<5 Min.",
      url: "https://links.swapstack.co/or7p"
    },
    {
      name: "The Daily Upside",
      logo: "https://images.opumo.com/wordpress/wp-content/uploads/2022/03/opumo-The-Daily-Upside_0001_Composizione-livelli-2.jpg",
      description: "Gain insights beyond headlines with engaging stories in business. The Daily Upside offers thought-provoking analysis on important business matters.",
      topic: ["Business"],
      frequency: ["Daily"],
      content: "5 Min.",
      url: "https://www.thedailyupside.com/welcome/?utm_source=SnackNation&utm_medium=Affiliate&utm_content=Best-Email-Newsletters"
    },
    {
      name: "The Daily Good",
      logo: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/315431922_2217189411793637_3643933529744560962_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=re-pdbAnzDwAX-f_msj&_nc_ht=scontent-ord5-2.xx&oh=00_AfB0Pqicvk1-PJQWWCB-H6M_cf2xZ5UV6-sNz1pnp4Y1rg&oe=6503AA36",
      description: "Experience a 30-second dose of soothing playlists, sustainable recipes, and inspiring articles delivered to your inbox daily. Join 225,000 readers for a moment of positivity.",
      topic: ["Positivity", "Lifestyle", "Culture", "Art"],
      frequency: ["Daily"],
      content: "30 Sec.",
      url: "https://www.thegoodtrade.com/the-daily-good/?utm_source=The+Assist&utm_medium=newsletter&utm_campaign=swap"
    },
    {
      name: "The Donut",
      logo: "https://images-platform.99static.com/cAduByW4ggt_jbNMO2uhdXR30a4=/0x0:1774x1774/500x500/top/smart/99designs-contests-attachments/106/106499/attachment_106499747",
      description: "Discover impartial, trustworthy news that's enjoyable to read. The Donut delivers fast, witty updates from DC to Wall Street to Silicon Valley without jargon or bias.",
      topic: ["News", "Business"],
      frequency: ["Daily"],
      content: "3-5 Min.",
      url: "https://thedonut.co/?utm_medium=blog&utm_source=snacknation+blog&utm_campaign=share-link"
    },
    {
      name: "The Newsette",
      logo: "data:image/png;base64,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",
      description: "Stay informed about women, self-care, culture, and motivation with The Newsette. Get news you need to know, discover things you'll become obsessed with, and follow inspiring women.",
      topic: ["Women", "Lifestyle", "Culture"],
      frequency: ["Daily"],
      content: "3-5 Min.",
      url: "https://thenewsette.com/fbs/?utm_source=Swapstack&utm_medium=email&utm_campaign=the-assist"
    },
    {
      name: "Thrive25",
      logo: "https://images.squarespace-cdn.com/content/v1/62c84bb0b5f1034330a57fa8/55476e85-7387-41dc-9655-1e0cfdeee9c8/Thrive25-logo-icon-blue.png",
      description: "Receive a guide to health and longevity in just 5 minutes. Live smarter, better, and longer with Thrive25.",
      topic: ["Health", "Lifestyle"],
      frequency: ["Daily"],
      content: "5 Min.",
      url: "https://www.thrive25.com/?utm_source=snacknation&utm_medium=blog&utm_campaign=free+newsletter"
    },
    {
      name: "The Hustle",
      logo: "https://delighted.com/wp-content/uploads/2020/02/the-hustle-logo-2x.png",
      description: "Stay updated on business and tech in just 5 minutes. Join 2.5M+ innovators who rely on The Hustle for concise and insightful updates.",
      topic: ["FinTech", "Business", "Technology"],
      frequency: ["Daily"],
      content: "5 Min.",
      url: "https://thehustle.co/?utm_source=snacknation&utm_medium=blog&utm_campaign=best-email-newsletters"
    },
    {
      name: "NextDraft",
      logo: "https://nextdraft.com/wp-content/themes/nextdraft-refresh/images/refresh/header-logo.svg",
      description: "Get real news daily curated by Dave Pell, Managing Editor of the Internet. NextDraft brings you concise and insightful updates.",
      topic: ["Curated", "Business", "Technology"],
      frequency: ["Daily"],
      content: "5 Min.",
      url: "https://nextdraft.com/?utm_source=snacknation&utm_medium=blog&utm_campaign=best-email-newsletters"
    },  
  ];

  const filteredNewsletters = selectedCategories.length > 0
    ? recommended.filter(newsletter => newsletter.topic.some(t => selectedCategories.includes(t)))
    : recommended;

  const backgroundColor = "white";
  const backgroundText = "black";
  const topicsColor = "white";
  const topicsText = "black";
  const cardColor = "#white";
  const cardText = "black";
  const cardButtonColor = "white";

  const [allb, setAllb] = useState("black");
  const [allc, setAllc] = useState("white");
  const [artb, setArtb] = useState("white");
  const [artc, setArtc] = useState("black");
  const [businessb, setBusinessb] = useState("white");
  const [businessc, setBusinessc] = useState("black");
  const [climateb, setClimateb] = useState("white");
  const [climatec, setClimatec] = useState("black");
  const [cultureb, setCultureb] = useState("white");
  const [culturec, setCulturec] = useState("black");
  const [lifestyleb, setLifestyleb] = useState("white");
  const [lifestylec, setLifestylec] = useState("black");
  const [politicsb, setPoliticsb] = useState("white");
  const [politicsc, setPoliticsc] = useState("black");
  const [productivityb, setProductivityb] = useState("white");
  const [productivityc, setProductivityc] = useState("black");
  const [sportsb, setSportsb] = useState("white");
  const [sportsc, setSportsc] = useState("black");
  const [techb, setTechnologyb] = useState("white");
  const [techc, setTechnologyc] = useState("black");

  const restart = () => {
    setAllb("white");
    setAllc("black");
    setArtb("white");
    setArtc("black");
    setBusinessb("white");
    setBusinessc("black");
    setClimateb("white");
    setClimatec("black");
    setCultureb("white");
    setCulturec("black");
    setLifestyleb("white");
    setLifestylec("black");
    setPoliticsb("white");
    setPoliticsc("black");
    setProductivityb("white");
    setProductivityc("black");
    setSportsb("white");
    setSportsc("black");
    setTechnologyb("white");
    setTechnologyc("black");
  };

  const runart = () => {
    console.log("hi");
    restart(); 
    setArtb("black");
    setArtc("white");
  };
  const runbusiness = () => {
    restart(); 
    setBusinessb("black");
    setBusinessc("white");
  };
  const runclimate = () => {
    restart(); 
    setClimateb("black");
    setClimatec("white");
  };
  const runculture = () => {
    restart(); 
    setCultureb("black");
    setCulturec("white");
  };
  const runlifestyle = () => {
    restart(); 
    setLifestyleb("black");
    setLifestylec("white");
  };

  const runpolitics = () => {
    restart(); 
    setPoliticsb("black");
    setPoliticsc("white");
  };
  const runproductivity = () => {
    restart(); 
    setProductivityb("black");
    setProductivityc("white");
  };
  const runsports = () => {
    restart(); 
    setSportsb("black");
    setSportsc("white");
  };
  const runtechnology = () => {
    restart(); 
    setTechnologyb("black");
    setTechnologyc("white");
  };

  return (
    <div className="m-0" style={{backgroundColor: backgroundColor, color: backgroundText}}>
      <div className="border pt-2 px-4 m-0 fixed-top bg-white">
        <a href="/" className="text-decoration-none text-black"><h1><b>NF</b></h1></a>
      </div>

      <div className="mx-5 pt-4 mt-5">
        <div className="topic-buttons mt-2 mb-1 text-center">
          <span><button className="btn mx-2 border-0 "><a style={{backgroundColor: allb, color: allc}} className="px-2 round btn text-decoration-none" href="/">All</a></button></span>
          <span><button className="btn mx-2 border-0 " style={{backgroundColor: artb, color: artc}} onClick={() => { toggleTopic('Art'); runart(); }}>Art</button></span>
          <span><button className="btn mx-2 border-0 " style={{backgroundColor: businessb, color: businessc}} onClick={() => { toggleTopic('Business'); runbusiness(); }}>Business</button></span>
          <span><button className="btn mx-2 border-0 " style={{backgroundColor: climateb, color: climatec}} onClick={() => { toggleTopic('Climate'); runclimate(); }}>Climate</button></span>
          <span><button className="btn mx-2 border-0 " style={{backgroundColor: cultureb, color: culturec}} onClick={() => { toggleTopic('Culture'); runculture(); }}>Culture</button></span>
          <span><button className="btn mx-2 border-0 " style={{backgroundColor: lifestyleb, color: lifestylec}} onClick={() => { toggleTopic('Lifestyle'); runlifestyle(); }}>Lifestyle</button></span>
          <span><button className="btn mx-2 border-0 " style={{backgroundColor: politicsb, color: politicsc}} onClick={() => { toggleTopic('Politics'); runpolitics(); }}>Politics</button></span>
          <span><button className="btn mx-2 border-0 " style={{backgroundColor: productivityb, color: productivityc}} onClick={() => { toggleTopic('Productivity'); runproductivity(); }}>Productivity</button></span>
          <span><button className="btn mx-2 border-0 " style={{backgroundColor: sportsb, color: sportsc}} onClick={() => { toggleTopic('Sports'); runsports(); }}>Sports</button></span>
          <span><button className="btn mx-2 border-0 " style={{backgroundColor: techb, color: techc}} onClick={() => { toggleTopic('Technology'); runtechnology(); }}>Technology</button></span>
        </div>
      </div>

      <div className="card-deck row d-flex justify-content-center m-0">
        {filteredNewsletters.map((newsletter, index) => (
          <div key={index} className="card m-3 col-lg-3 col-sm-5 col-8 p-0" style={{backgroundColor: cardColor, color: cardText}}>
            <img src={newsletter.logo} className="card-img-top mt-5 mb-4" alt={newsletter.name} style={{ maxWidth: '100px', height: '100px', margin: 'auto' }} />
            <div className="card-body px-4">
              <h5 className="card-title">{newsletter.name}</h5>
              <p className="card-text">{newsletter.description}</p>
              <a href="#" className="btn btn-sm border mt-2 me-2" style={{backgroundColor: cardButtonColor, color: 'black'}} >{newsletter.topic[0]}</a>
              <a href="#" className="btn btn-sm border mt-2 me-2" style={{backgroundColor: cardButtonColor, color: 'black'}} >{newsletter.frequency}</a>
              <a href="#" className="btn btn-sm border mt-2 btn-primary" style={{backgroundColor: cardButtonColor, color: 'black'}} >{newsletter.content}</a>

            </div>

            <a href={newsletter.url} className="text-black text-decoration-none"><div className="card-footer m-0 text-center" style={{maxWidth: "100vw", backgroundColor: cardColor, color: 'black'}}>
              Subscribe
            </div></a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainComponent;
