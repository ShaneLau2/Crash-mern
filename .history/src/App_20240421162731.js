import "./style.css";

function App() {
  return (<header className="header">
  <div className="logo">
    <img
      src="https://todayilearned-beta.netlify.app/logo.png"
      alt="logo"
    />
    <h1>Shane's Everything</h1>
  </div>

  <button className="btn btn-large btn-open">Share something</button>
</header>);
}


function Category() {
  return (<aside>
    <ul>
      <li>
        <button className="btn btn-all-categories">All</button>
      </li>
      <li>
        <button className="btn btn-category" style="background-color: #3b82f6;">Programming</button>
      </li>
      <li>
        <button className="btn btn-category" style="background-color: #16a34a;">Life</button>
      </li>
      <li>
        <button className="btn btn-category" style="background-color: #ef4444;">University</button>
      </li>
      <li>
        <button className="btn btn-category" style="background-color: #eab308;">Misc</button>
      </li>
    </ul>
  </aside>);
}
export default App;
