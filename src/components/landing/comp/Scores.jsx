import React, { Component } from 'react';


let lastScrollY = 0;
let ticking = false;
let flag = 0

export default class Scores extends Component{
    constructor(){
        super()
        this.state = {
            scoreValues : [
                {
                    _value : '1130',
                    id : 1 ,
                    label : 'کاربر'},
                {
                    _value : '237',
                    id : 2 ,
                    label : 'کاربر'},
                {
                    _value : '437',
                    id : 3 ,
                    label : 'کاربر'},
                {
                    _value : '117',
                    id : 4 ,
                    label : 'کاربر'},
                {          
                   _value : '115',
                   id : 5 ,
                   label : 'کاربر'}
                ]
        }
    }

    // body scroll
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
      }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
        
    nav = React.createRef();
      
    handleScroll = () => {
        lastScrollY = window.scrollY;
        this.numchange()
        if((document.querySelector('body').scrollTop + window.innerHeight) > document.querySelector('.about>div').offsetTop + 100){
            document.querySelector(".about>div").setAttribute('id' , 'trX-0')
        } 
        if((document.querySelector('body').scrollTop + window.innerHeight) > document.querySelector('#awards').offsetTop + 100){
            document.getElementsByClassName('awards')[0].setAttribute('class' , 'awards col-9 col-lg-3 m-3 sc-1')
            document.getElementsByClassName('awards')[1].setAttribute('class' , 'awards col-9 col-lg-3 m-3 sc-1')
            document.getElementsByClassName('awards')[2].setAttribute('class' , 'awards col-9 col-lg-3 m-3 sc-1')
        }
        if (!ticking) {
          window.requestAnimationFrame(() => {
            this.nav.current.style.top = `${lastScrollY}px`;
            ticking = false;
          });
       
          ticking = true;
        }
    };

    //number changing 
    
    numchange = () => {
        if(flag==0){
            if((document.querySelector('body').scrollTop + window.innerHeight) > document.querySelector('.scoreWraper').offsetTop + 100){
                var num =[]
                let j
                for(j=0 ; j<this.state.scoreValues.length ; j++){
                    num[j] = parseInt(this.state.scoreValues[j]._value)
                    }
                num.forEach(playNum)  
                    flag++
                }
                function playNum(item, index){
                    var i = 0
                    if(i<=item){
                        var func = setInterval(function(){
                            document.getElementsByClassName('score')[index].innerHTML= i++
                            ConvertNumberToPersion()
                            if(i>item){
                                    clearInterval(func) 
                            }
                        }, 3000/item)
                    }
                    
                }    
            }

        // number to persian

        function ConvertNumberToPersion(){
            var persian = { 0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹' };
            function traverse(el) {
                if (el.nodeType == 3) {
                    var list = el.data.match(/[0-9]/g);
                    if (list != null && list.length != 0) {
                        for (var i = 0; i < list.length; i++)
                            el.data = el.data.replace(list[i], persian[list[i]]);
                    }
                }
                for (var i = 0; i < el.childNodes.length; i++) {
                    traverse(el.childNodes[i]);
                }
            }
            traverse(document.body);
        }
    }
    render(){
        return(
            <section className="scoreWraper">
                <div className="d-flex p-3 flex-wrap">
                    {this.state.scoreValues.map((x)=>{
                        return(
                            <div key={x.id} className="p-1 col-4 col-lg-2"> 
                                <div ref={this.nav}>
                                    <h4 className="score font-weight-bold text-center" data-score={x.value}>۰</h4>
                                </div>
                                <span className='label d-block text-center'>{x.label}</span>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }
}