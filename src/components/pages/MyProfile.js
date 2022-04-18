import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Box from "@mui/material/Box";
import PageLayout from "./PageLayout";

function MyProfile({ signOut, user }) {
  if (!user) return <PageLayout>
    <h1>You are not a tru Burger Fanatic yet..</h1>
    <h3>Sign up to become one of us</h3>
  </PageLayout>;

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
