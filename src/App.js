import React, { useState } from 'react';

const newsletters = [
  // Sample newsletter data with attributes: "Topic", "Frequency", "Content Type"
  // Replace placeholders with actual data
  { name: 'Morning Brew', logo: 'https://avatars.githubusercontent.com/u/50154055?s=280&v=4', description: 'Morning Brew is a daily newsletter designed for young business professionals. Each morning email has a stock market recap, a few short briefs on the most important business news of the day and a small section with lifestyle content', topic: ['Business', 'Technology'], frequency: ['Daily'], content: '3-5 Min.', url: "https://links.swapstack.co/y9jm"},
    {
      name: "Stat Significant",
      logo: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fb043ddffa250a402811d5cd649256fa6.cdn.bubble.io%2Ff1669663540876x803206673729728300%2FDALL%25C2%25B7E%25202022-11-22%252014.38.06.png?w=192&h=192&auto=compress&dpr=2&fit=max",
      description: "Weekly newsletter featuring data-centric essays about culture, economics, sports, statistics, and more. Subscribe for free to find out!",
      topic: ["Culture", "Technology", "Sports"],
      frequency: ["Weekly"],
      content: "1-2 Min.",
      url: "https://links.swapstack.co/erim"
    },
    {
      name: "AI Tool Report",
      logo: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fb043ddffa250a402811d5cd649256fa6.cdn.bubble.io%2Ff1684793077290x835178776721236200%2FAi-Tool-Reportwhite%2520logo.jpg?w=192&h=192&auto=compress&dpr=2&fit=max",
      description: "Learn AI in 5 Minutes a Day. Join 70,000+ free daily readers for trending tools, productivity-boosting prompts, the latest news, and more.",
      topic: ["Technology", "Business", "Productivity"],
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
      topic: ["Arts", "Culture"],
      frequency: ["Weekly"],
      content: "5+ Min.", 
      url: "https://links.swapstack.co/u2zi?email={$email}"
    },
    {
      name: "Bull Street Talk",
      logo: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fb043ddffa250a402811d5cd649256fa6.cdn.bubble.io%2Ff1692718702243x157469138532545280%2F%255Bremoval.ai%255D_062d9c24-b9e7-4229-96d9-1132143f8479-jaysontechnologytrading2_cute_mascot_logo_design_for_a_bull_inv_37b83337-98e0-4a2e-956a-e061a6c0fbb3.png?w=192&h=192&auto=compress&dpr=2&fit=max",
      description: "Gain valuable insights on the latest news, opportunities, and strategies from our team. Get The FREE Newsletter.",
      topic: ["Business"],
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
      topic: ["Productivity", "Lifestyle"],
      frequency: ["Daily"],
      content: "1-2 Min.", 
      url: "https://links.swapstack.co/5ddu"
    },
    {
      name: "Acclimate",
      logo: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fb043ddffa250a402811d5cd649256fa6.cdn.bubble.io%2Ff1686932436250x123384692431772300%2F1.png?w=&h=&auto=compress&dpr=1&fit=max",
      description: "Get smarter about climate. Sign up for the daily 5-minute email on climate business, tech, and policy you’ll actually want to read.",
      topic: ["Climate", "Business", "Technology", "Politics"],
      frequency: ["Daily"],
      content: "3-5 Min.", 
      url: "https://climatebriefnewsletter.com/"
    }
  
];

