import React, { useEffect, useState } from 'react';

const GetUserApi = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    console.log("Started fetching");

    fetch("https://api.github.com/users/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((fetchedUserData) => {
        setUserData(fetchedUserData);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
        console.log("Completed fetching");
      });
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {userData && (
        <pre>
          {JSON.stringify(userData, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default GetUserApi;
