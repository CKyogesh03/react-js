import React, { useEffect, useState } from 'react';

const DeleteUserApi = () => {
  const [deleteResult, setDeleteResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      console.log("Started fetching");

      // Assuming you have an actual endpoint for deleting a user, replace the URL accordingly
      fetch("https://api.github.com/users/10", {
        method: 'DELETE',
        // Add any additional headers if needed
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((result) => {
          setDeleteResult(result);
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
          console.log("successfullt deleted user id");
        });
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {deleteResult && (
        <pre>
          {JSON.stringify(deleteResult, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default DeleteUserApi;
