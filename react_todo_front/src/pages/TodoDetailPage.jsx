import { useParams } from "react-router-dom";
import styles from "./pagelayout.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const TodoDetailPage = () => {
    const { todoNo } = useParams();
    const [todo, setTodo] = useState({});

    useEffect(() => {
        axios.get("/todo/" + todoNo)
            .then((res) => {
                setTodo(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <h1>상세보기</h1>
            <div>
                <span className={todo.todoDone === 0 ? styles.badge1 : styles.badge2}>
                    {todo.todoDone === 0 ? "진행중" : "완료"}
                </span>
                <p>No.{todo.todoNo}</p>
            </div>
            <div>
                <p>작성자</p>
            </div>
        </div>
    )

};
