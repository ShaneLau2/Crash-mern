import "./style.css";

const init = [{
  id: 1,
  text: "React is being developed by Meta (formerly facebook)(Source)",
  source: "https://example.com",
  tag: "Programming",

  votesInteresting: 0,
  votesMindblowing: 0,
  voteIndecent: 0,
},{
  id: 2,
  text: "The second note",
  source: "https://example.com",
  tag: "Life",
  votesInteresting: 0,
  votesMindblowing: 0,
  voteIndecent: 0,
},{
  id: 3,
  text: "The third note",
  source: "https://example.com",
  tag: "University",
  votesInteresting: 0,
  votesMindblowing: 0,
  voteIndecent: 0,
}];
const CATELOGIES={
  "PROGRAMMING": "#3b82f6",
  "LIFE":"#16a34a",
  "UNIVERSITY":"#ef4444",
  "MISC":"#eab308",
  "General": "#3b82f6",
  "Technology": "#f59e0b",
  "Science": "#10b981",
  "Health": "#f87171",
  "Sport": "#f472b6",
  "Business": "#fbbf24",
  "Entertainment": "#f472b6",
  "Education": "#10b981",
  "Politics": "#f87171",
  "Travel": "#fbbf24",
  "Food": "#f59e0b",
  "Other": "#3b82f6",
};
function App() {
  const appTitle = "Shane's Everything";

  return (
    <>
      {/* HEADER */}
      <header classNameName="header">
        <div classNameName="logo">
          <img
            src="https://todayilearned-beta.netlify.app/logo.png"
            alt="logo"
          />
          <h1>{appTitle}</h1>
        </div>

        <button classNameName="btn btn-large btn-open">Share something</button>
      </header>
      <NewNoteForm />

      {/* MAIN */}
      <main className="main">
        <Category />
        <Note />
      </main>
    </>
  );
}

function NewNoteForm() {
  return <form className="note-form">NewNoteForm</form>;
}

function Category() {
  return <aside>Category</aside>;
}

function Note() {
  const notes = init;
  return (
    <section>
      <ul className="note-list">
        {notes.map((note) => (
          <li key={note.id} className="note">
            <p>
              {note.text}
              <a
                className="source"
                href={note.source}
                target="_blank"
              >
                (Source)
              </a>
            </p>
            <span className="tag" style={{ backgroundColor: CATELOGIES[note.tag.toUpperCase()] }}>
              {note.tag}
            </span>
            <div className="vote-buttons">
              <button>👍 {note.votesInteresting}</button>
              <button>🤯 {note.votesMindblowing}</button>
              <button>⛔️ {note.voteIndecent}</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default App;
