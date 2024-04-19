console.log("Hello, World!");

// Select DOM Elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".note-form");
const noteList = document.querySelector(".note-list");



//creat DOM Elements: render initial data
    noteList.innerHTML = '';
// const initialData = [
//     {
//         "note-text": "ssssssssssssssssssssss",
//         source: "google.com",
//         tag: "test",
//     },
// ];

// creatNoteList(initialData);

//Load data from superbase
const res=fetch('https://emvabkeljsaitfevrbxs.supabase.co',{
    headers: {
        apikey:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtdmFia2VsanNhaXRmZXZyYnhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzOTAwMTAsImV4cCI6MjAyODk2NjAxMH0.HXToWhkhVQXdpseXYveD6N_1AVISknO-uE60iYwIDzk
    },
    authorization: "Bearea eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtdmFia2VsanNhaXRmZXZyYnhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzOTAwMTAsImV4cCI6MjAyODk2NjAxMH0.HXToWhkhVQXdpseXYveD6N_1AVISknO-uE60iYwIDzk",
});


function creatNoteList(initialData) {
const htmlArr = initialData.map(
    (note) => `<li class="note">
                        <p>${note["note-text"]}<a class="source" href="${note.source}" target="_blank">(Source)</a></p>
                        <span class="tag" style="background-color: #3b82f6">${note.tag}</span>
                        
                    </li>`
);
console.log(htmlArr);
const html = htmlArr.join("");
noteList.insertAdjacentHTML("afterbegin", html);
}


btn.addEventListener("click", () => {
    if (form.classList.contains("hidden")) {
      form.classList.remove("hidden");
      btn.textContent = "Close";
    } else {
      form.classList.add("hidden");
      btn.textContent = "Share Something";
    }
  });

// function creatNoteList(initialData) {
//   const htmlArr = initialData.map(
//     (note) => `
//         <li class="note">
//         <p>${note.text}<a class="source" href="${note.source}" target="_blank">(Source)</a></p>
//         <span class="tag" style="background-color: #3b82f6"
//             >${note.tag}</span
//         >
//         `
//   );
//   const html = htmlArr.join("");
//   noteList.insertAdjacentHTML("afterend", html);
// }

// const test = {
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, doloremque!",
//     source: "https://www.google.com",
//     tag: "General",
//   };
//   creatNoteList(test);


