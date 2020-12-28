import React, { Component } from 'react';
import './Table.css';

class TableWithOutCss extends Component {
    constructor() {
        super();
        this.state = {
            details: [
                {
                    name: "a",
                    phone: 9876543211,
                    email: 'a@gmail.com',
                    gender: 'male',
                    address: 'hyd,abc,adc'
                },
                {
                    name: "b",
                    phone: 9888888888,
                    email: 'b@gmail.com',
                    gender: 'female',
                    address: 'hyd,abc,adc'
                },
                {
                    name: "c",
                    phone: 9999999999,
                    email: 'c@gmail.com',
                    gender: 'male',
                    address: 'hyd,abc,adc'
                },
                {
                    name: "d",
                    phone: 99239999999,
                    email: 'd@gmail.com',
                    gender: 'female',
                    address: 'hyd,abc,adc'
                },
                {
                    name: "e",
                    phone: 9987998899,
                    email: 'e@gmail.com',
                    gender: 'male',
                    address: 'hyd,abc,adc'
                },
                {
                    name: "f",
                    phone: 8999999999,
                    email: 'f@gmail.com',
                    gender: 'male',
                    address: 'hyd,abc,adc'
                },
                {
                    name: "g",
                    phone: 8989999999,
                    email: 'g@gmail.com',
                    gender: 'female',
                    address: 'hyd,abc,adc'
                },
                {
                    name: "f",
                    phone: 8999099999,
                    email: 'f@gmail.com',
                    gender: 'male',
                    address: 'hyd,abc,adc'
                },
                {
                    name: "g",
                    phone: 8990099999,
                    email: 'g@gmail.com',
                    gender: 'male',
                    address: 'hyd,abc,adc'
                },
                {
                    name: "h",
                    phone: 8999923999,
                    email: 'h@gmail.com',
                    gender: 'female',
                    address: 'hyd,abc,adc'
                },
                {
                    name: "i",
                    phone: 8929923999,
                    email: 'i@gmail.com',
                    gender: 'male',
                    address: 'hyd,abc,adc'
                },
                {
                    name: "j",
                    phone: 8999923499,
                    email: 'j@gmail.com',
                    gender: 'female',
                    address: 'hyd,abc,adc'
                },
                {
                    name: "k",
                    phone: 8999000000,
                    email: 'k@gmail.com',
                    gender: 'male',
                    address: 'hyd,abc,adc'
                },
                {
                    name: "l",
                    phone: 8999922999,
                    email: 'l@gmail.com',
                    gender: 'male',
                    address: 'hyd,abc,adc'
                },
                {
                    name: "m",
                    phone: 8991299999,
                    email: 'm@gmail.com',
                    gender: 'male',
                    address: 'hyd,abc,adc'
                },
                {
                    name: "n",
                    phone: 8900099999,
                    email: 'n@gmail.com',
                    gender: 'male',
                    address: 'hyd,abc,adc'
                },
                {
                    name: "o",
                    phone: 8123499999,
                    email: 'o@gmail.com',
                    gender: 'male',
                    address: 'hyd,abc,adc'
                },
                {
                    name: "p",
                    phone: 8123456789,
                    email: 'p@gmail.com',
                    gender: 'female',
                    address: 'hyd,abc,adc'
                },
                {
                    name: "q",
                    phone: 8123459876,
                    email: 'q@gmail.com',
                    gender: 'female',
                    address: 'hyd,abc,adc'
                },
                {
                    name: "r",
                    phone: 8999988800,
                    email: 'r@gmail.com',
                    gender: 'female',
                    address: 'hyd,abc,adc'
                },
            ]
        }
        this.delete = this.delete.bind(this);
    }

    delete = (i) => {
        let { details } = this.state;
        let newArr = details.filter((detail) => {
            return details.indexOf(detail)!= i;
        });
        
        this.setState({
            details:newArr
        })
    }

    render() {
        return (
            <div className="main">
                <h1>table</h1>
                <div className="table_header">
                    <div className="table_headings"><span>NAME</span></div>
                    <div className="table_headings"><span>GENDER</span></div>
                    <div className="table_headings"><span>PHONE</span></div>
                    <div className="table_headings"><span>EMAIL</span></div>
                    <div className="table_headings"><span>ADDRESS</span></div>
                    <div className="table_headings"><span>ACTION</span></div>
                </div>
                <div>
                    {
                        this.state.details.map((data, i) => {
                            let { name, phone, email, gender, address } = data;
                            return (
                                <div className="table_body" key={i}>
                                    <div className="table_body_blocks"><span>{name}</span></div>
                                    <div className="table_body_blocks"><span>{gender}</span></div>
                                    <div className="table_body_blocks"><span>{phone} </span></div>
                                    <div className="table_body_blocks"><span>{email}</span></div>
                                    <div className="table_body_blocks"><span>{address}</span></div>
                                    <div className="table_body_blocks"><button onClick={() => this.delete(i)}>X</button></div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}
export default TableWithOutCss