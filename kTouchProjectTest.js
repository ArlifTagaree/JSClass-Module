class User {
    constructor(username, fname, lname, age) {
      this.username = username,
      this.firstName = fname,
      this.lastName = lname,
      this.age = age,
      this.activity = [],
      this.activityCount = 1
    }
    
    addActivity(val) {
      let temp = {}
      temp.name = val
      temp.activityId = this.activityCount
      temp.time = new Date()
      this.activity.push(temp) 
      this.activityCount++
    }
    
    removeActivity(id) {
      this.activity.forEach((e,idx) => {
        e.activityId === id ? this.activity.splice(idx,1) : null;
      })
    }
    
    editActivity(id, val) {
      this.activity.forEach((e,idx) => {
        e.activityId === id ? this.activity[idx].name = val : null;
      })
    }
  }
  
  const a = new User("kuku247", 'Chaiyaphon', 'Yuyod', 24)
  // console.log(a)
  a.addActivity('boxing');
  a.addActivity('running');
  a.addActivity('muay-thai');
  a.removeActivity(1)
  a.removeActivity(3)
  a.editActivity(2, "biking");