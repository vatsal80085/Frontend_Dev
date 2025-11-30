import React from "react";

function Footer() {
    return (
        <footer style={{ padding: "12px 16px", textAlign: "center", marginTop: "24px", background: "#f5f5f5" }}>
            <small>© {new Date().getFullYear()} My App. All rights reserved.</small>
        </footer>
    );
}

export default Footer;
