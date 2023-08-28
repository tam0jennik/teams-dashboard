import type { Component } from 'solid-js';
import 'flowbite';
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import { Route, Routes } from '@solidjs/router';
import TimeBoard from './pages/TimeBoard';
import Team from './pages/Team';

const App: Component = () => {
  return (
    <>
      <Header />
      <LeftMenu />
      <div class="p-4 sm:ml-64">
        <Routes>
          <Route path="/dashboard" component={TimeBoard}></Route>
          <Route path="/team" component={Team}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
