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

## 🧠 How It Works

- Uses **BroadcastChannel API** to communicate between open tabs in real time.
- Editor content is split line-by-line.
- Each line remembers which user last edited it.
- Typing indicators show live user activity.
- LocalStorage saves the current state so it survives refresh.

---

## 🧱 Tech Stack

- ⚛️ ReactJS (Vite)
- 🎨 TailwindCSS
- 🌐 BroadcastChannel API
- 💾 LocalStorage
- ❌ No backend
