door.onclick = function() {
  
  // add heartbeat BEFORE opening
  door.classList.add("heartbeat");
  
  setTimeout(() => {
    
    door.classList.add("doorActive");
    door.classList.add("openDoor");
    
    setTimeout(() => {
      room.style.display = "none";
      inside.style.display = "flex";
    }, 800);
    
  }, 200);
}