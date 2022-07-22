import React from 'react';
import { Header, FormComponent, QuoteComponent } from ".";

const MainSection = () => {
  return (
    <div className='main-section-image'>
      <Header/>
      <FormComponent/>
      <QuoteComponent/>
    </div>
  );
}



export {MainSection};