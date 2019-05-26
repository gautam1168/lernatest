var PipelineView = {
  name: 'pipeline-view',
  template: `<div>Pipeline component</div>`
}

var VueApp = function(elemid) {
  var el = document.querySelector(elemid)
  if (!el) {
    throw new Error("Root element not found for :" + elemid)
  }
  return new Vue({
    components: { [PipelineView.name]: PipelineView },
    el: elemid
  })
}

module.exports.PipelineView = PipelineView 
module.exports.VueApp = VueApp