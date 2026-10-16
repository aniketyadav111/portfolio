import { useEffect, useState } from "react";

function ApiDemo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load users");
        }
        return response.json();
      })
      .then((result) => {
        setUsers(result.slice(0, 3));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section id="api-demo" className="section">
      <div className="container">
        <h2 className="section-title">
          Community <span className="gradient-text">Profiles</span>
        </h2>
        <p className="muted">Sample data loaded from a public API.</p>

        <div className="user-grid">
          {loading ? (
            <p className="muted">Loading users...</p>
          ) : error ? (
            <p className="muted">Unable to load user data.</p>
          ) : (
            users.map((user) => (
              <div className="card" key={user.id}>
                <h3>{user.name}</h3>
                <p className="muted">{user.email}</p>
                <p className="user-city">{user.address.city}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default ApiDemo;
