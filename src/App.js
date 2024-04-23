import "./style.css";
import { useEffect, useState } from "react";
import { supabase } from "./supabase.js";
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
  Programming: "#3b82f6",
  Life: "#16a34a",
  University: "#ef4444",
  Misc: "#eab308",
  General: "#3b82f6",
  Techology: "#f59e0b",
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
  const [notes, setNotes] = useState(initData);
  const [loading, setLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("All");

  useEffect(() => {
    async function fetchNotes() {
      setLoading(true);
      let query = supabase.from("notes").select("*");
      if (currentCategory !== "All") {
        query = query.eq("tag", currentCategory);
      }

      const { data: notes, error } = await query
        .order("id", { ascending: false })
        .limit(10);
      if (!error) setNotes(notes);
      else console.log(error);
      setLoading(false);
      console.log(notes, error);
    }
    fetchNotes();
  }, [currentCategory]);
  return (
    <>
      {/* HEADER */}
      <Header setShowForm={setShowForm} showForm={showForm} />
      {showForm ? (
        <NewNoteForm setNotes={setNotes} setShowForm={setShowForm} />
      ) : null}

      {/* MAIN */}
      <main className="main">
        <Category
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
        {loading ? <Loading /> : <Notes notes={notes} setNotes={setNotes}/>}
      </main>
    </>
  );
}
function Loading() {
  return <div className="message">Loading...</div>;
}

function Header({ setShowForm, showForm }) {
  const appTitle = "Shane's Everything";

  return (
    <header className="header">
      <div className="logo">
        <img src="https://todayilearned-beta.netlify.app/logo.png" alt="logo" />
        <h1>{appTitle}</h1>
      </div>

      <button
        className="btn btn-large btn-open"
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? "Close" : "Share something"}
      </button>
    </header>
  );
}
function isValidHttpUrl(string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

function NewNoteForm({ setNotes, setShowForm }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const textLength = text.length;
  const [isUpLoading, setIsUpLoading] = useState(false);

  async function handleSubmit(e) {
    // 1. Prevent browser reload
    e.preventDefault();
    console.log("Form submitted", { text, source, category });
    // 2. Check if the data is valid, if so, create a new note object
    if (!text || !source || !category) {
      alert("Please fill in all fields");
      return;
    } else if (textLength > 2000) {
      alert("Text is too long");
      return;
    } else if (!isValidHttpUrl(source)) {
      alert("Invalid URL");
      return;
    }
    // else if(!CATELOGIES[category.toUpperCase()]){
    //   alert("Invalid Category")
    //   return;
    // }
    else {
      //3. Create a new note object
      // const newNote = {
      //   id: Date.now(),
      //   createdIN: new Date().toISOString(),
      //   text,
      //   source,
      //   tag: category,
      //   voteInteresting: 0,
      //   voteMindblowing: 0,
      //   voteIndecent: 0,
      // };
      setIsUpLoading(true);
      const { data: newNote, error } = await supabase
        .from("notes")
        .insert([{ text, source, tag: category }])
        .select();
      setIsUpLoading(false);
      //4. Add the new note to the notes array, and update the state
      if (!error) {
      setNotes((prevNotes) => [newNote[0], ...prevNotes]);
      } else {
        console.log(error);
        alert("An error occured");
        return;
      }
      //5. Clear the form
      setText("");
      setSource("");
      setCategory("");
      //6. Close the form
      setShowForm(false);
    }
  }
  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <textarea
        placeholder="write something interesting..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isUpLoading}
      ></textarea>
      <span>{2000 - textLength}</span>
      <input
        type="text"
        placeholder="attach the link"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        disabled={isUpLoading}
      />
      <select
        name="Category"
        id="Category"
        // value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={isUpLoading}
      >
        <option value="">Choose a Category</option>
        {Object.entries(CATELOGIES).map(([category, value]) => (
          <option
            value={category}
            key={category}
            style={{ backgroundColor: value }}
          >
            {category}
          </option>
        ))}
      </select>
      <button className="btn btn-large" disabled={isUpLoading}>
        Post
      </button>
    </form>
  );
}

function Category({ currentCategory, setCurrentCategory }) {
  const categories = CATELOGIES;
  return (
    <aside>
      <ul>
        <li>
          <button
            className="btn btn-all-categories"
            onClick={() => setCurrentCategory("All")}
          >
            All
          </button>
        </li>
        {Object.entries(categories).map(([category, value]) => (
          <li key={category}>
            <button
              className="btn btn-category"
              style={{ backgroundColor: value }}
              // value={category}
              onClick={() => setCurrentCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function Notes({ notes ,setNotes}) {
  if (!notes.length) {
    return <div className="message">No notes yet. Be the first one!</div>;
  }
  return (
    <section>
      <ul className="note-list">
        {notes.map((note) => (
          <NoteItem note={note} key={note.id} setNotes={setNotes} notes={notes}/> // Fix: Pass the note as a prop to the NoteItem component
        ))}
      </ul>
      <p>There are {notes.length} notes, leave something yours</p>
    </section>
  );
}

function NoteItem({ note,setNotes }) {
  const [isUpVoting, setIsUpVoting] = useState(false);

  async function handleVote(voteType) {
    setIsUpVoting(true);
    const { data:updateVote, error } = await supabase
      .from("notes")
      .update({
        [voteType]: note[voteType] + 1,
      })
      .eq("id", note.id)
      .select();
      setIsUpVoting(false);

      console.log("this is updateVote",updateVote);
    if (!error) {
      setNotes((notes) =>
        notes.map((prevNote) => {
          console.log("start");
          console.log("this is prevNote",prevNote);
          console.log("this is note",note);
          console.log("this is updateVote[0]",updateVote[0]);
          console.log("end");
          return prevNote.id === note.id ? updateVote[0] : prevNote
          
        }
      
      )
      );
    } 

  }
  return (
    <li className="note">
      <p>
        {note.text}
        <a className="source" href={note.source} target="_blank">
          (Source)
        </a>
      </p>
      <span className="tag" style={{ backgroundColor: CATELOGIES[note.tag] }}>
        {note.tag}
      </span>
      <div className="vote-buttons">
        <button onClick={()=>handleVote("voteInteresting")}
        disabled={isUpVoting}
        >👍 {note.voteInteresting}</button>
        <button onClick={()=>handleVote("voteMindblowing")}
        disabled={isUpVoting}
        >🤯 {note.voteMindblowing}</button>
        <button onClick={()=>handleVote("voteIndecent")}
        disabled={isUpVoting}
        >⛔️ {note.voteIndecent}</button>
      </div>
    </li>
  );
}
export default App;
