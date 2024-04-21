import "./style.css";

function App() {
  return (
  <>
  {/* HEADER */}
  <header className="header">
  <div className="logo">
    <img
      src="https://todayilearned-beta.netlify.app/logo.png"
      alt="logo"
    />
    <h1>Shane's Everything</h1>
  </div>

  <button className="btn btn-large btn-open">Share something</button>
</header>
<NewNoteForm/>

{/* MAIN */}
<main class="main">
  <Category/>
  <Note/>
</main>
</>
);
}

function NewNoteForm() {
  return(NewNoteForm);
}

function Category() {
  return (<aside>
    Category
  </aside>);
}

function Note() {
  return (<aside>Notes</aside>);
}
export default App;
