let app = new Vue({
    el: "#app",
    data:{
        taskName: null,
        tasks: []
    },
    methods: {
        aggiungi: function () {
            let item = {
                title: this.taskName,
                check: false
            }
            this.tasks.push(item);
        },
        done: function (element){
            if (element.check == true) {
                element.check = false;
            }else{
                element.check = true;
            }
            console.log(element.check)
        },
        rimuovi: function(index){
            this.tasks.splice(index, 1);
        }
    }
});

