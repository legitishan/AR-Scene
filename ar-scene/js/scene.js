AFRAME.registerComponent("listener", {
    init: function () {
        this.el.addEventListener("click", e => console.log(e));
    }
});
