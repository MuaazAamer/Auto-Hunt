import Link from "next/link";
import styles from "./main-header.module.css";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import FilterBox from "../FilterBox";

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const handleLogout = () => {
    signOut({redirect:true});
    router.push("/");
  };

  const toggleFilterBox = () => {
    setIsFilterVisible((prev) => !prev);
  };

  if (router.pathname !== "/" && router.pathname !== "/admin/admin_login_page") {
    return (
      <div className={styles.headerContainer }>
        <nav>
          <ul>
            {!session && (
              <li>
                <Link href="/auth">Login</Link>
              </li>
            )}
            {session && (
              <>
                
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
            <li>
              <Link href="/FeaturedPage">Featured Cars</Link>
            </li>
            <li>
              <Link href="/car">All Cars</Link>
            </li>
            <li onClick={toggleFilterBox}>Filter</li>
           
            {session && session.user.email === "s@gmail.com" && (
                <>
                 <li>

                <Link href="/admin/addcar">Add Cars</Link>
                </li>
                </>
            )}
              
          </ul>
        </nav>
        {isFilterVisible && <FilterBox onClose={toggleFilterBox} />}
        
      </div>
    );
  }

  return null; // Do not render the header for excluded routes
}