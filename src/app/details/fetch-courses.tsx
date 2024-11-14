"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/app/ui/styles/cards.module.css";

let url = 'http://localhost:8000/course';

export default function CourseComponent() {
    const [courses, setCourses] = useState([{
        "id": "",
        "title": "",
        "image": "",
        "duration": "",
        "level": ""
    }]);

    useEffect(() => {
        async function fetchCourseData() {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }

                const data = await response.json();
                setCourses(data);
            } catch (error) {
                console.error('Error:, error');
            }
        }
        fetchCourseData();
    }, []);

    return (
        <div className={styles.course_box}>
            {
                courses.map(course => (
                    <div key={course.id}
                        className={styles.card}>
                        {course && course.image ? (
                            <Image
                                src={course.image}
                                width={250}
                                height={150}
                                className={styles.card_image}
                                alt="Background"
                            />
                        ) : (
                            <p
                                className={`${styles.card}, ${styles.none}`}
                            >Loading...</p>
                        )}
                        <div
                            className={styles.card_description_box}>
                            <h3>{course.title}</h3>
                            <p>{course.duration}</p>
                            <p>{course.level}</p>

                            {course && course.title ? <button
                                className={styles.button_card_details}>More...</button> : ""}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
