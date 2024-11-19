"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/app/ui/styles/cards.module.css";

interface Course {
    id: number;
    title: string;
    duration?: string;
    level?: string;
    image: string;
    alt: string;
}

const url = 'http://localhost:8000/course';

export default function CourseComponent() {
    const [courses, setCourses] = useState<Course[]>([
        //     {
        //     "id": 0,
        //     "title": "",
        //     "image": "/img-loading.jpg",
        //     "duration": "Loading ...",
        //     "level": "",
        //     "alt": "Fitness for all",
        // }
    ]);

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
                console.error('fetching course data:', error);
            }
        }
        fetchCourseData();
    }, []);

    return (
        <div className={styles.course_box}>
                {courses.map(course => (
                    <div key={course.id}
                        className={styles.card}>
                        <Image
                            src={course.image}
                            width={250}
                            height={150}
                            className={styles.card_image}
                            alt={course.alt}
                        />
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
