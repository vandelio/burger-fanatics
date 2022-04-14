import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import PageLayout from "./PageLayout";

function MyProfile({ signOut, user }) {
    if(!user) return <PageLayout></PageLayout>
  return (
    <>
     <PageLayout>
        <>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
            Build
        </>
     </PageLayout>
    </>
    
  );
}

export default withAuthenticator(MyProfile);