import GoogleButton from "react-google-button";
import { googleSignin } from "../firebase/Authentication";

export default function Home() {
  return (
    <div>
      <GoogleButton
        onClick={() => {
          googleSignin();
        }}
      />
    </div>
  );
}