const App = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const topicOptions = ['Arts','Business', 'Climate', 'Culture', 'Lifestyle', 'Politics', 'Productivity', 'Sports', 'Technology', 'Travel'];
  const frequencyOptions = ['Daily', 'Biweekly', 'Weekly'];
  const contentOptions = ['1-2 Min.', '3-5 Min.', '5+ Min.'];

  const handleCheckboxChange = (option) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      1: prevAnswers[1] ? [...prevAnswers[1], option] : [option],
      
    }));
  };
  const handleCheckboxChange2 = (option) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      2: prevAnswers[2] ? [...prevAnswers[2], option] : [option],
      
    }));
  };
  const handleCheckboxChange3 = (option) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      3: prevAnswers[3] ? [...prevAnswers[3], option] : [option],
      
    }));
  };

  const handleNextClick = () => {
    setStep(step + 1);
    console.log("Selected topics:", answers[1]);
    console.log("Selected frequencies:", answers[2]);
    console.log("Selected topics:", answers[3]);
    recommendNewsletters(); 

  };

  const recommendNewsletters = () => {
    const userTopics = answers[1] || [];
    const userFrequencies = answers[2] || [];
    const userContentPreference = answers[3];

    const recommendedNewsletters = newsletters.map(newsletter => {
      let points = 0;

      newsletter.topic.forEach(topic => {
        if (userTopics.includes(topic)) {
          points++;
        }
      });

      newsletter.frequency.forEach(frequency => {
        if (userFrequencies.includes(frequency)) {
          points++;
        }
      });

      if (newsletter.content === userContentPreference) {
        points++;
      }

      return { ...newsletter, points };
    });

    const sortedRecommendedNewsletters = recommendedNewsletters.sort((a, b) => b.points - a.points).slice(0, 5);
    console.log(sortedRecommendedNewsletters);
    setRecommended(sortedRecommendedNewsletters);
  };


  const [recommended, setRecommended] = useState([]);

  const renderQuestion = () => {
    return (
      <div className="my-3">
        <div>
          <h4 className="m-2">What topics are you interested in?</h4>
          <p className="m-2">Select all that apply</p>
          <div className = "">
            {topicOptions.map((option, index) => (
              <label className={`btn btn-outline-primary m-2 ${answers[1]?.includes(option) ? 'active' : ''}`} key={index}>
                <input 
                  type="checkbox" 
                  className="btn-check" 
                  checked={answers[1]?.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      

        <div>
            <h4 className="m-2">How often would you like to receieve emails?</h4>
            <div className = "">
              {frequencyOptions.map((option, index) => (
                <label className={`btn btn-outline-primary m-2 ${answers[2]?.includes(option) ? 'active' : ''}`} key={index}>
                  <input 
                    type="checkbox" 
                    className="btn-check" 
                    checked={answers[2]?.includes(option)}
                    onChange={() => handleCheckboxChange2(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="m-2">What is your ideal length for a newsletter?</h4>
            <div>
              {contentOptions.map((option, index) => (
                <label className={`btn btn-outline-primary m-2 ${answers[3]?.includes(option) ? 'active' : ''}`} key={index}>
                  <input 
                    type="checkbox" 
                    className="btn-check" 
                    checked={answers[3]?.includes(option)}
                    onChange={() => handleCheckboxChange3(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div className="my-3 mx-2 justify-content-end d-flex">
            <button className="btn bg-primary text-white" onClick={handleNextClick}>Find Newsletters</button>
          </div>

        </div>
      );

  };

  const renderRecommendations = () => {
    return (
      <div> 
        <p className="my-3 m-2 mb-4">All the newsletters below are free. Feel free to subscribe if you find something that interests you ❤️</p>
        <div className="card-deck">
          {recommended.map((newsletter, index) => (
            <div key={index} className="card mb-4">
              <img src={newsletter.logo} className="card-img-top my-5" alt={newsletter.name} style={{ maxWidth: '100px', margin: 'auto' }} />
              <div className="card-body">
                <h5 className="card-title">{newsletter.name}</h5>
                <p className="card-text">{newsletter.description}</p>
                <a href="#" className="btn btn-primary mr-2">{newsletter.topic[0]}</a>
                <a href="#" className="btn btn-primary mx-2">{newsletter.frequency}</a>
                <a href="#" className="btn btn-primary ml-2">{newsletter.content}</a>
              </div>
              
              <a href={newsletter.url}><div className="card-footer bg-primary text-white text-center">
                Subscribe
              </div></a>

              {/*}
              <div className="card-footer bg-primary text-white text-center">
                Points: {newsletter.points}
              </div>
              */}

            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <h1 className="m-0 pt-3 px-2 "><b>Newsletter Recommender</b></h1>
      {step <= 1 ? renderQuestion() : renderRecommendations()}
    </div>
  );
};

export default App;
