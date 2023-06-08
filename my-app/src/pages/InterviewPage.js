import React, { useEffect, useState } from 'react';

const InterviewPage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const response = await fetch('http://localhost:8000/api/user');
      const user = await response.json();
      setUserProfile(user);

      const submissionResponse = await fetch('http://localhost:8000/api/submissions');
      const fetchedSubmissions = await submissionResponse.json();
      setSubmissions(fetchedSubmissions);
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      {userProfile ? (
        <div>
          <h2>{userProfile.username}</h2>
          {/* Render other profile information as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {submissions.length > 0 ? (
        <div>
          <h3>Recent Submissions:</h3>
          <ul>
            {submissions.map((submission) => (
              <li key={submission.id}>
                <p>Submission ID: {submission.id}</p>
                {/* Render other submission details */}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading submissions...</p>
      )}
    </div>
  );
};

export default InterviewPage;
