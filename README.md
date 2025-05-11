# ✍️ Real-Time Collaborative Editor — Internship Task 1

A basic real-time collaborative text editor built using ReactJS, TailwindCSS, and the BroadcastChannel API (no backend needed).

## 🚀 Features

- 🧑‍🤝‍🧑 Multiple users can collaborate in real-time (open multiple tabs)
- 🔁 Changes reflect live across all sessions
- ✍️ Each line shows who edited it
- 👀 Live typing indicator (`Arun is typing...`)
- 💾 LocalStorage persistence
- 🎨 Clean UI with TailwindCSS

## 🔗 Live Link
👉 [Live Demo](https://your-vercel-or-netlify-link.com)

## 🧠 How It Works

- Uses the **BroadcastChannel API** for real-time communication between browser tabs.
- Tracks each line of the editor and who last edited it.
- Shows username-based distinction beside each line.
- State is also saved to `localStorage` so it persists after reload.

---

## 💻 How to Run the Project Locally

```bash
git clone https://github.com/your-username/user-editor.git
cd user-editor
npm install
npm run dev


🧱 Tech Stack
ReactJS
TailwindCSS
BroadcastChannel API
LocalStorage (no backend)
