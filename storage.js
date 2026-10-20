// storage.js
// This file handles saving and loading the user's progression data to and from localStorage


// The name of the key used to store the progression data in localStorage
const progressionKey = "korean-word-hud-progression.v1";

// Load the progression data from localStorage
function loadProgression() {
    // Try to retrieve the progression data from localStorage
    try {
    const savedText = localStorage.getItem(progressionKey);

    // If there's no saved data, return a new set
    if (savedText === null){
        return new Set();
    }

    // Parse the saved data and return a new set of mastered IDs
    const savedProgress = JSON.parse(savedText);

    // Check the saved data before using it
    if(
        savedText === null ||
        !Array.isArray(savedProgress.masteredIds) ||
        !savedProgress.masteredIds.every(id => typeof id === "string")
    ) {
        throw new Error("Invalid progression format");
    }

    // If the data is valid, turns the array into a set and return it
    return new Set(savedProgress.masteredIds);

    } catch (error) {
        console.error("Error loading progression data:", error);
        return new Set(); // Return an empty set if there's an error
    }
}

// Save the progression data to localStorage
function saveProgression(masteredIds){
    try {
        // Create an object to store the mastered IDs
        const progress = {
            masteredIds: [...masteredIds]
        };

        // Convert the object to a JSON string and save it to localStorage
        localStorage.setItem(progressionKey, JSON.stringify(progress));
        return true; // Indicate that the save was successful
        
    } catch (error) {
        console.warn("Could not save data:", error);
        return false; // Indicate that the save failed
    }
}