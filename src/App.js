import React from 'react'
import Routes from './routes'
import GitHubCorner from './components/GitHubCorner'

function App() {
  return (
    <>
      <GitHubCorner projectUrl='https://github.com/arthurDamiani/githubExplorer' />
      <Routes />
    </>
  );
}

export default App;
