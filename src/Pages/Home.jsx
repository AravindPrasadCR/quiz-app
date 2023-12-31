import React, { useRef, useState } from 'react'
import './Home.css'
import { data } from '../assets/data'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Quiz = () => {
    const [index, setIndex] = useState(0)
    const [question, setQuestion] = useState(data[index])
    const [selectedOption, setSelectedOption] = useState(false)
    const [score, setScore] = useState(0)
    const [result, setResult] = useState(false)

    let option1 = useRef(null)
    let option2 = useRef(null)
    let option3 = useRef(null)
    let option4 = useRef(null)

    let option_array = [option1, option2, option3, option4]
    const checkAnswer = (e, answer) => {

        if (question.answer === answer) {
            e.target.classList.add('win')
            setSelectedOption(true)
            setScore(score + 1)
        } else {
            e.target.classList.add('fail')
            setSelectedOption(true)
            option_array[question.answer - 1].current.classList.add('win')
        }       
        e.preventDefault()
    }


    const addIndex = () => {
        if (selectedOption === true) {
            if (index === data.length - 1) {
                setResult(true)
                return 0
                
            }
            setIndex(index + 1)
            setQuestion(data[index + 1])
            setSelectedOption(false)
            option_array.map((option) => {
                option.current.classList.remove("fail")
                option.current.classList.remove("win")

                return null;
            }

            )
        }
        
    }
    const reset = () => {
        setIndex(0)
        setSelectedOption(false)
        setQuestion(data[0])
        setScore(0)
        setResult(false)
       
    }


    return (
        <div className='containe d-flex flex-row w-50 justify-content-center rounded-5 p-5'>
            <div>

                {result ?
                    <div className='d-flex flex-column mt-5'>
                        <div className='p-5 text-center mt-4'>
                            <h3 className='border p-5 rounded-5'>You Scored {score} out of 10</h3>
                            <Link to={'/'} style={{ width: '300px', height: '50px', textDecoration: 'none', color: 'white', fontSize: '25px' }} className='btn btn-dark fw-bold mt-5' onClick={reset}>start another QUIZ<i class="fa-solid fa-brain"></i></Link>
                        </div>
                    </div>
                    :
                    <div className='border rounded-5'>
                        <h6 style={{ margin: '10px 0 0 550px' }}>Score:{score}/10</h6>
                        <h4 className='question pt-4 ms-4'>{index + 1}.{question.question} </h4>
                        <ul className='pt-3' style={{ width: '600px' }}>
                            <li ref={option1} className='d-flex p-2 m-3 rounded-3 fs-5' onClick={(e) => checkAnswer(e, 1)}>{question.option1}</li>
                            <li ref={option2} className='d-flex p-2 m-3 rounded-3 fs-5' onClick={(e) => checkAnswer(e, 2)} >{question.option2}</li>
                            <li ref={option3} className='d-flex p-2 m-3 rounded-3 fs-5' onClick={(e) => checkAnswer(e, 3)}>{question.option3}</li>
                            <li ref={option4} className='d-flex p-2 m-3 rounded-3 fs-5' onClick={(e) => checkAnswer(e, 4)}>{question.option4}</li>
                        </ul>
                        <Button style={{ width: '100px', height: '50px', color: 'white', margin: '15px 270px', border: 'none', fontSize: '20px' }} onClick={addIndex} className=' btn-dark text-center' >Next</Button>
                    </div>}

            </div>
        </div>
    )

}

export default Quiz