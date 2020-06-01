import React, { Component } from 'react';

let i = 0
export default class CommentShow extends Component{
    constructor(){
        super()
        this.state = {
            cm : [
                {desp : 'hello',
                name: 'مینا'},
                {desp : 'aliiii',
                name: 'سینا'},
                {desp : 'chetori',
                name: 'تینا'},
                {desp : 'salam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi debitis ea voluptates sunt quam itaque, quidem exercitationem voluptatibus necessitatibus odio minus dignissimos quasi in, amet dolores maiores perspiciatis cupiditate recusandae!',
                name: 'شیما'}
            ]
        }
    }
    
    changeCM = () =>{
        setInterval(()=>{
            i++
            if(i == this.state.cm.length){
                i=0
            }
            document.querySelector('#userN').setAttribute('class' , 'hidden-cm')
            document.querySelector('#userCm').setAttribute('class' , 'hidden-cm')
            console.log(i)
            document.querySelector('#cm>h5').innerHTML= this.state.cm[i].name
            document.querySelector('#cm>p').innerHTML = this.state.cm[i].desp
            setTimeout(()=>{
                    document.querySelector('#userN').setAttribute('class' , 'show-cm')
                    document.querySelector('#userCm').setAttribute('class' , 'show-cm')
            }, 500)
        } , 10000)
    }

    render(){
        return(
            <section className="cmshow p-5 d-flex justify-content-center flex-wrap" onClick={this.changeCM}>
                <h3 className="text-center p-2 col-12">نظرات شما</h3>
                <div id='cm' className="d-flex flex-column align-items-center p-2 m-3 col-9 col-lg-7">
                    <h5 id="userN">{this.state.cm[i].name}</h5>
                    <p id="userCm">{this.state.cm[i].desp}</p>
                </div>
            </section>
        )
    }
}