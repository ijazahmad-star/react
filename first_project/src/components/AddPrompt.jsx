// import React, { useState } from "react";
// import styles from "./AddPrompt.module.css";

// export default function AddPrompt({ endpoint = "http://0.0.0.0:8000/add_prompt" }) {
//   const [showModal, setShowModal] = useState(false);
//   const [name, setName] = useState("");
//   const [prompt, setPrompt] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!name || !prompt) return;

//     setLoading(true);
//     setMessage("");

//     try {
//       const res = await fetch(endpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, prompt }),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         setMessage("Prompt added successfully!");
//         setTimeout(() => {
//           setShowModal(false);
//           setMessage("");
//           setName("");
//           setPrompt("");
//         }, 2000);
//       } else {
//         throw new Error(data.error || "Failed to add prompt");
//       }
//     } catch (err) {
//       setMessage(err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <button className={styles.addButton} onClick={() => setShowModal(true)}>
//         Add Prompt
//       </button>

//       {showModal && (
//         <div className={styles.overlay}>
//           <div className={styles.modal}>
//             <h2 className={styles.title}>Add New Prompt</h2>
//             <form onSubmit={handleSubmit} className={styles.form}>
//               <input
//                 type="text"
//                 placeholder="Prompt Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className={styles.input}
//               />
//               <textarea
//                 placeholder="Prompt Text"
//                 value={prompt}
//                 onChange={(e) => setPrompt(e.target.value)}
//                 className={styles.textarea}
//               />
//               <button type="submit" disabled={loading} className={styles.submit}>
//                 {loading ? "Adding..." : "Submit"}
//               </button>
//             </form>

//             {message && <div className={styles.message}>{message}</div>}

//             <button className={styles.close} onClick={() => setShowModal(false)}>
//               ✕
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
import React, { useState } from "react";
import styles from "./AddPrompt.module.css";

export default function AddPrompt({ endpoint = "http://localhost:8000/add_prompt" }) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !prompt) return;

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, prompt }),
      });

      let data = {};
      try {
        data = await res.json();
      } catch {
        data = {};
      }

      if (res.ok) {
        setMessage("Prompt added successfully!");
        setTimeout(() => {
          setShowModal(false);
          setMessage("");
          setName("");
          setPrompt("");
        }, 2000);
      } else {
        throw new Error(data?.error || "Failed to add prompt");
      }
    } catch (err) {
      setMessage(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button className={styles.addButton} onClick={() => setShowModal(true)}>
        Add Prompt
      </button>

      {showModal && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <h2 className={styles.title}>Add New Prompt</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                placeholder="Prompt Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
              />
              <textarea
                placeholder="Prompt Text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className={styles.textarea}
              />
              <button type="submit" disabled={loading} className={styles.submit}>
                {loading ? "Adding..." : "Submit"}
              </button>
            </form>

            {message && <div className={styles.message}>{message}</div>}

            <button className={styles.close} onClick={() => setShowModal(false)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
