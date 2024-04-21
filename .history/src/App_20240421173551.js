import "./style.css";

const init = [];
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
          <li class="note">
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
              Programming
            </span>
            <div class="vote-buttons">
              <button>👍 9</button>
              <button>🤯 4</button>
              <button>⛔️ 7</button>
            </div>
          </li>))
        }
      </ul>
    </section>
  );
}
export default App;
