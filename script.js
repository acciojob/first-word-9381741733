function firstWord(str) {
    // Trim leading and trailing spac
    str = str.trim();
    
    // Find the index of the first space
    const spaceIndex = str.indexOf(' ');
    
    // If no space is found, return the whole string
    if (spaceIndex === -1) {
        return str;
    }
    
    // Otherwise, return the substring up to the first spac
    return str.substring(0, spaceIndex);
}

const s = prompt("Enter String:");
alert(firstWord(s));
