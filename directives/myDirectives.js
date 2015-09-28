courseRoster.directive("sampleCourse", function() {
  return {
    scope:{
      courseName:"@"
    },
    template: '<div>{{ courseName }}</div>'
  }
})
