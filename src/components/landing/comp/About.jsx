import React, { Component } from 'react';

export default class About extends Component{
    constructor(){
        super()
        this.state = {
            about_gamein : {
                title : 'گیمین ۲۰۲۰',
                description : 'مخقثذذی طیحخلتیملیتکذ م ذتیکمذ تطکتطکذ'
            }
        }
    }
    render(){
        return(
            <section className="about p-3">
                <div className="col-12 col-lg-6 ">
                    <h1 className="text-center">{this.state.about_gamein.title}</h1>
                    <p className="text-center">{this.state.about_gamein.description}</p>
                </div>
            </section>
        )
    }
}