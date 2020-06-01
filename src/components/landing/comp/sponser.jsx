import React, { Component } from 'react';


export default class Sponser extends Component{
    constructor(){
        super()
        this.state = {
            sponservalue : [
                {Url : 'https://ce.sharif.edu',
                image : 'https://datadays.ir/images/sponsors/sharif.png',
                imagealt : 'tozihat',
                id : 1
            },
            {   Url : 'https://ce.sharif.edu',
                image : 'https://datadays.ir/images/sponsors/ssc.png',
                imagealt : 'tozihat',
                id : 2
            },
            {   Url : 'https://ce.sharif.edu',
                image : 'https://datadays.ir/images/sponsors/sharif.png',
                id :3
            },
            {   Url : 'https://ce.sharif.edu',
                image : 'https://datadays.ir/images/sponsors/ssc.png',
                imagealt : 'tozihat',
                id : 4
            }
            ]
        }
    }
    render(){
      return(
        <section className="sponser p-3 d-flex justify-content-center align-items-center">
            {this.state.sponservalue.map((x)=>{
                return(
                    <figure className="sponser-pic p-3 flex-wrap" key={x.id}>
                    <a href={x.Url} target="_blank">
                    <img src={x.image} alt={x.imagealt}/>
                    </a>
                    </figure>
                )
            })}
        </section>
      )
    }
  }