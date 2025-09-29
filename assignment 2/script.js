// Horizontal scroll function: scrollPlaylist(direction)
// direction = -1 for left, 1 for right
// scrollBy method used with smooth behavior improves usability and maintains the aesthetic
function scrollPlaylist(direction) {
  const playlist = document.querySelector(".playlist-items");
  const scrollAmount = 120; // adjust how much it scrolls per click
  playlist.scrollBy({ left: scrollAmount * direction, behavior: "smooth" });
}
