import React, {useState} from 'react'
import './TabsInReact.css'

const TabsInReact = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
  
    return (
      <div className="site-wrapper">
        <section className="tabs-wrapper">
          <div className="tabs-container">
            <div className="tabs-block">
              <div className="tabs">
                <input type="radio" name="tabs" id="tab1" checked={activeTab === 'tab1'} onChange={() => handleTabChange('tab1')} />
                <label htmlFor="tab1"><span className="material-icons">favorite_border</span> Angular</label>
                <div className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}>
                  <h2>Angular</h2>
                  <p>One of the most powerful, efficient, and open-source JavaScript frameworks is <a href="https://angularjs.org/">Angular</a>. Google operates this framework and is implemented to use for developing a Single Page Application (SPA). It extends the HTML into the application and interprets the attributes to perform data binding.</p>
                </div>
  
                <input type="radio" name="tabs" id="tab2" checked={activeTab === 'tab2'} onChange={() => handleTabChange('tab2')} />
                <label htmlFor="tab2"><span className="material-icons">face</span> React</label>
                <div className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}>
                  <h2>React</h2>
                  <p>Created by Facebook, the <a href="https://reactjs.org/">React framework</a> has earned popularity within a short period. It is used to develop and operate the dynamic User Interface of the web pages with high incoming traffic. It makes the use of a virtual DOM, and hence, the integration of the same with any application is more straightforward.</p>
                </div>
  
                <input type="radio" name="tabs" id="tab3" checked={activeTab === 'tab3'} onChange={() => handleTabChange('tab3')} />
                <label htmlFor="tab3"><span className="material-icons">lightbulb</span> Vue</label>
                <div className={`tab ${activeTab === 'tab3' ? 'active' : ''}`}>
                  <h2>Vue</h2>
                  <p>Though developed in the year 2016, this <a href="https://vuejs.org/">JavaScript framework</a> has already made its way into the market and has proven its worth by offering various features. Its dual integration mode is one of the most attractive features for creating high-end SPA or Single Page Application.It is a much reliable platform for developing cross-platform.</p>
                </div>
  
                <input type="radio" name="tabs" id="tab4" checked={activeTab === 'tab4'} onChange={() => handleTabChange('tab4')} />
                <label htmlFor="tab4"><span className="material-icons">grade</span> Ember</label>
                <div className={`tab ${activeTab === 'tab4' ? 'active' : ''}`}>
                  <h2>Ember</h2>
                  <p>The introduction of <a href="https://www.emberjs.com/">Ember.js</a> to the software market was 2015, and since then, it has gained popularity with its wide application area. The features of Ember.js support two-way data binding and hence, establish a reliable platform for handling the complicated User Interfaces. Popular websites like LinkedIn, Netflix, Nordstrom, and many more use the Ember.JS platform for their websites.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="credits"><a href="https://htmlcssfreebies.com/pure-html-css-tabs/" target="_blank">Pure HTML CSS Tabs</a> by HTMLCSSFreebies.</div>
        </footer>
      </div>
    );
}

export default TabsInReact
