import { React } from 'react';
import { FirstArticle } from '../../molecules/Articles/firstArticle';
import { NavigationRoutes } from '../../molecules/Listing/listingRoutes';

export const FirstBlog = () => {
  console.log("firstBlog");
  return (
    <>

      <NavigationRoutes/>
      <FirstArticle/>

    </>
  )
}
