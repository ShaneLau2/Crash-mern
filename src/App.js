import "./style.css";
import { useState } from "react";
const initData = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://google.com",
    tag: "Programming",

    votesInteresting: 0,
    votesMindblowing: 0,
    voteIndecent: 0,
  },
  {
    id: 2,
    text: "The second note",
    source: "https://google.com",
    tag: "Life",
    votesInteresting: 0,
    votesMindblowing: 0,
    voteIndecent: 0,
  },
  {
    id: 3,
    text: "The third note",
    source: "https://google.com",
    tag: "University",
    votesInteresting: 0,
    votesMindblowing: 0,
    voteIndecent: 0,
  },
];
const CATELOGIES = {
  PROGRAMMING: "#3b82f6",
  LIFE: "#16a34a",
  UNIVERSITY: "#ef4444",
  MISC: "#eab308",
  General: "#3b82f6",
  Technology: "#f59e0b",
  Science: "#10b981",
  Health: "#f87171",
  Sport: "#f472b6",
  Business: "#fbbf24",
  Entertainment: "#f472b6",
  Education: "#10b981",
  Politics: "#f87171",
  Travel: "#fbbf24",
  Food: "#f59e0b",
  Other: "#3b82f6",
};
function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      {/* HEADER */}
      <Header setShowForm={setShowForm} showForm={showForm}/>
      {showForm ? <NewNoteForm /> : null}

      {/* MAIN */}
      <main className="main">
        <Category />
        <Note />
      </main>
      </>
  );
}
function Header({ setShowForm, showForm}) {
  const appTitle = "Shane's Everything";

  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://todayilearned-beta.netlify.app/logo.png"
          alt="logo"
        />
        <h1>{appTitle}</h1>
      </div>

      <button
        className="btn btn-large btn-open"
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm? "Close":"Share something"}
      </button>
    </header>
  );
}

function NewNoteForm() {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const textLength = text.length;

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted", { text, source, category });
  }
  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <textarea 
  placeholder="write something interesting..." 
  value={text} 
  onChange={(e) => setText(e.target.value)}
></textarea>
      <span>{2000-textLength}</span>
      <input type="text" placeholder="attach the link" value={source} onChange={(e)=>setSource(e.target.value)} />
      <select name="Category" id="Category">
        <option value="">Choose a Category</option>
        {Object.entries(CATELOGIES).map(([category, value]) => (
          <option value={category} key={category} style={{backgroundColor:value}}>{category}</option>
        ))}
      </select>
      <button className="btn btn-large">Post</button>
    </form>
  );
}

function Category() {
  const categories = CATELOGIES;
  return (
    <aside>
      <ul>
        <li>
          <button className="btn btn-all-categories">All</button>
        </li>
        {Object.entries(categories).map(([category, value]) => (
          <li key={category}>
            <button
              className="btn btn-category"
              style={{ backgroundColor: value }}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function Note() {
  const notes = initData;
  return (
    <section>
      <ul className="note-list">
        {notes.map((note) => (
          <NoteItem note={note} key={note.id} /> // Fix: Pass the note as a prop to the NoteItem component
        ))}
      </ul>
      <p>There are {notes.length} notes, leave something yours</p>
    </section>
  );
}

function NoteItem({ note }) {
  return (
    <li className="note">
      <p>
        {note.text}
        <a className="source" href={note.source} target="_blank">
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{ backgroundColor: CATELOGIES[note.tag.toUpperCase()] }}
      >
        {note.tag}
      </span>
      <div className="vote-buttons">
        <button>👍 {note.votesInteresting}</button>
        <button>🤯 {note.votesMindblowing}</button>
        <button>⛔️ {note.voteIndecent}</button>
      </div>
    </li>
  );
}
export default App;
