import React from "react";

function FooterOFFooter() {
    return <>
        <footer class="mt-auto text-50">
            <p>Created By  <a
                href="https://wa.me/201151031404"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-pill py-2 d-inline-flex align-items-center gap-2 hover-transform hover:scale-105 transition-all duration-300">
                Zed
            </a>
                | © {new Date().getFullYear()}.</p>
        </footer>
    </>


}

export default FooterOFFooter;