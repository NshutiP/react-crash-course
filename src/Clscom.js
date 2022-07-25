import React from "react";

import {Detail} from './Detail';
export class Clscom extends React.Component {
    
    state = {
        laptops: [
            {ram: "128 GB", hdd: "2 TB", processor: "core i7"},
            {ram: "256 GB", hdd: "1.5 TB", processor: "core i5"},
            {ram: "512 GB", hdd: "5 TB", processor: "core i3"}
        ],
        desktops: [
            {ram: "128 GB", gc:"4 GB", processor: "core i3", hdd: "1 TB", },
        ]
    }

    render () {
        
        return (

            <div>

                <h2>Hello from the class Component</h2>
                
                <h2>Hello from the other side!</h2>

                <p>{this.props.classdata}</p>

                <p>{this.props.newcomponent}</p>

                <p>{this.props.children}</p>

                <Detail  ram={this.state.desktops[0].ram} gc={this.state.desktops[0].gc} hdd={this.state.laptops[1].hdd} processor={this.state.laptops[0].processor}/>

                <Detail ram={this.state.laptops[2].ram} hdd={this.state.laptops[1].hdd} processor={this.state.laptops[2].processor}/>

            </div>

        )
        
    }

}

