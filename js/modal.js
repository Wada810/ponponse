class modal_animation{
    constructor(container, button) {
        this.container = document.querySelector(`${container}`);
        this.button = document.querySelector(`${button}`);
        this.button.addEventListener("click",()=>{
            this.container.addEventListener("animationend",()=>{
                console.log("hidden");
                this.container.classList.add("hidden");
            },{once: true})
            this.container.classList.add("c_modal_close");
        });
    }
}

let caution_modal = new modal_animation(".l_caution_modal",".p_caution_modal__button");