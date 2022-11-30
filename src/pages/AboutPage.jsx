import theWatcherLogo from "../assets/the-watcher-logo-v2.png"

export default function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-header-container">
        <img src={theWatcherLogo} className="logo about" alt="the-watcher-logo"/>
        <h1 className="hero-title smaller">the <span className="hero-title-highlight">Watcher</span></h1>
      </div>
      <p className="about-description">
        The Watcher aims to deliver the latest headlines from around the 
        globe reported by the most trusted and reliable news sources. 
        This project is powered by 
        <a className="links-about-page" 
          href="//newscatcherapi.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          > &lt;&#x2f;newscatcher&gt;</a>.
      </p>
      <p className="about-description">
        The Watcher was developed by Jazelle Cruz with React.js, Material UI and Axios. 
        The source code can be found in this  
        <a className="links-about-page" 
          href="//github.com/jazellecruz/the-watcher-news-website-react" 
          target="_blank" 
          rel="noopener noreferrer"
          > GitHub repository</a>.
      </p>
    </div>
  );
}