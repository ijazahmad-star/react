import React, { useState } from "react";
import styles from "./Query.module.css";

export default function Query({ endpoint = "http://0.0.0.0:8000/query", placeholder = "Enter your query" }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setResults("");
    const payload = query.trim();
    if (!payload) return;
    setLoading(true);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: payload })
      });
      const text = await res.text();
      if (!res.ok) {
        let msg = `Request failed: ${res.status}`;
        try {
          const parsed = JSON.parse(text);
          msg = parsed.error || parsed.message || msg;
        } catch {}
        throw new Error(msg);
      }
      try {
        const parsed = JSON.parse(text);
        if (typeof parsed === "object" && parsed.response) {
          setResults(parsed.response);
        } else {
          setResults(JSON.stringify(parsed));
        }
      } catch {
        setResults(text);
      }
    } catch (err) {
      setError(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          aria-label="query"
        />
        <button className={styles.button} type="submit" disabled={loading}>
          {loading ? "Querying..." : "Send"}
        </button>
      </form>

      {error && <div className={styles.error}>{error}</div>}

      {results && (
        <div className={styles.resultWrap}>
          <h4 className={styles.resultTitle}>Response</h4>
          <div className={styles.resultBlock}>{results}</div>
        </div>
      )}
    </div>
  );
}

