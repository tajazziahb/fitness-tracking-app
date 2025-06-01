import { signOut } from "../login/auth.js";
import { supabase } from "../src/supabase.js";

// Hook up the sign-out functionality
    document.querySelector('#sign-out')?.addEventListener('click', async () => {
        const result = await signOut();

        if (result.success) {
            window.location.href = '/login/';
            localStorage.removeItem('session');
        }
    });

    document.addEventListener("DOMContentLoaded", () => {
        // Find Friends button functionality
        document.querySelector(".btn-sm.font-bold.text-orange-500")?.addEventListener("click", () => {
            alert("Redirecting to Find Friends...");
            window.location.href = "/community/find-friends/";
        });
    
        // Follow button functionality
        document.querySelectorAll(".rounded.bg-orange-500.text-white.btn-sm").forEach(button => {
            button.addEventListener("click", async (event) => {
                const userName = event.target.closest(".card-body").querySelector("h3").innerText;
                alert(`You are now following ${userName}!`);
                // Add functionality to update the database if needed
            });
        });
    
        // Message button functionality
        document.querySelectorAll(".rounded.bg-neutral-50.btn-sm.text-orange-500").forEach(button => {
            button.addEventListener("click", (event) => {
                const userName = event.target.closest(".card-body").querySelector("h3").innerText;
                alert(`Opening chat with ${userName}...`);
                // Redirect to a messaging page or open a chat modal
            });
        });
    
        // Like button functionality
        document.querySelectorAll(".btn.bg-neutral-50.btn-sm.gap-2.text-orange-500.font-bold").forEach(button => {
            button.addEventListener("click", (event) => {
                const postType = event.target.closest(".bg-black").querySelector("p.font-medium.text-white").innerText;
                alert(`You liked the ${postType}!`);
                // Add functionality to update the database if needed
            });
        });
    
        // Share button functionality
        document.querySelectorAll(".btn.bg-neutral-50.btn-sm.gap-2.text-orange-500.font-bold").forEach(button => {
            button.addEventListener("click", () => {
                alert("Sharing this post...");
                // Add functionality to share the post (e.g., copy link or share on social media)
            });
        });
    
        // View All button functionality (Leaderboard)
        document.querySelector(".rounded.bg-neutral-50.btn-sm.font-bold.text-orange-500")?.addEventListener("click", () => {
            alert("Redirecting to Leaderboard...");
            window.location.href = "/community/leaderboard/";
        });
    
        // Follow button functionality (Leaderboard)
        document.querySelectorAll(".rounded.bg-lime-500.text-white.btn-sm").forEach(button => {
            button.addEventListener("click", async (event) => {
                const userName = event.target.closest(".card-body").querySelector("h3").innerText;
                alert(`You are now following ${userName}!`);
                // Add functionality to update the database if needed
            });
        });
    
        // Message button functionality (Leaderboard)
        document.querySelectorAll(".rounded-lg.btn.bg-neutral-50.btn-sm.gap-2.text-lime-500.font-bold").forEach(button => {
            button.addEventListener("click", (event) => {
                const userName = event.target.closest(".card-body").querySelector("h3").innerText;
                alert(`Opening chat with ${userName}...`);
                // Redirect to a messaging page or open a chat modal
            });
        });
    
        // Join button functionality (Groups)
        document.querySelectorAll(".rounded.text-white.bg-lime-500.btn-sm").forEach(button => {
            button.addEventListener("click", (event) => {
                const groupName = event.target.closest(".bg-black").querySelector("h3").innerText;
                alert(`You joined the ${groupName} group!`);
                // Add functionality to update the database if needed
            });
        });
    });