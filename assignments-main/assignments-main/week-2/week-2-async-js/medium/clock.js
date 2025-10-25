// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function clock (){
    console.clear()
    let currentTime = new Date()
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();
    const time24 = 
        `${String(hour).padStart(2,"0")}:${String(minute).padStart(2,"0")}:${String(second).padStart(2,"0")}`;
    
    let hour12 = hour % 12 === 0 ? 12 : hour%12
    let AMPM  = hour>=12 ? "PM":"AM"
    const time12 = 
        `${String(hour12).padStart(2,"0")}:${String(minute).padStart(2,"0")}:${String(second).padStart(2,"0")} ${AMPM}`
    console.log(time12);
    
    console.log(time24);
    
    
}
setInterval(clock,1000)