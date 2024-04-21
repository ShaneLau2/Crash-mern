import "./style.css";

function App() {
  return (
  <>
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
<Category />
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
  return (
    Note
  );
}
export default App;
