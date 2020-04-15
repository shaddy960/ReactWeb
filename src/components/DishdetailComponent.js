import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';


class Dishdetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    dateFormatter(date){
        var months =["Jan","Feb","Mar",
        "Apr","May","Jun",
        "Jul","Aug","Sep",
        "Oct","Nov","Dec"];
      return  months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
    }

    renderComments(comments) {
        if (comments != null) {
            const comm = comments.map((comment) => {
                return (
                    
                    <ul key={comment.id} className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>-- {comment.author}, {this.dateFormatter((new Date(Date.parse(comment.date))))}</li>
                    </ul>
                );
            });
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comm}
                </div>
                );
        } else {
            return (
                <div>

                </div>
            );
        }

    }

    render() {

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                {this.renderComments(this.props.comments)}
            </div>
        );
    }
}

export default Dishdetail;