import React, { Component } from 'react';

export default class Event extends Component{
    constructor(){
        super()
        this.state = {
            event : [
                    {id : 1,
                    title : 'مرحله ۱',
                    date : '۱ خرداد تا ۳۰ حرداد',
                    values : [{
                        id : 1,
                        icon : 'https://datadays.ir/images/sponsors/ssc.png',
                        name : 'نمونه',
                        descp : 'توضیحات نمونه...'
                    },
                    {
                        id : 2,
                        icon : 'https://datadays.ir/images/sponsors/ssc.png',
                        name : 'esm',
                        descp : 'tozihat..'
                    }
                ]
                },
                {id : 2,
                    title : 'مرحله ۲',
                    date : '2 dey',
                    values : [{
                        id : 1,
                        icon : 'https://datadays.ir/images/sponsors/ssc.png',
                        name : 'esm',
                        descp : 'tozihat..'
                    },
                    {
                        id : 2,
                        icon : 'https://datadays.ir/images/sponsors/ssc.png',
                        name : 'esm',
                        descp : 'tozihat..'
                    },
                    {
                        id : 3,
                        icon : 'https://datadays.ir/images/sponsors/ssc.png',
                        name : 'esm',
                        descp : 'tozihat..'
                    }
                ]
                },
                {
                    id : 3,
                    title : 'marhale 2',
                    date : '2 dey',
                    values : [{
                        id : 1,
                        icon : 'https://datadays.ir/images/sponsors/ssc.png',
                        name : 'esm',
                        descp : 'tozihat..'
                    }]
                },
                {
                    id : 4,
                    title : 'marhale 1',
                date : '2 dey',
                values : [{
                    id : 1,
                    icon : 'https://datadays.ir/images/sponsors/ssc.png',
                    name : 'esm',
                    descp : 'tozihat..'
                },
                {
                    id : 2,
                    icon : 'https://datadays.ir/images/sponsors/ssc.png',
                    name : 'esm',
                    descp : 'tozihat..'
                }
            ]
            }
            ]
        }
    }
    render(){
        return(
            <section id="events" className="d-flex justify-content-center flex-wrap p-lg-5 p-2">
                {this.state.event.map((x)=>{
                    return(
                        <div className='event d-flex col-11 align-items-center justify-content-center' key={x.id}>
                        <div className="eventDes col-11 col-lg-5 p-3 m-3 mx-lg-0">
                            <span className='eventTitle d-flex d-lg-none py-2 px-4'>{x.title}</span>
                            <h5 className="p-3">{x.date}</h5>
                            <div>
                                {x.values.map((y)=>{
                                    return(
                                        <div className='d-flex px-4 mb-3 align-items-center' key={y.id}>
                                            <img src={y.icon} alt="" className="col-2 p-2 m-0"/>
                                            <h5 className="m-0 p-0">{y.name}</h5>
                                            <p className="px-3 m-0">{y.descp}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-1 col-lg-1 line">
                            <span className=""></span>
                        </div>
                        <div className="col-lg-5 d-none d-lg-flex p-0">
                            <span className='eventTitle py-2 px-4'>{x.title}</span>
                        </div>
                        </div>
                    )
                })}
            </section>
        )
    }
}