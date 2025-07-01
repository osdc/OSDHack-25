import React from 'react';
export default function Tracks() {

  return (
    <div>
        <h2 style={{fontSize: 24}}>Devtools and/or Plugins</h2>
        <br />
        <p>To qualify under the devtools and plugins track participants may either:</p>
        <ul style={{listStyleType: "disc", paddingLeft: 20}}>
            <li>Create a plugin for any OSS project that has more than 500 stars on GitHub.</li>
            <li>Create any Devtool. A devtool is any tool where the end users are not regular people but other developers. Please avoid creating a web app with frontend and backend OR applications whose core functionality is sending API requests.</li>
        </ul>
        <br />
        <h2 style={{fontSize: 24}}>Humane Tech</h2>
        <br />
        <ul style={{listStyleType: "disc", paddingLeft: 20}}>
            <li>Humane tech includes ethically humane digital products which focus on user well-being.</li>
            <li>Participants can create a project that takes care of humane design principles in their domain.</li>
            <li><a href="https://codeberg.org/teaserbot-labs/delightful-humane-design" style={{color: "blue"}}>https://codeberg.org/teaserbot-labs/delightful-humane-design</a></li>
        </ul>
    </div>
  );
}