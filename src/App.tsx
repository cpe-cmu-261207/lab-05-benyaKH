import React from 'react';
import { useState } from 'react'
import Todo from './component/Todo';
import WebHeader from './component/WebHeader'
import Footer from './component/Footer'
function App() {

  return (
    <div>

      {/* header section */}
      <WebHeader></WebHeader>

      {/* todo section */}
      <div className='mx-auto max-w-4xl'>
        <Todo></Todo>
      </div>

      {/* footer section */}
      <Footer></Footer>
    </div>
  );
}

export default App;
