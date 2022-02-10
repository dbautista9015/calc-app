import React from 'react';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';

export class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNum: 0,
            secondNum: 0,
            operation: '',
            answer: ''
        }

        this.getFirstNumber = this.getFirstNumber.bind(this);
        this.getSecondNumber = this.getSecondNumber.bind(this);
        this.getOperation = this.getOperation.bind(this);
        this.getAnswer = this.getAnswer.bind(this);
    }

    getFirstNumber(e) {
        this.setState({
            firstNum: e.target.value,
            secondNum: this.state.secondNum,
            operation: this.state.operation,
            answer: this.state.answer

        })
    }

    getSecondNumber(e) {
        this.setState({
            firstNum: this.state.firstNum,
            secondNum: e.target.value,
            operation: this.state.operation,
            answer: this.state.answer
        })
    }

    getOperation(e) {
        console.log(e.target.value);

        this.setState({
            firstNum: this.state.firstNum,
            secondNum: this.state.secondNum,
            operation: e.target.value,
            answer: this.state.answer
        })
    }

    getAnswer() {
        //Math stuff
          
        if (this.state.firstNum === undefined || this.state.secondNum === undefined) {
            Alert("You did not enter a value for one of the fields, try again")
        } else {
            switch(this.state.operation) {
                case '+':
                    this.setState({
                        firstNum: this.state.firstNum,
                        secondNum: this.state.secondNum,
                        operation: this.state.operation,
                        answer: parseInt(this.state.firstNum) + parseInt(this.state.secondNum)
                    });
                    break;
                case '-':
                    this.setState({
                        firstNum: this.state.firstNum,
                        secondNum: this.state.secondNum,
                        operation: this.state.operation,
                        answer: parseInt(this.state.firstNum) - parseInt(this.state.secondNum)
                    });
                    break;
                case '*':
                    this.setState({
                        firstNum: this.state.firstNum,
                        secondNum: this.state.secondNum,
                        operation: this.state.operation,
                        answer: parseInt(this.state.firstNum) * parseInt(this.state.secondNum)
                    });
                    break;
                case '/':
                    this.setState({
                        firstNum: this.state.firstNum,
                        secondNum: this.state.secondNum,
                        operation: this.state.operation,
                        answer: parseInt(this.state.firstNum) / parseInt(this.state.secondNum)
                    });
                    break;
                default:
                    alert("You did not enter the right operation, try again!");
                
            }
        }
        

    }
    
    render() {
        return (
            <div>
               <Container>
                   <Row>
                       <Col lg={12}>
                        <h1 className="d-flex justify-content-center">DB's Calculator</h1>
                       </Col>
                       
                   </Row>
                   <Row>
                       <Col lg={3}>
                        <Form.Label htmlFor="inputNumber5">Enter First Number</Form.Label>
                        <Form.Control
                            type="number"
                            id="inputNumber5"
                            onChange={this.getFirstNumber}
                        />
                        <Form.Text id="numberHelpBlock">
                            Enter a positive number, no letters, or characters please
                        </Form.Text>
                       </Col>

                       <Col lg={3}>
                           <Form.Label htmlFor="selectOption5">Select a value</Form.Label>
                           <Form.Select aria-label="Default select example" onChange={this.getOperation}>
                               <option>Open this select menu</option>
                               <option value="+">+</option>
                               <option value="-">-</option>
                               <option value="*">*</option>
                               <option value="/">/</option>
                           </Form.Select>
                       </Col>

                       <Col lg={3}>
                        <Form.Label htmlFor="inputNumber10">Enter Second Number</Form.Label>
                        <Form.Control
                            type="number"
                            id="inputNumber10"
                            onChange={this.getSecondNumber}
                        />
                        <Form.Text id="numberTwoHelpBlock">
                            Enter a positive number, no letters, or characters please
                        </Form.Text>
                       </Col>

                       <Col lg={3}>
                        <Form.Label>Answer</Form.Label>
                        <Col>
                            <Button onClick={this.getAnswer}>=</Button>
                        </Col>

                       </Col>
                   </Row>

                   <Row>
                       <Col lg={12}>
                           <h2 className="d-flex justify-content-center mt-4">{this.state.answer}</h2>
                       </Col>
                   </Row>

                   
               </Container>
               
            </div>

        )
    }









}