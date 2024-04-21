import "./style.css";

const init = [{
  id: 1,
  text: "The first note",
  source: "https://example.com",
  category: "Programming",
},{
  id: 2,
  text: "The second note",
  source: "https://example.com",
  category: "Life",
},{
  id: 3,
  text: "The third note",
  source: "https://example.com",
  category: "University",
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
      <NewNoteForm />

      {/* MAIN */}
      <main class="main">
        <Category />
        <Note />
      </main>
    </>
  );
}

function NewNoteForm() {
  return <form class="note-form">NewNoteForm</form>;
}

function Category() {
  return <aside>Category</aside>;
}

function Note() {
  const notes = init;
  return (
    <section>
      <ul class="note-list">
        {notes.map((note) => (
          <li key={note.id} class="note">
            <p>
              {note.text}
              <a
                class="source"
                href={note.source}
                target="_blank"
              >
                (Source)
              </a>
            </p>
            <span class="tag" style="background-color: #3b82f6">
              {note.category}
            </span>
            <div class="vote-buttons">
              <button>👍 {note.votesInteresting}</button>
              <button>🤯 {note.votesMindblowing}</button>
              <button>⛔️ {note.voteFalse}</button>
            </div>
          </li>))
        }
      </ul>
    </section>
  );
}
export default App;
