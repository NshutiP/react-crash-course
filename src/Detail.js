import React from "react";

export class Detail extends React.Component {
    render() {
        return <p>I have a Laptop with {this.props.ram} Ram, {this.props.hdd} Hard Drive, {this.props.processor} Processor and the GC is {this.props.gc}.</p>
    }
}