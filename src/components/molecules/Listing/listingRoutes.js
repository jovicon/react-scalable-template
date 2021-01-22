import { React } from 'react';
import { Link } from 'react-router-dom'
import { PrimaryUnorderedList } from '../../atoms/lists/unordered';
import { GenericItemList } from '../../atoms/lists/lists';

export const NavigationRoutes = () => {
  return (
    <>

      <PrimaryUnorderedList>
        <GenericItemList>  <Link to="/login">Login</Link> </GenericItemList>
        <GenericItemList>  <Link to="/public">Public Page</Link> </GenericItemList>
        <GenericItemList>  <Link to="/app/one">Protected Page One</Link> </GenericItemList>
        <GenericItemList>  <Link to="/app/two">Protected Page Two</Link> </GenericItemList>
      </PrimaryUnorderedList>

    </>
  )
}