console.log("Hello, World!");

// Select DOM Elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".note-form");
const noteList = document.querySelector(".note-list");

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



//creat DOM Elements: render initial data
noteList.innerHTML = "";


//Load data from superbase
getNotes();
async function getNotes() {
  const res = await fetch("https://emvabkeljsaitfevrbxs.supabase.co/rest/v1/notes", {
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtdmFia2VsanNhaXRmZXZyYnhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzOTAwMTAsImV4cCI6MjAyODk2NjAxMH0.HXToWhkhVQXdpseXYveD6N_1AVISknO-uE60iYwIDzk",
      authorization:
        "Bearea eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtdmFia2VsanNhaXRmZXZyYnhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzOTAwMTAsImV4cCI6MjAyODk2NjAxMH0.HXToWhkhVQXdpseXYveD6N_1AVISknO-uE60iYwIDzk",
    },
  });
  const data = await res.json();
console.log(data);
creatNoteList(data);

}

// creatNoteList(initialData);

function creatNoteList(initialData) {
  const htmlArr = initialData.map(
    (note) => `<li class="note">
                        <p>${note["note-text"]}<a class="source" href="${note.source}" target="_blank">(Source)</a></p>
                        <span class="tag" style="background-color: ${CATELOGIES[note.tag.toUpperCase()]}">${note.tag}</span>
                        
                    </li>`
  );
  console.log(htmlArr);
  const html = htmlArr.join("");
  noteList.insertAdjacentHTML("afterbegin", html);
}


//fold and unfold the form
btn.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share Something";
  }
});

