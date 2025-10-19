# 🏇 Horse Racing Simulation

[Live Demo Hosted on Vercel](https://horse-racing-game-eta.vercel.app/)  

> An interactive **Vue.js horse racing simulator** built with Vuex, component-based architecture, and real-time motion logic — designed as a **frontend case study** to demonstrate clean state management, UI synchronization, and scalability.

---

## 🎯 Overview

This project was developed as a **frontend coding challenge**, focused on implementing:

* **Reactive UI updates** with Vue 3 Composition API
* **Global state management** using Vuex
* **Sequential animations** and controlled event loops
* **Component reusability** and modular layout design

The application simulates **6 consecutive horse races** (1200m–2000m).
Each race randomly selects 10 horses from a generated pool, animates them with variable speeds, and records detailed race results.

---

## 🧩 Key Features

| Feature                         | Description                                                                 |
| ------------------------------- | --------------------------------------------------------------------------- |
| 🐎 **Dynamic Horse Generation** | Automatically generates 20 horses with unique names, colors, and conditions |
| 🏁 **Multi-Race Simulation**    | Runs 6 consecutive races (1200m → 2000m) with different lengths             |
| ⚡ **Real-Time Animations**      | Smooth CSS transitions simulate horse movement across the track             |
| 🧠 **Vuex State Management**    | Centralized control of horses, races, and results                           |
| 📊 **Interactive Tables**       | Live-updating “Program” and “Results” panels with sticky headers            |
| 🎨 **Polished UI**              | Clean color scheme, responsive layout, and scrollable results section       |

---

## 🏗️ Architecture

```
src/
 ├── components/
 │   ├── HeaderBar.vue      # Controls (Generate, Start/Pause)
 │   ├── HorseList.vue      # Generated horses overview
 │   ├── RaceTrack.vue      # Animated racing lanes
 │   └── RaceInfo.vue       # Live program and race results
 ├── store/
 │   └── index.js           # Vuex store with actions & mutations
 ├── App.vue                # Main layout
 └── main.js                # Entry point
```

---

## ⚙️ Tech Stack

| Category             | Tool                                        |
| -------------------- | ------------------------------------------- |
| **Framework**        | Vue 3 (Composition API)                     |
| **State Management** | Vuex 4                                      |
| **Build Tool**       | Vite                                        |
| **Styling**          | Scoped CSS, Flexbox, Transitions            |
| **Architecture**     | Component-Based Design (modular + scalable) |

---

## 🚀 Setup & Run

```bash
# 1️⃣ Clone the repository
git clone https://github.com/pelinoksuz/horse-racing-simulation.git

# 2️⃣ Navigate into the project folder
cd horse-racing-simulation

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the dev server
npm run dev

# 5️⃣ Open the app in browser
http://localhost:5173/
```

---

## 🧠 Highlights

* Built with **Composition API** for cleaner reactivity handling
* Implemented **multi-stage race logic** using Promises and Vuex mutations
* Designed with **10–30–60 color rule** for visual hierarchy and accessibility
* Used **CSS transitions** for lightweight animation instead of JS libraries
* Structured for scalability — easily extendable with leaderboards or multiplayer modes

---

## 💡 Future Improvements

* [ ] Add **leaderboard and point ranking system**
* [ ] Implement **restart / replay** functionality
* [ ] Add **sound and cheering effects** for immersion
* [ ] Create **chart visualizations** for performance tracking
* [ ] Write **unit tests** using Vitest and Vue Test Utils

---

## 👩‍💻 About the Developer

Developed by **[Pelin Öksüz](https://github.com/pelinoksuz)**
Frontend Engineer specializing in **Angular, Vue, RxJS**, and **real-time data visualization**.
Passionate about building scalable, performant, and user-friendly web applications.

---
