import React, { useState } from "react";
import "./GitHubSearch.css";

const GitHubSearch = () => {
  const [projectName, setProjectName] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const apiUrl = "https://api.github.com/graphql";
  const token = "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";

  const handleSearch = async () => {
    try {
      setError(null);

      const query = `
        query {
          search(query: "${projectName}", type: REPOSITORY, first: 10) {
            edges {
              node {
                ... on Repository {
                  name
                  owner {
                    login
                  }
                  description
                  url
                }
              }
            }
          }
        }
      `;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();

      const repositories = data.data.search.edges;
      setResults(repositories);
    } catch (error) {
      setError("An error occurred while fetching data.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="github-main">
      <h1 className="title">GitHub Project Search</h1>
      <label htmlFor="projectName" className="label">
        Project Name:{" "}
      </label>
      <input
        type="text"
        className="input-bar"
        id="projectName"
        placeholder="Enter project name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        autocomplete="off"
      />
      <button onClick={handleSearch} className="search">
        Search
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        {results.map((repo) => (
          <div key={repo.node.name} className="repo">
            <h3 className="repo-name">{repo.node.name}</h3>
            <p className="repo-owner">Owner: {repo.node.owner.login}</p>
            <p className="repo-desc">
              Description: {repo.node.description || "N/A"}
            </p>
            <p className="repo-url">
              <a href={repo.node.url} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubSearch;
