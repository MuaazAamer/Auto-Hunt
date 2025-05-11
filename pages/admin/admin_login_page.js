// import Head from "next/head";
// import Link from 'next/link';
// import { useRef } from "react";
// import { useRouter } from "next/router";
// import styles from "@/styles/autohunt.module.css";

// export default function Home() {
//   const userID = useRef();
//   const password=useRef();
//   const router = useRouter();

//   return (
//     <div className={styles.container}>
//       <div className={styles.formBox}>
//         <label htmlFor="userid" className={styles.label}>User ID:</label>
//         <input
//           type="text"
//           id="userID"
//           name="userID"
//           placeholder="ID"
//           ref={userID}
//           className={styles.inputBox}
//         />
//         <label htmlFor="password" className={styles.label}>Password:</label>
//         <input
//           type="text"
//           id="password"
//           name="password"
//           placeholder="Password"
//           ref={password}
//           className={styles.inputBox}
//         />
//         <Link className={styles.label} href={"AdminData"}>Login</Link>
//       </div>
//     </div>
//   );
// }



import Head from "next/head";
import Link from 'next/link';
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import styles from "@/styles/autohunt.module.css";

export default function Home() {
  const userID = useRef();
  const password = useRef();
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    // If the user is already logged in, redirect them
    if (status === "authenticated") {
      router.push("/AdminData");
    }
  }, [status, router]);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Attempt login using credentials provider
    const result = await signIn("credentials", {
      redirect: false, // Prevent automatic redirect
      userID: userID.current.value,
      password: password.current.value,
    });

    if (result?.error) {
      // Handle login error
      alert("Invalid credentials, please try again.");
    } else {
      // Redirect on successful login
      router.push("/AdminData");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <form onSubmit={handleLogin}>
          <label htmlFor="userID" className={styles.label}>User ID:</label>
          <input
            type="text"
            id="userID"
            name="userID"
            placeholder="ID"
            ref={userID}
            className={styles.inputBox}
            required
          />
          <label htmlFor="password" className={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            ref={password}
            className={styles.inputBox}
            required
          />
          <button type="submit" className={styles.submitButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

