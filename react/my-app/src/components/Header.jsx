import React from "react";

function Header() {
    return (
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "#000000ff",  color: "white", borderRadius: "8px 8px 8px 8px" }}>
            <h3 style={{ margin: 0 }}>Welcome to My App</h3>
            <nav>
                <a style={{color: "white", gap: "16px", padding: "0 8px"}} href="https://youtu.be/PckXEpjvHyg?si=yRVDKs29v5mAReu8">Home</a>
                <a style={{color: "white", gap: "16px", padding: "0 8px"}} href="https://youtu.be/Ulm_Z646eBg?si=1EEkiNBTPHytkMuN">Contact Us</a>
                <a style={{color: "white", gap: "16px", padding: "0 8px"}} href="https://youtu.be/63EAJJakvEU?si=yoLUmeukaIBkj72K">About</a>
            </nav>
        </header>
    );
}

export default Header;