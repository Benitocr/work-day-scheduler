vas dSchedull {};

var loaddSchedull = function() {
    dSchedull = JSON.parse(localStorage.getItem("dSchedull"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!dSchedull) {
      dSchedull = {
        toDo: [],
        inProgress: [],
        inReview: [],
        done: []
      };
    }
  
    // loop over object properties
    $.each(dSchedull, function(list, arr) {
      console.log(list, arr);
      // then loop over sub-array
      arr.forEach(function(task) {
        createTask(task.text, task.date, list);
      });
    });
  };

// load Schedulle for the first time
loaddSchedull();

