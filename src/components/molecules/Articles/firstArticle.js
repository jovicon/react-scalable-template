import { React } from 'react';
import { GenericPrimaryH1 } from '../../atoms/headers';
import { GenericPurpleP } from '../../atoms/paragraphs';

export const FirstArticle = () => {
  return (
    <>
      <GenericPrimaryH1>
        Atomic Design is here!
      </GenericPrimaryH1>

      <GenericPurpleP>
        By now you may be wondering why we’re talking about atomic theory, 
        and maybe you’re even a bit angry at me for forcing you to relive memories of high school chemistry class.
        But this is going somewhere, I promise.

        We discussed earlier how all matter in the universe can be broken down into a finite set of atomic elements. 
        As it happens, our interfaces can be broken down into a similar finite set of elements. 
        Josh Duck’s Periodic Table of HTML Elements beautifully articulates how all of our websites, apps, intranets, hoobadyboops, and whatevers are all composed of the same HTML elements.  
      </GenericPurpleP>

      <img src={'https://atomicdesign.bradfrost.com/images/content/html-periodic-table.png'}/>
    </>
  )
}