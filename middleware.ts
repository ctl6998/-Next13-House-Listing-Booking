// Solve problem when not logged in but can still access to personal page via URL
// Such as /favorites, /properties
// Protect route

export { default } from "next-auth/middleware";

export const config = {
    matcher: [
        "/trips",
        "/reservations",
        "/properteis",
        "/favorites",
    ]
}