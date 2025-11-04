// import React, { useState } from "react";
// import styles from "./Upload.module.css";

// export default function Upload({ endpoint = "http://0.0.0.0:8000/query" }) {
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [status, setStatus] = useState("");
//   const [uploadedFile, setUploadedFile] = useState("");

//   async function handleUpload(e) {
//     e.preventDefault();
//     setError("");
//     setStatus("");
//     setUploadedFile("");
//     if (!file) return;
//     setLoading(true);

//     try {
//       const formData = new FormData();
//       formData.append("file", file);

//       const res = await fetch(endpoint, {
//         method: "POST",
//         body: formData
//       });

//       const data = await res.json();
//       if (data.status === "success") {
//         setStatus("File uploaded successfully.");
//         setUploadedFile(data.filename);
//       } else {
//         throw new Error(data.error || "Upload failed");
//       }
//     } catch (err) {
//       setError(err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className={styles.container}>
//       <form className={styles.form} onSubmit={handleUpload}>
//         <input
//           className={styles.fileInput}
//           type="file"
//           onChange={(e) => setFile(e.target.files[0])}
//         />
//         <button className={styles.button} type="submit" disabled={!file || loading}>
//           {loading ? "Uploading..." : "Upload"}
//         </button>
//       </form>

//       {error && <div className={styles.error}>{error}</div>}

//       {status && (
//         <div className={styles.success}>
//           {status}
//           {uploadedFile && <div className={styles.filename}>File: {uploadedFile}</div>}
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import styles from "./Upload.module.css";

export default function Upload({ endpoint = "http://0.0.0.0:8000/query"}) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [uploadedFile, setUploadedFile] = useState("");

  async function handleUpload(e) {
    e.preventDefault();
    setError("");
    setStatus("");
    setUploadedFile("");
    if (!file) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch(endpoint, {
        method: "POST",
        body: formData
      });

      const data = await res.json();
      if (data.status === "success") {
        setStatus("File uploaded successfully.");
        setUploadedFile(data.filename);
      } else {
        throw new Error(data.error || "Upload failed");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.title}>Strategisthub Sales Assistance</div>
      <form className={styles.uploadForm} onSubmit={handleUpload}>
        <input
          className={styles.fileInput}
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button className={styles.button} type="submit" disabled={!file || loading}>
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {error && <div className={styles.error}>{error}</div>}

      {status && (
        <div className={styles.success}>
          {status}
          {uploadedFile && <div className={styles.filename}>File: {uploadedFile}</div>}
        </div>
      )}
    </header>
  );
}

