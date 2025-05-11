# ✍️ Real-Time Collaborative Editor — Internship Task 1

This is my submission for **Task 1** of the Frontend Developer Internship.

A simple yet powerful **real-time collaborative text editor** built using **ReactJS**, **TailwindCSS**, and the **BroadcastChannel API** — with **no backend**. It allows multiple users to edit simultaneously across browser tabs, shows who made each change, and displays live typing status.

---

## 🚀 Features

✅ Real-time sync in multiple browser tabs  
✅ Each user is uniquely identified by their name  
✅ Shows “who edited what” line-by-line  
✅ Live “is typing...” status  
✅ LocalStorage saves content on refresh  
✅ Built with reusable components  
✅ Clean, responsive UI using TailwindCSS

---

## 📸 Demo

🔗 **Live Link:** [https://real-time-edit.netlify.app/](https://real-time-edit.netlify.app/)  
> Tip: Open in 2 browser tabs with different usernames to see real-time collaboration in action.

---

## 💻 How to Run Locally

```bash
git clone https://github.com/Arunsaini50/real-time-editor.git
cd real-time-editor
npm install
npm run dev
```

---

## 🧠 How It Works

- Uses **BroadcastChannel API** to sync data between open browser tabs in real time.
- Splits the editor content into **lines**, each line tracks **who last edited it**.
- Shows **typing indicators** live (`Ravi is typing...`)
- Saves content to **LocalStorage** so it persists on refresh.
- Uses `contentEditable`, and all logic is handled in `Editor.jsx`.

---

## 🧱 Tech Stack

- ⚛️ **ReactJS** (Vite)
- 🎨 **TailwindCSS**
- 🌐 **BroadcastChannel API** for real-time sync
- 💾 **LocalStorage** for persistence
- ❌ No backend used

---

## 🚀 Features

✅ Real-time sync across multiple tabs  
✅ Each user has a unique name  
✅ Line-by-line: "Who edited what"  
✅ Live typing status (`Arun is typing...`)  
✅ LocalStorage saves content after refresh  
✅ Responsive and clean UI with TailwindCSS

---

## 📁 Folder Structure

real-time-editor/
├── components/
│ └── Editor.jsx
├── App.jsx
├── main.jsx
├── index.css
├── package.json
└── README.md

---

## 🙋 Author

**Arun Saini**  
GitHub: [@Arunsaini50](https://github.com/Arunsaini50)


