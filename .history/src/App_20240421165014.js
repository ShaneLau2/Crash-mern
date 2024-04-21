import "./style.css";

function App() {
  const appTitle="Shane's Everything";
  return (
  <>
  {/* HEADER */}
  <header className="header">
  <div className="logo">
    <img
      src="https://todayilearned-beta.netlify.app/logo.png"
      alt="logo"
    />
    <h1>{appTitle}</h1>
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
  return(<aside>NewNoteForm</aside> );
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
