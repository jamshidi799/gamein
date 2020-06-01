import React, { Component } from 'react';

export default class Award extends Component{
    constructor(){
        super()
        this.state = {
            winner : [
                    {aw : '1 toman',
                    image : 'https://datadays.ir/images/sponsors/ssc.png',
                    id : 1
                },
                    {aw : '500 toman',
                    image : 'https://datadays.ir/images/sponsors/ssc.png',
                id :2 
            },
                    {aw : '400 toman',
                    image : 'https://datadays.ir/images/sponsors/ssc.png',
                id : 3
            }
            ]
        }
    }
    render(){
        return(
            <section>
                <div id="awards" className="d-flex justify-content-center flex-wrap p-5">
                        {this.state.winner.map((x)=>{
                            return(
                                <div className="awards col-9 col-lg-3 m-3" key={x.id}>
                                <figure className='m-3'>
                                    <img src={x.image} alt="" className="col-12 m-0"/>
                                </figure>
                                <h2 className="text-center font-weight-bold">{x.aw}</h2>
                            </div>
                            )
                        })}
                </div>
                <div id="anothers" className="m-0 p-4">
                    <p className="text-center font-weight-bold p-2">Lorem, ipsum dolor.</p>
                </div>
            </section>
        )
    }
}