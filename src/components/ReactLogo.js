import {Component, createRef} from "react";
import '../css/ReactLogo.css'
import Utils from "../util/Utils";

class ReactLogo extends Component{

    constructor(props) {
        super(props);
        this.ref = createRef();
    }

    reset() {
        let logo = this.ref.current
        logo.className = 'App-logo'
        logo.style.transform = null
        // logo.style.animation = null
    }

    ready(cb) {
        let logo = this.ref.current
        logo.className = 'App-logo'
        setTimeout(() => {
            cb()
        },5)
    }

    fast(d) {
        let logo = this.ref.current
        logo.style.animationDuration = (d || 1) + 's'
    }

    normal(d) {
        let logo = this.ref.current
        logo.style.animationDuration = 10 + 's'
    }

    componentDidMount() {
        let logo = this.ref.current
        logo.addEventListener('transitionend',() => {

            if (logo.classList.contains('back')) {
                logo.classList.add('normal')
                logo.classList.remove('back')
            }else {
                this.reset()
                logo.classList.add('back')
            }
        })
    }

    randomTransform = () => {
        let logo = this.ref.current
        const hover1 = () => {
            let w = window.innerWidth
            let h = window.innerHeight
            let vx = Utils.randomInt(0 , 10) / 10
            let vy = Utils.randomInt(0 , 10) / 10
            let vz = Utils.randomInt(0 , 10) / 10

            let x = Utils.randomInt(-w,100)
            let y = Utils.randomInt(-h,100)

            let scale = Utils.randomInt(5 , 20) / 10
            let angle = Utils.randomInt(0 , 720)

            logo.style.transform = `translate(${x}px,${y}px) scale(${scale}) rotate(${angle}deg) rotate3d(${vx},${vy},${vz},${Utils.randomInt(0,720)}deg)`
        }
        let b = logo.classList.contains('normal');
        this.reset()
        if (b) {
            this.ready(() => {
                hover1()
            })
        }else {
            hover1()
        }
    }


    render() {
        return (
            <img
                onMouseOver={this.randomTransform}
                onMouseOut={this.randomTransform}
                ref={this.ref}
                src="logo.svg"
                alt='React'
                className="App-logo normal"
                onPointerMove={(e) => {e.preventDefault()}}
                onDragStart = {(e) => {e.preventDefault()}}
                onSelectCapture = {(e) => {e.preventDefault()}}
            />
        )
    }

}

export default ReactLogo
